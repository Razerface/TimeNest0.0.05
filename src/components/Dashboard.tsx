import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, Users, Plus, Settings, Sun, Moon, LogOut } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import ChildCard from './ChildCard';
import AddChildModal from './AddChildModal';
import AdminPanel from './AdminPanel';
import { ChildAccount } from '../types/types';

interface DashboardProps {
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const [children, setChildren] = useState<ChildAccount[]>([]);
  const [showAddChild, setShowAddChild] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);

  useEffect(() => {
    try {
      const savedChildren = localStorage.getItem('children');
      if (savedChildren) {
        setChildren(JSON.parse(savedChildren));
      }
    } catch (error) {
      console.error('Error loading children data:', error);
    }
  }, []);

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  const addChild = (childData: Omit<ChildAccount, 'id' | 'timeUnlocked'>) => {
    try {
      const newChild: ChildAccount = {
        id: Date.now().toString(),
        timeUnlocked: 0,
        maxTime: 60,
        ...childData,
      };
      const updatedChildren = [...children, newChild];
      setChildren(updatedChildren);
      localStorage.setItem('children', JSON.stringify(updatedChildren));
      localStorage.setItem(`child_${newChild.id}`, JSON.stringify(newChild));
      setShowAddChild(false);
    } catch (error) {
      console.error('Error adding child:', error);
    }
  };

  const updateChild = (childId: string, updates: Partial<ChildAccount>) => {
    try {
      const updatedChildren = children.map(child =>
        child.id === childId ? { ...child, ...updates } : child
      );
      setChildren(updatedChildren);
      localStorage.setItem('children', JSON.stringify(updatedChildren));
      localStorage.setItem(`child_${childId}`, JSON.stringify({
        ...children.find(c => c.id === childId),
        ...updates
      }));
    } catch (error) {
      console.error('Error updating child:', error);
    }
  };

  const deleteChild = (childId: string) => {
    if (window.confirm('Are you sure you want to delete this child account?')) {
      try {
        const updatedChildren = children.filter(child => child.id !== childId);
        setChildren(updatedChildren);
        localStorage.setItem('children', JSON.stringify(updatedChildren));
        localStorage.removeItem(`child_${childId}`);
        localStorage.removeItem(`tasks_${childId}`);
      } catch (error) {
        console.error('Error deleting child:', error);
      }
    }
  };

  const resetChildTasks = (childId: string) => {
    if (window.confirm('Are you sure you want to reset all tasks for this child?')) {
      try {
        localStorage.removeItem(`tasks_${childId}`);
      } catch (error) {
        console.error('Error resetting tasks:', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <nav className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Clock className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              <span className="ml-2 text-xl font-semibold text-gray-900 dark:text-white">TimeNest</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <Moon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                ) : (
                  <Sun className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                )}
              </button>
              <button
                onClick={() => setShowAddChild(true)}
                className="flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
              >
                <Plus className="h-5 w-5 mr-2" />
                Add Child
              </button>
              <button
                onClick={() => setShowAdminPanel(true)}
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
              >
                <Settings className="h-5 w-5 mr-2" />
                Admin
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center px-4 py-2 text-sm font-medium text-red-600 bg-red-50 rounded-md hover:bg-red-100 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30"
              >
                <LogOut className="h-5 w-5 mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {showAddChild && (
          <AddChildModal
            onClose={() => setShowAddChild(false)}
            onAdd={addChild}
          />
        )}

        {showAdminPanel && (
          <AdminPanel
            isOpen={showAdminPanel}
            onClose={() => setShowAdminPanel(false)}
            children={children}
            onUpdateChild={updateChild}
            onDeleteChild={deleteChild}
            onResetTasks={resetChildTasks}
          />
        )}

        {children.length === 0 ? (
          <div className="text-center py-12">
            <Users className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">No children accounts</h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Get started by creating a new child account.</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {children.map(child => (
              <ChildCard key={child.id} child={child} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;