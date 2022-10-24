import React, { useState } from 'react'
import { useAuth } from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom"

function Profile() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()

  async function handleLogout(){
    setError('')

    try{
      await logout()
      navigate("/login")
    } catch (e){
      console.error(e)
      setError("Failed to log out.")
    }
  }

  return (
    
    <div class="flex mx-auto flex-col mt-24 items-center">
      
<div class="p-6 px-24 max-w-xl bg-white rounded-lg border border-gray-200">
        <div class="text-center mb-2 text-4xl text-gray-900 ">Profile</div>
        {error && <p class="text-red-500 text-xs italic">{error}</p>}
    <div class="mb-3 text-lg text-gray-700 mb-4"><b>Email:</b> {currentUser && currentUser.email}</div>
    <button variant="link" onClick={handleLogout} class="inline-flex items-center py-2 px-3 text-sm text-center text-white bg-blue-500 rounded-lg font-bold hover:bg-blue-800 focus:ring-4 focus:outline-none focus:shadow-outline">
        Log Out
    </button>
</div>

      </div>
  )
}

export default Profile