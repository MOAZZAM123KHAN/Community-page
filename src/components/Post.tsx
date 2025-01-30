import React, { useState } from 'react';
import { Post as PostType } from '../types';
import { Comment } from './Comment';
import { CommentForm } from './CommentForm';
import { MessageCircle, ThumbsUp, Share2 } from 'lucide-react';

interface PostProps {
  post: PostType;
}

export const Post: React.FC<PostProps> = ({ post }) => {
  const [comments, setComments] = useState(post.comments);

  const handleNewComment = (content: string) => {
    const newComment = {
      id: Date.now().toString(),
      content,
      author: {
        id: 'current-user',
        name: 'You',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop',
      },
      createdAt: new Date().toISOString(),
      likes: 0,
      replies: [],
    };
    setComments([...comments, newComment]);
  };

  const handleReply = (commentId: string, content: string) => {
    const addReply = (comments: any[], parentId: string, newReply: any): any[] => {
      return comments.map(comment => {
        if (comment.id === parentId) {
          return {
            ...comment,
            replies: [...comment.replies, newReply],
          };
        }
        if (comment.replies.length > 0) {
          return {
            ...comment,
            replies: addReply(comment.replies, parentId, newReply),
          };
        }
        return comment;
      });
    };

    const newReply = {
      id: Date.now().toString(),
      content,
      author: {
        id: 'current-user',
        name: 'You',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop',
      },
      createdAt: new Date().toISOString(),
      likes: 0,
      replies: [],
    };

    setComments(addReply(comments, commentId, newReply));
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h3 className="font-semibold">{post.author.name}</h3>
            <p className="text-sm text-gray-500">
              {new Date(post.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
        <h2 className="text-xl font-bold mb-3">{post.title}</h2>
        <p className="text-gray-700 mb-4">{post.content}</p>
        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
        )}
        <div className="flex items-center gap-6 border-t border-b border-gray-100 py-3">
          <button className="flex items-center gap-2 text-gray-500 hover:text-blue-500">
            <ThumbsUp size={20} />
            <span>{post.likes}</span>
          </button>
          <button className="flex items-center gap-2 text-gray-500 hover:text-blue-500">
            <MessageCircle size={20} />
            <span>{comments.length}</span>
          </button>
          <button className="flex items-center gap-2 text-gray-500 hover:text-blue-500">
            <Share2 size={20} />
            <span>Share</span>
          </button>
        </div>
        <div className="mt-4">
          <CommentForm onSubmit={handleNewComment} />
        </div>
        <div className="mt-6">
          {comments.map((comment) => (
            <Comment
              key={comment.id}
              comment={comment}
              onReply={handleReply}
            />
          ))}
        </div>
      </div>
    </div>
  );
};