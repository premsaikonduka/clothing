"use client";

import { useState } from "react";
import { useRegisterCustomerMutation } from "@/app/redux-tookit/services/authApi";

export default function Register({ onClose }) {
  const [registerCustomer, { isLoading }] = useRegisterCustomerMutation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Handle Inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit API
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await registerCustomer(formData).unwrap();
      console.log("REGISTER SUCCESS:", res);

      // CLOSE MODAL ON SUCCESS (no alert)
      onClose();
    } catch (err) {
      console.error("REGISTER ERROR:", err);
      // No alert, no popup. Just console log.
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black/40"
      onClick={onClose}
    >
      {/* MODAL BOX */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white max-w-md w-full mx-4 p-6 rounded-lg shadow-xl relative animate-scale"
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-xl cursor-pointer hover:text-gray-600"
        >
          ×
        </button>

        {/* FORM ONLY */}
        <form className="space-y-3" onSubmit={handleSubmit}>
          
          {/* Full Name */}
          <input
            name="name"
            type="text"
            placeholder="Full Name*"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 text-sm focus:border-black outline-none"
          />

          {/* Email */}
          <input
            name="email"
            type="email"
            placeholder="Email*"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 text-sm focus:border-black outline-none"
          />

          {/* Password */}
          <input
            name="password"
            type="password"
            placeholder="Password*"
            required
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 text-sm focus:border-black outline-none"
          />

          {/* REGISTER BUTTON */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-black text-white py-2 text-sm font-medium hover:bg-gray-800 transition-colors disabled:opacity-50"
          >
            {isLoading ? "Registering..." : "REGISTER"}
          </button>
        </form>
      </div>

      {/* ANIMATION */}
      <style jsx>{`
        @keyframes scaleIn {
          0% {
            opacity: 0;
            transform: scale(0.92);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scale {
          animation: scaleIn 0.25s ease-out;
        }
      `}</style>
    </div>
  );
}
