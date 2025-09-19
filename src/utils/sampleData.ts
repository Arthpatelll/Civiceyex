import { Issue, User, Analytics } from '../types';

export const sampleIssues: Issue[] = [
  {
    id: '1',
    title: 'Large Pothole on Main Street',
    description: 'Dangerous pothole near the intersection of Main St and 5th Ave. Vehicle damage possible.',
    category: 'potholes',
    status: 'in-progress',
    priority: 'high',
    location: {
      lat: 21.1702,
      lng: 72.8311,
      address: '123 Main Street, Surat, Gujarat 395001'
    },
    photos: ['https://images.pexels.com/photos/7876687/pexels-photo-7876687.jpeg?auto=compress&cs=tinysrgb&w=800'],
    reportedBy: 'user-1',
    reportedAt: new Date('2025-01-01T10:00:00Z'),
    updatedAt: new Date('2025-01-02T14:30:00Z'),
    assignedTo: 'staff-1',
    upvotes: 15,
    isAnonymous: false,
    department: 'Road Maintenance'
  },
  {
    id: '2',
    title: 'Overflowing Garbage Bins',
    description: 'Multiple garbage bins overflowing in Central Park area. Attracting pests.',
    category: 'garbage',
    status: 'assigned',
    priority: 'medium',
    location: {
      lat: 21.1800,
      lng: 72.8400,
      address: 'Central Park, Surat, Gujarat 395007'
    },
    photos: ['https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=800'],
    reportedBy: 'user-2',
    reportedAt: new Date('2025-01-01T15:30:00Z'),
    updatedAt: new Date('2025-01-02T09:15:00Z'),
    assignedTo: 'staff-2',
    upvotes: 8,
    isAnonymous: true,
    department: 'Sanitation'
  },
  {
    id: '3',
    title: 'Street Light Not Working',
    description: 'Street light has been out for 3 days. Safety concern for pedestrians at night.',
    category: 'streetlights',
    status: 'resolved',
    priority: 'medium',
    location: {
      lat: 21.1600,
      lng: 72.8200,
      address: '456 Broadway, Surat, Gujarat 395003'
    },
    photos: ['https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800'],
    reportedBy: 'user-3',
    reportedAt: new Date('2025-01-01T20:00:00Z'),
    updatedAt: new Date('2025-01-03T11:00:00Z'),
    assignedTo: 'staff-3',
    upvotes: 12,
    isAnonymous: false,
    department: 'Electrical'
  },
  {
    id: '4',
    title: 'Water Main Break',
    description: 'Large water leak causing flooding on residential street. Urgent repair needed.',
    category: 'water-leaks',
    status: 'acknowledged',
    priority: 'urgent',
    location: {
      lat: 21.1900,
      lng: 72.8500,
      address: '789 Park Avenue, Surat, Gujarat 395010'
    },
    photos: ['https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=800'],
    reportedBy: 'user-4',
    reportedAt: new Date('2025-01-02T08:15:00Z'),
    updatedAt: new Date('2025-01-02T08:30:00Z'),
    upvotes: 23,
    isAnonymous: false,
    department: 'Water Department'
  }
];

export const sampleUser: User = {
  id: 'user-1',
  name: 'John Smith',
  email: 'john.smith@email.com',
  phone: '+1-555-0123',
  role: 'citizen',
  preferredLanguage: 'en',
  notifications: {
    email: true,
    sms: true,
    push: true
  }
};

export const sampleAnalytics: Analytics = {
  totalIssues: 1247,
  resolvedIssues: 892,
  averageResponseTime: 18.5,
  topCategories: [
    { category: 'potholes', count: 324 },
    { category: 'garbage', count: 298 },
    { category: 'streetlights', count: 187 },
    { category: 'water-leaks', count: 156 },
    { category: 'traffic', count: 134 }
  ],
  departmentPerformance: [
    { department: 'Electrical', score: 4.2, responseTime: 12.3 },
    { department: 'Water Department', score: 3.8, responseTime: 24.1 },
    { department: 'Road Maintenance', score: 3.5, responseTime: 32.7 },
    { department: 'Sanitation', score: 4.1, responseTime: 16.8 },
    { department: 'Traffic Management', score: 3.9, responseTime: 28.4 }
  ],
  trendData: [
    { date: '2024-12-01', issues: 45, resolved: 32 },
    { date: '2024-12-08', issues: 52, resolved: 38 },
    { date: '2024-12-15', issues: 48, resolved: 41 },
    { date: '2024-12-22', issues: 38, resolved: 35 },
    { date: '2024-12-29', issues: 41, resolved: 29 }
  ]
};