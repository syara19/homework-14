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
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left"></div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={submitHandler}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <Link
                    className="label-text-alt link link-hover"
                    href={"/register"}
                  >
                    Dont have an account?
                  </Link>
                </label>
              </div>
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
