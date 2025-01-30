import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface CommentFormProps {
  onSubmit: (content: string) => void;
  placeholder?: string;
}

export const CommentForm: React.FC<CommentFormProps> = ({ onSubmit, placeholder = 'Write a comment...' }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      onSubmit(content);
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder={placeholder}
        className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <button
        type="submit"
        disabled={!content.trim()}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <Send size={20} />
      </button>
    </form>
  );
};