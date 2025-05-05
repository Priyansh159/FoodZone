import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './Components/nestedComponents/Error.jsx'
import Body from './Components/Body.jsx'
import Help from './Components/nestedComponents/Help.jsx'
import Offer from './Components/nestedComponents/Offer.jsx'
import Signin from './Components/nestedComponents/Signin.jsx'

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    errorElement: <Error />,
    children:[
      {
        path:"/",
        element:<Body />
      },
      {
        path:"/help",
        element:<Help />
      },
      {
        path:"/offer",
      element:<Offer />
      },
      {
        path:"/signin",
        element:<Signin />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={appRouter}></RouterProvider>
  </StrictMode>
)
