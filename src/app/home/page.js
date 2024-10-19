import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const storedValue = localStorage.getItem("token");
    console.log("local storage", storedValue);
  }, []);

  return <div className="h-screen bg-black">HomePage</div>;
}
