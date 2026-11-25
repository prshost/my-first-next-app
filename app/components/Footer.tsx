import Link from "next/link";

const footerLinks = [
    { href: "/about", label: "درباره ما" },
    { href: "/services", label: "خدمات" },
    { href: "/contact", label: "تماس با ما" },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t bg-gray-50">
            <div className="mx-auto flex max-w-5xl flex-col gap-4 p-6 text-sm text-gray-600 sm:flex-row sm:items-center sm:justify-between">
                <p>© {year} شرکت من. همه حقوق محفوظ است.</p>

                <ul className="flex gap-4">
                    {footerLinks.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href} className="hover:text-blue-600">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
}