import { DASHBOARD_PATH } from '@/routes/path';

const navConfig = [
  {
    subheader: 'management',
    items: [
      {
        title: 'user',
        icon: 'ion:person',
        path: DASHBOARD_PATH.user.root,
        children: [
          {
            title: 'profile',
            path: DASHBOARD_PATH.user.profile,
          },
          {
            title: 'create',
            path: DASHBOARD_PATH.user.create,
          },
          {
            title: 'list',
            path: DASHBOARD_PATH.user.list,
          },
          {
            title: 'settings',
            path: DASHBOARD_PATH.user.settings,
          },
        ],
      },
      {
        title: 'blog',
        icon: 'bx:user',
        path: DASHBOARD_PATH.blog.root,
        children: [
          {
            title: 'create',
            path: DASHBOARD_PATH.blog.create,
          },
          {
            title: 'list',
            path: DASHBOARD_PATH.blog.list,
          },
          {
            title: 'edit',
            path: DASHBOARD_PATH.blog.edit,
          },
          {
            title: 'view',
            path: DASHBOARD_PATH.blog.view,
          },
        ],
      },
    ],
  },
];

export default navConfig;
