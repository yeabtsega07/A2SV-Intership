"use client";
import React, { useState, useEffect, useRef, use } from "react";
import { redirect, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";;
import { useVerifyEmailMutation } from "@/redux/slice/authAPI";
import { AppDispatch, RootState } from "@/redux/store";
import { updateUser } from "@/redux/slice/authSlice";

const VerifyEmail = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const [timeLeft, setTimeLeft] = useState(30);
  const [jobRedirect, setJobRedirect] = useState(false);
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (timeLeft === 0) {
      return;
    }
    const intervalId = setInterval(() => {
      setTimeLeft((timeLeft) => timeLeft - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const handleChange: (
    element: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void = (element, index) => {
    const newOtp = [...otp];
    newOtp[index] = element.target.value;
    setOtp(newOtp);
    if (element.target.value && index < otp.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const router = useRouter()
  const [verifyEmail, { isLoading }] = useVerifyEmailMutation();

  const handleSubmit = async () => {
    const otpCode = otp.join("");
    try {
      const res = await verifyEmail({
        otp: otpCode,
        email: user?.email || "",
      }).unwrap();

      setJobRedirect(true);
    //   SuccessToast("OTP Verified Successfully!");
      dispatch(updateUser(res.data));
      router.push('/opportunities')
    } catch (err: any) {
    //   ErrorToast(err.data.message || "Invalid OTP. Please try again.");
    }
  };



  return (
    <div className="flex flex-col justify-center items-center text-[14px]">
      <div className="h-screen flex justify-center flex-col gap-10 items-center w-[50%]">
        <div className="text-4xl leading-9 text-center font-extrabold w-[50%]">
          Verify Email
        </div>
        <div className="w-[50%] text-[14px]">
          <span className="text-gray-700">
            We&apos;ve sent a verification code to the email address you
            provided. To complete the verification process, please enter the
            code here.
          </span>
        </div>
        <div className="flex gap-2 w-[50%] items-center justify-between">
          {otp.map((value, index) => (
            <input
              key={index}
              type="text"
              name={`otp-${index}`}
              value={value}
              onChange={(e) => handleChange(e, index)}
              maxLength={1}
              placeholder="0"
              className="w-[20%] h-12 px-2 border-2 border-purple-500 rounded-md focus:outline-none focus:ring focus:ring-blue-400 flex items-center justify-center text-center font-semibold text-lg"
              ref={(el) => (inputsRef.current[index] = el)}
            />
          ))}
        </div>
        <div className="mt-4 flex items-center justify-center flex-col">
          <span className="">
            You can request to{" "}
            <span className="font-bold text-primary-600">Resend code</span> in
          </span>
          <span className="block font-bold text-primary-600">
            in {timeLeft}s
          </span>
        </div>
        <button
          onClick={handleSubmit}
          disabled={isLoading}
          style={{ opacity: isLoading ? 0.5 : 1 }}
          className="w-[50%] h-auto rounded-[80px] border text-white bg-primary-500 border-gray-300 px-4 py-3 mx-4 my-2 flex items-center justify-center gap-2"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default VerifyEmail;
