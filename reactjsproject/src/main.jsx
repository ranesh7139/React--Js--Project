import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Mycontext from './Context/Mycontext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './Reduxtoolkit/Store.js'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Mycontext>
      <Provider store={store}>
          <App />
      </Provider>
  </Mycontext>
  </BrowserRouter>
)
