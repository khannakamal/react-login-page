// src/pages/LoginPage.tsx
import React, { useState } from "react";
import InputField from "../components/InputField";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)

  const handleLogin = () => {
    if (username === "John Doe" && password === "johndoe@123") {
      setSuccess("Login successful!");
      setError("");
    } else {
      setSuccess("");
      setError("Invalid username or password");
    }
  };
  const changeVisiblity = ()=>{
    setIsPasswordVisible(!isPasswordVisible)
  }

  return (
    <section className="bg-gray-100 min-h-screen flex box-border justify-center items-center">
      <div className="bg-white rounded-2xl flex max-w-3xl p-5 items-center">
        <div className="md:w-1/2 px-8">
          <h2 className="font-bold text-3xl text-[#002D74]">Login</h2>
          <div className="flex flex-col gap-2 mt-10">
            {error && (
              <p className="text-red-500 text-xs italic mb-4" role="alert">
                {error}
              </p>
            )}
            {success && (
              <p className="text-green-500 text-xs italic mb-4">{success}</p>
            )}
            <InputField
              id="username"
              label="Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="example@gamil.com"
              changeVisiblity={changeVisiblity}
            />
            <InputField
              id="password"
              label="Password"
              type={!isPasswordVisible ? "password" : "text"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="your password"
              changeVisiblity={changeVisiblity}
            />
            <button
              onClick={handleLogin}
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </div>
        </div>
        <div className="md:block hidden w-1/2">
          <img
            className="rounded-2xl max-h-[1600px]"
            src="https://images.unsplash.com/photo-1552010099-5dc86fcfaa38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxmcmVzaHxlbnwwfDF8fHwxNzEyMTU4MDk0fDA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="login form image"
          />
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
