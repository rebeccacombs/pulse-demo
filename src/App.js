import React from 'react'
import './index.css';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import mainIcon from './pages/Images/mainIcon3.png'; 
import Dashboard from './pages/Dashboard';
import Forms from './pages/Forms';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound'; 
import Signup from './pages/Signup'; 
import { AuthProvider } from './contexts/AuthContext'; 
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import PrivateRoute from "./pages/PrivateRoute"
import About from "./pages/About"
import Done from "./pages/Done"
//import "./pages/pulsehomepage/aboutstyle.css"

  /**
   * App() contains in the following order: 
   *  [1] navbar
   *  [2] routes
   *  [3] footer
   * styled with tailwind.css
   */
console.log(mainIcon);
function App() {
  return  (
    <AuthProvider>
  <Router>  
  <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
      <Link to=""><img class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" src={mainIcon} alt="mainIcon"/></Link>
    <Link class="font-semibold text-4xl tracking-tight" to="">Pulse</Link>
    </div>
    <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div className="text-lg lg:flex-grow">
      <Link className="block mt-4 sm:inline-block md:mt-0 text-teal-200 hover:text-white mr-8" to="">  About</Link>
      <Link className="block mt-4 sm:inline-block md:mt-0 text-teal-200 hover:text-white mr-8" to="/dashboard">  Dashboard</Link>
      <Link className="block mt-4 sm:inline-block md:mt-0 text-teal-200 hover:text-white mr-8" to="/forms">  Forms</Link>
      </div>
      <div>
      <Link className="inline-block text-lg px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 md:mt-0" to="/profile">  Profile</Link>
      </div>
    </div>
    </nav>
    <Routes className="flex-auto">
      <Route path="/" element={<About />}/>
      <Route element={<PrivateRoute />}>
      <Route path="/forms" element={<Forms />}/>
      </Route>
      <Route path="/done" element={<Done />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route element={<PrivateRoute />}>
      <Route path="/profile" element={<Profile />}/>
      </Route>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/forgot-password" element={<ForgotPassword />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
    <footer className="fixed bottom-0 left-0 z-2o p-4 w-full bg-white border-t shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-teal-500">
    <span class="text-lg text-white sm:text-center dark:text-white">© 2022 <Link to="" class="hover:underline">Pulse™</Link>. All Rights Reserved.
    </span>
    <a href="https://github.com/rebeccacombs/pulse"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
      </footer>
  </Router>
  </AuthProvider>
  );
}

export default App;