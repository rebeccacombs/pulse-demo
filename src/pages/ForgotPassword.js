import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from "react-router-dom"

function ForgotPassword() { //signup sheet
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
  
    async function handleSubmit(e){
      e.preventDefault()
  
      try{
        setMessage("")
        setError('')
        setLoading(true)
         await resetPassword(emailRef.current.value)
         setMessage("Check you inbox for further instructions.")
      } catch {
        setError("Failed to reset password.")
      
      setLoading(false)
      
    }
  }
  
    return (
      <div class="flex mt-24 justify-center h-screen">
      <div class="w-full max-w-xs">
    <form onSubmit={handleSubmit} class="bg-white shadow-2xl rounded px-8 pt-6 påb-4 mb-4">
    <div class=" text-center block text-gray-700 text-xl font-bold mb-2">
      Password Reset</div>
      {error && <p class="text-red-500 text-xs italic">{error}</p>}
      {message && <p class="text-green-600 text-xs italic">{message}</p>}
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Email
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email" ref={emailRef} required/>
      </div>
        <button disabled={loading} class="mt-4 block mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Reset Password
        </button>
        <div class="text-center text-gray-700 text-xs mt-4 hover:underline"><Link to="/login" class="text-blue-600">Log in.</Link></div>
      <div class="text-center text-gray-700 text-xs mt-1 pb-3">Need an account? <Link to="/signup" class="text-blue-600 hover:underline">Sign up.</Link></div>
    </form>
  </div>
  </div>
  )
}

export default ForgotPassword