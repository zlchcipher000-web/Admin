import type {
  University, User, Session, PayoutRequest, Announcement,
  TutorRequest, StudentRequest, UniversityRequest, SupportTicket,
  ActivityLog, Transaction, PlatformSettings, AdminProfile
} from '@/types';

export const universities: University[] = [
  { id: 'u1', name: 'Mapua University', initials: 'MU', contactPerson: 'Juan Dela Cruz', email: 'juan.dela.cruz@mapua.edu.ph', status: 'approved', students: 2430, tutors: 845, sessions: 3245, earnings: 128450, joinedOn: 'May 30, 2026', domain: 'mapua.edu.ph', country: 'Philippines', phone: '+63 912 345 6789', address: '658 Muralla St, Intramuros, Manila', logoColor: '#ef4444' },
  { id: 'u2', name: 'University of the Philippines', initials: 'UP', contactPerson: 'Maria Santos', email: 'maria.santos@up.edu.ph', status: 'approved', students: 4520, tutors: 1230, sessions: 5120, earnings: 256800, joinedOn: 'May 28, 2026', domain: 'up.edu.ph', country: 'Philippines', phone: '+63 923 456 7890', address: 'Quezon City, Philippines', logoColor: '#7c3aed' },
  { id: 'u3', name: 'De La Salle University', initials: 'DLSU', contactPerson: 'Ana Reyes', email: 'ana.reyes@dlsu.edu.ph', status: 'approved', students: 2145, tutors: 956, sessions: 3245, earnings: 128450, joinedOn: 'May 28, 2026', domain: 'dlsu.edu.ph', country: 'Philippines', phone: '+63 912 345 6789', address: '2401 Taft Ave, Malate, Manila', logoColor: '#16a34a' },
  { id: 'u4', name: 'Ateneo de Manila University', initials: 'ADMU', contactPerson: 'Robert Garcia', email: 'robert.garcia@ateneo.edu.ph', status: 'approved', students: 1856, tutors: 642, sessions: 1245, earnings: 95420, joinedOn: 'May 27, 2026', domain: 'ateneo.edu.ph', country: 'Philippines', phone: '+63 934 567 8901', address: 'Katipunan Ave, Quezon City', logoColor: '#2563eb' },
  { id: 'u5', name: 'University of Santo Tomas', initials: 'UST', contactPerson: 'Fr. Patrick Rivera', email: 'patrick.rivera@ust.edu.ph', status: 'approved', students: 3256, tutors: 1023, sessions: 4456, earnings: 178520, joinedOn: 'May 25, 2026', domain: 'ust.edu.ph', country: 'Philippines', phone: '+63 945 678 9012', address: 'Espana Blvd, Sampaloc, Manila', logoColor: '#eab308' },
  { id: 'u6', name: 'Far Eastern University', initials: 'FEU', contactPerson: 'Lisa Salvador', email: 'lisa.salvador@feu.edu.ph', status: 'pending', students: 1024, tutors: 412, sessions: 654, earnings: 42350, joinedOn: 'May 22, 2026', domain: 'feu.edu.ph', country: 'Philippines', phone: '+63 956 789 0123', address: 'Nicanor Reyes St, Sampaloc, Manila', logoColor: '#059669' },
  { id: 'u7', name: 'Adamson University', initials: 'AdU', contactPerson: 'Mark Lim', email: 'mark.lim@adamson.edu.ph', status: 'approved', students: 812, tutors: 321, sessions: 445, earnings: 32150, joinedOn: 'May 20, 2026', domain: 'adamson.edu.ph', country: 'Philippines', phone: '+63 967 890 1234', address: 'San Marcelino St, Ermita, Manila', logoColor: '#0284c7' },
  { id: 'u8', name: 'Polytechnic University', initials: 'PUP', contactPerson: 'Carla Domingo', email: 'carla.domingo@pup.edu.ph', status: 'suspended', students: 0, tutors: 0, sessions: 0, earnings: 0, joinedOn: 'May 18, 2026', domain: 'pup.edu.ph', country: 'Philippines', phone: '+63 978 901 2345', address: 'Sta. Mesa, Manila', logoColor: '#dc2626' },
];

