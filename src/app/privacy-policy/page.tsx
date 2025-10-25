import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <>
      <aside className="w-full min-h-16 text-[0.72rem] font-medium z-50 flex justify-start items-center p-6 max-md:p-5 space-x-8">
        <Link href="/#footer">
          <ArrowLeft size={24} />
        </Link>
        <h1 className="text-3xl max-md:text-2xl font-medium font-serif">
          Privacy Policy
        </h1>
      </aside>
      <main>
        <section id="faq" className="w-full pt-16 pb-24 max-md:py-16">
          <div className="max-w-screen-lg mx-auto px-12 max-md:px-5">
            <p className="text-lg text-justify font-medium">
              Effective Date: November 01, 2024
              <br />
              Company Name: Mackoree Private Limited
              <br />
              Registered Office: Nashik, Maharashtra, India
              <br />
              Contact Email: mackoree@gmail.com
              <br />
              <br />
              1. Introduction
              <br /> Mackoree Private Limited (“we,” “our,” “us”) values your
              privacy and is committed to protecting your personal information.
              This Privacy Policy outlines how we collect, use, store, and
              safeguard your information when you use our website and services.
              <br />
              <br />
              2. Information We Collect
              <br /> We may collect the following types of information: <br />•
              Personal Information: Name, email address, company details,
              contact information. <br />• Project Information: Files,
              references, and materials shared for design or animation purposes.
              <br />• Billing Information
              <br /> Payment details and billing address for invoicing and
              service delivery. <br />• Usage Data: Browser type, IP address,
              device information, and website usage statistics (for improving
              our services).
              <br />
              <br />
              3. How We Use Your Information
              <br /> Your information may be used to: <br />• Provide and
              deliver our 3D animation, visualization, and design services.{" "}
              <br />• Communicate regarding projects, updates, or support
              requests. <br />• Process payments and send invoices. <br />•
              Maintain internal records and improve service quality. <br />•
              Comply with legal obligations.
              <br />
              <br />
              4. Data Security
              <br /> We implement appropriate technical and organizational
              measures to protect your data from unauthorized access,
              disclosure, alteration, or destruction. All sensitive payment
              information is handled through secure, encrypted systems.
              <br />
              <br />
              5. Data Sharing and Disclosure
              <br /> We do not sell, trade, or rent user information. Data may
              only be shared with: <br />• Service providers or partners
              assisting in project execution. <br />• Legal authorities, if
              required by law.
              <br />
              <br />
              6. Retention of Information
              <br /> We retain personal and project data only for as long as
              necessary to fulfil the purpose for which it was collected or as
              required by applicable law.
              <br />
              <br />
              7. Cookies
              <br /> Our website may use cookies to enhance user experience. You
              can modify your browser settings to decline cookies, though some
              features may not function properly.
              <br />
              <br />
              8. Your Rights
              <br /> You have the right to access, correct, or request deletion
              of your personal data. To exercise these rights, please contact us
              at mackoree@gmail.com
              <br />
              <br />
              9. Updates to This Policy
              <br /> We may update this Privacy Policy periodically. All changes
              will be reflected on this page with an updated effective date.
              <br />
              <br />
              10. Contact
              <br /> For any questions or concerns regarding this Privacy
              Policy, please contact us at: mackoree@gmail.com Mackoree Private
              Limited, Nashik, Maharashtra, India
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
