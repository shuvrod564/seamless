import { useState } from 'react'
import { createBrowserRouter, Router, RouterProvider, } from 'react-router-dom';
import './App.css'
import { ConfigProvider } from "antd"
import Login from "./pages/login/Login"
import Dashboard from './pages/dashboard/Dashboard';
import Layout from './components/layout/Layout';
import Paying from './pages/paying/Paying';
import Wallet from './pages/wallet/Wallet';

function App() {
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <Dashboard /> },
        { path: '/paying', element: <Paying /> },
        { path: '/wallet', element: <Wallet /> },
      ]
    },
    {
      path: '/login',
      element: (<Login />)
    }
  ]);

  return (
    <ConfigProvider 
      theme={{
        token: {
          // Seed Token
          colorPrimary: '#4681FF', 
          fontFamily: 'Open Sans, sans-serif'
        },
      }}
    >
       <RouterProvider router={router} />
    </ConfigProvider>
  )
}

export default App
