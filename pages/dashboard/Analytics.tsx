import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Legend,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from 'recharts';
import { StatCard } from '../../components/dashboard/StatCard';
import { Target, Zap, Clock, TrendingUp, Globe, MousePointer2 } from 'lucide-react';

const REVENUE_MIX_DATA = [
  { name: 'Mon', donations: 400, memberships: 240, shop: 120 },
  { name: 'Tue', donations: 300, memberships: 139, shop: 210 },
  { name: 'Wed', donations: 200, memberships: 980, shop: 229 },
  { name: 'Thu', donations: 278, memberships: 390, shop: 200 },
  { name: 'Fri', donations: 189, memberships: 480, shop: 218 },
  { name: 'Sat', donations: 239, memberships: 380, shop: 250 },
  { name: 'Sun', donations: 349, memberships: 430, shop: 210 },
];

const TRAFFIC_DATA = [
  { name: 'Twitter/X', value: 45, color: '#4f46e5' },
  { name: 'YouTube', value: 25, color: '#ef4444' },
  { name: 'Direct', value: 20, color: '#10b981' },
  { name: 'Instagram', value: 10, color: '#f59e0b' },
];

const TOP_COUNTRIES = [
  { name: 'United States', flag: '🇺🇸', supporters: '42%', trend: '+5%' },
  { name: 'United Kingdom', flag: '🇬🇧', supporters: '18%', trend: '+2%' },
  { name: 'Germany', flag: '🇩🇪', supporters: '12%', trend: '-1%' },
  { name: 'Japan', flag: '🇯🇵', supporters: '9%', trend: '+8%' },
  { name: 'Canada', flag: '🇨🇦', supporters: '7%', trend: '0%' },
];

export const Analytics: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Analytics</h1>
          <p className="text-slate-500">Deep dive into your page performance and audience growth.</p>
        </div>
        <div className="flex gap-2">
          <select className="bg-white border border-slate-200 text-sm font-medium rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none">
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
            <option>Year to Date</option>
          </select>
        </div>
      </div>

      {/* KPI Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          label="Conversion Rate" 
          value="4.2%" 
          trend="+0.5%" 
          trendUp={true} 
          icon={Target}
          color="indigo"
        />
        <StatCard 
          label="Avg. Support" 
          value="$18.50" 
          trend="+$2.10" 
          trendUp={true} 
          icon={Zap}
          color="emerald"
        />
        <StatCard 
          label="CTR" 
          value="12.8%" 
          trend="-0.2%" 
          trendUp={false} 
          icon={MousePointer2}
          color="blue"
        />
        <StatCard 
          label="Peak Activity" 
          value="7 PM" 
          icon={Clock}
          color="orange"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Main Revenue Mix Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
            <TrendingUp size={20} className="text-indigo-600" />
            Revenue Breakdown
          </h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={REVENUE_MIX_DATA}>
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
                />
                <Tooltip 
                  cursor={{fill: '#f8fafc'}}
                  contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                />
                <Legend iconType="circle" wrapperStyle={{paddingTop: '20px'}} />
                <Bar dataKey="donations" name="Donations" stackId="a" fill="#4f46e5" radius={[0, 0, 0, 0]} />
                <Bar dataKey="memberships" name="Memberships" stackId="a" fill="#10b981" radius={[0, 0, 0, 0]} />
                <Bar dataKey="shop" name="Shop" stackId="a" fill="#f59e0b" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-6">Traffic Sources</h3>
          <div className="h-64 w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={TRAFFIC_DATA}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {TRAFFIC_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center">
                <p className="text-2xl font-bold text-slate-900">3.2k</p>
                <p className="text-xs text-slate-500">Total Visits</p>
              </div>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            {TRAFFIC_DATA.map((source) => (
              <div key={source.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{backgroundColor: source.color}}></div>
                  <span className="text-slate-600">{source.name}</span>
                </div>
                <span className="font-semibold text-slate-900">{source.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Global Reach */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Globe size={20} className="text-indigo-600" />
              Global Audience
            </h3>
            <button className="text-sm text-indigo-600 font-medium hover:underline">Full Map</button>
          </div>
          <div className="space-y-4">
            {TOP_COUNTRIES.map((country) => (
              <div key={country.name} className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="text-xl">{country.flag}</span>
                  <div>
                    <p className="font-medium text-slate-900 text-sm">{country.name}</p>
                    <p className="text-xs text-slate-500">Reach: {country.supporters}</p>
                  </div>
                </div>
                <div className={`text-xs font-bold ${
                  country.trend.startsWith('+') ? 'text-emerald-600' : country.trend === '0%' ? 'text-slate-400' : 'text-red-500'
                }`}>
                  {country.trend}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-indigo-600 rounded-xl shadow-sm p-8 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4">Grow your reach</h3>
            <p className="text-indigo-100 mb-6 leading-relaxed">
              Based on your audience in Japan, try scheduling your next post for 
              <span className="font-bold text-white"> 11 PM UTC</span> to maximize engagement from overseas fans.
            </p>
            <button className="bg-white text-indigo-600 px-6 py-2 rounded-lg font-bold text-sm shadow-lg hover:bg-indigo-50 transition-colors">
              View Content Strategy
            </button>
          </div>
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-indigo-500 rounded-full opacity-20"></div>
          <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-32 h-32 bg-indigo-400 rounded-full opacity-20"></div>
        </div>
      </div>
    </div>
  );
};