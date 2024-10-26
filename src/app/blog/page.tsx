import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function BlogPage() {
  const blogPosts = [
    {
      title: "5 Tips to Boost Your Vocabulary with WordEm",
      excerpt: "Discover how to make the most of WordEm's features to rapidly expand your vocabulary.",
      date: "2024-03-15",
    },
    {
      title: "The Science Behind Spaced Repetition in Language Learning",
      excerpt: "Learn about the psychological principles that make WordEm's learning algorithm so effective.",
      date: "2024-03-10",
    },
    {
      title: "WordEm Success Stories: From Beginner to Fluent",
      excerpt: "Read inspiring stories from users who have transformed their language skills using WordEm.",
      date: "2024-03-05",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between p-6 bg-primary text-primary-foreground">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-2xl font-bold">WordEm</Link>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/blog" className="hover:underline">Blog</Link></li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow p-6">
        <h1 className="text-3xl font-bold mb-8">WordEm Blog</h1>
        <div className="grid gap-6">
          {blogPosts.map((post, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{post.excerpt}</p>
                <p className="text-sm text-muted-foreground">Published on {post.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <footer className="bg-primary text-primary-foreground py-6 px-6 text-center">
        <p>© 2024 WordEm. All rights reserved.</p>
      </footer>
    </div>
  )
}