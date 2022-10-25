import React from 'react'
import { Link } from "react-router-dom"

function Done() {
  return (
    <div class="flex items-center justify-center mt-40 px-6"><div class="font-medium text-4xl">Done! Thank you for filling out the form. Check out the <Link class="text-blue-600 hover:underline" to="/dashboard">dashboard.</Link></div></div>
  )
}

export default Done