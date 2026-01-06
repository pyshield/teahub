import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Sidebar } from '../components/layout/Sidebar';
import { Overview } from './dashboard/Overview';
import { Settings } from './dashboard/Settings';
import { Analytics } from './dashboard/Analytics';

export const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar />
      
      <main className="flex-1 md:ml-64 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <Routes>
            <Route index element={<Overview />} />
            <Route path="settings" element={<Settings />} />
            <Route path="analytics" element={<Analytics />} />
            {/* Placeholder for other routes */}
            <Route path="donations" element={<div className="p-12 text-center bg-white rounded-xl border border-dashed border-slate-300">Donations feature coming soon</div>} />
            <Route path="shop" element={<div className="p-12 text-center bg-white rounded-xl border border-dashed border-slate-300">Shop feature coming soon</div>} />
            <Route path="supporters" element={<div className="p-12 text-center bg-white rounded-xl border border-dashed border-slate-300">Supporters list coming soon</div>} />
          </Routes>
        </div>
      </main>
    </div>
  );
};