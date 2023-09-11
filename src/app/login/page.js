"use client";

import { useRouter } from "next/navigation";
import { login } from "../fetching/auth";
import Link from "next/link";

export default function Login() {
  const router = useRouter();
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await login({
        email: e.target.email.value,
        password: e.target.password.value,
      });

      router.push("/");
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full mx-auto p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl text-slate-800 font-bold text-center mb-6">
          Login
        </h2>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white rounded-md py-2"
            >
              Login
            </button>
          </div>
          <p className="text-center">
            Dont have an account?
            <Link href="/register" className="text-blue-500">
              Click here to register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
