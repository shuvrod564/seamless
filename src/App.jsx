import { useState } from 'react'
import { createBrowserRouter, Router, RouterProvider, } from 'react-router-dom';
import './App.css'
import { ConfigProvider } from "antd"
import Login from "./pages/login/Login"
import Dashboard from './pages/dashboard/Dashboard';
import Layout from './components/layout/Layout';
import Paying from './pages/paying/Paying';

function App() {
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <Dashboard /> },
        { path: '/paying', element: <Paying /> },
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
          colorPrimary: '#00b96b', 
          fontFamily: 'Open Sans, sans-serif'
        },
      }}
    >
       <RouterProvider router={router} />
    </ConfigProvider>
  )
}

export default App
