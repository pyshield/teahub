import React from 'react';
import { Heart, MessageCircle, Share2, Lock } from 'lucide-react';
import { Post } from '../../types';

interface PostCardProps {
  post: Post;
  authorName: string;
  authorAvatar: string;
}

export const PostCard: React.FC<PostCardProps> = ({ post, authorName, authorAvatar }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-6 transition-all hover:shadow-md">
      {/* Header */}
      <div className="p-4 flex items-center gap-3">
        <img src={authorAvatar} alt={authorName} className="w-10 h-10 rounded-full object-cover" />
        <div>
          <h4 className="font-medium text-slate-900 text-sm">{authorName}</h4>
          <p className="text-xs text-slate-500">{new Date(post.createdAt).toLocaleDateString()}</p>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pb-2">
        <h3 className="font-bold text-lg text-slate-900 mb-2">{post.title}</h3>
        
        {post.isPremium ? (
          <div className="bg-slate-50 border border-dashed border-slate-300 rounded-lg p-8 flex flex-col items-center justify-center text-center">
            <div className="bg-slate-200 p-3 rounded-full mb-3">
              <Lock size={24} className="text-slate-600" />
            </div>
            <h5 className="font-semibold text-slate-900">Supporters Only</h5>
            <p className="text-sm text-slate-500 mb-4 max-w-xs">Join membership to unlock this exclusive content and support my work.</p>
            <button className="text-indigo-600 font-medium text-sm hover:underline">Unlock Post</button>
          </div>
        ) : (
          <>
            <p className="text-slate-700 leading-relaxed mb-4">{post.content}</p>
            {post.imageUrl && (
              <img src={post.imageUrl} alt={post.title} className="w-full h-auto rounded-lg mb-2 object-cover max-h-96" />
            )}
          </>
        )}
      </div>

      {/* Actions */}
      <div className="px-4 py-3 border-t border-slate-100 flex items-center gap-6">
        <button className="flex items-center gap-1.5 text-slate-500 hover:text-red-500 transition-colors">
          <Heart size={18} />
          <span className="text-xs font-medium">{post.likes}</span>
        </button>
        <button className="flex items-center gap-1.5 text-slate-500 hover:text-indigo-600 transition-colors">
          <MessageCircle size={18} />
          <span className="text-xs font-medium">{post.comments}</span>
        </button>
        <button className="flex items-center gap-1.5 text-slate-500 hover:text-slate-900 transition-colors ml-auto">
          <Share2 size={18} />
        </button>
      </div>
    </div>
  );
};