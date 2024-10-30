import React from 'react';
import { TaskProgress } from '../types/types';
import { Clock, CheckCircle2, Trophy } from 'lucide-react';

interface ProgressSummaryProps {
  progress: TaskProgress;
  childName: string;
}

const ProgressSummary: React.FC<ProgressSummaryProps> = ({ progress, childName }) => {
  const completionPercentage = (progress.completedTasks / progress.totalTasks) * 100;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">{childName}'s Progress</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-center space-x-4">
          <div className="bg-blue-100 p-3 rounded-full">
            <Clock className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Time Earned</p>
            <p className="text-xl font-semibold text-gray-900">{progress.timeEarned} mins</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="bg-green-100 p-3 rounded-full">
            <CheckCircle2 className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Tasks Completed</p>
            <p className="text-xl font-semibold text-gray-900">
              {progress.completedTasks} / {progress.totalTasks}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="bg-purple-100 p-3 rounded-full">
            <Trophy className="h-6 w-6 text-purple-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Completion Rate</p>
            <p className="text-xl font-semibold text-gray-900">
              {completionPercentage.toFixed(1)}%
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500"
            style={{ width: `${completionPercentage}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressSummary;