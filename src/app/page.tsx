import AppShowcase from '@/components/AppShowcase';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight, Download, Star, TrendingUp, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const features = [
    {
      image: '/images/brain.jpeg',
      text: 'Intelligent algorithm for personalized learning',
      icon: <TrendingUp className="h-6 w-6" />,
    },
    {
      image: '/images/progressive.jpeg',
      text: 'Progressive point system to track your improvement',
      icon: <Star className="h-6 w-6" />,
    },
    {
      image: '/images/statistics.jpeg',
      text: 'Comprehensive statistics to monitor your progress',
      icon: <ChevronRight className="h-6 w-6" />,
    },
    {
      image: '/images/onboarding.jpeg',
      text: 'Simple and intuitive onboarding process',
      icon: <Users className="h-6 w-6" />,
    },
  ];

  const premiumFeatures = [
    'Unlimited decks for better organization',
    'Sub-decks for granular categorization',
    'Customizable deck themes',
    'Detailed statistics and insights',
    'Adjustable knowledge level settings',
    'Additional learning customization options',
  ];

  const reviews = [
    {
      text: 'Perfect bite-sized lessons. Makes learning new words actually fun!',
      author: 'Emma Chen',
    },
    {
      text: 'Daily notifications keep me consistent. Love the word categories.',
      author: 'Marcus Rodriguez',
    },
    {
      text: 'Tracking my progress motivates me daily. Fantastic vocabulary builder!',
      author: 'Sarah Mitchell',
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-[#EEEDEB]">
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-[#F5C6CB] via-[#FAD7A0] to-[#A9DFBF] px-6 py-20 text-center text-[#009963]">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Master Your Vocabulary, One Word At A Time
          </h2>
          <p className="mb-8 text-xl md:text-2xl">
            WordEm adapts to your knowledge level, categorizing words into Bad, Good, Fine and Easy
            groups for efficient learning.
          </p>
          <Button size="lg" className="bg-[#009963] text-white hover:bg-[#66b8a3]">
            <Link href="https://apps.apple.com/app/wordem/id6503954546" className="flex">
              Get Started
              <Download className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </section>

        <section className="bg-[#F5F0E5] px-6 py-20">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#009963]">Key Features</h2>
          <div className="mx-auto grid max-w-4xl gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="overflow-hidden transition-shadow duration-300 hover:shadow-lg"
              >
                <CardContent className="flex items-center space-x-6 p-6">
                  <div className="flex-shrink-0">
                    <Image
                      src={feature.image}
                      alt={feature.text}
                      width={80}
                      height={80}
                      className="rounded-sm border-2"
                    />
                  </div>
                  <div className="flex-grow">
                    <p className="text-xl font-semibold text-[#009963]">{feature.text}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-[#85C1E9] to-[#A9DFBF] px-6 py-20">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            Unlock Premium Features
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {premiumFeatures.map((feature, index) => (
              <Card key={index} className="bg-white transition-shadow duration-300 hover:shadow-lg">
                <CardContent className="pt-6">
                  <p className="font-semibold text-[#009963]">{feature}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" className="bg-[#009963] text-white hover:bg-[#66b8a3]">
              <Link href="https://apps.apple.com/app/wordem/id6503954546" className="flex">
                Upgrade to Premium
                <Star className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        <section className="bg-[#F5F0E5] px-6 py-20">
          <h2 className="mb-6 text-center text-3xl font-bold text-[#009963]">
            See WordEm in Action
          </h2>
          <AppShowcase />
        </section>

        <section className="bg-[#EEEDEB] px-6 py-20 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#009963]">Perfect For All Learners</h2>
          <p className="mb-8 text-xl text-[#607D8B]">
            Whether you're a student preparing for exams, learning a new language, or simply want to
            enhance your word power, WordEm is your ideal companion.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-[#009963] text-white hover:bg-[#66b8a3]">
              <Link href="https://apps.apple.com/app/wordem/id6503954546" className="flex">
                Download Now
                <Download className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#009963] text-[#009963] hover:bg-[#F5F0E5]"
            >
              <Link href="https://apps.apple.com/app/wordem/id6503954546" className="flex">
                Learn More
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        <section className="bg-[#F5F0E5] px-6 py-20">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#009963]">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-white transition-shadow duration-300 hover:shadow-lg">
                <CardContent className="pt-6">
                  <p className="mb-4 text-[#607D8B]">{review.text}</p>
                  <p className="font-semibold text-[#009963]">- {review.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
