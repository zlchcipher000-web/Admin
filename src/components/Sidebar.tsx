import { useNavigate, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Building2,
  Users,
  CalendarDays,
  Wallet,
  CreditCard,
  Megaphone,
  BarChart3,
  Settings,
  ClipboardList,
  LifeBuoy,
  UserCircle,
  LogOut,
  GraduationCap,
  Menu,
  X,
} from 'lucide-react';
import { useAppContext } from '@/context/AppContext';
import { useState } from 'react';

const menuItems = [
  { path: '/', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/universities', label: 'University Mgmt', icon: Building2 },
  { path: '/users', label: 'Users Management', icon: Users },
  { path: '/sessions', label: 'Session Mgmt', icon: CalendarDays },
  { path: '/earnings', label: 'Earnings & Trans', icon: Wallet },
  { path: '/payouts', label: 'Payout Requests', icon: CreditCard },
  { path: '/content', label: 'Content & Announ.', icon: Megaphone },
  { path: '/reports', label: 'Reports & Analytics', icon: BarChart3 },
  { path: '/settings', label: 'System Settings', icon: Settings },
  { path: '/activity-logs', label: 'Activity Logs', icon: ClipboardList },
  { path: '/support', label: 'Support & Helpdesk', icon: LifeBuoy },
];

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { state, toggleSidebar } = useAppContext();
  const [mobileOpen, setMobileOpen] = useState(false);
  const collapsed = state.sidebarCollapsed;
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    if (isMobile) setMobileOpen(false);
  };

  const sidebarWidth = collapsed ? 'w-16' : 'w-[200px]';

  const SidebarContent = (
    <div
      className={`${sidebarWidth} h-screen bg-sidebarDark flex flex-col transition-all duration-200 fixed left-0 top-0 z-40 select-none`}
    >
      {/* Logo */}
      <div className={`flex items-center gap-2 px-4 pt-4 pb-2 ${collapsed ? 'justify-center' : ''}`}>
        <GraduationCap className="w-6 h-6 text-white flex-shrink-0" />
        {!collapsed && (
          <div>
            <div className="text-white text-sm font-semibold leading-tight">EduFund</div>
            <div className="text-textTertiary text-[10px] tracking-wider uppercase">Platform Admin</div>
          </div>
        )}
      </div>

      {/* Mobile close button */}
      {isMobile && (
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-3 right-3 text-textTertiary hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>
      )}

      {/* Collapse toggle - desktop only */}
      {!isMobile && (
        <button
          onClick={toggleSidebar}
          className="mx-3 mt-2 mb-1 p-1 rounded hover:bg-sidebarActive text-textTertiary hover:text-white transition-colors self-end"
        >
          <Menu className="w-4 h-4" />
        </button>
      )}

      {/* Menu Items */}
      <nav className="flex-1 overflow-y-auto px-2 py-2 space-y-0.5 scrollbar-none">
        {menuItems.map((item) => {
          const active = isActive(item.path);
          const Icon = item.icon;
          return (
            <button
              key={item.path}
              onClick={() => handleNavigate(item.path)}
              className={`
                w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-[13px] font-medium
                transition-all duration-150 group
                ${active
                  ? 'bg-sidebarActive text-white'
                  : 'text-textSecondary hover:text-white hover:bg-sidebarActive/50'
                }
                ${collapsed ? 'justify-center' : ''}
              `}
              title={collapsed ? item.label : undefined}
            >
              <Icon className={`w-[18px] h-[18px] flex-shrink-0 ${active ? 'text-white' : 'text-textSecondary group-hover:text-white'}`} />
              {!collapsed && <span className="truncate">{item.label}</span>}
            </button>
          );
        })}
      </nav>

      {/* Bottom Section */}
      <div className="px-2 py-3 border-t border-white/10 space-y-0.5">
        <button
          onClick={() => handleNavigate('/profile')}
          className={`
            w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-[13px] font-medium
            transition-all duration-150 group
            ${isActive('/profile')
              ? 'bg-sidebarActive text-white'
              : 'text-textSecondary hover:text-white hover:bg-sidebarActive/50'
            }
            ${collapsed ? 'justify-center' : ''}
          `}
        >
          <UserCircle className={`w-[18px] h-[18px] flex-shrink-0 ${isActive('/profile') ? 'text-white' : 'text-textSecondary group-hover:text-white'}`} />
          {!collapsed && (
            <div className="text-left">
              <div className="text-[13px] font-medium leading-tight">Admin Admin</div>
              <div className="text-[10px] text-textTertiary">Super Administrator</div>
            </div>
          )}
        </button>
        <button
          className={`
            w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-[13px] font-medium
            text-accentRed hover:bg-accentRed/10 transition-all duration-150
            ${collapsed ? 'justify-center' : ''}
          `}
        >
          <LogOut className="w-[18px] h-[18px] flex-shrink-0" />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile overlay */}
      {isMobile && mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile hamburger */}
      {isMobile && !mobileOpen && (
        <button
          onClick={() => setMobileOpen(true)}
          className="fixed top-3 left-3 z-50 p-2 rounded-md bg-sidebarDark text-white"
        >
          <Menu className="w-5 h-5" />
        </button>
      )}

      {/* Desktop sidebar */}
      {!isMobile && SidebarContent}

      {/* Mobile sidebar */}
      {isMobile && mobileOpen && (
        <div className="fixed inset-y-0 left-0 z-40">
          <div className="w-[200px] h-full">
            {SidebarContent}
          </div>
        </div>
      )}

      {/* Spacer for desktop layout */}
      {!isMobile && <div className={`${sidebarWidth} flex-shrink-0`} />}
    </>
  );
}
