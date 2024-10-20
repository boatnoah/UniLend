import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Camera, Calculator, GraduationCap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Borrow What You Need, Lend What You Don't
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              UniLend connects university students to share resources, save
              money, and make campus life easier.
            </p>
            <div className="flex justify-center space-x-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Start Borrowing
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-gray-300 border-gray-300 hover:bg-gray-700"
              >
                List an Item
              </Button>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              How UniLend Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-gray-700 border-gray-600">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <BookOpen className="mr-2 h-6 w-6 text-blue-400" />
                    List Your Items
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Share your rarely used items with fellow students who need
                    them.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-700 border-gray-600">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <Camera className="mr-2 h-6 w-6 text-blue-400" />
                    Browse & Borrow
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Find and request the items you need for your courses or
                    projects.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-700 border-gray-600">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <Calculator className="mr-2 h-6 w-6 text-blue-400" />
                    Save Money
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Access resources without the hefty price tag of buying new.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Items Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Popular Items on UniLend
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Graphing Calculator",
                  image: "/placeholder.svg?height=200&width=200",
                },
                {
                  name: "DSLR Camera",
                  image: "/placeholder.svg?height=200&width=200",
                },
                {
                  name: "Textbooks",
                  image: "/placeholder.svg?height=200&width=200",
                },
                {
                  name: "Formal Wear",
                  image: "/placeholder.svg?height=200&width=200",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg shadow-md overflow-hidden"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={200}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2 text-white">
                      {item.name}
                    </h3>
                    <Button
                      variant="outline"
                      className="w-full text-gray-300 border-gray-300 hover:bg-gray-700"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              What Students Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  quote:
                    "UniLend saved me hundreds on textbooks this semester!",
                  author: "Alex, Computer Science",
                },
                {
                  quote:
                    "I borrowed a suit for my internship interview. Couldn't have done it without UniLend!",
                  author: "Jamie, Business Administration",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="bg-gray-700 border-gray-600">
                  <CardContent className="pt-6">
                    <p className="text-lg text-gray-300 mb-4">
                      "{testimonial.quote}"
                    </p>
                    <p className="font-semibold text-white">
                      - {testimonial.author}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to start sharing and saving?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join the UniLend community today and experience the power of
              collaborative consumption on campus.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100"
              asChild
            >
              <Link href="/signup">Sign Up Now</Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <GraduationCap className="h-8 w-8 mr-2 text-blue-400" />
              <span className="text-2xl font-bold text-white">UniLend</span>
            </div>
            <nav className="flex flex-wrap justify-center md:justify-end space-x-4">
              <Link href="#" className="hover:text-white">
                About
              </Link>
              <Link href="#" className="hover:text-white">
                FAQ
              </Link>
              <Link href="#" className="hover:text-white">
                Privacy
              </Link>
              <Link href="#" className="hover:text-white">
                Terms
              </Link>
            </nav>
          </div>
          <div className="mt-8 text-center text-gray-500">
            © {new Date().getFullYear()} UniLend. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
