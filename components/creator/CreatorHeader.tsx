import React from 'react';
import { User, MapPin, Link as LinkIcon, Users } from 'lucide-react';
import { CreatorProfile } from '../../types';

interface CreatorHeaderProps {
  profile: CreatorProfile;
}

export const CreatorHeader: React.FC<CreatorHeaderProps> = ({ profile }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-8">
      {/* Banner */}
      <div 
        className="h-48 md:h-64 w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${profile.bannerUrl})`, backgroundColor: '#e2e8f0' }}
      >
        <div className="w-full h-full bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>

      {/* Profile Info */}
      <div className="px-6 pb-6 relative">
        <div className="flex flex-col md:flex-row items-start md:items-end -mt-12 md:-mt-16 gap-6">
          {/* Avatar */}
          <div className="relative">
             <img 
               src={profile.avatarUrl} 
               alt={profile.name}
               className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-md object-cover"
             />
             <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
          </div>
          
          {/* Text Info */}
          <div className="flex-1 pt-2 md:pt-0">
             <h1 className="text-2xl md:text-3xl font-bold text-slate-900">{profile.name}</h1>
             <p className="text-slate-500 font-medium">@{profile.username}</p>
          </div>

          {/* Stats/Meta - Desktop */}
          <div className="hidden md:flex items-center gap-6 text-sm text-slate-600 mb-2">
             <div className="flex items-center gap-1.5">
               <Users size={16} />
               <span>{profile.supporterCount} Supporters</span>
             </div>
             <div className="flex items-center gap-1.5">
               <MapPin size={16} />
               <span>New York, USA</span>
             </div>
             <div className="flex items-center gap-1.5">
               <LinkIcon size={16} />
               <a href="#" className="hover:text-indigo-600">website.com</a>
             </div>
          </div>
        </div>

        {/* Bio */}
        <div className="mt-6 max-w-2xl">
           <p className="text-slate-700 leading-relaxed whitespace-pre-line">
             {profile.bio}
           </p>
           
           <div className="mt-4 flex flex-wrap gap-2">
             {profile.tags.map(tag => (
               <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
                 #{tag}
               </span>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
};