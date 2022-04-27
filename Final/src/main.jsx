import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import About from './routes/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import Courses from './routes/Courses';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/courses" element={<Courses />} />
    </Routes>
  </BrowserRouter>,
)
