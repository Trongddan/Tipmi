import React from 'react'
import { useRoutes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Register from './pages/Register'
import RegisterLayout from './layouts/RegisterLayout'
import HomeLayout from './layouts/HomeLayout'
import Profile from './pages/Profile'

export default function useRouterElement() {
  const routeElement = useRoutes([
    {
      path: '/',
      element: (
        <HomeLayout>
          <Homepage />
        </HomeLayout>
      )
    },
    {
      path: '/login',
      element: (
        <RegisterLayout>
          <Login />
        </RegisterLayout>
      )
    },
    {
      path: '/register',
      element: (
        <RegisterLayout>
          <Register />
        </RegisterLayout>
      )
    },    {
      path: '/profile/:alo',
      element: (
        <HomeLayout>
          <Profile />
        </HomeLayout>
      )
    }
  ])
  return routeElement
}
