import Link from "next/link"

const blogPosts = [
  {
    slug: "eigenflow",
    title: "EigenFlow",
    date: "June 15th 2026",
  },
  {
    slug: "entanglement",
    title: "Entanglement",
    date: "Nov 24 2025",
  },
  {
    slug: "nomenclature",
    title: "Nomenclature",
    date: "Jan 18th 2025",
  },
  {
    slug: "prompt-engineering",
    title: "Prompt Engineering",
    date: "Dec 19th 2024",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen p-8 font-mono bg-black text-white">
      <div className="max-w-xl">
        <Link href="/" className="hover:underline">
          ← back
        </Link>

        <h1 className="text-lg font-normal mt-8 mb-12">Blog</h1>

        <ul className="space-y-4">
          {blogPosts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="hover:underline">
                {post.title}
              </Link>
              {"date" in post && post.date && (
                <span className="text-white/50 ml-4">{post.date}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
