"use client";

import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import { motion } from "framer-motion";


export default function LoginPage() {
    const [email, setEmail] = useState(""); // Store user input for email field
    const [password, setPassword] = useState(""); // Store user input for password field

    const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();

  // Show a loading toast while the login request is processing
  const loadingToast = toast.loading("Signing you in...");

  try {
    const res = await axios.post("http://localhost:4000/v1/auth/signin", {
      email,
      password,
    });

    console.log(res.data);

    // Dismiss loading toast
    toast.dismiss(loadingToast);

    // Success toast
    toast.success("Login successful 🎉");

    // Optional: redirect after short delay
    setTimeout(() => {
      window.location.href = "/"; // Change this to your intended page
    }, 1500);
    } 
    catch (err: any) {
    toast.dismiss(loadingToast);

    // Extract backend message or use default fallback
    const errorMsg =
      err.response?.data?.error?.message || "Login failed. Please try again.";

    // Show error toast
    toast.error(errorMsg);
    console.error("Login error:", errorMsg);
  }
};


return (
  <div className="flex min-h-screen">
    {/* Left Panel (Form) */}
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
        w-full
        md:w-1/2
        flex
        flex-col
        justify-center
        items-center
        bg-flockbeige
        p-10
      "
    >
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl font-bold text-flockblack mb-2"
      >
        Welcome Back
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-flockgreen mb-6"
      >
        Sign in to continue your journey
      </motion.p>

      <motion.form
        onSubmit={handleLogin}
        className="w-full max-w-sm space-y-5"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {/* Email */}
        <div>
          <label className="block text-flockblack mb-1 text-sm">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="
              w-full
              p-3
              rounded-lg
              border
              border-flockgreen
              focus:outline-none
              focus:ring-2
              focus:ring-flockyellow
            "
            placeholder="you@example.com"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-flockblack mb-1 text-sm">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="
              w-full
              p-3
              rounded-lg
              border
              border-flockgreen
              focus:outline-none
              focus:ring-2
              focus:ring-flockyellow
            "
            placeholder="••••••••"
          />
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300 }}
          type="submit"
          className="
            w-full
            py-2.5
            rounded-lg
            bg-[#668c4a] text-white
            hover:bg-[#5a7b41]
            transition-all
            duration-200
            shadow-md
            hover:shadow-xl
          "
        >
          Sign In
        </motion.button>
      </motion.form>

      {/* Signup Link */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-6 text-flockblack text-sm"
      >
        Don’t have an account?{" "}
        <Link href="/signup" className="text-flockgreen hover:underline">
          Sign up here
        </Link>
      </motion.p>
    </motion.div>

    {/* Right Panel (Background) */}
    <div
      className="
        hidden
        md:block
        w-1/2
        bg-cover
        bg-center
      "
      style={{
        backgroundImage: "url('/login-background.png')",
      }}
    ></div>
  </div>
  );
}
