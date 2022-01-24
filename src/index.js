import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import App from './App';
import Inicio from './components/pages/Inicio';
import About from './components/pages/About'
import Services from './components/pages/Services'
import Contact from './components/pages/Contact'

ReactDOM.render(
  <Router>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/inicio" element={<Inicio/>}/>
        <Route path="/acerca" element={<About/>}/>
        <Route path="/servicios" element={<Services/>}/>
        <Route path="/contacto" element={<Contact/>}/>
      </Routes>
  </Router>,
  document.getElementById('root')
);
