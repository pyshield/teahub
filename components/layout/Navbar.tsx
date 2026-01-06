import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Coffee, Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const isDashboard = location.pathname.includes('dashboard');

  if (isDashboard) return null; // Dashboard has its own sidebar

  return (
    <nav className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="p-2 bg-indigo-600 rounded-lg text-white">
              <Coffee size={20} />
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">TeaHub</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/explore" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
              Explore Creators
            </Link>
            <Link to="/explore" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
              Features
            </Link>
            <Link to="/explore" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
              Pricing
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/login">
                <span className="text-sm font-medium text-slate-600 hover:text-slate-900 cursor-pointer">Log in</span>
            </Link>
            <Link to="/register">
                <Button size="sm">Start my Page</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <Link 
              to="/explore" 
              className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Explore Creators
            </Link>
            <Link 
              to="/login" 
              className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Log in
            </Link>
            <div className="pt-4 flex flex-col gap-2">
               <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                   <Button fullWidth variant="outline">Log in</Button>
               </Link>
               <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                  <Button fullWidth>Start my Page</Button>
               </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};