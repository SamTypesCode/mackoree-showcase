"use client";

import Link from "next/link";

const footerSections = [
  {
    title: "Company",
    links: [
      { name: "Contact", href: "#contact-us" },
      { name: "FAQ", href: "#faq" },
      { name: "Projects", href: "#projects" },
      { name: "Testimonials", href: "#testimonials" },
    ],
  },
  {
    title: "Socials",
    links: [
      { name: "Instagram", href: "https://www.instagram.com/mackoreestudio" },
      { name: "Youtube", href: "http://www.youtube.com/@mackoree" },
      { name: "Facebook", href: "https://www.facebook.com/share/1Bc37M54iH/" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-zinc-50 mt-24 pt-16 pb-12 text-zinc-700">
      <div className="max-w-[1234px] mx-auto px-12 max-md:px-5">
        {/* Easter egg, 1234 px width */}
        <div className="flex flex-wrap justify-between gap-12 border-b border-zinc-200 pb-12 max-md:gap-8">
          <div className="max-w-sm max-md:mx-auto space-y-6">
            <div className="flex items-center gap-4 max-md:justify-center">
              <img
                src="/mackoree-logo.svg"
                alt="Mackoree Logo"
                className="max-h-8"
              />
            </div>
            <p className="text-base leading-relaxed max-md:text-center text-zinc-600">
              High quality 3D animation for simulations, product designs, and
              architectural visualizations.
            </p>
          </div>

          <div className="flex flex-wrap gap-24 max-md:gap-12 text-base max-md:w-full">
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-4 max-md:flex-1">
                <h4 className="text-lg font-semibold uppercase tracking-wide">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="hover:text-zinc-900 flex items-center gap-1"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center pt-8 gap-4 text-base text-zinc-600 max-md:flex-col max-md:text-center">
          <p>© 2025 Mackoree Animation Studio. All Rights Reserved.</p>
          <div className="flex gap-8 max-md:w-full max-md:justify-center">
            <Link href="/privacy-policy" className="hover:text-zinc-700">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-zinc-700">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
