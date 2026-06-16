import { createContext, useReducer, useContext, useCallback, type ReactNode } from 'react';
import { universities, users, sessions, payoutRequests, announcements, tutorRequests, studentRequests, universityRequests, supportTickets, activityLogs, settings, adminProfile } from '@/data/mockData';
import type { PlatformSettings } from '@/types';

interface AppState {
  activeMenuItem: string;
  sidebarCollapsed: boolean;
  universities: typeof universities;
  users: typeof users;
  sessions: typeof sessions;
  payoutRequests: typeof payoutRequests;
  announcements: typeof announcements;
  tutorRequests: typeof tutorRequests;
  studentRequests: typeof studentRequests;
  universityRequests: typeof universityRequests;
  supportTickets: typeof supportTickets;
  activityLogs: typeof activityLogs;
  settings: PlatformSettings;
  adminProfile: typeof adminProfile;
}

type Action =
  | { type: 'SET_ACTIVE_MENU'; payload: string }
  | { type: 'TOGGLE_SIDEBAR' }
  | { type: 'UPDATE_SETTINGS'; payload: PlatformSettings }
  | { type: 'ADD_ANNOUNCEMENT'; payload: typeof announcements[0] }
  | { type: 'UPDATE_STATUS'; payload: { entity: string; id: string; status: string } };

const initialState: AppState = {
  activeMenuItem: '/',
  sidebarCollapsed: false,
  universities,
  users,
  sessions,
  payoutRequests,
  announcements,
  tutorRequests,
  studentRequests,
  universityRequests,
  supportTickets,
  activityLogs,
  settings,
  adminProfile,
};

function appReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'SET_ACTIVE_MENU':
      return { ...state, activeMenuItem: action.payload };
    case 'TOGGLE_SIDEBAR':
      return { ...state, sidebarCollapsed: !state.sidebarCollapsed };
    case 'UPDATE_SETTINGS':
      return { ...state, settings: action.payload };
    case 'ADD_ANNOUNCEMENT':
      return { ...state, announcements: [action.payload, ...state.announcements] };
    case 'UPDATE_STATUS':
      return { ...state };
    default:
      return state;
  }
}

interface AppContextType {
  state: AppState;
  setActiveMenu: (path: string) => void;
  toggleSidebar: () => void;
  updateSettings: (settings: PlatformSettings) => void;
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const setActiveMenu = useCallback((path: string) => {
    dispatch({ type: 'SET_ACTIVE_MENU', payload: path });
  }, []);

  const toggleSidebar = useCallback(() => {
    dispatch({ type: 'TOGGLE_SIDEBAR' });
  }, []);

  const updateSettings = useCallback((settings: PlatformSettings) => {
    dispatch({ type: 'UPDATE_SETTINGS', payload: settings });
  }, []);

  return (
    <AppContext.Provider value={{ state, setActiveMenu, toggleSidebar, updateSettings }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}

export type { AppState };
