import { Post, User } from '../types';

const users: User[] = [
  {
    id: '1',
    name: 'Mohammad Moazzam',
   avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
  },
  {
    id: '2',
    name: 'Sarah Chen',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  },
  {
    id: '3',
    name: 'Marcus Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
  },
];

export const mockPosts: Post[] = [
  {
    id: '1',
    title: 'The Future of Web Development',
    content: 'As we move into 2024, the landscape of web development continues to evolve. What are your thoughts on the latest trends?',
    author: users[0],
    createdAt: '2024-03-10T10:00:00Z',
    likes: 42,
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
    comments: [
      {
        id: '1',
        content: 'AI-driven development tools are definitely changing the game!',
        author: users[1],
        createdAt: '2024-03-10T10:30:00Z',
        likes: 12,
        replies: [
          {
            id: '2',
            content: 'Agreed! Have you tried any specific AI coding assistants?',
            author: users[2],
            createdAt: '2024-03-10T11:00:00Z',
            likes: 5,
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: '2',
    title: 'Best Practices for Remote Work',
    content: 'After years of remote work becoming the norm, I wanted to share some tips that have helped me stay productive and maintain work-life balance.',
    author: users[1],
    createdAt: '2024-03-09T15:00:00Z',
    likes: 38,
    comments: [
      {
        id: '3',
        content: 'Setting boundaries is crucial! Great post.',
        author: users[2],
        createdAt: '2024-03-09T15:30:00Z',
        likes: 8,
        replies: [],
      },
    ],
  },
];