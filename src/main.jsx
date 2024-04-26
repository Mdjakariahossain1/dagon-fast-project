import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import rooted from './Rooted/Rooted.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={rooted}></RouterProvider>
  </React.StrictMode>,
)
