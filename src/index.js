import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Voca from '../src/routes/Voca'
import './Button.module.css'

ReactDOM.render(
  <React.StrictMode>
    <Voca />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
