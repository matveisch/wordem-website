import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  const features = [
    { image: '/images/brain.jpeg', text: 'Intelligent algorithm for personalized learning' },
    { image: '/images/progressive.jpeg', text: 'Progressive point system to track your improvement' },
    { image: '/images/statistics.jpeg', text: 'Comprehensive statistics to monitor your progress' },
    { image: '/images/onboarding.jpeg', text: 'Simple and intuitive onboarding process' },
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
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between p-6 bg-primary text-primary-foreground">
        <div className="flex items-center space-x-4">
          <Image src="/images/wordem-icon-edited.png" alt="WordEm logo" width={50} height={50} />
          <h1 className="text-2xl font-bold">WordEm</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/blog" className="hover:underline">Blog</Link></li>
            <li><Button variant="secondary">Download App</Button></li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow">
        <section className="py-20 text-center bg-gradient-to-r from-primary to-secondary text-primary-foreground">
          <h2 className="text-4xl font-bold mb-4">Master Your Vocabulary, One Word At A Time</h2>
          <p className="text-xl mb-8">WordEm adapts to your knowledge level, categorizing words into Bad, Good, Fine and Easy groups for efficient learning.</p>
          <Button size="lg">Get Started</Button>
        </section>

        <section className="py-20 px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <Image src={feature.image} alt={feature.text} width={200} height={200} className="rounded-lg" />
                </CardHeader>
                <CardContent>
                  <p>{feature.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-20 px-6 bg-muted">
          <h2 className="text-3xl font-bold text-center mb-12">Unlock Premium Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {premiumFeatures.map((feature, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <p>{feature}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-20 px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Perfect For All Learners</h2>
          <p className="text-xl mb-8">Whether you're a student preparing for exams, learning a new language, or simply want to enhance your word power, WordEm is your ideal companion.</p>
          <Button size="lg">Download Now</Button>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-6 px-6 text-center">
        <p>© 2024 WordEm. All rights reserved.</p>
      </footer>
    </div>
  )
}