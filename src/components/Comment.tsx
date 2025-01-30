import React, { useState } from 'react';
import { Comment as CommentType } from '../types';
import { CommentForm } from './CommentForm';
import { MessageCircle, ThumbsUp } from 'lucide-react';

interface CommentProps {
  comment: CommentType;
  depth?: number;
  onReply: (commentId: string, content: string) => void;
}

export const Comment: React.FC<CommentProps> = ({ comment, depth = 0, onReply }) => {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const maxDepth = 3;

  const handleReply = (content: string) => {
    onReply(comment.id, content);
    setShowReplyForm(false);
  };

  return (
    <div className={`ml-${depth * 6} mb-4`}>
      <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
        <img
          src={comment.author.avatar}
          alt={comment.author.name}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-semibold">{comment.author.name}</span>
            <span className="text-sm text-gray-500">
              {new Date(comment.createdAt).toLocaleDateString()}
            </span>
          </div>
          <p className="mt-1 text-gray-700">{comment.content}</p>
          <div className="flex items-center gap-4 mt-2">
            <button className="flex items-center gap-1 text-gray-500 hover:text-blue-500">
              <ThumbsUp size={16} />
              <span>{comment.likes}</span>
            </button>
            {depth < maxDepth && (
              <button
                onClick={() => setShowReplyForm(!showReplyForm)}
                className="flex items-center gap-1 text-gray-500 hover:text-blue-500"
              >
                <MessageCircle size={16} />
                <span>Reply</span>
              </button>
            )}
          </div>
          {showReplyForm && (
            <div className="mt-3">
              <CommentForm onSubmit={handleReply} placeholder="Write a reply..." />
            </div>
          )}
        </div>
      </div>
      {comment.replies.map((reply) => (
        <Comment
          key={reply.id}
          comment={reply}
          depth={depth + 1}
          onReply={onReply}
        />
      ))}
    </div>
  );
};