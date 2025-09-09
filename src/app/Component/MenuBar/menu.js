"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdShoppingBag } from "react-icons/md";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="bg-[#ffffff] sticky top-0 z-50 shadow-md animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-10">
            <div className="hidden md:flex gap-6 text-white font-semibold">
              <Link href="/" className="hover:underline text-black transition">econnerce@gmail.com</Link>
              <Link href="/about" className="hover:underline text-black transition">+91 9876543210</Link>
            </div>

            <div className="flex gap-3">
              <Link
                href="/login"
                className="hover:underline text-black transition"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="hover:underline text-black transition"
              >
                Registration
              </Link>
            </div>
          </div>
        </div>

      </nav>
      
      <nav className="bg-[#7BB2D9] sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16">

            <button
              className="md:hidden text-white"
              onClick={() => setOpen(true)}
            >
              <Menu className="h-7 w-7" />
            </button>

            <div className="hidden md:flex gap-6 text-white font-semibold">
              <Link href="/" className="hover:underline">Home</Link>
              <Link href="/about" className="hover:underline">About</Link>
              <Link href="/contact" className="hover:underline">Contact</Link>
            </div>

            <div className="flex-1 flex justify-center mx-4">
              <input
                type="text"
                placeholder="Search..."
                className="rounded-md px-3 py-1 w-[220px] sm:w-[200px] md:w-[300px] text-black"
                style={{ borderColor: 'white', borderWidth: '1px', backgroundColor: 'white' }}
              />
            </div>

            <div className="flex gap-3 justify-end">
              <Link
                href="/cart"
                className="flex items-center gap-2 text-white border border-white px-3 py-1 rounded-md hover:bg-white hover:text-black transition"
              >
                <FaShoppingCart className="text-lg" />
                Add to Cart
              </Link>

              <Link
                href="/checkout"
                className="flex items-center gap-2 text-white border border-white px-3 py-1 rounded-md hover:bg-white hover:text-black transition"
              >
                <MdShoppingBag className="text-lg" />
                Buy Now
              </Link>
            </div>
          </div>
        </div>


        {open && (
          <div className="fixed inset-0 bg-black bg-opacity-40 z-50">
            <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg p-4">
              <button
                className="mb-4"
                onClick={() => setOpen(false)}
              >
                <X className="h-6 w-6 text-gray-700" />
              </button>
              <nav className="flex flex-col gap-4">
                <Link href="/" onClick={() => setOpen(false)} className="text-gray-700 hover:text-blue-600">Home</Link>
                <Link href="/about" onClick={() => setOpen(false)} className="text-gray-700 hover:text-blue-600">About</Link>
                <Link href="/contact" onClick={() => setOpen(false)} className="text-gray-700 hover:text-blue-600">Contact</Link>
              </nav>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
