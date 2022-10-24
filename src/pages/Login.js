import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from "react-router-dom"

function Login() { //signup sheet
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e){
    e.preventDefault()

    try{
      setError('')
      setLoading(true)
       await login(emailRef.current.value, passwordRef.current.value)
       navigate("/profile")
    } catch {
      setError("Failed to log in.")
    
    setLoading(false)
    
  }
}

  return (
    <div class="flex mt-24 justify-center h-screen">
    <div class="w-full max-w-xs">
  <form onSubmit={handleSubmit} class="bg-white shadow-2xl rounded px-8 pt-6 påb-4 mb-4">
  <div class=" text-center block text-gray-700 text-xl font-bold mb-2">
    Log In</div>
    {error && <p class="text-red-500 text-xs italic">{error}</p>}
    <div class="mb-4">
      <label class="block text-left text-gray-700 text-sm font-bold mb-2" for="email">
        Email
      </label>
      <input class="text-left shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email" ref={emailRef} required/>
    </div>
    <div class="mb-4">
      <label class="block text-left text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="text-left shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" ref={passwordRef} required/>
    </div>
      <button disabled={loading} class="mt-4 block mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Log In
      </button>
      <div class="text-center text-gray-700 text-xs mt-4 hover:underline"><Link to="/forgot-password" class="text-blue-600">Forgot Password?</Link></div>
    <div class="text-center text-gray-700 text-xs mt-1 pb-3">Need an account? <Link to="/signup" class="text-blue-600 hover:underline">Sign up.</Link></div>
  </form>
</div>
</div>
  )
}

export default Login