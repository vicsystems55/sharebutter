export default [
  { heading: 'Main Navigation' },
  {
    title: 'Dashboard',
    icon: { icon: 'tabler-layout-dashboard' },
    to: { name: 'dashboard' },
  },
  {
    title: 'Calendar',
    icon: { icon: 'tabler-calendar-event' },
    to: { name: 'calendar' },
  },
  {
    title: 'Create Post',
    icon: { icon: 'tabler-edit' },
    to: { name: 'create-post' },
  },
  {
    title: 'Posts Library',
    icon: { icon: 'tabler-archive' },
    to: { name: 'posts-library' },
  },
  {
    title: 'Brand Kit',
    icon: { icon: 'tabler-palette' },
    to: { name: 'brand-kit' },
  },

  { heading: 'Social Accounts' },
  {
    title: 'Manage Accounts',
    icon: { icon: 'tabler-users' },
    to: { name: 'manage-accounts' },
  },
  {
    title: 'Authorization Status',
    icon: { icon: 'tabler-shield-check' },
    to: { name: 'authorization-status' },
  },

  { heading: 'Templates' },
  {
    title: 'Templates',
    icon: { icon: 'tabler-layout-grid' },
    children: [
      { title: 'Browse Templates', to: { name: 'browse-templates' } },
      { title: 'My Templates', to: { name: 'my-templates' } },
    ],
  },

  { heading: 'AI Tools' },
  {
    title: 'AI Tools',
    icon: { icon: 'tabler-robot' },
    children: [
      { title: 'Caption Generator', to: { name: 'caption-generator' } },
      { title: 'Post Ideas', to: { name: 'post-ideas' } },
      { title: 'Image Enhancer / AI Image', to: { name: 'image-enhancer' } },
    ],
  },

  { heading: 'Analytics' },
  {
    title: 'Analytics',
    icon: { icon: 'tabler-chart-bar' },
    children: [
      { title: 'Performance Overview', to: { name: 'performance-overview' } },
      { title: 'Top Posts', to: { name: 'top-posts' } },
      { title: 'Per Platform Reports', to: { name: 'platform-reports' } },
    ],
  },

  { heading: 'Billing & Plans' },
  {
    title: 'Billing & Plans',
    icon: { icon: 'tabler-credit-card' },
    children: [
      { title: 'Current Plan', to: { name: 'current-plan' } },
      { title: 'Upgrade/Downgrade', to: { name: 'upgrade-downgrade' } },
      { title: 'Invoices / History', to: { name: 'invoices-history' } },
    ],
  },

  { heading: 'Settings' },
  {
    title: 'Settings',
    icon: { icon: 'tabler-settings' },
    children: [
      { title: 'Profile Settings', to: { name: 'profile-settings' } },
      { title: 'Notifications', to: { name: 'notifications' } },
      { title: 'Password / Login Info', to: { name: 'password-login-info' } },
    ],
  },
]
