import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TermsOfService() {
  return (
    <>
      <aside className="w-full min-h-16 text-[0.72rem] font-medium z-50 flex justify-start items-center p-6 max-md:p-5 space-x-8">
        <Link href="/#footer">
          <ArrowLeft size={24} />
        </Link>
        <h1 className="text-3xl max-md:text-2xl font-medium font-serif">
          Terms Of Service
        </h1>
      </aside>
      <main>
        <section id="faq" className="w-full pt-16 pb-24 max-md:py-16">
          <div className="max-w-screen-lg mx-auto px-12 max-md:px-5">
            <p className="text-lg text-justify font-medium">
              Effective Date: November 01, 2024
              <br />
              Website: www.mackoree.com
              <br />
              Company: Mackoree Private Limited
              <br />
              <br />
              1. Acceptance of Terms
              <br />
              By accessing or using our website and services, you agree to
              comply with these Terms and Conditions. If you do not agree,
              please refrain from using our services.
              <br />
              <br />
              2. Services Offered
              <br />
              Mackoree Private Limited provides 3D animation, architectural
              visualization, product design, and simulation services. The scope
              and terms of each project are defined in the respective project
              agreement or quotation.
              <br />
              <br />
              3. Intellectual Property
              <br />
              All visual designs, animations, models, and creative outputs
              produced by Mackoree remain the intellectual property of Mackoree
              Private Limited unless otherwise agreed upon in writing. Clients
              may use delivered assets solely for the intended and agreed
              project purposes.
              <br />
              <br />
              4. Client Responsibilities
              <br />
              Clients must provide accurate project requirements, references,
              and materials. Mackoree shall not be held responsible for delays
              or errors resulting from incomplete or incorrect client input.
              <br />
              <br />
              5. Payment Terms
              <br />
              All payments shall be made as per the quotation or invoice
              provided. <br />• Project commencement may require an advance
              payment. <br />• Remaining dues must be cleared upon project
              completion or delivery. <br />• Late payments may incur penalties
              or delay in delivery.
              <br />
              <br />
              6. Refunds and Cancellations
              <br />
              Due to the custom nature of animation and design work, payments
              made are non- refundable once project development has begun. Any
              cancellation requests must be submitted in writing.
              <br />
              <br />
              7. Limitation of Liability
              <br />
              Mackoree Private Limited shall not be liable for any indirect,
              incidental, or consequential damages resulting from the use of our
              services. Our liability shall not exceed the total amount paid by
              the client for the respective project.
              <br />
              <br />
              8. Confidentiality
              <br />
              All client data, project materials, and creative concepts will be
              treated as confidential and used solely for the purpose of
              completing the project.
              <br />
              <br />
              9. Third-Party Links
              <br />
              Our website may contain links to third-party websites. We are not
              responsible for the content, policies, or practices of such
              external sites.
              <br />
              <br />
              10. Termination
              <br />
              We reserve the right to suspend or terminate access to our
              services for any user who violates these Terms or engages in
              unauthorized use of our intellectual property.
              <br />
              <br />
              11. Governing Law
              <br />
              These Terms and Conditions are governed by and construed in
              accordance with the laws of India, and any disputes shall be
              subject to the exclusive jurisdiction of the courts in Nashik,
              Maharashtra.
              <br />
              <br />
              12. Contact
              <br />
              Information For questions about these Terms, please contact:
              mackoree@gmail.com Mackoree Private Limited, Nashik, Maharashtra,
              India
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
