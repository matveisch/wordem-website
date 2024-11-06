import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import './terms.css';

export const metadata = {
  title: 'Terms of Use | WordEm',
  description: 'Licensed Application End User License Agreement for WordEm',
};

const TermsOfUse = () => (
  <div className="min-h-screen bg-[#EEEDEB]">
    <header className="bg-[#F5F0E5] py-6">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-[#009963]">Terms of Use</h1>
      </div>
    </header>

    <main className="container mx-auto px-4 py-8">
      <Card className="mb-8">
        <CardContent className="prose prose-lg max-w-none p-6">
          <h2 className="mb-4 text-2xl font-bold text-[#009963]">
            LICENSED APPLICATION END USER LICENSE AGREEMENT
          </h2>
          <p className="mb-4">
            Apps made available through the App Store are licensed, not sold, to you. Your license
            to each App is subject to your prior acceptance of either this Licensed Application End
            User License Agreement ("Standard EULA"), or a custom end user license agreement between
            you and the Application Provider ("Custom EULA"), if one is provided. Your license to
            any Apple App under this Standard EULA or Custom EULA is granted by Apple, and your
            license to any Third Party App under this Standard EULA or Custom EULA is granted by the
            Application Provider of that Third Party App. Any App that is subject to this Standard
            EULA is referred to herein as the "Licensed Application." The Application Provider or
            Apple as applicable ("Licensor") reserves all rights in and to the Licensed Application
            not expressly granted to you under this Standard EULA.
          </p>

          <h3 className="mb-2 mt-6 text-xl font-semibold text-[#009963]">a. Scope of License</h3>
          <p className="mb-4">
            Licensor grants to you a nontransferable license to use the Licensed Application on any
            Apple-branded products that you own or control and as permitted by the Usage Rules. The
            terms of this Standard EULA will govern any content, materials, or services accessible
            from or purchased within the Licensed Application as well as upgrades provided by
            Licensor that replace or supplement the original Licensed Application, unless such
            upgrade is accompanied by a Custom EULA. Except as provided in the Usage Rules, you may
            not distribute or make the Licensed Application available over a network where it could
            be used by multiple devices at the same time. You may not transfer, redistribute or
            sublicense the Licensed Application and, if you sell your Apple Device to a third party,
            you must remove the Licensed Application from the Apple Device before doing so. You may
            not copy (except as permitted by this license and the Usage Rules), reverse-engineer,
            disassemble, attempt to derive the source code of, modify, or create derivative works of
            the Licensed Application, any updates, or any part thereof (except as and only to the
            extent that any foregoing restriction is prohibited by applicable law or to the extent
            as may be permitted by the licensing terms governing use of any open-sourced components
            included with the Licensed Application).
          </p>

          {/* Add the rest of the sections here, following the same structure */}

          <h3 className="mb-2 mt-6 text-xl font-semibold text-[#009963]">
            i. Governing Law and Jurisdiction
          </h3>
          <p className="mb-4">
            Except to the extent expressly provided in the following paragraph, this Agreement and
            the relationship between you and Apple shall be governed by the laws of the State of
            California, excluding its conflicts of law provisions. You and Apple agree to submit to
            the personal and exclusive jurisdiction of the courts located within the county of Santa
            Clara, California, to resolve any dispute or claim arising from this Agreement. If (a)
            you are not a U.S. citizen; (b) you do not reside in the U.S.; (c) you are not accessing
            the Service from the U.S.; and (d) you are a citizen of one of the countries identified
            below, you hereby agree that any dispute or claim arising from this Agreement shall be
            governed by the applicable law set forth below, without regard to any conflict of law
            provisions, and you hereby irrevocably submit to the non-exclusive jurisdiction of the
            courts located in the state, province or country identified below whose law governs: If
            you are a citizen of any European Union country or Switzerland, Norway or Iceland, the
            governing law and forum shall be the laws and courts of your usual place of residence.
            Specifically excluded from application to this Agreement is that law known as the United
            Nations Convention on the International Sale of Goods.
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

export default TermsOfUse;
