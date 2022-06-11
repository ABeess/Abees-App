import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import AuthProvider from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);
