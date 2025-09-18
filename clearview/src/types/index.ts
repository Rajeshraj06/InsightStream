export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  isLoggedIn: boolean;
}

export interface Comment {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  content: string;
  timestamp: Date;
  likes: number;
  replies?: Comment[];
}

export interface Article {
  id: string;
  title: string;
  description: string;
  content: string;
  image: string;
  category: string;
  categoryColor: string;
  timeAgo: string;
  author: string;
  readTime: string;
  views: number;
  likes: number;
  comments: Comment[];
  tags: string[];
  relatedArticles: string[];
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}