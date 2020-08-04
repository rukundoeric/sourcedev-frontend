import Dashboard from '@material-ui/icons/Dashboard';
import Person from '@material-ui/icons/Person';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import BubbleChart from '@material-ui/icons/BubbleChart';
import LocationOn from '@material-ui/icons/LocationOn';
import Notifications from '@material-ui/icons/Notifications';
// import Unarchive from '@material-ui/icons/Unarchive';
// import Language from '@material-ui/icons/Language';
// core components/views for Admin layout

import DashboardPage from './components/views/AdminDashbord';
// import UserProfile from 'views/UserProfile/UserProfile.js';
// import TableList from 'views/TableList/TableList.js';
// import Typography from 'views/Typography/Typography.js';
// import Icons from 'views/Icons/Icons.js';
// import Maps from 'views/Maps/Maps.js';
// import NotificationsPage from 'views/Notifications/Notifications.js';
// import UpgradeToPro from 'views/UpgradeToPro/UpgradeToPro.js';
// core components/views for RTL layout

const dashboardRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: Dashboard,
    component: DashboardPage,
    layout: '/admin',
  },
  {
    path: '/user',
    name: 'User Profile',
    icon: Person,
    component: DashboardPage,
    layout: '/admin',
  },
  {
    path: '/table',
    name: 'Table List',
    icon: 'content_paste',
    component: DashboardPage,
    layout: '/admin',
  },
  {
    path: '/typography',
    name: 'Typography',
    icon: LibraryBooks,
    component: DashboardPage,
    layout: '/admin',
  },
  {
    path: '/icons',
    name: 'Icons',
    icon: BubbleChart,
    component: DashboardPage,
    layout: '/admin',
  },
  {
    path: '/maps',
    name: 'Maps',
    icon: LocationOn,
    component: DashboardPage,
    layout: '/admin',
  },
  {
    path: '/notifications',
    name: 'Notifications',
    icon: Notifications,
    component: DashboardPage,
    layout: '/admin',
  },
];

export default dashboardRoutes;
