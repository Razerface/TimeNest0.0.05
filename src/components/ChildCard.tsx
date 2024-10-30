import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, CheckCircle2, Trophy } from 'lucide-react';
import { ChildAccount, TaskProgress } from '../types/types';

interface ChildCardProps {
  child: ChildAccount;
}

const ChildCard: React.FC<ChildCardProps> = ({ child }) => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState<TaskProgress>({
    totalTasks: 0,
    completedTasks: 0,
    timeEarned: 0
  });

  useEffect(() => {
    // Load tasks and calculate progress
    const savedTasks = localStorage.getItem(`tasks_${child.id}`);
    if (savedTasks) {
      const tasks = JSON.parse(savedTasks);
      const completedTasks = tasks.filter((task: any) => task.completed).length;
      const timeEarned = tasks.reduce((total: number, task: any) => {
        if (task.completed) {
          return total + task.minutes;
        }
        return total;
      }, 0);

      setProgress({
        totalTasks: tasks.length,
        completedTasks,
        timeEarned
      });
    }
  }, [child.id]);

  const completionPercentage = (progress.completedTasks / progress.totalTasks) * 100;

  return (
    <div 
      onClick={() => navigate(`/child/${child.id}`)}
      className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow cursor-pointer"
    >
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-xl font-medium text-gray-900 mb-4">{child.name}</h3>
        
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-100 p-2 rounded-full">
              <Clock className="h-4 w-4 text-blue-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Time Earned</p>
              <p className="text-sm font-semibold">{progress.timeEarned} mins</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="bg-green-100 p-2 rounded-full">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Completed</p>
              <p className="text-sm font-semibold">{progress.completedTasks}/{progress.totalTasks}</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="bg-purple-100 p-2 rounded-full">
              <Trophy className="h-4 w-4 text-purple-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Rate</p>
              <p className="text-sm font-semibold">{completionPercentage.toFixed(1)}%</p>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildCard;