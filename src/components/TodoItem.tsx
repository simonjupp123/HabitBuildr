'use client';

import { useState } from 'react';
import { Todo } from '@/types/todo';

interface TodoItemProps {
  todo: Todo;
  onUpdate: (id: number, updates: Partial<Todo>) => void;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

export default function TodoItem({ todo, onUpdate, onDelete, onToggle }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editDescription, setEditDescription] = useState(todo.description || '');

  const handleSave = () => {
    onUpdate(todo.id, {
      title: editTitle,
      description: editDescription,
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditTitle(todo.title);
    setEditDescription(todo.description || '');
    setIsEditing(false);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  if (isEditing) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
        <div className="space-y-3">
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Todo title"
          />
          <textarea
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Description (optional)"
            rows={3}
          />
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white p-4 rounded-lg shadow-md border-l-4 ${
      todo.completed ? 'border-green-500 opacity-75' : 'border-blue-500'
    }`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <button
              onClick={() => onToggle(todo.id)}
              className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                todo.completed
                  ? 'bg-green-500 border-green-500 text-white'
                  : 'border-gray-300 hover:border-green-500'
              }`}
            >
              {todo.completed && (
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
            <h3 className={`text-lg font-medium ${
              todo.completed ? 'line-through text-gray-500' : 'text-gray-900'
            }`}>
              {todo.title}
            </h3>
            <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getPriorityColor(todo.priority)}`}>
              {todo.priority}
            </span>
          </div>
          
          {todo.description && (
            <p className={`text-gray-600 mb-2 ${
              todo.completed ? 'line-through' : ''
            }`}>
              {todo.description}
            </p>
          )}
          
          {todo.due_date && (
            <p className={`text-sm ${
              new Date(todo.due_date) < new Date() && !todo.completed
                ? 'text-red-600 font-medium'
                : 'text-gray-500'
            }`}>
              Due: {formatDate(todo.due_date)}
            </p>
          )}
          
          <p className="text-xs text-gray-400 mt-2">
            Created: {formatDate(todo.created_at)}
          </p>
        </div>
        
        <div className="flex gap-2 ml-4">
          <button
            onClick={() => setIsEditing(true)}
            className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
            title="Edit todo"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </button>
          <button
            onClick={() => onDelete(todo.id)}
            className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
            title="Delete todo"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
} 