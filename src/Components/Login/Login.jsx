import React from 'react'

function Login() {
  return (
        <div className="min-h-screen flex items-center justify-center bg-[#212121]">
        
        <form 
        className="w-full max-w-sm bg-[#2A2A2A] p-6 rounded-xl shadow-lg shadow-gray-700"
        >
            
            <h2 className="text-2xl text-[#ffffff] font-bold text-center mb-6">
            Login
            </h2>

            <div className="mb-4">
            <label className="block text-sm text-[#CFCFCF] font-medium mb-1">
                Username
            </label>
            <input
                type="text"
                placeholder="Enter your username"
                className="w-full px-3 py-2 border border-[#3A3A3A] rounded-lg focus:outline-none focus:border-[#38BDF8] placeholder:text-[#8A8A8A] bg-[#1E1E1E] text-[#EDEDED] focus:ring-2 focus:ring-blue-500"
            />
            </div>

            <div className="mb-6">
            <label className="block text-sm text-[#CFCFCF] font-medium mb-1">
                Password
            </label>
            <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 border border-[#3A3A3A]  placeholder:text-[#8A8A8A] focus:border-[#38BDF8] rounded-lg focus:outline-none focus:outline-none bg-[#1E1E1E] text-[#EDEDED] focus:ring-2 focus:ring-blue-500"
            />
            </div>

            <button 
            className="w-full bg-[#38BDF8] text-[#0F172A] py-2 rounded-lg hover:bg-[#0EA5E9] transition cursor-pointer"
            type='submit'
            >
            Submit
            </button>

            <p className="text-sm text-[#B0B0B0] text-center mt-4">
            Don’t have an account?
            <span className="text-[#38BDF8] hover:text-[#7DD3FC] cursor-pointer ml-1">
                Sign up
            </span>
            </p>
        </form>
        </div>
  )
}

export default Login
