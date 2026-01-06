import React, { useState } from 'react';
import { Button } from '../../components/ui/Button';
import { User, Shield, CreditCard, Bell, Globe, Camera } from 'lucide-react';

export const Settings: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'profile' | 'payments' | 'account'>('profile');
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => setIsSaving(false), 1000);
  };

  const sections = [
    { id: 'profile', label: 'Profile Settings', icon: User },
    { id: 'payments', label: 'Payment Methods', icon: CreditCard },
    { id: 'account', label: 'Account & Security', icon: Shield },
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Settings</h1>
        <p className="text-slate-500">Manage your profile, payments, and account preferences.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Nav Sidebar */}
        <div className="w-full lg:w-64 space-y-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id as any)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                activeSection === section.id
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-600 hover:bg-white hover:text-slate-900 border border-transparent hover:border-slate-200'
              }`}
            >
              <section.icon size={18} />
              {section.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1 space-y-6">
          {activeSection === 'profile' && (
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="p-6 border-b border-slate-100">
                <h3 className="font-bold text-slate-900">Public Profile</h3>
                <p className="text-sm text-slate-500">This information will be visible on your public TeaHub page.</p>
              </div>
              <div className="p-6 space-y-6">
                {/* Images */}
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Profile Picture</label>
                    <div className="relative group w-24 h-24">
                      <img 
                        src="https://picsum.photos/id/64/200/200" 
                        alt="Avatar" 
                        className="w-full h-full rounded-full object-cover border-2 border-slate-200"
                      />
                      <button className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Camera size={20} className="text-white" />
                      </button>
                    </div>
                  </div>
                  <div className="flex-1 space-y-2">
                    <label className="text-sm font-medium text-slate-700">Banner Image</label>
                    <div className="relative group h-24 bg-slate-100 rounded-lg overflow-hidden border-2 border-slate-200">
                      <img 
                        src="https://picsum.photos/id/124/1200/400" 
                        alt="Banner" 
                        className="w-full h-full object-cover"
                      />
                      <button className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Camera size={20} className="text-white" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Display Name</label>
                    <input 
                      type="text" 
                      defaultValue="Jane Doe"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Username</label>
                    <div className="relative">
                      <span className="absolute left-3 top-2 text-slate-400 text-sm">teahub.me/</span>
                      <input 
                        type="text" 
                        defaultValue="janedoe_art"
                        className="w-full pl-[78px] pr-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-sm font-medium text-slate-700">Bio</label>
                    <textarea 
                      rows={4}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                      defaultValue="Digital Artist & Illustrator creating fantasy worlds. Support me to see behind-the-scenes sketches and tutorials!"
                    />
                  </div>
                </div>
              </div>
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-end">
                <Button onClick={handleSave} disabled={isSaving}>
                  {isSaving ? 'Saving...' : 'Save Changes'}
                </Button>
              </div>
            </div>
          )}

          {activeSection === 'payments' && (
            <div className="space-y-6">
              {/* Stripe */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg">
                    <CreditCard size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Stripe Connect</h4>
                    <p className="text-sm text-slate-500">Receive card payments directly to your bank.</p>
                  </div>
                </div>
                <Button variant="outline">Connected</Button>
              </div>

              {/* Crypto */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg">
                    <Globe size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Crypto Wallet</h4>
                    <p className="text-sm text-slate-500">Accept USDT, ETH, and BTC from global fans.</p>
                  </div>
                </div>
                <Button variant="primary">Setup Wallet</Button>
              </div>

              {/* Local Pay */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-orange-50 text-orange-600 rounded-lg">
                    <Bell size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Local Bank Transfer</h4>
                    <p className="text-sm text-slate-500">Setup UPI, Pix, or Mobile Money details.</p>
                  </div>
                </div>
                <Button variant="outline">Edit Details</Button>
              </div>
            </div>
          )}

          {activeSection === 'account' && (
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
               <div className="p-6 border-b border-slate-100">
                <h3 className="font-bold text-slate-900">Security</h3>
                <p className="text-sm text-slate-500">Protect your account and assets.</p>
              </div>
              <div className="p-6 space-y-6">
                <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                  <div>
                    <h5 className="font-medium text-slate-900">Email Address</h5>
                    <p className="text-sm text-slate-500">jane.doe@example.com</p>
                  </div>
                  <Button variant="ghost" size="sm">Change</Button>
                </div>
                <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                  <div>
                    <h5 className="font-medium text-slate-900">Password</h5>
                    <p className="text-sm text-slate-500">Last changed 3 months ago</p>
                  </div>
                  <Button variant="ghost" size="sm">Update</Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="font-medium text-slate-900 text-red-600">Delete Account</h5>
                    <p className="text-sm text-slate-500">Permanently remove your page and all data.</p>
                  </div>
                  <Button variant="danger" size="sm">Delete</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};