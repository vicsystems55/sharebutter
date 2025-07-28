export default [
  { heading: 'Main Navigation' },
  {
    title: 'Dashboard',
    icon: { icon: 'tabler-layout-dashboard' },
    to: { name: 'dashboard' },
  },
  {
    title: 'Opportunities',
    icon: { icon: 'tabler-briefcase' },
    children: [
      { title: 'Browse Jobs', to: { name: 'browse-jobs' } },
      { title: 'Saved Jobs', to: { name: 'saved-jobs' } },
      { title: 'Applied Jobs', to: { name: 'applied-jobs' } },
    ],
  },
  // {
  //   title: 'Gigs & Freelance',
  //   icon: { icon: 'tabler-handshake' },
  //   children: [
  //     { title: 'Browse Gigs', to: { name: 'browse-gigs' } },
  //     { title: 'My Proposals', to: { name: 'my-proposals' } },
  //     { title: 'My Gigs', to: { name: 'my-gigs' } },
  //   ],
  // },

  // { heading: 'Recruitment' },
  // {
  //   title: 'Post a Job',
  //   icon: { icon: 'tabler-pencil-plus' },
  //   to: { name: 'post-job' },
  // },
  // {
  //   title: 'My Job Listings',
  //   icon: { icon: 'tabler-clipboard-list' },
  //   to: { name: 'job-listings' },
  // },
  // {
  //   title: 'Applicants',
  //   icon: { icon: 'tabler-users-group' },
  //   to: { name: 'applicants' },
  // },

  // { heading: 'Talent Network' },
  // {
  //   title: 'Discover Talent',
  //   icon: { icon: 'tabler-search' },
  //   to: { name: 'discover-talent' },
  // },
  // {
  //   title: 'Saved Profiles',
  //   icon: { icon: 'tabler-star' },
  //   to: { name: 'saved-profiles' },
  // },

  { heading: 'Messages & Calendar' },
  {
    title: 'Messages',
    icon: { icon: 'tabler-message-circle' },
    to: { name: 'messages' },
  },
  {
    title: 'Interview Scheduler',
    icon: { icon: 'tabler-calendar-event' },
    to: { name: 'interview-scheduler' },
  },

  { heading: 'Profile & Resume' },
  {
    title: 'My Profile',
    icon: { icon: 'tabler-user-circle' },
    to: { name: 'my-profile' },
  },
  {
    title: 'Resume Builder',
    icon: { icon: 'tabler-file-text' },
    to: { name: 'resume-builder' },
  },
  {
    title: 'Portfolio',
    icon: { icon: 'tabler-photo' },
    to: { name: 'portfolio' },
  },

  { heading: 'Analytics & Reports' },
  {
    title: 'Job Insights',
    icon: { icon: 'tabler-chart-bar' },
    to: { name: 'job-insights' },
  },
  {
    title: 'Application Stats',
    icon: { icon: 'tabler-graph' },
    to: { name: 'application-stats' },
  },

  // { heading: 'Billing & Subscription' },
  // {
  //   title: 'Billing & Subscription',
  //   icon: { icon: 'tabler-credit-card' },
  //   children: [
  //     { title: 'Current Plan', to: { name: 'current-plan' } },
  //     { title: 'Upgrade / Downgrade', to: { name: 'upgrade-plan' } },
  //     { title: 'Invoice History', to: { name: 'invoice-history' } },
  //   ],
  // },

  { heading: 'Settings' },
  {
    title: 'Account Settings',
    icon: { icon: 'tabler-settings' },
    children: [
      { title: 'Profile Settings', to: { name: 'profile-settings' } },
      { title: 'Notification Settings', to: { name: 'notification-settings' } },
      { title: 'Security & Login', to: { name: 'security-login' } },
    ],
  },
]
