"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { services } from "@/app/lib/services";

const sidebarLinks = [
    { href: "/services", label: "همه خدمات" },
    ...services.map((service) => ({
        href: `/services/${service.slug}`,
        label: service.title,
    })),
];

export default function ServicesSidebar() {
    const pathname = usePathname();

    return (
        <aside className="md:w-64 md:shrink-0">
            <nav aria-label="منوی خدمات" className="rounded-xl border p-4">
                <h2 className="mb-3 text-sm font-semibold text-gray-500">
                    خدمات ما
                </h2>

                <ul className="space-y-1">
                    {sidebarLinks.map((link) => {
                        const active = pathname === link.href;

                        return (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    aria-current={active ? "page" : undefined}
                                    className={
                                        active
                                            ? "block rounded-lg bg-blue-50 px-3 py-2 font-medium text-blue-700"
                                            : "block rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100"
                                    }
                                >
                                      {link.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </aside>
    );
}