import React from 'react';
import { Coffee, Twitter, Github, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-1.5 bg-indigo-600 rounded-lg text-white">
                <Coffee size={16} />
              </div>
              <span className="text-lg font-bold text-slate-900">TeaHub</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Empowering creators to do what they love by simplifying monetization and community building.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-indigo-600">Features</a></li>
              <li><a href="#" className="hover:text-indigo-600">Pricing</a></li>
              <li><a href="#" className="hover:text-indigo-600">Integrations</a></li>
              <li><a href="#" className="hover:text-indigo-600">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-indigo-600">Blog</a></li>
              <li><a href="#" className="hover:text-indigo-600">Creator Guides</a></li>
              <li><a href="#" className="hover:text-indigo-600">Support</a></li>
              <li><a href="#" className="hover:text-indigo-600">Terms</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors"><Github size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors"><Instagram size={20} /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">© 2024 TeaHub Inc. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-slate-400">
            <a href="#" className="hover:text-slate-600">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};