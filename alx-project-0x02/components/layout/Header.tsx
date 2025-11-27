import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo / Title */}
        <Link href="/" className="text-xl font-semibold">
          ALX Project
        </Link>

        {/* Navigation */}
        <nav className="space-x-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/posts" className="hover:underline">
            Posts
          </Link>
          <Link href="/users" className="hover:underline">
            Users
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
