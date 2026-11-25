"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { href: "/", label: "خانه" },
    { href: "/about", label: "درباره ما" },
    { href: "/services", label: "خدمات" },
    { href: "/contact", label: "تماس با ما" },
];

export default function Navbar() {
    const pathname = usePathname();

    function isActive(href: string) {
        if (href === "/") return pathname === "/";
        return pathname === href || pathname.startsWith(`${href}/`);
    }

    return (
        <header className="border-b bg-white">
            <nav className="mx-auto flex max-w-5xl items-center justify-between p-4">
                <Link href="/" className="text-xl font-bold">
                    شرکت من
                </Link>

                <ul className="flex gap-2">
                    {navLinks.map((link) => {
                        const active = isActive(link.href);

                        return (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    aria-current={active ? "page" : undefined}
                                    className={
                                        active
                                            ? "rounded-lg bg-blue-600 px-4 py-2 text-white"
                                            : "rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100"
                                    }
                                >
                                    {link.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
}