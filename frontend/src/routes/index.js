import AuthGuard from '@/guards/AuthGuard';
import GestGuard from '@/guards/GestGuard';
import MainLayout from '@/layouts/main/MainLayout';
import UserList from '@/pages/dashboard/user/UserList';
import UserProfile from '@/pages/dashboard/user/UserProfile';
import UserSetting from '@/pages/dashboard/user/UserSetting';
import HomePage from '@/pages/home';
import React from 'react';
import { useRoutes } from 'react-router-dom';
import DashboardLayouts from '../layouts/dashboard';
import Login from '../pages/auth/login/Login';
import Register from '../pages/auth/register/Register';
import UserCreate from '../pages/dashboard/user/UserCreate';

const Router = () => {
  return useRoutes([
    {
      path: 'auth',
      children: [
        {
          path: 'login',
          element: (
            <GestGuard>
              <Login />
            </GestGuard>
          ),
        },
        { path: 'register', element: <Register /> },
      ],
    },
    {
      path: 'dashboard',
      element: (
        <AuthGuard>
          <DashboardLayouts />
        </AuthGuard>
      ),
      children: [
        {
          path: 'user',

          children: [
            { path: 'profile', element: <UserProfile /> },
            { path: 'create', element: <UserCreate /> },
            { path: 'list', element: <UserList /> },
            { path: 'settings', element: <UserSetting /> },
          ],
        },
      ],
    },
    {
      path: '/',
      element: <MainLayout />,
      children: [{ element: <HomePage />, index: true }],
    },
  ]);
};

export default Router;
