import React, { useState, useEffect } from 'react';
import { Settings, X, Key, Save, Trash2, Edit2, RefreshCw, Lock, Unlock } from 'lucide-react';
import { ChildAccount } from '../types/types';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
  children: ChildAccount[];
  onUpdateChild: (childId: string, updates: Partial<ChildAccount>) => void;
  onDeleteChild: (childId: string) => void;
  onResetTasks: (childId: string) => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({
  isOpen,
  onClose,
  children,
  onUpdateChild,
  onDeleteChild,
  onResetTasks,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState('');
  const [newPin, setNewPin] = useState('');
  const [showPinChange, setShowPinChange] = useState(false);
  const [editingChild, setEditingChild] = useState<string | null>(null);
  const [editName, setEditName] = useState('');
  const [maxTime, setMaxTime] = useState(60);
  const [selectedCategories, setSelectedCategories] = useState({
    five: false,
    ten: false,
    fifteen: false,
    twenty: false
  });
  const [error, setError] = useState('');

  useEffect(() => {
    const savedPin = localStorage.getItem('adminPin');
    if (!savedPin) {
      localStorage.setItem('adminPin', '1234'); // Default PIN
    }
  }, []);

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const savedPin = localStorage.getItem('adminPin') || '1234';
    if (pin === savedPin) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid PIN');
    }
    setPin('');
  };

  const handlePinChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPin.length === 4) {
      localStorage.setItem('adminPin', newPin);
      setShowPinChange(false);
      setNewPin('');
      setError('');
    } else {
      setError('PIN must be 4 digits');
    }
  };

  const handleEditSave = (childId: string) => {
    onUpdateChild(childId, {
      name: editName,
      maxTime: maxTime,
      categories: selectedCategories
    });
    setEditingChild(null);
  };

  const startEditing = (child: ChildAccount) => {
    setEditingChild(child.id);
    setEditName(child.name);
    setMaxTime(child.maxTime || 60);
    setSelectedCategories(child.categories || {
      five: false,
      ten: false,
      fifteen: false,
      twenty: false
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">TimeNest Admin</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {!isAuthenticated ? (
          <form onSubmit={handlePinSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Enter Admin PIN
              </label>
              <div className="mt-1 relative">
                <input
                  type="password"
                  maxLength={4}
                  value={pin}
                  onChange={(e) => setPin(e.target.value.replace(/\D/g, '').slice(0, 4))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Enter 4-digit PIN"
                />
                <Lock className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </form>
        ) : (
          <div className="space-y-6">
            {!showPinChange ? (
              <button
                onClick={() => setShowPinChange(true)}
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
              >
                <Key className="h-4 w-4 mr-2" />
                Change Admin PIN
              </button>
            ) : (
              <form onSubmit={handlePinChange} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    New PIN
                  </label>
                  <input
                    type="password"
                    maxLength={4}
                    value={newPin}
                    onChange={(e) => setNewPin(e.target.value.replace(/\D/g, '').slice(0, 4))}
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Enter new 4-digit PIN"
                  />
                </div>
                <div className="flex space-x-2">
                  <button
                    type="submit"
                    className="flex-1 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Save New PIN
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowPinChange(false)}
                    className="flex-1 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 dark:border-gray-600"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}

            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {children.map(child => (
                <div key={child.id} className="py-4">
                  {editingChild === child.id ? (
                    <div className="space-y-4">
                      <input
                        type="text"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="Child's name"
                      />
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Max Time (minutes)
                        </label>
                        <input
                          type="number"
                          value={maxTime}
                          onChange={(e) => setMaxTime(parseInt(e.target.value))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                          min="0"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Task Categories
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {Object.entries(selectedCategories).map(([category, isSelected]) => (
                            <label
                              key={category}
                              className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300"
                            >
                              <input
                                type="checkbox"
                                checked={isSelected}
                                onChange={() => setSelectedCategories(prev => ({
                                  ...prev,
                                  [category]: !prev[category as keyof typeof selectedCategories]
                                }))}
                                className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <span>
                                {category === 'five' ? '5 minutes' :
                                 category === 'ten' ? '10 minutes' :
                                 category === 'fifteen' ? '15 minutes' : '20 minutes'}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEditSave(child.id)}
                          className="flex items-center px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                        >
                          <Save className="h-4 w-4 mr-2" />
                          Save
                        </button>
                        <button
                          onClick={() => setEditingChild(null)}
                          className="flex items-center px-3 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{child.name}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Max Time: {child.maxTime || 60} minutes</p>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => startEditing(child)}
                          className="p-2 text-blue-600 hover:bg-blue-100 rounded-md dark:text-blue-400 dark:hover:bg-gray-600"
                          title="Edit"
                        >
                          <Edit2 className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => onResetTasks(child.id)}
                          className="p-2 text-orange-600 hover:bg-orange-100 rounded-md dark:text-orange-400 dark:hover:bg-gray-600"
                          title="Reset Tasks"
                        >
                          <RefreshCw className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => onDeleteChild(child.id)}
                          className="p-2 text-red-600 hover:bg-red-100 rounded-md dark:text-red-400 dark:hover:bg-gray-600"
                          title="Delete"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;