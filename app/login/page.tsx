"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Input from "../components/Input";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState("");
  const [isExiting, setIsExiting] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setMessage("");
  };

  const handleNavigation = (url: string) => {
    setRedirectUrl(url);
    setIsExiting(true);
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    console.log("Response:", data);

    if (res.ok) {
      setRedirectUrl("/dashboard");
      setIsExiting(true);
    } else {
      setMessage(data.message || "Login gagal");
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen relative overflow-hidden">
      {/* Animasi */}
      <div
        className="bg-white w-1/2 h-screen absolute pr-30 pl-10 left-0 rounded-r-[100px] flex justify-center flex-col"
      >
        <h2 className="text-2xl font-bold mb-4 text-black">Login</h2>
        <form onSubmit={handleSubmit}>
          <Input
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-full bg-[#a05fb9] text-white py-2 rounded-lg cursor-pointer"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        {message && <p className="text-red-500">{message}</p>}
        <button
          onClick={() => handleNavigation("/register")}
          className="mt-5 text-blue-500 cursor-pointer"
        >
          Don't have an account? Register
        </button>
      </div>
    </div>
  );
};

export default Login;
function setRedirectUrl(url: any) {
  throw new Error("Function not implemented.");
}