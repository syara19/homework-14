"use client";

import { useRouter } from "next/navigation";
import { register } from "../fetching/auth";
import { useState } from "react";

export default function Register() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);


  const submitHandler = async (e) => {
    e.preventDefault();
 

    try {
      const data = await register({
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
      });
      router.push("/login");
    } catch (error) {
      console.log(error.message);
     
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col items-center  justify-center px-6 py-12 lg:px-8">
      <div className="w-full  bg-white  md:mt-0 sm:max-w-md xl:p-0 ">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
          Register
        </h1>

        <form onSubmit={submitHandler} className="space-y-4 mt-10 md:space-y-6">
          <label
            className="block mb-2 text-sm font-medium text-gray-900 "
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
            placeholder="name@company.com"
            type="text"
            name="name"
          />
          <label
            className="block mb-2 text-sm font-medium text-gray-900 "
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            placeholder="name@company.com"
            type="email"
            name="email"
          />
          <label
            className="block mb-2 text-sm font-medium text-gray-900 "
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            placeholder="name@company.com"
            type={showPassword ? 'text' : 'password'}
            name="password"
          />
          <button onClick={(e) => setShowPassword(!showPassword)}>{showPassword? "Hide" : "Show"}</button>
          <br/>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}
