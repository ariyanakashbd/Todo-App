
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMail, FiArrowLeft } from 'react-icons/fi'

const Forgot = () => {

  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log({
      email
    })

    // Later Backend API Connect করবে
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 flex items-center justify-center p-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">

        {/* Icon */}
        <div className="text-center mb-7">

          <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-5">
            <FiMail size={30} />
          </div>

          <h1 className="text-3xl font-bold text-gray-800">
            Forgot Password?
          </h1>

          <p className="text-gray-500 mt-3 leading-relaxed">
            No worries! Enter your email address and
            we'll send you a password reset link.
          </p>

        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>

          <div className="mb-6">

            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
            />

          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-md shadow-blue-200"
          >
            Send Reset Link
          </button>

        </form>

        {/* Back to Login */}
        <div className="mt-7 text-center">

          <Link
            to="/login"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition"
          >
            <FiArrowLeft size={18} />
            Back to Login
          </Link>

        </div>

      </div>

    </div>
  )
}

export default Forgot
