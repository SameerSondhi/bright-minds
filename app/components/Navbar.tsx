'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'High School Math', href: '/high-school-math' },
        { name: 'College Prep', href: '/college-prep' },
        { name: 'MBA Support', href: '/mba-support' },
        { name: 'Pricing', href: '/pricing-info' },
    ];

    return (
        <header className="bg-[#1F75CB] text-white shadow sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <Link href="/" className="text-xl font-extrabold tracking-tight hover:opacity-90 transition">
                        BrightMind
                    </Link>
                </div>

                {/* Center links */}
                <nav className="hidden md:flex flex-1 justify-center gap-8">
                    {navLinks.map(link => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`hover:underline transition ${
                                pathname === link.href ? 'underline underline-offset-4 font-bold' : ''
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Contact button */}
                <div className="hidden md:block flex-shrink-0">
                    <a
                        href="mailto:hello@brightmind.com"
                        className="bg-[#20C997] text-white rounded-full px-4 py-2 font-medium hover:bg-[#17b58a] transition"
                    >
                        Contact
                    </a>
                </div>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden focus:outline-none ml-auto"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        className="w-6 h-6 fill-current"
                        viewBox="0 0 24 24"
                    >
                        {isOpen ? (
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M18.3 5.7a1 1 0 00-1.4-1.4L12 9.6 7.1 4.7a1 1 0 00-1.4 1.4L10.6 12l-4.9 4.9a1 1 0 001.4 1.4L12 14.4l4.9 4.9a1 1 0 001.4-1.4L13.4 12l4.9-4.9z"
                            />
                        ) : (
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-[#1F75CB] px-6 py-4 space-y-4">
                    {navLinks.map(link => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`block hover:underline transition ${
                                pathname === link.href ? 'underline underline-offset-4 font-bold' : ''
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="mailto:hello@brightmind.com"
                        className="block bg-[#20C997] text-center text-white rounded-full px-4 py-2 font-medium hover:bg-[#17b58a] transition"
                    >
                        Contact
                    </a>
                </div>
            )}
        </header>
    );
}