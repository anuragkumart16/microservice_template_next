"use client"
import React, { useState } from 'react'

function Page() {
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)
  const [confirmPassword, setConfirmPassword] = useState("")
  return (
    <div className='h-screen w-screen flex justify-center items-center '>
      {!loading ?
        (<div className='flex flex-col justify-center items-center gap-4 p-8 w-80 border rounded-lg'>
          <h1 className='text-xl'>Reset Password</h1>
          {error && <p className='text-red-500'>{error}</p>}
          <div className='flex flex-col w-full'>
            <label htmlFor="">Create Password:</label>
            <input type={showPassword ? "text" : "password"} className='px-4 py-2 rounded border' value={password} onChange={(e) => {
              setPassword(e.target.value)
              if (password == "") {
                setError("")
              }
              if (password.length < 6) {
                setError("Password must be at least 6 characters")
              } else {
                setError("")
              }
            }} />
          </div>
          <div className='flex flex-col w-full'>
            <div className='flex flex-row justify-between'>
              <label htmlFor="">Create Password:</label>
              <p className='text-blue-500 underline cursor-pointer select-none' onClick={() => setShowPassword(!showPassword)}>{showPassword ? "Hide" : "Show"} password</p>
            </div>
            <input type={showPassword ? "text" : "password"} className='px-4 py-2 rounded border' value={confirmPassword} onChange={(e) => {
              setConfirmPassword(e.target.value)
              if (confirmPassword == "") {
                setError("")
              }
              if (confirmPassword.length < 6) {
                setError("Password must be at least 6 characters")
              } else {
                setError("")
              }
            }} />
          </div>
          <button className='text-black bg-white rounded-lg w-full py-3 cursor-pointer'>
            Reset password
          </button>
        </div>) :
        (
          <div className='p-8 border rounded-xl '>
            Loading...
          </div>
        )
      }
    </div>
  )
}

export default Page
