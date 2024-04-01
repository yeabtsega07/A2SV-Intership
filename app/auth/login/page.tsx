'use client'

import { useLoginMutation } from "@/redux/slice/authAPI";
import { updateUser, updateUserEmail } from "@/redux/slice/authSlice";
import { AppDispatch } from "@/redux/store";
import { LoginCredentials, SignupCredentials } from "@/types/types";
import { redirect, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const SignUpForm: React.FC = () => {
  const [formData, setFormData] = useState<LoginCredentials>({
    email: "",
    password: "",
  });

  
  
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  
  const [login, { isLoading }] = useLoginMutation();
  
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
        const response = await login(formData).unwrap();

        dispatch(updateUser(response.data));
        // SuccessToast("Login successful!!!");
        router.push('/opportunities')
      } catch (error: any) {
        console.error("Signup error:", error);
        // ErrorToast(error.data.message || "Invalid email or password!");
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
                  className="w-full inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600"
                >
                  Sign Up with Google
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
                <label htmlFor="email" className="sr-only">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Email Address"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  placeholder="Password"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
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
