import { Routes, Route } from 'react-router';
import { AppProvider } from '@/context/AppContext';
import Sidebar from '@/components/Sidebar';
import DashboardPage from '@/pages/DashboardPage';
import UniversityManagementPage from '@/pages/UniversityManagementPage';
import UniversityRequestsPage from '@/pages/UniversityRequestsPage';
import UsersManagementPage from '@/pages/UsersManagementPage';
import TutorRegistrationRequestsPage from '@/pages/TutorRegistrationRequestsPage';
import StudentRegistrationManagementPage from '@/pages/StudentRegistrationManagementPage';
import UniversityDetailsPage from '@/pages/UniversityDetailsPage';
import MyUniversitiesPage from '@/pages/MyUniversitiesPage';
import UniversityAnalyticsPage from '@/pages/UniversityAnalyticsPage';
import ReportsAndAnalyticsPage from '@/pages/ReportsAndAnalyticsPage';
import SessionsManagementPage from '@/pages/SessionsManagementPage';
import EarningsAndTransactionsPage from '@/pages/EarningsAndTransactionsPage';
import PayoutRequestsPage from '@/pages/PayoutRequestsPage';
import ContentAndAnnouncementsPage from '@/pages/ContentAndAnnouncementsPage';
import SystemSettingsPage from '@/pages/SystemSettingsPage';
import ActivityLogsPage from '@/pages/ActivityLogsPage';
import SupportAndHelpdeskPage from '@/pages/SupportAndHelpdeskPage';
import AdminProfilePage from '@/pages/AdminProfilePage';

export default function App() {
  return (
    <AppProvider>
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 p-5 overflow-y-auto">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/universities" element={<UniversityManagementPage />} />
            <Route path="/universities/requests" element={<UniversityRequestsPage />} />
            <Route path="/universities/:id" element={<UniversityDetailsPage />} />
            <Route path="/universities/my" element={<MyUniversitiesPage />} />
            <Route path="/universities/analytics" element={<UniversityAnalyticsPage />} />
            <Route path="/users" element={<UsersManagementPage />} />
            <Route path="/tutor-requests" element={<TutorRegistrationRequestsPage />} />
            <Route path="/student-requests" element={<StudentRegistrationManagementPage />} />
            <Route path="/sessions" element={<SessionsManagementPage />} />
            <Route path="/earnings" element={<EarningsAndTransactionsPage />} />
            <Route path="/payouts" element={<PayoutRequestsPage />} />
            <Route path="/content" element={<ContentAndAnnouncementsPage />} />
            <Route path="/reports" element={<ReportsAndAnalyticsPage />} />
            <Route path="/settings" element={<SystemSettingsPage />} />
            <Route path="/activity-logs" element={<ActivityLogsPage />} />
            <Route path="/support" element={<SupportAndHelpdeskPage />} />
            <Route path="/profile" element={<AdminProfilePage />} />
          </Routes>
        </main>
      </div>
    </AppProvider>
  );
}