export const users: User[] = [
  { id: 'usr-1', name: 'Maria Santos', email: 'maria.santos@up.edu.ph', role: 'tutor', status: 'active', verification: 'verified', joinedOn: 'May 28, 2026', avatar: '' },
  { id: 'usr-2', name: 'John Dela Cruz', email: 'john.dela.cruz@mapua.edu.ph', role: 'student', status: 'active', verification: 'verified', joinedOn: 'May 28, 2026', avatar: '' },
  { id: 'usr-3', name: 'Mark Anthony Tuzon', email: 'mark.tuzon@dlsu.edu.ph', role: 'tutor', status: 'active', verification: 'verified', joinedOn: 'May 22, 2026', avatar: '' },
  { id: 'usr-4', name: 'Ayssa Domingo', email: 'ayssa.domingo@gmail.com', role: 'student', status: 'active', verification: 'verified', joinedOn: 'May 20, 2026', avatar: '' },
  { id: 'usr-5', name: 'Lisa Salvador', email: 'lisa.salvador@feu.edu.ph', role: 'tutor', status: 'active', verification: 'verified', joinedOn: 'May 19, 2026', avatar: '' },
  { id: 'usr-6', name: 'Pedro Reyes', email: 'pedro.reyes@gmail.com', role: 'student', status: 'active', verification: 'verified', joinedOn: 'May 18, 2026', avatar: '' },
  { id: 'usr-7', name: 'Rico Dela Cruz', email: 'rico.dela.cruz@up.edu.ph', role: 'student', status: 'active', verification: 'verified', joinedOn: 'May 16, 2026', avatar: '' },
  { id: 'usr-8', name: 'Juan Cruz', email: 'juan.cruz@gmail.com', role: 'student', status: 'active', verification: 'verified', joinedOn: 'May 15, 2026', avatar: '' },
];

export const sessions: Session[] = [
  { id: 'SES-2026-5567', tutor: 'Maria Santos', student: 'John Dela Cruz', subject: 'Mathematics', dateTime: 'Jun 2, 2026 2:00 PM', duration: '1.5 hrs', status: 'ongoing', amount: 250 },
  { id: 'SES-2026-5566', tutor: 'Mark Tuzon', student: 'Ayssa Domingo', subject: 'Physics', dateTime: 'Jun 2, 2026 5:00 PM', duration: '1.0 hr', status: 'ongoing', amount: 500 },
  { id: 'SES-2026-5565', tutor: 'Lisa Salvador', student: 'Pedro Reyes', subject: 'English', dateTime: 'Jun 2, 2026 10:00 AM', duration: '1.5 hrs', status: 'completed', amount: 750 },
  { id: 'SES-2026-5564', tutor: 'Juan Cruz', student: 'Mark Lim', subject: 'Programming', dateTime: 'Jun 1, 2026 4:00 PM', duration: '2.0 hrs', status: 'completed', amount: 1000 },
  { id: 'SES-2026-5563', tutor: 'Ayssa Domingo', student: 'Rico Garcia', subject: 'Chemistry', dateTime: 'Jun 1, 2026 1:00 PM', duration: '1.0 hr', status: 'cancelled', amount: 0 },
  { id: 'SES-2026-5562', tutor: 'Rico Dela Cruz', student: 'Sophia Dela Cruz', subject: 'Mathematics', dateTime: 'May 31, 2026 3:00 PM', duration: '1.5 hrs', status: 'completed', amount: 750 },
];

export const payoutRequests: PayoutRequest[] = [
  { id: 'PYOUT-2026-1256', tutor: 'Maria Santos', amount: 2500, method: 'GCash (0912 345 6789)', requestedOn: 'Jun 2, 2026', status: 'pending' },
  { id: 'PYOUT-2026-1255', tutor: 'Mark Anthony Tuzon', amount: 1500, method: 'Bank Transfer (BDO)', requestedOn: 'Jun 1, 2026', status: 'pending' },
  { id: 'PYOUT-2026-1254', tutor: 'Lisa Salvador', amount: 2000, method: 'GCash (0922 111 2222)', requestedOn: 'May 31, 2026', status: 'pending' },
  { id: 'PYOUT-2026-1253', tutor: 'Juan Cruz', amount: 1800, method: 'Bank Transfer (BPI)', requestedOn: 'May 30, 2026', status: 'approved' },
  { id: 'PYOUT-2026-1252', tutor: 'Ayssa Domingo', amount: 1200, method: 'GCash (0933 444 5555)', requestedOn: 'May 29, 2026', status: 'approved' },
  { id: 'PYOUT-2026-1251', tutor: 'Rico Dela Cruz', amount: 3000, method: 'Bank Transfer (Metrobank)', requestedOn: 'May 28, 2026', status: 'completed' },
];

