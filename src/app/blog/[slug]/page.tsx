import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ChevronLeft, ChevronRight, Clock, Share2, Tag, ThumbsUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BlogPost() {
  const post = {
    title: "5 Tips to Boost Your Vocabulary with WordEm",
    date: "2024-03-15",
    readTime: "5 min read",
    category: "Tips & Tricks",
    author: "Jane Doe",
    authorImage: "/placeholder.svg?height=100&width=100",
    heroImage: "/placeholder.svg?height=400&width=800",
    content: `
      <p>Learning new words can be a challenging but rewarding experience. With WordEm, you have a powerful tool at your fingertips to enhance your vocabulary. Here are five tips to make the most of your WordEm experience and supercharge your learning:</p>

      <h2>1. Set a Daily Goal</h2>
      <p>Consistency is key when it comes to expanding your vocabulary. Set a realistic daily goal for the number of new words you want to learn. WordEm's progressive point system makes it easy to track your progress and stay motivated.</p>

      <h2>2. Use the Spaced Repetition Feature</h2>
      <p>Take advantage of WordEm's intelligent algorithm that uses spaced repetition. This scientifically-proven method presents words for review at optimal intervals, enhancing long-term retention. Trust the system and review words when prompted for maximum efficiency.</p>

      <h2>3. Create Custom Decks</h2>
      <p>Organize your learning by creating custom decks for different themes, subjects, or difficulty levels. This feature allows you to focus on specific areas of interest or challenge, making your learning more targeted and effective.</p>

      <h2>4. Utilize Context and Examples</h2>
      <p>When learning a new word, don't just memorize its definition. Use WordEm's example sentences and try to create your own. Understanding how a word is used in context significantly improves your ability to remember and use it correctly.</p>

      <h2>5. Engage with Statistics and Insights</h2>
      <p>Regularly check your progress using WordEm's comprehensive statistics. Identify patterns in your learning, recognize areas that need more attention, and celebrate your improvements. This data-driven approach will help you refine your study habits and achieve better results.</p>

      <p>By implementing these tips and consistently using WordEm, you'll be amazed at how quickly your vocabulary expands. Remember, learning new words is a journey, not a destination. Enjoy the process and watch your language skills flourish!</p>
    `,
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#EEEDEB]">
      <header className="flex items-center justify-between p-6 bg-[#F5F0E5]">
        <div className="flex items-center space-x-4">
          <Image src="/images/wordem-icon-edited.png" alt="WordEm logo" width={50} height={50} />
          <Link href="/" className="text-2xl font-bold text-[#009963]">WordEm</Link>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:underline text-[#009963]">Home</Link></li>
            <li><Link href="/blog" className="hover:underline text-[#009963]">Blog</Link></li>
            <li><Button className="bg-[#009963] text-white hover:bg-[#66b8a3]">Download App</Button></li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow p-6 md:p-12">
        <article className="max-w-3xl mx-auto">
          <Link href="/blog" className="inline-flex items-center text-[#009963] hover:underline mb-6">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          <h1 className="text-4xl font-bold mb-6 text-[#009963]">{post.title}</h1>

          <div className="flex flex-wrap items-center text-sm text-[#66b8a3] mb-6">
            <span className="flex items-center mr-4"><Calendar className="w-4 h-4 mr-1" /> {post.date}</span>
            <span className="flex items-center mr-4"><Clock className="w-4 h-4 mr-1" /> {post.readTime}</span>
            <span className="flex items-center"><Tag className="w-4 h-4 mr-1" /> {post.category}</span>
          </div>

          <div className="flex items-center mb-8">
            <Image src={post.authorImage} alt={post.author} width={50} height={50} className="rounded-full mr-4" />
            <span className="font-semibold text-[#009963]">{post.author}</span>
          </div>

          <Image src={post.heroImage} alt={post.title} width={800} height={400} className="rounded-lg mb-8" />

          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

          <div className="flex justify-between items-center mt-8 border-t border-b border-[#66b8a3] py-4">
            <Button variant="outline" className="border-[#009963] text-[#009963] hover:bg-[#F5F0E5]">
              <ThumbsUp className="w-4 h-4 mr-2" />
              Like this article
            </Button>
            <Button variant="outline" className="border-[#009963] text-[#009963] hover:bg-[#F5F0E5]">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </article>

        <div className="max-w-3xl mx-auto mt-12">
          <h2 className="text-2xl font-bold mb-6 text-[#009963]">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-4">
                <h3 className="font-semibold text-[#009963] mb-2">The Power of Contextual Learning in Vocabulary Acquisition</h3>
                <p className="text-[#607D8B] mb-4">Discover how learning words in context can significantly improve retention and usage.</p>
                <Link href="#" className="text-[#009963] hover:underline inline-flex items-center">
                  Read More <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-4">
                <h3 className="font-semibold text-[#009963] mb-2">Gamification in Language Learning: WordEm's Approach</h3>
                <p className="text-[#607D8B] mb-4">Learn how WordEm uses gamification techniques to make vocabulary learning fun and engaging.</p>
                <Link href="#" className="text-[#009963] hover:underline inline-flex items-center">
                  Read More <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
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

      <footer className="bg-[#F5F0E5] text-[#009963] py-6 px-6 text-center">
        <p>© 2024 WordEm. All rights reserved.</p>
      </footer>
    </div>
  )
}