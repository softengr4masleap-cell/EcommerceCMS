"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [topInfo, setTopInfo] = useState({ email: "", contact: "" });

  useEffect(()=>{
    fetch('http://localhost:4000/api/topmenu/getAll')
    .then(res => res.json())
    .then((data)=>{
      if (Array.isArray(data) && data.length > 0) {
          setTopInfo({
            email: data[0].email || "econnerce@gmail.com",
            contact: data[0].contact || "+91 9876543210",
          });
        }
    })
    .catch(() => {
        setTopInfo({ email: "econnerce@gmail.com", contact: "+91 9876543210" });
      });

  },[]);





  return (
    <>
      <nav className="bg-[#ffffff] sticky top-0 z-50 shadow-md animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-10">
            <div className="font-semibold">
              <Link href="/" className="hover:underline text-black transition text-sm sm:text-base">
                {topInfo.email}
              </Link>
            </div>
            <div className="font-semibold">
              <Link href="/about" className="hover:underline text-black transition text-sm sm:text-base">
                {topInfo.contact}
              </Link>
            </div>
          </div>
        </div>
      </nav>
      
      <nav className="bg-[#7BB2D9] px-4 py-3 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-xl font-bold text-white">SmartShop</div>
          <div className="hidden md:flex gap-6 font-semibold text-white">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/products" className="hover:underline">Products</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
            <Link href="/admin" className="hover:underline">Admin</Link>
          </div>
          <div className="hidden md:flex gap-3">
            <Link href="/login" className="px-4 py-1 rounded border border-white text-white hover:bg-white hover:text-[#7BB2D9] transition">Login</Link>
            <Link href="/register" className="px-4 py-1 rounded border border-white text-white hover:bg-white hover:text-[#7BB2D9] transition">Register</Link>
          </div>
          <button className="md:hidden text-white" onClick={() => setOpen(true)}>
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </nav>
      {open && (
        <div className="fixed inset-0 bg-white bg-opacity-40 z-50">
          <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-6 flex flex-col animate-slide-in">
            <button className="mb-6 self-end" onClick={() => setOpen(false)}>
              <X className="h-6 w-6 text-gray-700" />
            </button>
            <nav className="flex flex-col gap-4 font-semibold">
              <Link href="/" onClick={() => setOpen(false)} className="text-[#7BB2D9] hover:underline">Home</Link>
              <Link href="/about" onClick={() => setOpen(false)} className="text-[#7BB2D9] hover:underline">About</Link>
              <Link href="/products" onClick={() => setOpen(false)} className="text-[#7BB2D9] hover:underline">Products</Link>
              <Link href="/contact" onClick={() => setOpen(false)} className="text-[#7BB2D9] hover:underline">Contact</Link>
              <hr className="my-2" />
              <Link href="/login" onClick={() => setOpen(false)} className="px-4 py-1 rounded border border-[#7BB2D9] text-[#7BB2D9] hover:bg-[#7BB2D9] hover:text-white transition">Login</Link>
              <Link href="/register" onClick={() => setOpen(false)} className="px-4 py-1 rounded border border-[#7BB2D9] text-[#7BB2D9] hover:bg-[#7BB2D9] hover:text-white transition">Register</Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
