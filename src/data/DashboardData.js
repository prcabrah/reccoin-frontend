import settingsIcon from '../assets/settings-ic.svg'
import depositIcon from '../assets/deposit-ic.svg'
import companyIcon from '../assets/company-ic.svg'
import chatIcon from '../assets/chat-ic.svg'
import offersIcon from '../assets/offers-ic.svg'
import notificationIcon from '../assets/notification-ic.svg'
import historyIcon from '../assets/history-ic.svg'
import dashboardIcon from '../assets/dashboard.svg'

export const UserDashboardNavData = [
    {
        'icon': dashboardIcon,
        'title': "Dashboard",
        'id': "dashboard-deposit",
        'link': '/user-dashboard'

    },
    {
        'icon': companyIcon,
        'title': "Companies",
        'id': 'dashboard-companies',
        'link': ''
    },
    {
        'icon': notificationIcon,
        'title': "Notifications",
        'id': 'dashboard-notifications',
        'link': ''
        
    },
    {
        'icon': settingsIcon,
        'title': "Settings",
        'id': 'dashboard-settings',
        'link': '/user-dashboard/settings',
    },
    {
        'icon': historyIcon,
        'title': "Hstory",
        'id': 'dashboard-history',
        'userlink': '/user-dashboard/history',
        
    },
    {
        'icon': offersIcon,
        'title': "Offers and Contest",
        'id': 'dashboard-offers',
        'link': '',
    },
    {
        'icon': chatIcon,
        'title': "Chat",
        'id': 'dashboard-chat',
        'link': '',
    }

]

export const CompanyDashboardNavData = [
    {
        'icon': dashboardIcon,
        'title': "Dashboard",
        'id': "company-ashboard",
        'link': '/company-dashboard'
    },
    {
        'icon': companyIcon,
        'title': "Transactions",
        'id': 'dashboard-transactions',
        'link': ''
    },
    {
        'icon': notificationIcon,
        'title': "Notifications",
        'id': 'dashboard-notifications',
        'userlink': '',
        'link': ''
        
    },
    {
        'icon': settingsIcon,
        'title': "Settings",
        'id': 'dashboard-settings',
        'link': '/company-dashboard/settings',
    },
    {
        'icon': historyIcon,
        'title': "Hstory",
        'id': 'dashboard-history',
        'link': '/company-dashboard/history',
        
    },
    {
        'icon': offersIcon,
        'title': "Offers and Contest",
        'id': 'dashboard-offers',
        'link': ''
    },
    {
        'icon': chatIcon,
        'title': "Chat",
        'id': 'dashboard-chat',
        'link': ''
    }

]


