import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Heart, CreditCard, Globe } from 'lucide-react';

export const Landing: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 z-0"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6">
              Support Creators,<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Simply.</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
              Accept tips, memberships, and commissions with 0% platform fees.
              The all-in-one platform for artists, streamers, and developers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/explore">
                 <Button size="lg" className="h-12 px-8 rounded-full text-lg shadow-lg shadow-indigo-200">
                    Discover Creators
                 </Button>
              </Link>
              <Link to="/register">
                <Button size="lg" variant="outline" className="h-12 px-8 rounded-full text-lg">
                    Start my Page
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 text-sm text-slate-500 flex items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-500" />
                <span>No monthly fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-500" />
                <span>Instant payouts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-500" />
                <span>Crypto & Local Pay</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900">Everything you need to grow</h2>
              <p className="text-slate-500 mt-4">More than just a tipping jar.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors">
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-6">
                  <Heart size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Donations & Tips</h3>
                <p className="text-slate-600 leading-relaxed">
                  Let fans support your work with one-time donations. Set goals and celebrate milestones together.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                  <CreditCard size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Memberships</h3>
                <p className="text-slate-600 leading-relaxed">
                  Build recurring revenue by offering exclusive content, Discord roles, and early access to monthly subscribers.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors">
                <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center mb-6">
                  <Globe size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Global Payments</h3>
                <p className="text-slate-600 leading-relaxed">
                  Accept payments from anywhere. Stripe, Crypto (USDT), and local payment methods like UPI supported.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-slate-900 text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
             <h2 className="text-4xl font-bold mb-6">Ready to start earning?</h2>
             <p className="text-slate-300 text-lg mb-10">Join thousands of creators who trust TeaHub to power their creative business.</p>
             <Link to="/register">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 border-none">
                    Create my Page
                    <ArrowRight size={18} className="ml-2" />
                </Button>
             </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};