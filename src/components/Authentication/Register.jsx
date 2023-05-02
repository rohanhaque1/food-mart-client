import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
      <div>
        <form
          className="max-w-md mx-auto my-6 bg-white p-8 shadow-md rounded-md"
        >
          <h2 className="text-4xl font-bold mb-4 text-center">
            Please Register
          </h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="username"
            >
              Name
            </label>
            <input
              className="border border-gray-400 p-2 w-full rounded-md"
              id="username"
              name="name"
              type="text"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="photo"
            >
              Photo URL
            </label>
            <input
              className="border border-gray-400 p-2 w-full rounded-md"
              id="photo"
              name="photo"
              type="text"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="border border-gray-400 p-2 w-full rounded-md"
              id="email"
              name="email"
              type="email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="border border-gray-400 p-2 w-full rounded-md"
              id="password"
              name="password"
              type="password"
              required
            />
          </div>

          <button className="bg-blue-500 hover:bg-blue-600   rounded w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-2 px-4">
            Register
                </button>
                
                <div className="my-3">
                    <p className="text-gray-400 font-semibold">Already have an Account ? <Link to="/login" className="text-emerald-600 font-bold">Login</Link></p>
                </div>
        </form>
      </div>
    );
};

export default Register;