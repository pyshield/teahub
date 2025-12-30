export enum Role {
  ADMIN = 'ADMIN',
  CREATOR = 'CREATOR',
  SUPPORTER = 'SUPPORTER',
  GUEST = 'GUEST'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatarUrl?: string;
}

export interface CreatorProfile {
  id: string;
  username: string;
  name: string;
  bio: string;
  avatarUrl: string;
  bannerUrl: string;
  tags: string[];
  supporterCount: number;
}

export interface Post {
  id: string;
  creatorId: string;
  title: string;
  content: string;
  imageUrl?: string;
  likes: number;
  comments: number;
  isPremium: boolean;
  createdAt: string;
}

export enum PaymentMethod {
  STRIPE = 'STRIPE',
  CRYPTO = 'CRYPTO',
  LOCAL = 'LOCAL'
}

export interface Transaction {
  id: string;
  amount: number;
  currency: string;
  method: PaymentMethod;
  status: 'SUCCESS' | 'PENDING' | 'FAILED';
  date: string;
  supporterName: string;
}
