import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
  const { createUser } = useContext(AuthContext)

  const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then(result => {
        const createdUser = result.user;
        console.log(createdUser)
      })
      .catch(error => {
      console.log(error)
    })
  }
    return (
      <div>
        <form
          onSubmit={handleRegister}
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
              placeholder="Name"
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
              placeholder="Photo URL"
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
              placeholder="Email"
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
              placeholder="Password"
              required
            />
          </div>

          <button className="bg-blue-500 hover:bg-blue-600   rounded w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-2 px-4">
            Register
          </button>

          <div className="my-3">
            <p className="text-gray-400 font-semibold">
              Already have an Account ?{" "}
              <Link to="/login" className="text-emerald-600 font-bold">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    );
};

export default Register;