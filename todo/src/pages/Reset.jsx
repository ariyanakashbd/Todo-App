
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiEye, FiEyeOff, FiLock, FiArrowLeft } from 'react-icons/fi'
import { useToast } from '../components/Toast'

const Reset = () => {

  const toast = useToast()

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleReset = (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      toast.error("Password does not match!")
      return
    }}

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 flex items-center justify-center p-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">

        {/* Header */}
        <div className="text-center mb-8">

          <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-5">
            <FiLock size={30} />
          </div>

          <h1 className="text-3xl font-bold text-gray-800">
            Reset Password
          </h1>

          <p className="text-gray-500 mt-3 leading-relaxed">
            Create a new password for your account.
            Make sure it's strong and secure.
          </p>

        </div>

        {/* Reset Form */}
        <form onSubmit={handleReset}>

          {/* New Password */}
          <div className="mb-5">

            <label className="block text-sm font-semibold text-gray-700 mb-2">
              New Password
            </label>

            <div className="relative">

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                autoComplete="new-password"
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >

                {showPassword ? (
                  <FiEyeOff size={20} />
                ) : (
                  <FiEye size={20} />
                )}

              </button>

            </div>

          </div>

          {/* Confirm Password */}
          <div className="mb-6">

            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Confirm New Password
            </label>

            <div className="relative">

              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                minLength={6}
                autoComplete="new-password"
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
              />

              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600"
                aria-label={showConfirmPassword ? "Hide password" : "Show password"}
              >

                {showConfirmPassword ? (
                  <FiEyeOff size={20} />
                ) : (
                  <FiEye size={20} />
                )}

              </button>

            </div>

          </div>

          {/* Reset Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-md shadow-blue-200"
          >
            Reset Password
          </button>

        </form>

        {/* Back to Login */}
        <div className="text-center mt-7">

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

export default Reset
