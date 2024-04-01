"use client";

import { useSignupMutation } from "@/redux/slice/authAPI";
import { updateUserEmail } from "@/redux/slice/authSlice";
import { AppDispatch } from "@/redux/store";
import { SignupCredentials } from "@/types/types";
import { redirect, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";

const SignUpForm: React.FC = () => {
  const [formData, setFormData] = useState<SignupCredentials>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "student",
  });

  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const [signup, { isLoading }] = useSignupMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signup(formData).unwrap();
      dispatch(updateUserEmail(formData.email));
      // SuccessToast("Signup successful!!!");
      router.push("/auth/verifyEmail");
    } catch (error: any) {
      // ErrorToast(error.data.message || "Invalid credential");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign Up Today!
        </h2>
        <div className="mt-8">
          <div className="mt-6">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <button
                  type="button"
                  className="w-full inline-flex justify-center gap-2 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-blue-800"
                >
                  <FcGoogle size={25} />
                  <span className="pt-[1px] text-sm font-bold text-blue-800">
                    Sign Up with Google
                  </span>
                </button>
              </div>

              <div className="relative mt-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Or Sign Up with Email
                  </span>
                </div>
              </div>

              <div>
                <label htmlFor="name" className=" pb-[4px] block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Full Name"
                  className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="email" className=" pb-[4px] block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Email Address"
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="password" className=" pb-[4px] block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  placeholder="Password"
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className=" pb-[4px] block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  placeholder="Confirm Password"
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  style={{ opacity: isLoading ? 0.5 : 1 }}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-indigo-800 hover:bg-indigo-700"
                >
                  Continue
                </button>
              </div>
            </form>

            <div className="mt-6 text-center">
              <a
                href="/login"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Already have an account? Login
              </a>
            </div>
            <p className="mt-2 text-center text-sm text-gray-600">
              By clicking &apos; Continue &apos;, you acknowledge that you have
              read and accepted our{" "}
              <a
                href="/terms"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="/privacy"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
