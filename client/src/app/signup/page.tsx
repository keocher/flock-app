"use client";

import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
  e.preventDefault();

  // Loading feedback
  const loadingToast = toast.loading("Creating your account...");

  try {
    const res = await axios.post("http://localhost:4000/v1/auth/signup", {
      email,
      password,
      displayName,
    });

    console.log(res.data);

    toast.dismiss(loadingToast);
    toast.success("Account created successfully 🎉");


    // Optional: Redirect to login after 1.5s
    setTimeout(() => {
        window.location.href = "/login";
      }, 1500);
    } 
    catch (err: any) {
      toast.dismiss(loadingToast);
      const errorMsg =
        err.response?.data?.error?.message || "Signup failed. Please try again.";
      toast.error(errorMsg);
      console.error("Signup error:", errorMsg);
    }
};


return (
    <div className="flex min-h-screen">
      {/* Left Panel (Form Section) */}
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
          px-10
          bg-flockbeige
        "
      >
        {/* Logo / Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 flex items-center gap-3"
        >
          <img
            src="/flock-logo.svg"
            alt="Flock logo"
            className="w-10 h-10"
          />
          <h1 className="text-2xl font-bold text-flockblack">Flock</h1>
        </motion.div>

        {/* Headings */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-flockgreen mb-1 text-sm tracking-wide uppercase">
            Start your journey
          </h2>
          <h1 className="text-3xl md:text-4xl font-semibold mb-6 leading-tight text-flockblack/90">
            Create your Flock Account
          </h1>
        </motion.div>

        {/* Signup Form */}
        <motion.form
          onSubmit={handleSignup}
          className="w-full max-w-sm space-y-5"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Display Name */}
          <div>
            <label className="block text-flockblack mb-1 text-sm">
              Display Name
            </label>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
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
              placeholder="Your name"
            />
          </div>

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
              placeholder="example@email.com"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-flockblack mb-1 text-sm">
              Password
            </label>
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
              hover:scale-[1.02]
              transition-all 
              duration-200
              shadow-md 
              hover:shadow-xl
            "
          >
            Sign Up
          </motion.button>
        </motion.form>

        {/* Footer Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 text-flockblack text-sm"
        >
          Have an account?{" "}
          <Link href="/login" className="text-flockgreen hover:underline">
            Sign in
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
