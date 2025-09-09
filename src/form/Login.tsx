import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");
  const navigate = useNavigate();

  let handleLogin = async () => {
    try {

      const res = await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/api/user/login",
        {
          username: username,
          password: password,
        }
      );

      console.log(res);
      
      localStorage.setItem("token", res.data.token);

      if(res.data.user == null){
        toast.error("user cannot be found")
      }
      
      const user = res.data.user;
      console.log(res.data.message);

      if (user.role == "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }

      toast.success("Login successful...");
    } catch (err) {
      console.log(err);
      toast.error("Login failed ");
    }
  };
  return (
    <div className="bg-[url('https://wallpapers.com/images/high/soil-and-soft-green-nature-zr50yf854y5f1c18.webp')] bg-cover bg-fixed bg-no-repeat h-screen w-full flex items-center justify-center">
      <div className="bg-white/30 h-[80%] w-[30%] m-10 rounded-3xl flex flex-col items-center shadow-xl">
          <h1 className="mt-10 mb-6 text-4xl font-bold">Login</h1>
          <input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
            className="w-[75%] h-10 border-1 rounded-lg m-5 p-2.5 focus:border-blue-500 border-gray-400 bg-white shadow-xl focus:outline-none"
            placeholder="Enter username"
            required
          />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            className="w-[75%] h-10 border-1 rounded-lg p-2.5 focus:border-blue-500 border-gray-400 bg-white mt-3 shadow-xl focus:outline-none"
            placeholder="Enter password"
            required
          />

          <button
            type="submit"
            className="cursor-pointer w-[75%] h-10 bg-blue-700 text-white rounded-lg mt-20 hover:bg-blue-600"
            onClick={handleLogin}
          >
            Login
          </button>
          <span className="mt-10">
            If you don't have an account please{" "}
            <Link to="/register">Register</Link>
          </span>
        </div>
        <div className="h-[80%] w-[50%] m-5"></div> 
    </div>
  )
}

export default Login
