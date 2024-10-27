'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const appScreens = [
  {
    src: '/images/decks-screenshot.png',
    alt: 'WordEm Decks Screen',
    description: 'Organize your vocabulary with custom decks',
  },
  {
    src: '/images/statistics-screenshot.png',
    alt: 'WordEm Study Screen',
    description: 'Track your progress and study efficiently',
  },
  {
    src: '/images/studying-screenshot.png',
    alt: 'WordEm Word Learning Screen',
    description: 'Learn new words with pronunciation and translation',
  },
  {
    src: '/images/subdecks-screenshot.png',
    alt: 'WordEm My Decks Screen',
    description: 'Manage your vocabulary decks with ease',
  },
];

export default function AppShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % appScreens.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + appScreens.length) % appScreens.length);
  };

  return (
    <div className="mx-auto w-full max-w-sm px-4 py-12">
      <Card className="relative overflow-hidden">
        <CardContent className="p-0">
          <div className="relative aspect-[9/16]">
            <Image
              src={appScreens[currentIndex].src}
              alt={appScreens[currentIndex].alt}
              fill
              className="object-contain transition-opacity duration-500"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
            <p className="text-center text-sm">{appScreens[currentIndex].description}</p>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 transform bg-white bg-opacity-50 hover:bg-opacity-75"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 transform bg-white bg-opacity-50 hover:bg-opacity-75"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
      <div className="mt-4 flex justify-center">
        {appScreens.map((_, index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            className={`mx-1 h-8 w-8 rounded-full ${
              index === currentIndex ? 'bg-[#009963] text-white' : 'bg-gray-200'
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            {index + 1}
          </Button>
        ))}
      </div>
    </div>
  );
}