export const announcements: Announcement[] = [
  { id: 'a1', title: 'System Maintenance on June 5', targetAudience: 'All Users', publishedOn: 'May 28, 2026', status: 'published', content: 'We will be performing scheduled maintenance on June 5, 2026 from 10:00 AM to 2:00 AM. Some features may be unavailable during this time.' },
  { id: 'a2', title: 'New Feature: Session Recording', targetAudience: 'Tutors', publishedOn: 'May 25, 2026', status: 'published', content: 'Introducing session recording functionality for all tutoring sessions.' },
  { id: 'a3', title: 'Platform Update v2.4.0', targetAudience: 'All Users', publishedOn: 'May 22, 2026', status: 'published', content: 'New platform update with improved performance and bug fixes.' },
  { id: 'a4', title: 'Payment Method Update', targetAudience: 'Tutors', publishedOn: 'May 18, 2026', status: 'draft', content: 'Updated payment methods now include additional bank options.' },
  { id: 'a5', title: 'Updated Community Guidelines', targetAudience: 'All Users', publishedOn: 'May 15, 2026', status: 'published', content: 'Please review our updated community guidelines.' },
];

export const tutorRequests: TutorRequest[] = [
  { id: 'tr1', tutor: 'John Paul Rivera', university: 'De La Salle University', subjects: 'Mathematics, Physics', qualifications: 'M.Sc. in Physics', requestedOn: 'May 28, 2026', status: 'pending' },
  { id: 'tr2', tutor: 'Bea Garcia', university: 'University of Santo Tomas', subjects: 'Chemistry', qualifications: 'M.Sc. in Chemistry', requestedOn: 'May 28, 2026', status: 'pending' },
  { id: 'tr3', tutor: 'Mark Anthony Tuzon', university: 'Mapua University', subjects: 'Programming, CS', qualifications: 'B.Sc. in Computer Science', requestedOn: 'May 28, 2026', status: 'pending' },
  { id: 'tr4', tutor: 'Ayssa Domingo', university: 'Ateneo de Manila University', subjects: 'English, Literature', qualifications: 'M.A. in English', requestedOn: 'May 27, 2026', status: 'pending' },
  { id: 'tr5', tutor: 'Michael Lim', university: 'University of the Philippines', subjects: 'Economics', qualifications: 'M.A. in Economics', requestedOn: 'May 27, 2026', status: 'pending' },
];

export const studentRequests: StudentRequest[] = [
  { id: 'sr1', student: 'Sophia Dela Cruz', university: 'De La Salle University', course: 'BS Computer Science', yearLevel: '2nd Year', requestedOn: 'May 30, 2026', status: 'pending' },
  { id: 'sr2', student: 'Juan Dela Cruz', university: 'Mapua University', course: 'BS Information Tech', yearLevel: '1st Year', requestedOn: 'May 30, 2026', status: 'pending' },
  { id: 'sr3', student: 'Maria Santos', university: 'University of the Philippines', course: 'BS Mathematics', yearLevel: '3rd Year', requestedOn: 'May 29, 2026', status: 'pending' },
  { id: 'sr4', student: 'Liam Garcia', university: 'Ateneo de Manila University', course: 'BS Physics', yearLevel: '2nd Year', requestedOn: 'May 29, 2026', status: 'pending' },
  { id: 'sr5', student: 'Elle Reyes', university: 'University of Santo Tomas', course: 'BS Accountancy', yearLevel: '1st Year', requestedOn: 'May 28, 2026', status: 'pending' },
];

export const universityRequests: UniversityRequest[] = [
  { id: 'ur1', university: 'Mapua University', contactPerson: 'Juan Dela Cruz', email: 'juan.dela.cruz@mapua.edu.ph', country: 'Philippines', requestedOn: 'May 30, 2026', status: 'pending' },
  { id: 'ur2', university: 'University of the Philippines', contactPerson: 'Maria Santos', email: 'maria.santos@up.edu.ph', country: 'Philippines', requestedOn: 'May 28, 2026', status: 'pending' },
  { id: 'ur3', university: 'University of San Carlos', contactPerson: 'Christian Tan', email: 'christian.tan@usc.edu.ph', country: 'Philippines', requestedOn: 'May 28, 2026', status: 'pending' },
  { id: 'ur4', university: 'Mindanao State University', contactPerson: 'Ayssa Gomez', email: 'ayssa.gomez@msu.edu.ph', country: 'Philippines', requestedOn: 'May 28, 2026', status: 'pending' },
  { id: 'ur5', university: 'Silliman University', contactPerson: 'Daniel Lee', email: 'daniel.lee@silliman.edu.ph', country: 'Philippines', requestedOn: 'May 27, 2026', status: 'pending' },
];

