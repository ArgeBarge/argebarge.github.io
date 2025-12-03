import './App.css';
import Projects from './pages/projects/Projects.js'
import Home from './pages/home/Home.js'
import About from './pages/about/About.js'
import Contact from './pages/contact/Contact.js';

import { NavLink, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div className='app'>
      <h1>James Barge</h1>
      <Navigation />
      <Main />
    </div>
  );
  
}

function Navigation() {
  return (
    <nav>
      <ul>
        <li><NavLink className={({isActive}) => isActive ? "current" : ""} to='/'>Home</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? "current" : ""} to='/about'>About</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? "current" : ""} to='/contact'>Contact</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? "current" : ""} to='/projects'>Projects</NavLink></li>
      </ul>
    </nav>
  );
}

function Main() {
  return (
    <Routes>
      <Route path='/' Component={Home}></Route>
      <Route path='/about' Component={About}></Route>
      <Route path='/contact' Component={Contact}></Route>
      <Route path='/projects' Component={Projects}></Route>
    </Routes>
  );
  
}