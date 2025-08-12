import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const galleries = [
    {
      id: "architecture",
      title: "Architecture",
      description: "Modern architectural photography",
      thumbnail: "/modern-architecture-building.png",
    },
    {
      id: "portraits",
      title: "Portraits",
      description: "Professional portrait photography",
      thumbnail: "/professional-portrait.png",
    },
    {
      id: "landscapes",
      title: "Landscapes",
      description: "Natural landscape photography",
      thumbnail: "/scenic-landscape.png",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Custom Link at Top */}
      <div className="w-full bg-black text-white py-3">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            href="https://your-custom-link.com"
            className="text-sm font-medium hover:underline transition-all duration-200"
          >
            → Visit My Studio
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <nav className="w-full py-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <Link href="/" className="text-2xl font-light tracking-wide text-black">
            Portfolio
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen">
        <Image src="/professional-photography-hero.png" alt="Hero image" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl md:text-8xl font-light tracking-wider mb-6">Visual Stories</h1>
            <p className="text-xl md:text-2xl font-light tracking-wide opacity-90">Capturing moments that matter</p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {galleries.map((gallery) => (
              <Link key={gallery.id} href={`/gallery/${gallery.id}`} className="group cursor-pointer">
                <div className="relative aspect-square mb-6 overflow-hidden">
                  <Image
                    src={gallery.thumbnail || "/placeholder.svg"}
                    alt={gallery.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-light tracking-wide mb-2 group-hover:text-gray-600 transition-colors">
                  {gallery.title}
                </h3>
                <p className="text-gray-600 font-light">{gallery.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-600 font-light">© 2025 Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
