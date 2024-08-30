import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ProtectedRoutes from './components/ProtectedRoutes'


import ReactDOM from 'react-dom'
import React from 'react'
import Home from './pages/Home'

const router = createBrowserRouter([
  {
    path:'/',
    element:  <ProtectedRoutes>
                <Home /> 
              </ProtectedRoutes>
  },
  // {
  //   path: '/profile/:id',
  //   element:  <Profile />  
  // },
  // {
  //   path: '/upload',
  //   element:  <ProtectedRoutes>
  //               <Upload />
  //             </ProtectedRoutes>
  // },
  // {
  //   path: '/post/:id',
  //   element:  <Post />
  // }
]);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
      <App />
  </React.StrictMode>
)

