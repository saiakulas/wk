import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (username && password) {
        login(); // Set loggedIn state to true
        navigate('/candidate/home');
      } else {
        setError('Please enter both username and password.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('Error during login. Please try again.');
    }

    setUsername('');
    setPassword('');
  };

  return (
    <div className="bg-[#f4f4f2] min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-4xl font-bold mb-8 text-[#911825]">Login</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow-lg rounded-lg max-w-md w-full">
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username:</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <button
          type="submit"
          className="bg-[#911825] hover:bg-[#7b1420] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
