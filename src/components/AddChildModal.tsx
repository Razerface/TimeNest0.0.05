import React, { useState } from 'react';
import { ChildAccount } from '../types/types';

interface AddChildModalProps {
  onClose: () => void;
  onAdd: (childData: Omit<ChildAccount, 'id' | 'timeUnlocked'>) => void;
}

const AddChildModal: React.FC<AddChildModalProps> = ({ onClose, onAdd }) => {
  const [name, setName] = useState('');
  const [categories, setCategories] = useState({
    five: false,
    ten: false,
    fifteen: false,
    twenty: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onAdd({
        name,
        categories
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h3 className="text-lg font-medium mb-4">Add New Child Account</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Child's Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Time Categories Allowed
            </label>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(categories).map(([category, isChecked]) => (
                <label
                  key={category}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => setCategories(prev => ({
                      ...prev,
                      [category]: !prev[category as keyof typeof categories]
                    }))}
                    className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <span className="text-sm text-gray-700">
                    {category === 'five' ? '5 minutes' :
                     category === 'ten' ? '10 minutes' :
                     category === 'fifteen' ? '15 minutes' : '20 minutes'}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex justify-end space-x-2 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddChildModal;