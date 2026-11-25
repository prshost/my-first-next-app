import Link from "next/link";
import { services } from "@/app/lib/services";

export default function ServicesPage() {
    return (
        <main className="mx-auto max-w-4xl p-8">
            <h1 className="text-3xl font-bold">خدمات ما</h1>
            <p className="mt-2 text-gray-600">
                روی هر خدمت کلیک کن تا جزئیاتش را ببینی.
            </p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {services.map((service) => (
                    <li key={service.slug}>
                        <Link
                            href={`/services/${service.slug}`}
                            className="block rounded-xl border p-5 transition hover:border-blue-500 hover:shadow-md"
                        >
                            <h2 className="text-xl font-semibold">{service.title}</h2>
                            <p className="mt-2 text-gray-600">{service.summary}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}