import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router'
import './index.css'
import App from './App.jsx'
import Login from './Components/Login/Login.jsx'
import About from './Components/About/About.jsx'
import ContactUs from './Components/ContactUs/ContactUs.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='login' element={<Login />}/>
      <Route path='about' element={<About />}/>
      <Route path='contact' element={<ContactUs />}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
