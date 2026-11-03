
import React from "react";
import { Link } from "react-router-dom";
import {
  FiCheckCircle,
  FiClock,
  FiList,
  FiArrowRight,
  FiTarget,
  FiCalendar,
  FiTrendingUp,
} from "react-icons/fi";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* Navbar */}
      <nav className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

          <Link to="/" className="text-2xl font-bold text-blue-600">
            Todo<span className="text-slate-800">App</span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-slate-600 font-medium">
            <a href="#home" className="hover:text-blue-600">Home</a>
            <a href="#features" className="hover:text-blue-600">Features</a>
            <a href="#how-it-works" className="hover:text-blue-600">How It Works</a>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="text-slate-700 font-medium hover:text-blue-600"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition"
            >
              Sing Up
            </Link>
          </div>

        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14 items-center">

          <div>
            <span className="inline-block bg-white/15 px-4 py-2 rounded-full text-sm mb-6">
              ✨ Organize Your Life Better
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Manage Your Tasks.
              <span className="text-blue-200"> Achieve Your Goals.</span>
            </h1>

            <p className="text-blue-100 text-base sm:text-lg mt-6 leading-8 max-w-xl">
              Stay organized, manage your daily tasks and increase your
              productivity with our simple and powerful Todo App.
            </p>

            <div className="flex flex-wrap gap-4 mt-9">
              <Link
                to="/register"
                className="bg-white text-blue-700 px-7 py-3.5 rounded-lg font-semibold hover:bg-blue-50 transition flex items-center gap-2"
              >
                Sing Up <FiArrowRight />
              </Link>

              <Link
                to="/login"
                className="border border-white/50 px-7 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition"
              >
                Login
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 mt-10 text-sm text-blue-100">
              <span className="flex items-center gap-2">
                <FiCheckCircle /> Easy to Use
              </span>
              <span className="flex items-center gap-2">
                <FiCheckCircle /> Stay Organized
              </span>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="bg-white rounded-2xl p-5 sm:p-7 shadow-2xl text-slate-800">

            <div className="flex justify-between items-center mb-7">
              <div>
                <h3 className="text-xl font-bold">My Dashboard</h3>
                <p className="text-slate-400 text-sm mt-1">Your daily overview</p>
              </div>

              <div className="bg-blue-100 text-blue-600 p-3 rounded-xl">
                <FiList size={25} />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-7">

              <div className="bg-blue-50 p-3 rounded-xl">
                <FiList className="text-blue-600 mb-2" size={20} />
                <h4 className="text-2xl font-bold">12</h4>
                <p className="text-xs text-slate-500">Total</p>
              </div>

              <div className="bg-green-50 p-3 rounded-xl">
                <FiCheckCircle className="text-green-600 mb-2" size={20} />
                <h4 className="text-2xl font-bold">8</h4>
                <p className="text-xs text-slate-500">Completed</p>
              </div>

              <div className="bg-orange-50 p-3 rounded-xl">
                <FiClock className="text-orange-500 mb-2" size={20} />
                <h4 className="text-2xl font-bold">4</h4>
                <p className="text-xs text-slate-500">Pending</p>
              </div>

            </div>

            <h4 className="font-bold mb-4">Today's Tasks</h4>

            <div className="space-y-3">

              <div className="flex items-center justify-between bg-slate-50 p-4 rounded-xl">
                <div className="flex items-center gap-3">
                  <FiCheckCircle className="text-green-500" size={20} />
                  <span className="text-sm font-medium line-through text-slate-400">
                    Learn JavaScript
                  </span>
                </div>
                <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
                  Done
                </span>
              </div>

              <div className="flex items-center justify-between bg-slate-50 p-4 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-blue-500" />
                  <span className="text-sm font-medium">Practice React</span>
                </div>
                <span className="text-xs bg-orange-100 text-orange-600 px-3 py-1 rounded-full">
                  Pending
                </span>
              </div>

              <div className="flex items-center justify-between bg-slate-50 p-4 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-blue-500" />
                  <span className="text-sm font-medium">Learn Node.js</span>
                </div>
                <span className="text-xs bg-orange-100 text-orange-600 px-3 py-1 rounded-full">
                  Pending
                </span>
              </div>

            </div>

            <div className="mt-6 bg-blue-600 text-white text-center py-3 rounded-xl font-medium">
              Stay Productive Every Day 🚀
            </div>

          </div>

        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-blue-600 font-semibold">OUR FEATURES</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mt-3">
              Everything You Need to Stay Organized
            </h2>
            <p className="text-slate-500 mt-4">
              Manage your work easily with simple and useful features.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
              <div className="bg-blue-100 text-blue-600 w-14 h-14 rounded-xl flex items-center justify-center">
                <FiList size={27} />
              </div>
              <h3 className="text-xl font-bold mt-6">Task Management</h3>
              <p className="text-slate-500 mt-3 leading-7">
                Create, edit and delete your daily tasks easily.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
              <div className="bg-green-100 text-green-600 w-14 h-14 rounded-xl flex items-center justify-center">
                <FiCheckCircle size={27} />
              </div>
              <h3 className="text-xl font-bold mt-6">Track Progress</h3>
              <p className="text-slate-500 mt-3 leading-7">
                Track completed and pending tasks from one place.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
              <div className="bg-orange-100 text-orange-500 w-14 h-14 rounded-xl flex items-center justify-center">
                <FiClock size={27} />
              </div>
              <h3 className="text-xl font-bold mt-6">Save Your Time</h3>
              <p className="text-slate-500 mt-3 leading-7">
                Organize your schedule and focus on important work.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
              <div className="bg-purple-100 text-purple-600 w-14 h-14 rounded-xl flex items-center justify-center">
                <FiTarget size={27} />
              </div>
              <h3 className="text-xl font-bold mt-6">Set Your Goals</h3>
              <p className="text-slate-500 mt-3 leading-7">
                Keep your goals clear and work towards achieving them.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
              <div className="bg-pink-100 text-pink-600 w-14 h-14 rounded-xl flex items-center justify-center">
                <FiCalendar size={27} />
              </div>
              <h3 className="text-xl font-bold mt-6">Manage Deadlines</h3>
              <p className="text-slate-500 mt-3 leading-7">
                Set due dates and remember your important tasks.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
              <div className="bg-indigo-100 text-indigo-600 w-14 h-14 rounded-xl flex items-center justify-center">
                <FiTrendingUp size={27} />
              </div>
              <h3 className="text-xl font-bold mt-6">Improve Productivity</h3>
              <p className="text-slate-500 mt-3 leading-7">
                Build better habits and make every day productive.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">
            <span className="text-blue-600 font-semibold">HOW IT WORKS</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mt-3">
              Get Started in Three Simple Steps
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10 text-center">

            <div>
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                01
              </div>
              <h3 className="text-xl font-bold mt-5">Create Account</h3>
              <p className="text-slate-500 mt-3">
                Register and create your personal account.
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                02
              </div>
              <h3 className="text-xl font-bold mt-5">Add Your Tasks</h3>
              <p className="text-slate-500 mt-3">
                Add your daily tasks and set priorities.
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                03
              </div>
              <h3 className="text-xl font-bold mt-5">Track Your Progress</h3>
              <p className="text-slate-500 mt-3">
                Complete tasks and achieve your goals.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-blue-700 to-indigo-700 rounded-3xl p-10 sm:p-16 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to Get Things Done?
          </h2>
          <p className="text-blue-100 mt-4">
            Start organizing your tasks and make your day more productive.
          </p>
          <Link
            to="/register"
            className="inline-flex items-center gap-2 bg-white text-blue-700 px-7 py-3.5 rounded-lg font-semibold mt-8 hover:bg-blue-50 transition"
          >
            Create Free Account <FiArrowRight />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <h2 className="text-xl font-bold text-white">
            Todo<span className="text-blue-400">App</span>
          </h2>

          <p className="text-sm text-center">
            © 2026 TodoApp. All rights reserved.
          </p>

          <div className="flex gap-5 text-sm">
            <Link to="/login" className="hover:text-white">Login</Link>
            <Link to="/register" className="hover:text-white">Register</Link>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Home;
