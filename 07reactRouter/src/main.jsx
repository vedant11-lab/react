import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './components/home/home.jsx'
import About from './components/about/about.jsx'
import Contact from './components/Contact.jsx'
import FAQ from './components/FAQ.jsx'
import User from './components/user/user.jsx'
import Github from './components/github/github.jsx'
import { githubInfoLoaader } from './components/github/github.jsx'

const router =  createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='faq' element={<FAQ />} />
      <Route path='user/:userid' element={<User />} />
      <Route 
      loader={githubInfoLoaader}
      path='github' 
      element={<Github />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
