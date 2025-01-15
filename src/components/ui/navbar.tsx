"use client";

import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

export default function Navbar() {
  const { isSignedIn, user } = useUser();

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-black shadow-md">
      <Link href="/" className="text-2xl font-bold text-[#C084FC] hover:opacity-80">
        MyApp
      </Link>
      <div className="flex items-center space-x-6">
        {isSignedIn ? (
          <div className="flex items-center space-x-2">
            {user?.profileImageUrl && (
              <img
                src={user.profileImageUrl}
                alt="Profile"
                width={32}
                height={32}
                className="rounded-full border-2 border-[#C084FC]"
              />
            )}
            <span className="text-white font-medium">{user?.fullName || "User"}</span>
            <UserButton />
          </div>
        ) : (
          <SignInButton>
            <button className="bg-[#C084FC] text-white px-4 py-2 rounded-md hover:bg-[#A26EDB] transition-all">
              Sign In
            </button>
          </SignInButton>
        )}
      </div>
    </nav>
  );
}
