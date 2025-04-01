import React, { useState } from 'react';
import { login } from '../features/AuthSlice'
import { useDispatch } from 'react-redux';


function Login() {

  const initialState = {
    name: "",
    password: "",
  }; 

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  const [values, setValues] = useState(initialState)

  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center text-gray-900">
          SIGN IN
        </h2>

        {/* Form */}
        <form className="space-y-6">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Name:
            </label>
            <div className="mt-1">
              <input
                id="name"
                name="name"
                type="name"
                autoComplete="name"
                required
                value={values.name}
                onChange={onChange}
                className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="user name"
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password:
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={values.password}
                onChange={onChange}
                className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="********"
              />
            </div>
          </div>

          {/* Sign In Button */}
          <div>
            <button
              type="submit"
              className="cursor-pointer w-full px-4 py-2 text-sm font-medium text-white bg-green-500 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => dispatch(login(values))}
            >
              Sign In
            </button>
          </div>
        </form>

        {/* Sign Up Link */}
        <div className="text-sm text-center text-gray-600">
          Don't have an account?{' '}
          <button
            className="font-medium text-green-500 hover:text-green-500 focus:outline-none focus:underline cursor-pointer"
          >
            Sign Up
          </button>
          {/* Or use a link if using React Router */}
          {/* <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
            Sign Up
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Login;