import React, { useState, useMemo } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Button } from '../components/ui/Button';
import { Search, Filter, Users, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CATEGORIES = ['All', 'Digital Art', 'Music', 'Gaming', 'Writing', 'Podcast', 'Education', 'Video'];

const MOCK_CREATORS = [
  {
    id: 'c_1',
    name: 'Jane Doe',
    username: 'janedoe_art',
    bio: 'Digital Artist & Illustrator creating fantasy worlds and character designs.',
    avatarUrl: 'https://picsum.photos/id/64/200/200',
    bannerUrl: 'https://picsum.photos/id/124/600/200',
    tags: ['Digital Art', 'Fantasy'],
    category: 'Digital Art',
    supporters: 143,
    featured: true
  },
  {
    id: 'c_2',
    name: 'Marcus Chen',
    username: 'marcus_beats',
    bio: 'Lo-fi producer and sound designer. Making study beats for the soul.',
    avatarUrl: 'https://picsum.photos/id/91/200/200',
    bannerUrl: 'https://picsum.photos/id/102/600/200',
    tags: ['Music', 'Lo-fi'],
    category: 'Music',
    supporters: 892,
    featured: false
  },
  {
    id: 'c_3',
    name: 'Elena Rodriguez',
    username: 'elena_codes',
    bio: 'Open source developer building tools for a better web. React & TS enthusiast.',
    avatarUrl: 'https://picsum.photos/id/177/200/200',
    bannerUrl: 'https://picsum.photos/id/180/600/200',
    tags: ['Education', 'Tech'],
    category: 'Education',
    supporters: 456,
    featured: true
  },
  {
    id: 'c_4',
    name: 'The Daily Brew',
    username: 'dailybrew_pod',
    bio: 'A morning podcast discussing culture, technology, and philosophy.',
    avatarUrl: 'https://picsum.photos/id/225/200/200',
    bannerUrl: 'https://picsum.photos/id/230/600/200',
    tags: ['Podcast', 'Culture'],
    category: 'Podcast',
    supporters: 1205,
    featured: false
  },
  {
    id: 'c_5',
    name: 'Pixel Quest',
    username: 'pixelquest_gaming',
    bio: 'Retro gaming reviews and speedruns. Journey through the 16-bit era.',
    avatarUrl: 'https://picsum.photos/id/342/200/200',
    bannerUrl: 'https://picsum.photos/id/350/600/200',
    tags: ['Gaming', 'Retro'],
    category: 'Gaming',
    supporters: 730,
    featured: false
  },
  {
    id: 'c_6',
    name: 'Sarah Jenkins',
    username: 'sarah_writes',
    bio: 'Independent journalist covering climate change and urban development.',
    avatarUrl: 'https://picsum.photos/id/453/200/200',
    bannerUrl: 'https://picsum.photos/id/460/600/200',
    tags: ['Writing', 'Journalism'],
    category: 'Writing',
    supporters: 312,
    featured: false
  }
];

export const Explore: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredCreators = useMemo(() => {
    return MOCK_CREATORS.filter(creator => {
      const matchesSearch = creator.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            creator.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            creator.bio.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || creator.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header Section */}
        <section className="bg-white border-b border-slate-200 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Discover Amazing Creators</h1>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Support your favorite artists, developers, and makers directly.
              </p>
            </div>

            {/* Search and Filter Bar */}
            <div className="max-w-3xl mx-auto">
              <div className="relative flex items-center mb-6">
                <Search className="absolute left-4 text-slate-400" size={20} />
                <input 
                  type="text"
                  placeholder="Search by name, username, or interests..."
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900 shadow-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2">
                {CATEGORIES.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? 'bg-indigo-600 text-white shadow-md'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Results Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold text-slate-900">
                {filteredCreators.length} {filteredCreators.length === 1 ? 'Creator' : 'Creators'} found
              </h2>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Filter size={16} />
                <span>Sort by: Recommended</span>
              </div>
            </div>

            {filteredCreators.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCreators.map((creator) => (
                  <Link 
                    key={creator.id}
                    to="/creator"
                    className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    {/* Banner */}
                    <div className="h-32 bg-slate-200 relative overflow-hidden">
                      <img 
                        src={creator.bannerUrl} 
                        alt={creator.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                      {creator.featured && (
                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg flex items-center gap-1.5 text-xs font-bold text-indigo-600 shadow-sm">
                          <Star size={12} fill="currentColor" />
                          Featured
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 relative">
                      {/* Avatar */}
                      <div className="absolute -top-10 left-6">
                        <img 
                          src={creator.avatarUrl} 
                          alt={creator.name} 
                          className="w-20 h-20 rounded-2xl border-4 border-white shadow-md object-cover" 
                        />
                      </div>

                      <div className="mt-8">
                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                          {creator.name}
                        </h3>
                        <p className="text-sm text-slate-500 mb-3">@{creator.username}</p>
                        <p className="text-sm text-slate-600 line-clamp-2 mb-4 h-10">
                          {creator.bio}
                        </p>

                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {creator.tags.map(tag => (
                            <span key={tag} className="px-2 py-0.5 bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-wider rounded">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                          <div className="flex items-center gap-1.5 text-sm text-slate-500 font-medium">
                            <Users size={16} />
                            <span>{creator.supporters.toLocaleString()} supporters</span>
                          </div>
                          <div className="text-indigo-600 group-hover:translate-x-1 transition-transform">
                            <ArrowRight size={20} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="py-20 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full text-slate-400 mb-4">
                  <Search size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">No creators found</h3>
                <p className="text-slate-500 mt-2">Try adjusting your search terms or filters.</p>
                <Button 
                  variant="outline" 
                  className="mt-6"
                  onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                >
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};