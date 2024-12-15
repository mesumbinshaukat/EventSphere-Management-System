import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './Pages/Login.tsx'
import Register from './Pages/Register.tsx'
import ForgetPassword from './Pages/ForgetPassword.tsx'
import Dashboard from './Pages/Dashboard.tsx'
import Exhibitor from './Pages/Exhibitor.tsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute.jsx'


const router = createBrowserRouter(

  createRoutesFromElements(
    <>
    <Route path="/" element={<App />}>
      <Route index element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="forget-password" element={<ForgetPassword />} />
      <Route path="exhibitor" element={<Exhibitor />} />
    </Route>

    <Route path="/dashboard" element={<ProtectedRoute />}>
      <Route index element={<Dashboard />} />
    </Route>
  </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
