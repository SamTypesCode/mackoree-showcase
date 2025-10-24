import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-zinc-50 mt-24 pt-16 pb-12 text-zinc-700">
      <div className="max-w-screen-lg mx-auto px-12 max-md:px-5">
        <div className="flex flex-wrap justify-between items-center pt-8 gap-4 text-base text-zinc-600 max-md:flex-col max-md:text-center">
          <p>© 2025 Mackoree Animation Studio. All Rights Reserved.</p>
          <div className="flex gap-6 max-md:w-full">
            <Link
              href="/privacy-policy"
              className="hover:text-zinc-700 max-md:flex-1 max-md:text-right"
            >
              Privacy Policy
            </Link>
            <span className="text-zinc-500">|</span>
            <Link
              href="/terms-of-service"
              className="hover:text-zinc-700 max-md:flex-1 max-md:text-left"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
