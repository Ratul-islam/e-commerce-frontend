// import './index.css'

import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import userApi from "../../api/userApi";

const Login = ({user}) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [status, setStatus] = useState(false)

  const handleChange = (e)=>{
    if(formData.email !== '' && formData.password !== ''){
      setStatus(true)
    }
    var name = e.target.name;
    setFormData((oldData) => {
        return {...oldData, [name]: e.target.value}
    })
    console.log(formData)
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    try {
      const response = await userApi.post("/reseller/login", formData )
      if(response.status===201){
        localStorage.setItem("token", response.data.token)
        navigate("/dashboard")
      }
    }catch(err){
      console.log(err)
    }
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
          Login to {user} account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit}>
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

          <div className="flex justify-center items-center mt-5">
            <button
              type="submit"
              className="cursor-pointer flex w-1/2 justify-center rounded-md bg-indigo-600 px-3 py-1.5 mt-2 text-xs font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              disabled={!status}
            >
              Log in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-xs text-gray-500">
          Don't have a account?{" "}
          <Link
            to="/reseller/register"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
