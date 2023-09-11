"use client";

import { useRouter } from "next/navigation";
import { register } from "../fetching/auth";
import { useState } from "react";
import Link from "next/link";

export default function Register() {
  const router = useRouter();

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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full mx-auto p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl  text-slate-800 font-bold text-center mb-6">
          Register
        </h2>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Name
            </label>
            <input
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="name"
              type="text"
              name="name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="email"
              type="email"
              name="email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="password"
              type="password"
              name="password"
            />
          </div>
          <p className="text-center text-gray-700">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500">
              Login here
            </Link>
          </p>
          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white rounded-md py-2"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
