import React, { useState } from 'react';
import { Task } from '../types/types';
import { CheckCircle2, Circle, ChevronDown, ChevronUp } from 'lucide-react';

interface TaskListProps {
  tasks: Task[];
  onTaskComplete: (taskId: string) => void;
  allowedCategories: Record<string, boolean>;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onTaskComplete, allowedCategories }) => {
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

  const categoryMinutes = {
    five: 5,
    ten: 10,
    fifteen: 15,
    twenty: 20,
  };

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const sortTasks = (tasks: Task[]) => {
    return [...tasks].sort((a, b) => {
      if (a.completed === b.completed) return 0;
      return a.completed ? -1 : 1;
    });
  };

  return (
    <div className="space-y-4">
      {Object.entries(allowedCategories)
        .filter(([_, isAllowed]) => isAllowed)
        .map(([category]) => {
          const categoryTasks = sortTasks(tasks.filter((task) => task.category === category));
          const completedCount = categoryTasks.filter(task => task.completed).length;

          return (
            <div key={category} className="border rounded-lg overflow-hidden">
              <button
                onClick={() => toggleCategory(category)}
                className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {categoryMinutes[category as keyof typeof categoryMinutes]} Minutes Tasks
                  </h3>
                  <span className="ml-3 text-sm text-gray-500">
                    ({completedCount}/{categoryTasks.length} completed)
                  </span>
                </div>
                {expandedCategories[category] ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>

              {expandedCategories[category] && (
                <div className="divide-y divide-gray-200">
                  {categoryTasks.map((task) => (
                    <div
                      key={task.id}
                      className={`flex items-center p-4 hover:bg-gray-50 transition-colors ${
                        task.completed ? 'bg-green-50' : 'bg-white'
                      }`}
                    >
                      <button
                        onClick={() => onTaskComplete(task.id)}
                        className="flex items-center flex-1"
                      >
                        {task.completed ? (
                          <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        ) : (
                          <Circle className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                        )}
                        <div className="flex-1">
                          <h4 className={`text-sm font-medium ${
                            task.completed ? 'text-gray-500 line-through' : 'text-gray-900'
                          }`}>
                            {task.title}
                          </h4>
                          <p className={`text-xs ${
                            task.completed ? 'text-gray-400' : 'text-gray-500'
                          }`}>
                            {task.description}
                          </p>
                        </div>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default TaskList;