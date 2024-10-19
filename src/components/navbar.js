import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-transparent p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">UniLender</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="Logo"
              width={32}
              height={32}
              className="rounded-full"
            />
            <Button variant="outline">Log In</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
