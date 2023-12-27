import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import router from './router'
import { RouterProvider } from 'react-router-dom'
// 匯入store
import store from './store'
// 匯入store提供元件Provider
import { Provider } from 'react-redux'

import 'normalize.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  
  </React.StrictMode>
)