export interface University {
  id: string;
  name: string;
  initials: string;
  contactPerson: string;
  email: string;
  status: 'approved' | 'pending' | 'suspended' | 'rejected';
  students: number;
  tutors: number;
  sessions: number;
  earnings: number;
  joinedOn: string;
  domain: string;
  country: string;
  phone: string;
  address: string;
  logoColor: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'tutor' | 'student' | 'parent';
  status: 'active' | 'inactive';
  verification: 'verified' | 'unverified';
  joinedOn: string;
  avatar: string;
}

export interface Session {
  id: string;
  tutor: string;
  student: string;
  subject: string;
  dateTime: string;
  duration: string;
  status: 'completed' | 'ongoing' | 'cancelled';
  amount: number;
}

export interface PayoutRequest {
  id: string;
  tutor: string;
  amount: number;
  method: string;
  requestedOn: string;
  status: 'pending' | 'approved' | 'completed';
}

export interface Announcement {
  id: string;
  title: string;
  targetAudience: string;
  publishedOn: string;
  status: 'published' | 'draft';
  content: string;
}

export interface TutorRequest {
  id: string;
  tutor: string;
  university: string;
  subjects: string;
  qualifications: string;
  requestedOn: string;
  status: 'pending' | 'approved' | 'rejected';
}

export interface StudentRequest {
  id: string;
  student: string;
  university: string;
  course: string;
  yearLevel: string;
  requestedOn: string;
  status: 'pending' | 'approved' | 'rejected';
}

export interface UniversityRequest {
  id: string;
  university: string;
  contactPerson: string;
  email: string;
  country: string;
  requestedOn: string;
  status: 'pending' | 'approved' | 'rejected';
}

export interface SupportTicket {
  id: string;
  subject: string;
  user: string;
  priority: 'high' | 'medium' | 'low';
  category: string;
  status: 'open' | 'in-progress' | 'resolved' | 'closed';
  createdOn: string;
}

export interface ActivityLog {
  id: string;
  dateTime: string;
  admin: string;
  action: string;
  module: string;
  details: string;
  ipAddress: string;
}

export interface Transaction {
  id: string;
  date: string;
  transactionId: string;
  description: string;
  type: string;
  amount: number;
  status: string;
}

export interface PlatformSettings {
  platformName: string;
  platformEmail: string;
  timezone: string;
  dateFormat: string;
  language: string;
  currency: string;
  enableRegistration: boolean;
  emailVerification: boolean;
  allowTutorRegistration: boolean;
  commissionRate: number;
  minPayoutAmount: number;
}

export interface AdminProfile {
  name: string;
  email: string;
  role: string;
  phone: string;
}
