"use client";
import { useState } from "react";

const page = () => {
  const [data, setData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(data); 
  }

  return (
    <div>

      <form className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Username"
          className="border border-gray-300 rounded-md p-2 mb-4 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-300 rounded-md p-2 mb-4 w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 transition"
        >
          Login
        </button>
      </form>


    </div>
  );
};

export default page;
