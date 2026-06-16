import { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import { LogOut } from 'lucide-react';
import { adminProfile } from '@/data/mockData';

export default function AdminProfilePage() {
  const [profile, setProfile] = useState(adminProfile);

  const updateField = (field: string, value: string) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="opacity-0 animate-fade-in">
      <PageHeader
        title="Admin Profile"
        subtitle="View and manage your profile settings."
      />

      {/* Profile Card */}
      <div className="bg-white border border-cardBorder rounded-lg p-6 shadow-xs mb-4 flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-sidebarDark flex items-center justify-center text-white text-[20px] font-bold flex-shrink-0">
          {profile.name.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <h2 className="text-[18px] font-bold text-textPrimary">{profile.name}</h2>
          <p className="text-[12px] text-textSecondary">{profile.role}</p>
          <p className="text-[12px] text-textSecondary">{profile.email}</p>
        </div>
      </div>

      {/* Edit Profile Form */}
      <div className="bg-white border border-cardBorder rounded-lg shadow-xs p-4 max-w-2xl">
        <h3 className="text-[14px] font-semibold text-textPrimary mb-4">Edit Profile</h3>
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] items-center gap-2">
            <label className="text-[12px] text-textSecondary">Full Name</label>
            <input
              type="text"
              value={profile.name}
              onChange={(e) => updateField('name', e.target.value)}
              className="text-[13px] border border-inputBorder rounded-md px-3 py-2 text-textPrimary focus:outline-none focus:border-textPrimary transition-colors"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] items-center gap-2">
            <label className="text-[12px] text-textSecondary">Email Address</label>
            <input
              type="email"
              value={profile.email}
              onChange={(e) => updateField('email', e.target.value)}
              className="text-[13px] border border-inputBorder rounded-md px-3 py-2 text-textPrimary focus:outline-none focus:border-textPrimary transition-colors"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] items-center gap-2">
            <label className="text-[12px] text-textSecondary">Role</label>
            <input
              type="text"
              value={profile.role}
              disabled
              className="text-[13px] border border-inputBorder rounded-md px-3 py-2 text-textSecondary bg-gray-50 cursor-not-allowed"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] items-center gap-2">
            <label className="text-[12px] text-textSecondary">Phone Number</label>
            <input
              type="text"
              value={profile.phone}
              onChange={(e) => updateField('phone', e.target.value)}
              className="text-[13px] border border-inputBorder rounded-md px-3 py-2 text-textPrimary focus:outline-none focus:border-textPrimary transition-colors"
            />
          </div>
          <div className="border-t border-divider pt-4">
            <h4 className="text-[13px] font-semibold text-textPrimary mb-3">Change Password</h4>
            <div className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] items-center gap-2">
                <label className="text-[12px] text-textSecondary">Current Password</label>
                <input type="password" placeholder="Enter current password" className="text-[13px] border border-inputBorder rounded-md px-3 py-2 text-textPrimary focus:outline-none focus:border-textPrimary transition-colors" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] items-center gap-2">
                <label className="text-[12px] text-textSecondary">New Password</label>
                <input type="password" placeholder="Enter new password" className="text-[13px] border border-inputBorder rounded-md px-3 py-2 text-textPrimary focus:outline-none focus:border-textPrimary transition-colors" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] items-center gap-2">
                <label className="text-[12px] text-textSecondary">Confirm Password</label>
                <input type="password" placeholder="Confirm new password" className="text-[13px] border border-inputBorder rounded-md px-3 py-2 text-textPrimary focus:outline-none focus:border-textPrimary transition-colors" />
              </div>
            </div>
          </div>
          <button className="w-full py-2.5 text-[13px] text-white bg-accentPurple rounded-md hover:bg-accentPurple/90 transition-colors font-medium">
            Save Changes
          </button>
        </div>
      </div>

      {/* Logout */}
      <div className="mt-4 max-w-2xl">
        <button className="w-full flex items-center justify-center gap-2 py-2.5 text-[13px] text-accentRed border border-accentRed/30 rounded-md hover:bg-accentRed/5 transition-colors">
          <LogOut className="w-4 h-4" /> Logout
        </button>
      </div>
    </div>
  );
}
