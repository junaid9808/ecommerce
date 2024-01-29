import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage({ setLoggedIn }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((preData) => ({
      ...preData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
    navigate("/");
  };
  return (
    <>
      <div className="mt-16  flex justify-center items-center flex-col bg-blue-400 w-96 p-2 rounded-md m-auto">
        <h1 className="text-2xl text-white">Please Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <label className="">Email:</label>
            <div className="">
              <input
                className=" mt-2 border-2  w-72 border-white bg-transparent py-1.5 pl-1 text-white placeholder:text-black focus:ring-0 sm:text-sm sm:leading-6"
                type="email"
                placeholder="Enter Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mt-4">
            <label>Password:</label>
            <input
              className="text-2xl mt-2 block flex-1 w-72 border-2 border-white bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-black focus:ring-0 sm:text-sm sm:leading-6"
              type="password"
              placeholder="Enter Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-center items-center mt-8">
            <button
              className="bg-white p-2 w-28 rounded-md hover:bg-blue-100"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
