import settingsIcon from '../assets/settings-ic.svg';
import depositIcon from '../assets/deposit-ic.svg';
import companyIcon from '../assets/company-ic.svg';
import chatIcon from '../assets/chat-ic.svg';
import offersIcon from '../assets/offers-ic.svg';
import notificationIcon from '../assets/notification-ic.svg';
import historyIcon from '../assets/history-ic.svg';

export const DashboardLeftNavData = [
  {
    icon: depositIcon,
    title: 'Deposit Plastic',
    id: 'dashboard-deposit',
    userlink: '',
    'company-link': '',
  },
  {
    icon: companyIcon,
    title: 'Companies',
    id: 'dashboard-companies',
    userlink: '',
    'company-link': '',
  },
  {
    icon: notificationIcon,
    title: 'Notifications',
    id: 'dashboard-notifications',
    userlink: '',
    'company-link': '',
  },
  {
    icon: settingsIcon,
    title: 'Settings',
    id: 'dashboard-settings',
    userlink: '/user-dashboard/settings',
    'company-link': '',
  },
  {
    icon: historyIcon,
    title: 'Hstory',
    id: 'dashboard-history',
    userlink: '/user-dashboard/history',
    'company-link': '',
  },
  {
    icon: offersIcon,
    title: 'Offers and Contest',
    id: 'dashboard-offers',
    userlink: '/user-dashboard/offers-contest',
    'company-link': '',
  },
  {
    icon: chatIcon,
    title: 'Chat',
    id: 'dashboard-chat',
    userlink: '',
    'company-link': '',
  },
];
