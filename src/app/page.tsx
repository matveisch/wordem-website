import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ChevronRight, Download, Star, TrendingUp, Users } from "lucide-react"
import Image from "next/image"

export default function Home() {
  const features = [
    { image: '/images/brain.jpeg', text: 'Intelligent algorithm for personalized learning', icon: <TrendingUp className="w-6 h-6" /> },
    { image: '/images/progressive.jpeg', text: 'Progressive point system to track your improvement', icon: <Star className="w-6 h-6" /> },
    { image: '/images/statistics.jpeg', text: 'Comprehensive statistics to monitor your progress', icon: <ChevronRight className="w-6 h-6" /> },
    { image: '/images/onboarding.jpeg', text: 'Simple and intuitive onboarding process', icon: <Users className="w-6 h-6" /> },
  ]

  const premiumFeatures = [
    'Unlimited decks for better organization',
    'Sub-decks for granular categorization',
    'Customizable deck themes',
    'Detailed statistics and insights',
    'Adjustable knowledge level settings',
    'Additional learning customization options',
  ]

  return (
    <div className="flex flex-col min-h-screen bg-[#EEEDEB]">
      <main className="flex-grow">
        <section className="py-20 text-center bg-gradient-to-r from-[#F5C6CB] via-[#FAD7A0] to-[#A9DFBF] text-[#009963]">
          <h2 className="text-4xl font-bold mb-4">Master Your Vocabulary, One Word At A Time</h2>
          <p className="text-xl mb-8">WordEm adapts to your knowledge level, categorizing words into Bad, Good, Fine and Easy groups for efficient learning.</p>
          <Button size="lg" className="bg-[#009963] text-white hover:bg-[#66b8a3]">
            Get Started
            <Download className="ml-2 h-4 w-4" />
          </Button>
        </section>

        <section className="py-20 px-6 bg-[#F5F0E5]">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#009963]">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white border-2 border-[#009963] hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <Image src={feature.image} alt={feature.text} width={200} height={200} className="rounded-lg" />
                </CardHeader>
                <CardContent>
                  <div className="flex items-center mb-2">
                    {feature.icon}
                    <p className="ml-2 font-semibold text-[#009963]">{feature.text}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-20 px-6 bg-gradient-to-r from-[#85C1E9] to-[#A9DFBF]">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Unlock Premium Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {premiumFeatures.map((feature, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <p className="text-[#009963] font-semibold">{feature}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-[#009963] text-white hover:bg-[#66b8a3]">
              Upgrade to Premium
              <Star className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        <section className="py-20 px-6 text-center bg-[#EEEDEB]">
          <h2 className="text-3xl font-bold mb-4 text-[#009963]">Perfect For All Learners</h2>
          <p className="text-xl mb-8 text-[#607D8B]">Whether you're a student preparing for exams, learning a new language, or simply want to enhance your word power, WordEm is your ideal companion.</p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-[#009963] text-white hover:bg-[#66b8a3]">
              Download Now
              <Download className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-[#009963] text-[#009963] hover:bg-[#F5F0E5]">
              Learn More
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        <section className="py-20 px-6 bg-[#F5F0E5]">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#009963]">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <p className="text-[#607D8B] mb-4">"WordEm has revolutionized the way I learn new vocabulary. It's intuitive, fun, and incredibly effective!"</p>
                  <p className="font-semibold text-[#009963]">- Happy User {index + 1}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}