"use client";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="bg-transparent p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">UniLender</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline">Log In</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
