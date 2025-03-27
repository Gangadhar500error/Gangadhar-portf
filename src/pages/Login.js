import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Auth = () => {
  const [activeForm, setActiveForm] = useState('login'); // 'login', 'register', or 'forgot'

  // State for login and register form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  // Handle form submission for login
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in both fields.');
      return;
    }
    setError('');
    // Handle login logic here
    console.log('Logged in with', email, password);
  };

  // Handle form submission for register
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || password !== confirmPassword) {
      setError('Please make sure all fields are filled correctly.');
      return;
    }
    setError('');
    // Handle register logic here
    console.log('Registered with', email, password);
  };

  // Handle form submission for forgot password
  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Please provide your email.');
      return;
    }
    setError('');
    // Handle forgot password logic here
    console.log('Password reset requested for', email);
  };

  return (
    <div>
      

      <main className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          {/* Toggle Between Forms */}
          <h1 className="text-2xl font-bold text-gray-800 mb-6">{activeForm === 'login' ? 'Login' : activeForm === 'register' ? 'Register' : 'Forgot Password'}</h1>
          
          {error && <div className="mb-4 text-red-500">{error}</div>}

          {activeForm === 'login' && (
            <form onSubmit={handleLoginSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter your password"
                />
              </div>

              <button
                type="submit"
                className="w-full p-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition duration-200"
              >
                Login
              </button>
            </form>
          )}

          {activeForm === 'register' && (
            <form onSubmit={handleRegisterSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter your password"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="confirmPassword" className="block text-gray-700">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Confirm your password"
                />
              </div>

              <button
                type="submit"
                className="w-full p-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition duration-200"
              >
                Register
              </button>
            </form>
          )}

          {activeForm === 'forgot' && (
            <form onSubmit={handleForgotPasswordSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter your email"
                />
              </div>

              <button
                type="submit"
                className="w-full p-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition duration-200"
              >
                Reset Password
              </button>
            </form>
          )}

          {/* Links to toggle between forms */}
          {activeForm !== 'login' && (
            <div className="mt-4 text-center">
              <button
                className="text-orange-500 text-sm"
                onClick={() => setActiveForm('login')}
              >
                Back to Login
              </button>
            </div>
          )}

          {activeForm !== 'register' && activeForm !== 'forgot' && (
            <div className="mt-4 text-center">
              <button
                className="text-orange-500 text-sm"
                onClick={() => setActiveForm('register')}
              >
                Don't have an account? Register
              </button>
              <br />
              <button
                className="text-orange-500 text-sm mt-2"
                onClick={() => setActiveForm('forgot')}
              >
                Forgot password?
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Include Footer */}
      <Footer />
    </div>
  );
};

export default Auth;