export const supportTickets: SupportTicket[] = [
  { id: 'TKT-2026-112', subject: 'Payment not received', user: 'Maria Santos', priority: 'high', category: 'Payments', status: 'open', createdOn: 'Jun 2, 2026' },
  { id: 'TKT-2026-111', subject: 'Session recording not working', user: 'John Dela Cruz', priority: 'medium', category: 'Technical', status: 'in-progress', createdOn: 'Jun 1, 2026' },
  { id: 'TKT-2026-110', subject: 'Account verification issue', user: 'Mark Tuzon', priority: 'low', category: 'Account', status: 'resolved', createdOn: 'May 30, 2026' },
  { id: 'TKT-2026-109', subject: 'Cannot join session', user: 'Ayssa Domingo', priority: 'high', category: 'Technical', status: 'open', createdOn: 'May 29, 2026' },
  { id: 'TKT-2026-108', subject: 'Tutor availability update', user: 'Lisa Salvador', priority: 'low', category: 'General', status: 'closed', createdOn: 'May 28, 2026' },
];

export const activityLogs: ActivityLog[] = [
  { id: 'log1', dateTime: 'Jun 2, 2026 10:30 AM', admin: 'Super Admin', action: 'Approved payout request', module: 'Payouts', details: 'PYOUT-2026-1256', ipAddress: '192.168.1.10' },
  { id: 'log2', dateTime: 'Jun 2, 2026 10:15 AM', admin: 'Super Admin', action: 'Updated user status', module: 'Users', details: 'User ID: USR-207910856', ipAddress: '192.168.1.10' },
  { id: 'log3', dateTime: 'Jun 2, 2026 09:45 AM', admin: 'Admin Team', action: 'Created announcement', module: 'Announcements', details: 'System Maintenance on June 5', ipAddress: '192.168.1.12' },
  { id: 'log4', dateTime: 'Jun 1, 2026 04:30 PM', admin: 'Super Admin', action: 'Edited system settings', module: 'Settings', details: 'General Settings', ipAddress: '192.168.1.10' },
  { id: 'log5', dateTime: 'Jun 1, 2026 03:10 PM', admin: 'Admin Team', action: 'Cancelled session', module: 'Sessions', details: 'SES-2026-5563', ipAddress: '192.168.1.12' },
  { id: 'log6', dateTime: 'May 31, 2026 02:10 PM', admin: 'Support Admin', action: 'Resolved support ticket', module: 'Support', details: 'TKT-2026-110', ipAddress: '192.168.1.15' },
  { id: 'log7', dateTime: 'May 30, 2026 06:50 PM', admin: 'Super Admin', action: 'Exported earnings report', module: 'Reports', details: 'Earnings Report (May)', ipAddress: '192.168.1.10' },
];

export const transactions: Transaction[] = [
  { id: 't1', date: 'Jun 2, 2026', transactionId: 'TRX-2026-7890', description: 'Session Payment (John Dela Cruz)', type: 'Earning', amount: 250, status: 'completed' },
  { id: 't2', date: 'Jun 2, 2026', transactionId: 'TRX-2026-7889', description: 'Platform Service Fee', type: 'Revenue', amount: 50, status: 'completed' },
  { id: 't3', date: 'Jun 1, 2026', transactionId: 'TRX-2026-7888', description: 'Payout to Maria Santos', type: 'Payout', amount: 2500, status: 'completed' },
  { id: 't4', date: 'Jun 1, 2026', transactionId: 'TRX-2026-7887', description: 'Session Payment (Ayssa Domingo)', type: 'Earning', amount: 500, status: 'completed' },
];

export const settings: PlatformSettings = {
  platformName: 'EduFund Tutoring Platform',
  platformEmail: 'support@edufund.com',
  timezone: 'GMT+08:00 Asia/Manila',
  dateFormat: 'June 2, 2026 (Month D, YYYY)',
  language: 'English',
  currency: 'PHP - Philippine Peso (P)',
  enableRegistration: true,
  emailVerification: true,
  allowTutorRegistration: true,
  commissionRate: 15,
  minPayoutAmount: 500,
};

export const adminProfile: AdminProfile = {
  name: 'Admin Admin',
  email: 'admin@edufund.com',
  role: 'Super Administrator',
  phone: '+63 999 888 7777',
};

export const monthlyRevenue = [
  { month: 'Jan', revenue: 380000, payouts: 280000 },
  { month: 'Feb', revenue: 420000, payouts: 310000 },
  { month: 'Mar', revenue: 480000, payouts: 350000 },
  { month: 'Apr', revenue: 520000, payouts: 390000 },
  { month: 'May', revenue: 580000, payouts: 430000 },
  { month: 'Jun', revenue: 642800, payouts: 512300 },
];

