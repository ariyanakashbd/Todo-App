
import React, { useState } from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Login = () => {

  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()}

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 flex items-center justify-center p-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">

        {/* Logo */}
        <div className="text-center mb-8">

          <div className="w-14 h-14 bg-blue-600 text-white rounded-xl flex items-center justify-center text-2xl font-bold mx-auto mb-4">
            T
          </div>

          <h1 className="text-3xl font-bold text-gray-800">
            Welcome Back!
          </h1>

          <p className="text-gray-500 mt-2">
            Login to manage your daily tasks
          </p>

        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin}>

          {/* Email */}
          <div className="mb-5">

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

          {/* Password */}
          <div className="mb-5">

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
                autoComplete="current-password"
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

          {/* Remember Me */}
          <div className="flex items-center justify-between mb-6">

            <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">

              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 accent-blue-600"
              />

              Remember me

            </label>

            <Link
              href="/forgot-password"
              className="text-sm font-medium text-blue-600 hover:text-blue-800"
            >
              Forgot Password?
            </Link>

          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-md shadow-blue-200"
          >
            Login
          </button>

        </form>

        {/* Register */}
        <p className="text-center text-sm text-gray-500 mt-7">

          Don't have an account?

          <a
            href="/register"
            className="text-blue-600 font-semibold ml-1 hover:text-blue-800"
          >
            Sign Up
          </a>

        </p>

      </div>

    </div>
  )
}

export default Login
