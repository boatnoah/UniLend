"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsSignedIn(true);
    }
  }, []);

  const handleSignOut = () => {
    setIsSignedIn(false);
    localStorage.removeItem("token");
  };

  return isSignedIn ? (
    <nav className="bg-transparent p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">UniLend</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative w-8 h-8">
              <Image
                src="/UniLandLogo.png" // Replace with the path to the profile image
                alt="Profile"
                width={50} // Set the width of the image (in pixels)
                height={50} // Set the height of the image (in pixels)
                className="rounded-full object-cover"
              />
            </div>
            <Link href={"/"} onClick={handleSignOut}>
              <Button variant="outline">Sign Out</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  ) : (
    <nav className="bg-transparent p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">UniLend</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative w-8 h-8">Image</div>
            <Link href={"/signin"}>
              <Button variant="outline">Sign In</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
