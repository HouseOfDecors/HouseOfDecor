import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-light tracking-wider mb-6 text-black">404</h1>
        <p className="text-xl text-gray-600 font-light mb-8">Page not found</p>
        <Link
          href="/"
          className="inline-block px-8 py-3 border border-black text-black hover:bg-black hover:text-white transition-all duration-300 font-light tracking-wide"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
