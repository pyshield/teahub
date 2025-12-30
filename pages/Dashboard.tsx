import React from 'react';
import { Sidebar } from '../components/layout/Sidebar';
import { StatCard } from '../components/dashboard/StatCard';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { DollarSign, Users, Coffee, TrendingUp } from 'lucide-react';

const CHART_DATA = [
  { name: 'Mon', amount: 45 },
  { name: 'Tue', amount: 72 },
  { name: 'Wed', amount: 38 },
  { name: 'Thu', amount: 105 },
  { name: 'Fri', amount: 89 },
  { name: 'Sat', amount: 150 },
  { name: 'Sun', amount: 120 },
];

export const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar />
      
      <main className="flex-1 md:ml-64 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
            <p className="text-slate-500">Welcome back, Jane. Here's what's happening today.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard 
              label="Total Earnings (30d)" 
              value="$1,245.00" 
              trend="+12.5%" 
              trendUp={true} 
              icon={DollarSign}
              color="emerald"
            />
            <StatCard 
              label="Active Supporters" 
              value="143" 
              trend="+4" 
              trendUp={true} 
              icon={Users}
              color="blue"
            />
             <StatCard 
              label="Coffees Received" 
              value="28" 
              icon={Coffee}
              color="orange"
            />
             <StatCard 
              label="Page Views" 
              value="3.2k" 
              trend="-1.2%" 
              trendUp={false} 
              icon={TrendingUp}
              color="indigo"
            />
          </div>

          {/* Chart Section */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-8">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Earnings History</h3>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={CHART_DATA}>
                  <defs>
                    <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fill: '#64748b', fontSize: 12}} 
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fill: '#64748b', fontSize: 12}} 
                    tickFormatter={(value) => `$${value}`}
                  />
                  <Tooltip 
                    contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="amount" 
                    stroke="#4f46e5" 
                    strokeWidth={2}
                    fillOpacity={1} 
                    fill="url(#colorAmount)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recent Activity Table */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100">
              <h3 className="text-lg font-bold text-slate-900">Recent Supporters</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-100">
                  <tr>
                    <th className="px-6 py-3 font-medium">Supporter</th>
                    <th className="px-6 py-3 font-medium">Amount</th>
                    <th className="px-6 py-3 font-medium">Method</th>
                    <th className="px-6 py-3 font-medium">Message</th>
                    <th className="px-6 py-3 font-medium">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-900">Alex M.</td>
                    <td className="px-6 py-4 text-emerald-600 font-medium">+$15.00</td>
                    <td className="px-6 py-4 text-slate-500">Stripe</td>
                    <td className="px-6 py-4 text-slate-600 max-w-xs truncate">Love the new artwork! Keep it up.</td>
                    <td className="px-6 py-4 text-slate-400">2 mins ago</td>
                  </tr>
                   <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-900">Anonymous</td>
                    <td className="px-6 py-4 text-emerald-600 font-medium">+$5.00</td>
                    <td className="px-6 py-4 text-slate-500">Crypto (ETH)</td>
                    <td className="px-6 py-4 text-slate-600 max-w-xs truncate">For the coffee ☕</td>
                    <td className="px-6 py-4 text-slate-400">2 hours ago</td>
                  </tr>
                   <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-900">Sarah J.</td>
                    <td className="px-6 py-4 text-emerald-600 font-medium">+$50.00</td>
                    <td className="px-6 py-4 text-slate-500">Local (UPI)</td>
                    <td className="px-6 py-4 text-slate-600 max-w-xs truncate">Commission payment for the portrait.</td>
                    <td className="px-6 py-4 text-slate-400">Yesterday</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};