import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, ChevronRight, Clock, Tag } from "lucide-react"
import Image from "next/image"

export default function BlogPage() {
  const blogPosts = [
    {
      title: "5 Tips to Boost Your Vocabulary with WordEm",
      excerpt: "Discover how to make the most of WordEm's features to rapidly expand your vocabulary. Learn effective strategies for memorization and retention.",
      date: "2024-03-15",
      readTime: "5 min read",
      category: "Tips & Tricks",
      image: "/placeholder.svg?height=200&width=400"
    },
    {
      title: "The Science Behind Spaced Repetition in Language Learning",
      excerpt: "Learn about the psychological principles that make WordEm's learning algorithm so effective. Understand how spaced repetition can accelerate your learning process.",
      date: "2024-03-10",
      readTime: "7 min read",
      category: "Education",
      image: "/placeholder.svg?height=200&width=400"
    },
    {
      title: "WordEm Success Stories: From Beginner to Fluent",
      excerpt: "Read inspiring stories from users who have transformed their language skills using WordEm. Discover how consistent practice leads to remarkable results.",
      date: "2024-03-05",
      readTime: "6 min read",
      category: "Success Stories",
      image: "/placeholder.svg?height=200&width=400"
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-[#EEEDEB]">
      <main className="flex-grow p-6 md:p-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-[#009963] text-center">WordEm Blog</h1>
          <p className="text-xl text-[#607D8B] mb-12 text-center">Expand your knowledge and improve your vocabulary learning journey with our latest articles and tips.</p>
          
          <div className="grid gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <Image src={post.image} alt={post.title} width={400} height={200} className="h-full object-cover" />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <CardHeader className="p-0">
                      <CardTitle className="text-2xl font-bold mb-2 text-[#009963]">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-[#607D8B] mb-4">{post.excerpt}</p>
                      <div className="flex flex-wrap items-center text-sm text-[#66b8a3] mb-4">
                        <span className="flex items-center mr-4"><Calendar className="w-4 h-4 mr-1" /> {post.date}</span>
                        <span className="flex items-center mr-4"><Clock className="w-4 h-4 mr-1" /> {post.readTime}</span>
                        <span className="flex items-center"><Tag className="w-4 h-4 mr-1" /> {post.category}</span>
                      </div>
                      <Button variant="outline" className="border-[#009963] text-[#009963] hover:bg-[#F5F0E5]">
                        Read More
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <section className="py-12 px-6 bg-gradient-to-r from-[#F5C6CB] via-[#FAD7A0] to-[#A9DFBF] text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#009963]">Ready to Expand Your Vocabulary?</h2>
        <p className="text-xl mb-8 text-[#607D8B]">Download WordEm now and start your journey to mastering new words!</p>
        <Button size="lg" className="bg-[#009963] text-white hover:bg-[#66b8a3]">
          Download WordEm
        </Button>
      </section>
    </div>
  )
}