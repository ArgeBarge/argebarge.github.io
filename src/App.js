import './App.css';
import Projects from './pages/projects/Projects.js'

import { NavLink, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div className='app'>
      <h1>React Router Demo</h1>
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
function Home() {
  return (
    <div className='home'>
      <h1>Welcome to my portfolio website</h1>
      <p> Feel free to browse around.</p>
    </div>
  );
}

function About() {
  return (
    <div className='about'>
      <h1>About Me</h1>
      <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
      <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
    </div>
  );
  

}

function Contact() {
  return (
    <div className='contact'>
      <h1>Contact Me</h1>
      <p>You can reach me via email: <strong>hello@example.com</strong></p>
    </div>
  );
}

function Main() {
  return (
    <Routes>
      <Route path='\' Component={Home}></Route>
      <Route path='/about' Component={About}></Route>
      <Route path='/contact' Component={Contact}></Route>
      <Route path='/projects' Component={Projects}></Route>
    </Routes>
  );
  
}