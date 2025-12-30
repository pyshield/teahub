import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Wallet, 
  Users, 
  ShoppingBag, 
  Settings, 
  LogOut,
  Coffee,
  PieChart
} from 'lucide-react';

export const Sidebar: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { icon: LayoutDashboard, label: 'Overview', path: '/dashboard' },
    { icon: Wallet, label: 'Donations & Memberships', path: '/dashboard/donations' },
    { icon: ShoppingBag, label: 'Shop & Commissions', path: '/dashboard/shop' },
    { icon: Users, label: 'Supporters', path: '/dashboard/supporters' },
    { icon: PieChart, label: 'Analytics', path: '/dashboard/analytics' },
    { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-200 h-screen fixed left-0 top-0 flex flex-col z-30 hidden md:flex">
      <div className="p-6 border-b border-slate-100 flex items-center gap-2">
        <div className="p-1.5 bg-indigo-600 rounded-lg text-white">
          <Coffee size={20} />
        </div>
        <span className="text-lg font-bold text-slate-900">TeaHub</span>
      </div>

      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              isActive(item.path)
                ? 'bg-indigo-50 text-indigo-700'
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            <item.icon size={18} />
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-100">
        <Link
            to="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors w-full"
        >
          <LogOut size={18} />
          Log Out
        </Link>
      </div>
    </aside>
  );
};