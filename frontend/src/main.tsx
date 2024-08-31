import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Profile from './pages/Profile.tsx'
import ProtectedRoutes from './components/ProtectedRoutes.tsx'
import { ApolloProvider } from "@apollo/client"
import { client } from './utils/apolloClient.ts'
import React from 'react'
import Home from './pages/Home.tsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:  <ProtectedRoutes>
                <Home /> 
              </ProtectedRoutes>
  },
  {
    path: '/profile/:id',
    element:  <Profile />
  }
]);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />

      <App />
    </ApolloProvider>
  </React.StrictMode>
)

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <ApolloProvider client={client}>
//       <RouterProvider router={router} />
//       <App />
//     </ApolloProvider>
//   </StrictMode>
// )
