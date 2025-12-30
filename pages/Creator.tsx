import React, { useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { CreatorHeader } from '../components/creator/CreatorHeader';
import { PostCard } from '../components/creator/PostCard';
import { SupportModal } from '../components/creator/SupportModal';
import { Button } from '../components/ui/Button';
import { CreatorProfile, Post } from '../types';
import { Coffee, Lock, Star } from 'lucide-react';

// Mock Data
const MOCK_PROFILE: CreatorProfile = {
  id: 'c_1',
  username: 'janedoe_art',
  name: 'Jane Doe',
  bio: 'Digital Artist & Illustrator creating fantasy worlds.\nSupport me to see behind-the-scenes sketches and tutorials!',
  avatarUrl: 'https://picsum.photos/id/64/200/200',
  bannerUrl: 'https://picsum.photos/id/124/1200/400',
  tags: ['Digital Art', 'Tutorials', 'Fantasy'],
  supporterCount: 143
};

const MOCK_POSTS: Post[] = [
  {
    id: 'p_1',
    creatorId: 'c_1',
    title: 'Character Design Process - Elven Archer',
    content: 'Here is a breakdown of how I designed the armor for the recent commission. I started with a rough silhouette...',
    imageUrl: 'https://picsum.photos/id/96/800/600',
    likes: 45,
    comments: 12,
    isPremium: false,
    createdAt: '2024-01-10T10:00:00Z'
  },
  {
    id: 'p_2',
    creatorId: 'c_1',
    title: 'High-Res Wallpaper Pack (Jan 2024)',
    content: 'Exclusive 4K wallpapers for my supporters. Download link below.',
    likes: 89,
    comments: 34,
    isPremium: true,
    createdAt: '2024-01-05T14:30:00Z'
  },
   {
    id: 'p_3',
    creatorId: 'c_1',
    title: 'Quick Sketch Session',
    content: 'Just warming up this morning with some gesture drawings.',
    imageUrl: 'https://picsum.photos/id/28/800/500',
    likes: 22,
    comments: 4,
    isPremium: false,
    createdAt: '2024-01-02T09:15:00Z'
  }
];

export const Creator: React.FC = () => {
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'posts' | 'shop' | 'commissions'>('posts');

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <CreatorHeader profile={MOCK_PROFILE} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Content Column (Feed) */}
            <div className="lg:col-span-2 space-y-6">
               {/* Mobile Support Button */}
               <div className="lg:hidden mb-6">
                  <Button fullWidth size="lg" onClick={() => setIsSupportModalOpen(true)}>
                    Support {MOCK_PROFILE.name.split(' ')[0]}
                  </Button>
               </div>

               {/* Tabs */}
               <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-1 flex gap-1 mb-4">
                  {['Posts', 'Shop', 'Commissions'].map(tab => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab.toLowerCase() as any)}
                      className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${
                        activeTab === tab.toLowerCase()
                          ? 'bg-indigo-50 text-indigo-700'
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
               </div>

               {/* Feed Content */}
               {activeTab === 'posts' && (
                 <div className="space-y-6">
                    {MOCK_POSTS.map(post => (
                      <PostCard 
                        key={post.id} 
                        post={post} 
                        authorName={MOCK_PROFILE.name}
                        authorAvatar={MOCK_PROFILE.avatarUrl}
                      />
                    ))}
                 </div>
               )}

               {activeTab === 'shop' && (
                  <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-12 text-center">
                    <div className="mx-auto w-16 h-16 bg-indigo-50 text-indigo-400 rounded-full flex items-center justify-center mb-4">
                      <Lock size={32} />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">Shop Coming Soon</h3>
                    <p className="text-slate-500">Digital products will be available here shortly.</p>
                  </div>
               )}
            </div>

            {/* Right Sidebar (Support Panel) */}
            <div className="hidden lg:block space-y-6">
               {/* Support Card */}
               <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sticky top-24">
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Coffee className="text-indigo-600" size={20} />
                    Support {MOCK_PROFILE.name.split(' ')[0]}
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-100 text-indigo-900 text-sm">
                      <span className="font-semibold">Goal:</span> New Drawing Tablet (85%)
                      <div className="w-full h-2 bg-indigo-200 rounded-full mt-2 overflow-hidden">
                        <div className="h-full bg-indigo-600 w-[85%]"></div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                       <button className="py-2 border border-slate-200 rounded-lg text-sm hover:bg-slate-50 font-medium">x1 ☕</button>
                       <button className="py-2 border border-indigo-600 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-medium">x3 ☕</button>
                       <button className="py-2 border border-slate-200 rounded-lg text-sm hover:bg-slate-50 font-medium">x5 ☕</button>
                    </div>

                    <textarea 
                      placeholder="Say something nice..." 
                      className="w-full p-3 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none h-24"
                    ></textarea>

                    <Button fullWidth onClick={() => setIsSupportModalOpen(true)}>
                      Support ${15}
                    </Button>
                  </div>
               </div>

               {/* Membership Card */}
               <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                 <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Star className="text-yellow-500" size={20} />
                    Membership
                  </h3>
                  <div className="space-y-4">
                     <div className="border border-slate-200 rounded-lg p-4 hover:border-indigo-300 transition-colors cursor-pointer">
                        <div className="flex justify-between items-center mb-2">
                           <span className="font-bold text-slate-900">Silver Tier</span>
                           <span className="text-sm font-medium text-slate-600">$5/mo</span>
                        </div>
                        <p className="text-xs text-slate-500">Access to supporter-only posts and high-res downloads.</p>
                     </div>
                     <div className="border border-indigo-200 bg-indigo-50/50 rounded-lg p-4 cursor-pointer relative">
                        <div className="absolute -top-2 right-4 bg-indigo-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">RECOMMENDED</div>
                        <div className="flex justify-between items-center mb-2">
                           <span className="font-bold text-indigo-900">Gold Tier</span>
                           <span className="text-sm font-medium text-indigo-700">$10/mo</span>
                        </div>
                        <p className="text-xs text-indigo-800/80">Previous rewards + PSD files and process videos.</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <SupportModal 
        isOpen={isSupportModalOpen} 
        onClose={() => setIsSupportModalOpen(false)} 
        creatorName={MOCK_PROFILE.name} 
      />
    </div>
  );
};