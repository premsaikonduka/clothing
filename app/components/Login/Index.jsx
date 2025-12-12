"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function LoginModal({ open, onClose }) {
  const [phone, setPhone] = useState("");
  const [mode, setMode] = useState("email"); // email OR otp

  if (!open) return null;

  const handleOTP = (e) => {
    e.preventDefault();
    alert("OTP Requested for: " + phone);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Email Login Submitted!");
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 flex justify-center items-center z-[9999]"
      onClick={onClose}
    >
      {/* MODAL BOX */}
      <div
        className="bg-white w-full max-w-sm mx-4 p-6 rounded-lg shadow-xl relative animate-scale"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl cursor-pointer hover:text-gray-600"
        >
          <X size={20} />
        </button>

        {/* HEADER */}
        <div className="text-center mb-8 mt-2">
          <h1 className="text-2xl font-light mb-2">Sign in</h1>
          <p className="text-sm text-gray-600">
            Become a member — don't miss out on exclusive deals and offers.
          </p>
        </div>

        {/* SELECT LOGIN TYPE */}
        <div className="flex justify-center mb-6 gap-4 text-sm font-medium">
          <button
            className={`pb-1 ${mode === "email" ? "border-b-2 border-black" : "opacity-60"}`}
            onClick={() => setMode("email")}
          >
            Email Login
          </button>

          <button
            className={`pb-1 ${mode === "otp" ? "border-b-2 border-black" : "opacity-60"}`}
            onClick={() => setMode("otp")}
          >
            Mobile OTP
          </button>
        </div>

        {/* EMAIL LOGIN */}
        {mode === "email" && (
          <form className="space-y-4" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full px-4 py-3 border border-gray-300 focus:border-black outline-none text-sm"
            />

            <input
              type="password"
              placeholder="Password"
              required
              className="w-full px-4 py-3 border border-gray-300 focus:border-black outline-none text-sm"
            />

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>

              <button type="button" className="underline hover:text-gray-600">
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 text-sm font-medium hover:bg-gray-800 transition-all"
            >
              SIGN IN
            </button>
          </form>
        )}

        {/* OTP LOGIN */}
        {mode === "otp" && (
          <form onSubmit={handleOTP} className="space-y-4">
            <label className="text-sm text-gray-600">Enter Your Mobile Number</label>

            <div className="flex gap-2 mt-2 border p-2 rounded">
              <span className="text-gray-700 font-medium">+91</span>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full outline-none"
                placeholder="Enter Mobile Number"
              />
            </div>

            <p className="text-xs text-gray-500">
              By continuing, you agree to our{" "}
              <span className="underline">Terms</span> &{" "}
              <span className="underline">Privacy Policy</span>.
            </p>

            <button
              type="submit"
              className="w-full bg-black hover:bg-gray-900 text-white py-3 transition"
            >
              Request OTP
            </button>
          </form>
        )}

        {/* FOOTER */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 mb-4">Not a member yet?</p>
          <button className="w-full border border-black py-3 text-sm font-medium hover:bg-gray-50 transition-all">
            BECOME A MEMBER
          </button>
        </div>
      </div>

      {/* ANIMATION */}
      <style jsx>{`
        @keyframes scaleIn {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-scale { animation: scaleIn 0.25s ease-out; }
      `}</style>
    </div>
  );
}