export const weeklyEarnings = [
  { date: 'May 2', revenue: 92000, payouts: 68000 },
  { date: 'May 9', revenue: 98000, payouts: 72000 },
  { date: 'May 16', revenue: 105000, payouts: 78000 },
  { date: 'May 23', revenue: 112000, payouts: 85000 },
  { date: 'May 30', revenue: 125000, payouts: 98000 },
  { date: 'Jun 2', revenue: 110800, payouts: 112300 },
];

export const topSubjects = [
  { subject: 'Mathematics', sessions: 842, percentage: 28.5 },
  { subject: 'Physics', sessions: 620, percentage: 21.0 },
  { subject: 'English', sessions: 548, percentage: 18.5 },
  { subject: 'Programming', sessions: 480, percentage: 16.2 },
  { subject: 'Chemistry', sessions: 245, percentage: 8.3 },
];

export const deviceUsage = [
  { device: 'Desktop', percentage: 54.2 },
  { device: 'Mobile', percentage: 36.7 },
  { device: 'Tablet', percentage: 7.1 },
];

export const topCities = [
  { city: 'Manila', sessions: 1245 },
  { city: 'Quezon City', sessions: 1102 },
  { city: 'Cebu City', sessions: 892 },
  { city: 'Davao City', sessions: 645 },
];

export const platformActivity = [
  { label: 'New Universities', value: 5 },
  { label: 'New Tutors', value: 1245 },
  { label: 'New Students', value: 2358 },
  { label: 'New Sessions', value: 1856 },
];

export const recentRegistrations = [
  { name: 'Maria Santos', role: 'Tutor', time: '2 min ago', university: 'UP', color: '#7c3aed' },
  { name: 'John Dela Cruz', role: 'Student', time: '15 min ago', university: 'Mapua', color: '#ef4444' },
  { name: 'Mark Anthony Tuzon', role: 'Tutor', time: '1 hr ago', university: 'DLSU', color: '#16a34a' },
  { name: 'Ayssa Domingo', role: 'Student', time: '2 hrs ago', university: 'ADMU', color: '#2563eb' },
];

export const universityAdmins = [
  { name: 'Ana Reyes', email: 'ana.reyes@dlsu.edu.ph', role: 'Super Admin', addedOn: 'May 28, 2026', status: 'active' },
  { name: 'Robert Garcia', email: 'robert.garcia@dlsu.edu.ph', role: 'Admin', addedOn: 'May 29, 2026', status: 'active' },
];

export const analyticsSubjects = [
  { subject: 'Mathematics', sessions: 325 },
  { subject: 'Programming', sessions: 265 },
  { subject: 'Physics', sessions: 198 },
  { subject: 'Chemistry', sessions: 156 },
  { subject: 'English', sessions: 126 },
];

export const donutEarnings = [
  { name: 'Tutor Payouts', value: 512300, color: '#6366f1' },
  { name: 'Platform Revenue', value: 130500, color: '#10b981' },
];

export const donutUsers = [
  { name: 'Students', value: 17391, color: '#3b82f6' },
  { name: 'Tutors', value: 7189, color: '#6366f1' },
];

export const donutEngagement = [
  { name: 'Active', value: 82, color: '#10b981' },
  { name: 'Inactive', value: 18, color: '#e2e8f0' },
];

export const reportTypes = [
  { id: 'r1', name: 'Platform Overview', description: 'Summary of platform performance and key metrics.' },
  { id: 'r2', name: 'User Growth Report', description: 'Detailed user growth and engagement analysis.' },
  { id: 'r3', name: 'Revenue Report', description: 'Revenue and earnings breakdown.' },
  { id: 'r4', name: 'Top Universities Report', description: 'Performance of top universities on the platform.' },
  { id: 'r5', name: 'Session Summary Report', description: 'Summary of tutoring sessions on the platform.' },
  { id: 'r6', name: 'Tutor Performance Report', description: 'Performance analysis of tutors.' },
];

export const recentReports = [
  { name: 'Platform Overview', generatedOn: 'Jun 2, 2026 10:30 AM', status: 'completed' },
  { name: 'Revenue Report', generatedOn: 'Jun 1, 2026 04:15 PM', status: 'completed' },
  { name: 'User Growth Report', generatedOn: 'May 30, 2026 09:00 AM', status: 'completed' },
];
