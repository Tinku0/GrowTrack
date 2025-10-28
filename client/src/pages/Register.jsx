// Controlled form approach
import { useState } from "react";

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
    <div className="h-screen flex">
      <div className="bg-blue-100 h-full w-full flex justify-center items-center">
        <p className="text-5xl font-bold">REGISTER</p>
      </div>
      <div className="bg-blue-300 h-full w-full flex justify-center items-center">
        <form onSubmit={register} className="flex flex-col gap-2 bg-white p-4">
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
          <button
            type="submit"
            className="bg-blue-300 rounded-sm p-2 cursor-pointer"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
