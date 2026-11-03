
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMail, FiArrowLeft } from 'react-icons/fi'
import { useToast } from '../components/Toast'

const EmailVerify = () => {

  const toast = useToast()

  const [otp, setOtp] = useState('')

  const handleVerify = (e) => {
    e.preventDefault()

    if (otp.length !== 6) {
      toast.error("Please enter 6 digit OTP")
      return
    }

    console.log({
      otp
    })

  }

  const handleResend = () => {
    console.log("Resend OTP")

  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 flex items-center justify-center p-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">

        {/* Header */}
        <div className="text-center mb-8">

          <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-5">
            <FiMail size={30} />
          </div>

          <h1 className="text-3xl font-bold text-gray-800">
            Verify Your Email
          </h1>

          <p className="text-gray-500 mt-3 leading-relaxed">
            We've sent a 6-digit verification code
            to your email address.
          </p>

        </div>

        {/* OTP Form */}
        <form onSubmit={handleVerify}>

          <div className="mb-6">

            <label className="block text-sm font-semibold text-gray-700 mb-3 text-center">
              Enter Verification Code
            </label>

            <input
              type="text"
              inputMode="numeric"
              placeholder=""
              value={otp}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, '').slice(0, 6)
                setOtp(value)
              }}
              maxLength={6}
              required
              className="w-full px-4 py-4 text-center text-2xl tracking-[12px] font-bold border border-gray-300 rounded-lg outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
            />

          </div>

          {/* Verify Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-md shadow-blue-200"
          >
            Verify Email
          </button>

        </form>

        {/* Resend OTP */}
        <div className="text-center mt-6">

          <p className="text-sm text-gray-500">
            Didn't receive the code?
          </p>

          <button
            type="button"
            onClick={handleResend}
            className="text-blue-600 font-semibold mt-2 hover:text-blue-800 transition"
          >
            Resend OTP
          </button>

        </div>

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

export default EmailVerify
