import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './Pages/Login.tsx'
import Register from './Pages/Register.tsx'
import ForgetPassword from './Pages/ForgetPassword.tsx'
import Home from './Pages/Home.jsx'
import Exhibitor from './Pages/Exhibitor.tsx'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="forget-password" element={<ForgetPassword />} />    
      <Route path="home" element={<Home />} />
      <Route path="exhibitor" element={<Exhibitor />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
