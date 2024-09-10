import Link from "next/link";
import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white md:h-16 py-4 px-6 flex flex-col sm:flex-row items-center justify-between">
      <div className="flex-shrink-0 mb-4 sm:mb-0">
        <Image
          className="rounded"
          src="/ai-logo.png"
          alt="logo"
          width={100}
          height={100}
        />
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-wrap justify-center sm:justify-center gap-4 flex-grow">
        <Link href="/" legacyBehavior>
          <a className="hover:underline">Home</a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a className="hover:underline">News</a>
        </Link>
        <Link href="/blog" legacyBehavior>
          <a className="hover:underline">AI Apps</a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a className="hover:underline">About</a>
        </Link>
        <Link href="/contact" legacyBehavior>
          <a className="hover:underline">Contact</a>
        </Link>
      </nav>

      {/* Login and Signup Buttons */}
      <div className="flex gap-4 mt-4 sm:mt-0">
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Login
        </button>
        <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
          Sign up
        </button>
      </div>
    </header>
  );
};

export default Header;
