const path = (root, sublink) => {
  return `${root}${sublink}`;
};

const ROOT_AUTH = '/auth';
const ROOT_DASHBOARD = '/dashboard';

export const AUTH_PATH = {
  root: ROOT_AUTH,
  login: path(ROOT_AUTH, '/login'),
  register: path(ROOT_AUTH, '/register'),
};

export const DASHBOARD_PATH = {
  root: ROOT_DASHBOARD,
  user: {
    root: path(ROOT_DASHBOARD, '/user'),
    profile: path(ROOT_DASHBOARD, '/user/profile'),
    create: path(ROOT_DASHBOARD, '/user/create'),
    list: path(ROOT_DASHBOARD, '/user/list'),
    settings: path(ROOT_DASHBOARD, '/user/settings'),
  },
  blog: {
    root: path(ROOT_DASHBOARD, '/blog'),
    create: path(ROOT_DASHBOARD, '/blog/create'),
    list: path(ROOT_DASHBOARD, '/blog/list'),
    edit: path(ROOT_DASHBOARD, '/blog/edit'),
    view: path(ROOT_DASHBOARD, '/blog/view'),
  },
};
