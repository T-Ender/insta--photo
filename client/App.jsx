import React from 'react';
import Routes from './Routes';
import { AuthProvider } from './context/AuthContext';
export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}
