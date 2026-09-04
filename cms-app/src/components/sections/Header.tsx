import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-md">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="flex h-20 items-center justify-between">

          {/* ================= LOGO ================= */}

          <Link
            href="/"
            className="group flex items-center gap-3"
          >

            {/* Logo */}
            <div
              className="flex h-11 w-11 items-center justify-center
                         rounded-xl bg-gray-900
                         transition-colors duration-200
                         group-hover:bg-gray-800"
            >
              <span className="text-xl font-bold text-white">
                C
              </span>
            </div>

            {/* Logo Text */}
            <div className="leading-tight">

              <h1 className="text-lg font-bold tracking-tight text-gray-900">
                CMS Platform
              </h1>

              <p className="mt-0.5 text-[10px] font-semibold tracking-[0.18em] text-gray-500">
                BUILD • MANAGE • GROW
              </p>

            </div>

          </Link>


          {/* ================= DESKTOP NAVIGATION ================= */}

          <nav
            className="hidden items-center gap-1 rounded-full
                       border border-gray-200 bg-gray-50 p-1.5
                       lg:flex"
          >

            <Link
              href="/"
              className="rounded-full bg-white px-5 py-2.5
                         text-sm font-semibold text-gray-900
                         transition-all
                         hover:bg-gray-100"
            >
              Home
            </Link>

            <Link
              href="/about-us"
              className="rounded-full px-5 py-2.5
                         text-sm font-medium text-gray-600
                         transition-all
                         hover:bg-white hover:text-gray-900"
            >
              About Us
            </Link>

            <Link
              href="/services"
              className="rounded-full px-5 py-2.5
                         text-sm font-medium text-gray-600
                         transition-all
                         hover:bg-white hover:text-gray-900"
            >
              Services
            </Link>

            <Link
              href="/portfolio"
              className="rounded-full px-5 py-2.5
                         text-sm font-medium text-gray-600
                         transition-all
                         hover:bg-white hover:text-gray-900"
            >
              Portfolio
            </Link>

            <Link
              href="/blog"
              className="rounded-full px-5 py-2.5
                         text-sm font-medium text-gray-600
                         transition-all
                         hover:bg-white hover:text-gray-900"
            >
              Blog
            </Link>

            <Link
              href="/components"
              className="rounded-full px-5 py-2.5
                         text-sm font-medium text-gray-600
                         transition-all
                         hover:bg-white hover:text-gray-900"
            >
              Components
            </Link>

          </nav>


          {/* ================= RIGHT SIDE ================= */}

          <div className="hidden items-center gap-4 lg:flex">

            <Link
              href="/pricing"
              className="px-2 py-2 text-sm font-medium
                         text-gray-600 transition-colors
                         hover:text-gray-900"
            >
              Pricing
            </Link>

            <Link
              href="/login"
              className="px-2 py-2 text-sm font-semibold
                         text-gray-800 transition-colors
                         hover:text-gray-500"
            >
              Login
            </Link>

            {/* UI Button Component */}
            <Link href="/contact-us">
              <Button
                variant="primary"
                size="md"
              >
                Get Started
              </Button>
            </Link>

          </div>


          {/* ================= MOBILE MENU ================= */}

          <button
            type="button"
            className="p-2.5 text-gray-700
                       transition-colors
                       hover:text-gray-900
                       lg:hidden"
            aria-label="Open menu"
          >

            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>

          </button>

        </div>

      </div>

    </header>
  );
}