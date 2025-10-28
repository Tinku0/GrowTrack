// Uncontrolled form approach
const Login = () => {
  const login = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };

  return (
    <div className="h-screen flex">
      <div className="bg-blue-100 h-full w-full flex justify-center items-center">
        <p className="text-5xl font-bold">LOGIN</p>
      </div>
      <div className="bg-blue-300 h-full w-full flex justify-center items-center">
        <form onSubmit={login}>
          <div className="bg-white rounded-md flex flex-col gap-2 p-3">
            <input
              name="username"
              className="bg-gray-300 p-2 rounded-sm"
              type="text"
              placeholder="Username"
            />
            <input
              name="password"
              className="bg-gray-300 p-2 rounded-sm"
              type="text"
              placeholder="Password"
            />
            <button
              className="bg-blue-200 w-1/2 rounded-sm p-1 cursor-pointer"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
