
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiEye, FiEyeOff, FiUser, FiMail } from 'react-icons/fi'

const Regestaion = () => {

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [agree, setAgree] = useState(false)

  const handleRegister = (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      alert("Password does not match!")
      return
    }

    if (!agree) {
      alert("Please accept Terms & Conditions")
      return
    }

    console.log({
      name,
      email,
      password
    })

    // Later Backend API Connect করবে
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 flex items-center justify-center p-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 my-6">

        {/* Header */}
        <div className="text-center mb-7">

          <div className="w-14 h-14 bg-blue-600 text-white rounded-xl flex items-center justify-center text-2xl font-bold mx-auto mb-4">
            T
          </div>

          <h1 className="text-3xl font-bold text-gray-800">
            Create Account
          </h1>

          <p className="text-gray-500 mt-2">
            Create your account and manage your tasks
          </p>

        </div>

        {/* Register Form */}
        <form onSubmit={handleRegister}>

          {/* Full Name */}
          <div className="mb-4">

            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name
            </label>

            <div className="relative">

              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autoComplete="name"
                className="w-full px-4 py-3 pr-11 border border-gray-300 rounded-lg outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
              />

              <FiUser
                size={20}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

            </div>

          </div>

          {/* Email */}
          <div className="mb-4">

            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>

            <div className="relative">

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                className="w-full px-4 py-3 pr-11 border border-gray-300 rounded-lg outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
              />

              <FiMail
                size={20}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

            </div>

          </div>

          {/* Password */}
          <div className="mb-4">

            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>

            <div className="relative">

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
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
          <div className="mb-5">

            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Confirm Password
            </label>

            <div className="relative">

              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
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

          {/* Terms & Conditions */}
          <div className="mb-6">

            <label className="flex items-start gap-2 text-sm text-gray-600 cursor-pointer">

              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="w-4 h-4 mt-0.5 accent-blue-600"
              />

              <span>
                I agree to the
                <a href="/terms" className="text-blue-600 font-semibold mx-1">
                  Terms & Conditions
                </a>
                and Privacy Policy.
              </span>

            </label>

          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-md shadow-blue-200"
          >
            Create Account
          </button>

        </form>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-500 mt-7">

          Already have an account?

          <Link
            to="/login"
            className="text-blue-600 font-semibold ml-1 hover:text-blue-800"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  )
}

export default Regestaion
