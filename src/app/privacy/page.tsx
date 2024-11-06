import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import './privacy.css';

export const metadata = {
  title: 'Privacy Policy | WordEm',
  description: 'Privacy Policy for WordEm - Learn how we protect your data',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#EEEDEB]">
      <header className="bg-[#F5F0E5] py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#009963]">Privacy Policy</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardContent className="prose prose-lg max-w-none p-6">
            <p className="text-[#66b8a3]">
              <strong>Effective Date:</strong> 05.06.2024
            </p>

            <h2 className="mb-2 mt-6 text-2xl font-bold text-[#009963]">1. Introduction</h2>
            <p>
              Welcome to WordEm! Your privacy is important to us. This Privacy Policy explains how
              we collect, use, and protect your information when you use our app.
            </p>

            <h2 className="mb-2 mt-6 text-2xl font-bold text-[#009963]">
              2. Information We Collect
            </h2>
            <p>
              <strong>User Authentication:</strong> We only allow users to sign in using the "Sign
              in with Apple" option. This ensures a secure and streamlined authentication process.
              We do not collect any additional personal data from you.
            </p>
            <p>
              <strong>App Usage Data:</strong> We collect and store the words you learn, including
              their meanings, pronunciations, and the names of the decks they belong to. This data
              is stored in a secure Supabase database.
            </p>

            <h2 className="mb-2 mt-6 text-2xl font-bold text-[#009963]">
              3. How We Use Your Information
            </h2>
            <p>
              <strong>Word Data:</strong> The word data you save is used solely for your learning
              experience. You can add, view, and delete this data anytime within the app.
            </p>

            <h2 className="mb-2 mt-6 text-2xl font-bold text-[#009963]">4. Data Deletion</h2>
            <p>
              You have full control over your word data. You can delete any or all of your word data
              at any time through the app's interface.
            </p>

            <h2 className="mb-2 mt-6 text-2xl font-bold text-[#009963]">5. Data Security</h2>
            <p>
              We use Supabase to securely store your word data. We implement industry-standard
              security measures to protect your information from unauthorized access, alteration,
              disclosure, or destruction.
            </p>

            <h2 className="mb-2 mt-6 text-2xl font-bold text-[#009963]">6. Third-Party Services</h2>
            <p>
              We do not share your data with any third parties. Your data is stored securely within
              our Supabase database and is not accessible to any external entities.
            </p>

            <h2 className="mb-2 mt-6 text-2xl font-bold text-[#009963]">
              7. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes
              by posting the new Privacy Policy on this page and updating the effective date.
            </p>

            <h2 className="mb-2 mt-6 text-2xl font-bold text-[#009963]">8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at
              support@desight.co.
            </p>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button asChild className="bg-[#009963] text-white hover:bg-[#66b8a3]">
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
