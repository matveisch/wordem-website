import { Button } from '@/components/ui/button';
import { blogPosts } from '@/lib/sampleData';
import { ChevronLeft, Clock, Tag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import './blog-post.css';

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.id.toString() === params.slug);

  if (!post) return <div>no data</div>;

  return (
    <div className="flex min-h-screen flex-col bg-[#EEEDEB]">
      <main className="flex-grow p-6 md:p-12">
        <article className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="mb-6 inline-flex items-center text-[#009963] hover:underline"
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>

          <h1 className="mb-6 text-4xl font-bold text-[#009963]">{post.title}</h1>

          <div className="mb-6 flex flex-wrap items-center text-sm text-[#66b8a3]">
            <span className="mr-4 flex items-center">
              <Clock className="mr-1 h-4 w-4" /> {post.readTime}
            </span>
            <span className="mr-4 flex items-center">
              <Tag className="mr-1 h-4 w-4" /> {post.category}
            </span>
          </div>

          <Image
            src={post.image}
            alt={post.imageAlt}
            width={800}
            height={400}
            className="mb-8 rounded-lg"
          />

          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-8 border-t border-[#66b8a3] pt-8">
            <h3 className="mb-4 text-2xl font-bold text-[#009963]">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full bg-[#F5F0E5] px-3 py-1 text-sm text-[#009963]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 border-t border-[#66b8a3] pt-8">
            <h3 className="mb-4 text-2xl font-bold text-[#009963]">Related Posts</h3>
            <ul className="space-y-4">
              {post.relatedPosts.map((relatedPost, index) => (
                <li key={index}>
                  <Link href="#" className="text-[#009963] hover:underline">
                    {relatedPost}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </main>

      <section className="bg-gradient-to-r from-[#F5C6CB] via-[#FAD7A0] to-[#A9DFBF] px-6 py-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-[#009963]">
          Ready to Boost Your Brain Function?
        </h2>
        <p className="mb-8 text-xl text-[#607D8B]">
          Start learning new words daily with WordEm and enhance your cognitive abilities!
        </p>
        <Button size="lg" className="bg-[#009963] text-white hover:bg-[#66b8a3]">
          Download WordEm
        </Button>
      </section>
    </div>
  );
}
