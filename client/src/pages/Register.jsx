// Controlled form approach
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const register = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="h-screen flex flex-col-reverse md:flex-row">
      <div className="bg-blue-100 h-full w-full justify-center items-center hidden md:flex">
        <p className="text-5xl font-bold">REGISTER</p>
      </div>
      <div className="bg-blue-300 h-full w-full flex justify-center items-center">
        <form onSubmit={register}>
          <div className="bg-white rounded-md flex flex-col gap-2 p-5">
            <input
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="bg-gray-200 p-2 rounded-sm"
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="bg-gray-200 p-2 rounded-sm"
            />
            <div className="flex items-center">
              <button
                type="submit"
                className="bg-blue-200 w-1/2 rounded-sm p-1 cursor-pointer"
              >
                Register
              </button>
              <Link className="ml-auto text-blue-500" to="/login">Login</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
