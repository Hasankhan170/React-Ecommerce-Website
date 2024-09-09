import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Service from './pages/Service.jsx'

const router = createBrowserRouter([
  {
    pat : '/',
    element : <Layout />,
    children : [
      {
        path : '',
        element : <Home />
      },
      {
        path : 'about',
        element : <About />
      },
      {
        path : 'contact',
        element : <Contact /> 
      },
      {
        path : 'Service',
        element : <Service/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
  </RouterProvider>
)
