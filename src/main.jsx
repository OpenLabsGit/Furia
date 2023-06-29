import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);