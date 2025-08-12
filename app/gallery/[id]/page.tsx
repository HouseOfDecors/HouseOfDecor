import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"

const galleryData = {
  architecture: {
    title: "Architecture",
    description: "Modern architectural photography showcasing contemporary design and urban landscapes.",
    images: [
      "/modern-glass-building.png",
      "/placeholder-f8n1e.png",
      "/placeholder-mnrgn.png",
      "/minimalist-architectural-details.png",
      "/urban-architecture.png",
      "/contemporary-building-facade.png",
    ],
  },
  portraits: {
    title: "Portraits",
    description: "Professional portrait photography capturing authentic moments and personalities.",
    images: [
      "/professional-business-portrait.png",
      "/artistic-portrait.png",
      "/natural-light-portrait.png",
      "/studio-portrait.png",
      "/placeholder-narqw.png",
      "/placeholder-grk6k.png",
    ],
  },
  landscapes: {
    title: "Landscapes",
    description: "Natural landscape photography capturing the beauty of our natural world.",
    images: [
      "/majestic-mountain-vista.png",
      "/placeholder-9ic8b.png",
      "/forest-nature-photography.png",
      "/desert-landscape-photography.png",
      "/lake-reflection-landscape.png",
      "/dramatic-sky-landscape.png",
    ],
  },
}

export default function GalleryPage({ params }: { params: { id: string } }) {
  const gallery = galleryData[params.id as keyof typeof galleryData]

  if (!gallery) {
    notFound()
  }

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
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="text-2xl font-light tracking-wide text-black hover:text-gray-600 transition-colors">
            Portfolio
          </Link>
          <Link href="/" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Gallery Header */}
      <section className="py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-light tracking-wider mb-6">{gallery.title}</h1>
          <p className="text-xl text-gray-600 font-light max-w-2xl">{gallery.description}</p>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gallery.images.map((image, index) => (
              <div key={index} className="relative aspect-[4/5] overflow-hidden group">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${gallery.title} ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
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
