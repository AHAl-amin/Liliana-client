


import { useState } from "react";
import { FaFacebook, FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
// import { useRegisterMutation } from "../../../Redux/feature/authApi";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [formData, setFormData] = useState({

    username: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

 

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password, confirmPassword, acceptTerms } = formData;

    if (!username || !password || !confirmPassword) {
      toast.error("All fields are required.");
      return;
    }

    if (password.trim() !== confirmPassword.trim()) {
      toast.error("Passwords do not match.");
      return;
    }

    if (!acceptTerms) {
      toast.error("You must accept the terms and conditions.");
      return;
    }



    try {



      toast.success("Registration successful!");

      localStorage.setItem("userame", username);

     

    } catch (err) {
      console.error('Backend Error Response:', err); // Log error response
      const errorMessage = err?.data?.message || "Registration failed.";
      const isUserNameExists = /username.*exists/i.test(errorMessage);
      toast.error(isUserNameExists ? "User already exists." : errorMessage);
    }
  };

  return (
    <div className="flex items-center justify-center md:py-36 h-screen bg-gradient-to-r from-[#BA927C] to-[#738F9B] py-10 lora">
      <div className="bg-white p-8 rounded-lg shadow w-full md:w-1/2 lg:w-1/3">
        <h2 className="text-4xl font-bold text-center text-[#B18C7B] mb-2">Welcome to LegacySphere</h2>
        <p className="text-center text-gray-500 mb-6 text-xl">
          Access and preserve cherished memories securely
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">


       
          <input
            name="email"
            placeholder="Enter your email"
            type="email"
            // value={formData.username}
            // onChange={handleChange}
            className="w-full p-3 border border-gray-300 text-gray-700 rounded focus:outline-none focus:border-[#B18C7B]"
          />

          {/* Password */}
          <div className="relative">
            <input
              name="password"
              placeholder="Enter password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 text-gray-700 rounded focus:outline-none focus:border-[#B18C7B]"
            />
            <span
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
            >
              {showPassword ? <IoEyeOffOutline size={20} /> : <IoEyeOutline size={20} />}
            </span>
          </div>

   

          {/* Terms and Forget */}
          <div className="flex items-center justify-between">
            <label className="flex items-center cursor-pointer text-lg text-gray-500">
              <input
                name="acceptTerms"
                type="checkbox"
                checked={formData.acceptTerms}
                onChange={handleChange}
                className="mr-2 mt-[2px] "
              />
              Remember me
            </label>
            <Link to="/email_verify" className="text-gray-500 text-lg ">Forget Password</Link>

          </div>

          {/* Submit */}
          <button
            type="submit"

            className="w-full bg-[#B18C7B] text-lg text-white py-3 rounded hover:bg-[#B18C7B]/90 transition cursor-pointer"
          >
            Login
          </button>

          <p className="text-center text-xl text-gray-500 ">
              Don’t have account?{" "}
            <Link to="/sign_up" className="font-medium text-[#B18C7B] underline">
              Register
            </Link>
          </p>
          <div className="flex items-center w-2/3 mx-auto justify-center my-1">
            <div className="flex-grow h-px bg-[#d6c1b6]"></div>
            <span className="mx-4 text-sm text-[#b9988c]">Or continue with</span>
            <div className="flex-grow h-px bg-[#d6c1b6]"></div>
          </div>
          <div className="flex items-center justify-center  gap-6 mx-auto">
            <FcGoogle className="size-10 cursor-pointer" />
            <FaFacebook className="  size-10 rounded-full cursor-pointer text-[#0A66C2]" />
          </div>



        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;