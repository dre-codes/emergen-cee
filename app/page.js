"use client";
import Head from "next/head";
import { signIn } from "next-auth/react";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleSignIn = () => {
    signIn();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Emergen-See</title>
        <meta name="description" content="Your personal healthcare companion" />
      </Head>

      {/* Navbar */}
      <nav className="bg-white shadow-md p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Emergen-See</h1>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            onClick={() => {
              handleSignIn();
            }}
          >
            Login{" "}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative text-center py-20 bg-[url('hero.jpg')] bg-cover bg-center text-white bg-gradient-to-t from-black/75 via-black/50 to-transparent">
        <h2 className="relative text-4xl font-bold z-10">
          Your Health, Our Priority
        </h2>
        <p className="relative mt-4 text-lg z-10">
          Get personalized healthcare at your fingertips.
        </p>
        <button className="relative mt-6 bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-200 z-10" onClick={()=>{router.push('/register')}}>
          Get Started
        </button>
      </header>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto my-16 text-center">
        <h3 className="text-3xl font-bold text-gray-800">Why Choose Us?</h3>
        <div className="mt-8 grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h4 className="text-xl font-semibold text-blue-600">24/7 Access</h4>
            <p className="mt-2 text-gray-600">
              Get healthcare support anytime, anywhere.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h4 className="text-xl font-semibold text-blue-600">
              Secure Records
            </h4>
            <p className="mt-2 text-gray-600">
              Your medical data is protected with top security.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h4 className="text-xl font-semibold text-blue-600">
              Expert Doctors
            </h4>
            <p className="mt-2 text-gray-600">
              Connect with top healthcare professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-blue-600 text-white py-16">
        <h3 className="text-3xl font-bold">Start Your Health Journey Today</h3>
        <button className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-200">
          Join Now
        </button>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-900 text-white">
        <p>&copy; 2025 HealthCare+. All rights reserved.</p>
      </footer>
    </div>
  );
}
