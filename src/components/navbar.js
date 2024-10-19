import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-transparent p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">UniLend</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative w-8 h-8">Image</div>
            <Button variant="outline">Log In</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
