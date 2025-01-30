import React, { useState } from 'react';
import { Post as PostComponent } from './components/Post';
import { CreatePost } from './components/CreatePost';
import { mockPosts } from './data/mockData';
import { Post } from './types';
import { MessageSquare } from 'lucide-react';

function App() {
  const [posts, setPosts] = useState<Post[]>(mockPosts);

  const handleNewPost = (title: string, content: string, image?: string) => {
    const newPost: Post = {
      id: Date.now().toString(),
      title,
      content,
      image,
      author: {
        id: 'current-user',
        name: 'You',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop',
      },
      createdAt: new Date().toISOString(),
      comments: [],
      likes: 0,
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2">
            <MessageSquare size={24} className="text-blue-500" />
            <h1 className="text-2xl font-bold">Community</h1>
          </div>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-4 py-8">
        <CreatePost onSubmit={handleNewPost} />
        <div className="space-y-6">
          {posts.map((post) => (
            <PostComponent key={post.id} post={post} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;