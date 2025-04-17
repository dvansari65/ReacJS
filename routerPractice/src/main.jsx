import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout.jsx'
import About from './components/About/About.jsx'
import Login from './components/Login/Login.jsx'
import Footer from './components/Footer/Footer.jsx'
const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"about",
        element:<About/>
      },
      {
        path:"login",
        element:<Login/>
      },
      {
        path:"footer",
        element:<Footer/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
