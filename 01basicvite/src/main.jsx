import { StrictMode } from 'react'// to use react
import { createRoot } from 'react-dom/client' // reactdom used in web

import App from './App.jsx'// connect App.jsx to it


createRoot(document.getElementById('root')).render( //render actually render the html in js and allow you to use html in js.
  <div>
    <App />
   
  </div>
  
)
// we don't need to use (strictmode) tag
