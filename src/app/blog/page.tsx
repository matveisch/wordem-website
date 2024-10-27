import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { createClient } from '@/utils/supabase/server';
import { ChevronRight, Clock, Tag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default async function BlogPage() {
  const supabase = await createClient();
  const { data: posts } = await supabase.from('posts').select('*');

  return (
    <div className="flex min-h-screen flex-col bg-[#EEEDEB]">
      <main className="flex-grow p-6 md:p-12">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-center text-4xl font-bold text-[#009963]">WordEm Blog</h1>
          <p className="mb-12 text-center text-xl text-[#607D8B]">
            Expand your knowledge and improve your vocabulary learning journey with our latest
            articles and tips.
          </p>

          <div className="grid gap-8">
            {posts?.map((post, index) => (
              <Card
                key={index}
                className="overflow-hidden transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <Image
                      src={`https://cpsynqohyobfkkbkljle.supabase.co/storage/v1/object/public/posts-images/${post.image}`}
                      alt={post.image_alt}
                      width={400}
                      height={200}
                      className="h-56 w-full object-cover md:h-full"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <CardHeader className="p-0">
                      <CardTitle className="mb-2 text-2xl font-bold text-[#009963]">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="mb-4 text-[#607D8B]">{post.excerpt}</p>
                      <div className="mb-4 flex flex-wrap items-center text-sm text-[#66b8a3]">
                        <span className="mr-4 flex items-center">
                          <Clock className="mr-1 h-4 w-4" /> {post.read_time}
                        </span>
                        <span className="flex items-center">
                          <Tag className="mr-1 h-4 w-4" /> {post.category}
                        </span>
                      </div>

                      <Link href={`/blog/${post.slug}`}>
                        <Button
                          variant="outline"
                          className="border-[#009963] text-[#009963] hover:bg-[#F5F0E5]"
                        >
                          Read More
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <section className="bg-gradient-to-r from-[#F5C6CB] via-[#FAD7A0] to-[#A9DFBF] px-6 py-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-[#009963]">Ready to Expand Your Vocabulary?</h2>
        <p className="mb-8 text-xl text-[#607D8B]">
          Download WordEm now and start your journey to mastering new words!
        </p>
        <Button size="lg" className="bg-[#009963] text-white hover:bg-[#66b8a3]">
          Download WordEm
        </Button>
      </section>
    </div>
  );
}
