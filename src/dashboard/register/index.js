// import './index.css'

import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const {status, setStatus} = useState(false)
  const [formData, setFormData] = useState({})
  const [isMatched, setIsMatched] = useState(true)

  const handleChange = (e)=>{
    var name = e.target.name;
    setFormData((oldData) => {
        return {...oldData, [name]: e.target.value}
    })
  }
  const confirmPass =(e)=>{
    if(e.target.value !== formData.password) setIsMatched(false)
    if(e.target.value === formData.password) setIsMatched(true)
  }



  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Register as a Reseller
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form >
          <div className="flex justify-between gap-2">
            <div className="w-[50%]">
              <label
                htmlFor="firstName"
                className="block text-xs font-medium leading-6 text-gray-900"
              >
                First Name
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
                  onChange={handleChange}

                />
              </div>
            </div>
            <div className="w-[50%]">
              <label
                htmlFor="lastName"
                className="block text-xs font-medium leading-6 text-gray-900"
              >
                Last Name
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xs font-medium leading-6 text-gray-900"
            >
              Phone Number
            </label>
            <div className="mt-1">
              <input
                id="phone"
                name="phoneNumber"
                value={formData.phoneNumber}
                type="tel"
                // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required
                className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xs font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-xs font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                value={formData.password}
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-xs font-medium leading-6 text-gray-900"
              >
                Confirm Password
              </label>
            </div>
            <div className="mt-1">
              <input
                id="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
                onChange={confirmPass}
              />
            </div>
          </div>
          {
            !isMatched && 
            <div>
              <p className="text-red-600 text-xs">passwords does not match</p>
            </div>
          }
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-xs font-medium leading-6 text-gray-900"
              >
                Referral (Optional)
              </label>
            </div>
            <div className="mt-1">
              <input
                id="password"
                name="referredBy"
                type="text"
                s
                className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
                onChange={handleChange}
              />
            </div>
          </div>
          {/* {
            !isMatched && 
            <div>
              <p className="text-red-600 text-xs">referral is not valid</p>
            </div>
          } */}

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 mt-2 text-xs font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              disabled={!status}
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-xs text-gray-500">
          Already Registered?{" "}
          <Link
            to="/reseller/login"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
