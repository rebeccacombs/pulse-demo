import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { db } from "../firebase"
import { collection, setDoc, doc, getDoc, DocumentSnapshot } from "firebase/firestore";
import { useAuth } from '../contexts/AuthContext'

function Forms() {
  const { currentUser } = useAuth()
  const [studying, setStudying] = useState("");
  const [sleeping, setSleeping] = useState("");
  const [mood, setMood] = useState('');
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const sleepDataRef = doc(db, "sleepData", currentUser.email)


  async function handleSubmit(e){
    e.preventDefault(); 

    const docSnap = await getDoc(sleepDataRef)
    if(docSnap.exists()){
      return setError("Cannot submit form again.")
    }

    if(studying === "" || sleeping === "" || mood === ""){
      return setError("Please fill out all fields.")
    }

    try{
      setError('')
      setLoading(true)
       await setDoc(sleepDataRef, {
        studying:studying,
        sleeping:sleeping,
        mood:mood
      }).then(() => {
        navigate("/done")
      })
    } catch {
      setError("Failed to submit.")
    
    setLoading(false)
    
  }
  }

  return (
    <div>
    <div class="flex mt-24 justify-center h-screen">
    <div class="w-full max-w-lg">
  <form onSubmit={handleSubmit} class="bg-blue-100 shadow-2xl rounded px-8 pt-6 påb-4 mb-4">
  <div class=" text-center block text-gray-700 text-xl font-bold mb-2">
    Sleep Data</div>
    {error && <p class="text-red-500 text-xs italic">{error}</p>}
    <div class="mb-6 mt-4">
      <div class="block text-left text-gray-700 text-sm font-bold mb-3" for="email">
        1. On average, how many hours a night do you do homework? 
      </div>
    <input
      type="number" min="0"
      class="form-control px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      placeholder="# hours studying" value={studying} onChange={(e) => setStudying(e.target.value)}
    />
    </div>
    <div class="mb-6">
      <label class="block text-left text-gray-700 text-sm font-bold mb-3" for="password">
        2. On average, how many hours a night do you sleep?
      </label>
      <input
      type="number" min="0"
      class="form-control px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      placeholder="# hours slept" value={sleeping} onChange={(e) => setSleeping(e.target.value)}
    />
    </div>
    <div class="mb-4">
      <label class="block text-left text-gray-700 text-sm font-bold mb-3" for="confirm-password">
        3. Over the past two weeks, how has your mood been?
      </label>
      <div class="flex items-center mb-4">
    <input id="mood-option-1" type="radio" name="mood" value="below_avg" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300" checked={mood === 'below_avg'} onChange={(e) => setMood(e.target.value)}/>
    <label for="mood-option-1" class="block ml-2 text-sm text-gray-900">
      Below average
    </label>
  </div>
  <div class="flex items-center mb-4">
    <input id="mood-option-2" type="radio" name="mood" value="avg" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300" checked={mood === 'avg'} onChange={(e) => setMood(e.target.value)}/>
    <label for="mood-option-2" class="block ml-2 text-sm text-gray-900">
      Average
    </label>
  </div>
  <div class="flex items-center mb-4">
    <input id="mood-option-3" type="radio" name="mood" value="above_avg" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300" checked={mood === 'above_avg'} onChange={(e) => setMood(e.target.value)}/>
    <label for="country-option-1" class="block ml-2 text-sm text-gray-900">
      Above average
    </label>
  </div>
    </div>
      <button disabled={loading} class="block mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" value="add" name="btnRET" type="submit">
        Submit
      </button>
    <div class="mt-4 pb-1"></div>
  </form>
</div>
</div>
    </div>
  )
}

export default Forms