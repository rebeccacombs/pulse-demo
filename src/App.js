import React from 'react'
import './index.css';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Forms from './pages/Forms';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound'; 

function App() {
  return  (

  <Router>
    <header>
    <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
    <Link class="font-semibold text-xl tracking-tight" to="">Pulse</Link>
    </div>
    <div class="block sm:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
    <div class="w-full block flex-grow sm:flex sm:items-center sm:w-auto">
      <div className="text-sm sm:flex-grow">
      <Link className="block mt-4 sm:inline-block md:mt-0 text-teal-200 hover:text-white mr-4" to="">  Dashboard</Link>
      <Link className="block mt-4 sm:inline-block md:mt-0 text-teal-200 hover:text-white mr-4" to="/forms">  Forms</Link>
      </div>
      <div>
      <Link className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 md:mt-0" to="/profile">  Profile</Link>
      </div>
    </div>
    </nav>
    </header>
    <main>
    <Routes className="flex-auto">
      <Route path="/" element={<Dashboard />}/>
      <Route path="/forms" element={<Forms />}/>
      <Route path="/profile" element={<Profile />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
    </main>
    <footer className="fixed bottom-0 left-0 z-2o p-4 w-full bg-white border-t shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-teal-500">
    <span class="text-sm text-white sm:text-center dark:text-white">© 2022 <Link to="" class="hover:underline">Pulse™</Link>. All Rights Reserved.
    </span>
      </footer>
  </Router>

  );
}

export default App;