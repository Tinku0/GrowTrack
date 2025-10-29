// Uncontrolled form approach
import { Link } from 'react-router-dom';
import { Lineicons } from "@lineiconshq/react-lineicons";
import { EyeSolid, EyeStroke } from "@lineiconshq/free-icons";
import { useState } from 'react';
 
const Login = () => {

  const [showPassword, setShowPassword] = useState(false);
  const login = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };

  return (
    <div className="h-screen flex flex-col-reverse md:flex-row">
      <div className="bg-blue-100 h-full w-full justify-center items-center hidden md:flex">
        <p className="text-5xl font-bold">LOGIN</p>
      </div>
      <div className="bg-blue-300 h-full w-full flex justify-center items-center">
        <form onSubmit={login}>
          <div className="bg-white rounded-md flex flex-col gap-2 p-5">
            <input
              name="username"
              className="bg-gray-200 p-2 rounded-sm focus:outline-none"
              type="text"
              placeholder="Username"
            />
            <div className="flex items-center relative">
              <input
                name='password'
                className="bg-gray-200 p-2 rounded-sm focus:outline-none"
                type={showPassword ? 'text': 'password'}
                placeholder="Password"
              />
              <Lineicons onClick={() => {setShowPassword(!showPassword)}} className='absolute right-2' icon={showPassword ? EyeSolid : EyeStroke} />
            </div>
            <div className="flex items-center">
              <button
                className="bg-blue-200 w-1/2 rounded-sm p-1 cursor-pointer"
                type="submit"
              >
                Login
              </button>
              <Link className="ml-auto text-blue-500" to="/register">
                Register
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
