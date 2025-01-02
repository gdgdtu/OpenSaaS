import Link from "next/link";

function Header() {
  return (
    <header className="w-full py-4 bg-blue-600 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">OpenSaaS</h1>
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="w-full py-4 bg-gray-800 text-white mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 OpenSaaS. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        {/* Existing content */}
      </main>
      <Footer />
    </div>
  );
}