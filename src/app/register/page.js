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
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={submitHandler}>
              <div className="form-control">
                <label className="label" htmlFor="name">
                  <span className="label-text">Name</span>
                </label>
                <input
                  className="input input-bordered "
                  placeholder="name"
                  type="text"
                  name="name"
                />
              </div>
              <div className="form-control">
                <label className="label" htmlFor="email">
                  <span className="label-text">Email</span>
                </label>
                <input
                  className="input input-bordered "
                  placeholder="email"
                  type="email"
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label" htmlFor="password">
                  <span className="label-text">Password</span>
                </label>
                <input
                  className="input input-bordered "
                  placeholder="password"
                  type="password"
                  name="password"
                />
              </div>
              <label className="label">
                <a
                  href="https://localhost:3000/login"
                  className="label-text-alt link link-hover"
                >
                  Have an account?
                </a>
              </label>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
