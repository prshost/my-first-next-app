import Link from "next/link";
import { getServiceBySlug } from "@/app/lib/services";

export default async function ServiceDetailPage({
                                                    params,
                                                }: {
    params: Promise<{ service: string }>;
}) {
    const { service: slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        return (
            <main className="mx-auto max-w-3xl p-8">
                <h1 className="text-2xl font-bold">این خدمت پیدا نشد</h1>
                <Link href="/services" className="mt-4 inline-block text-blue-600">
                    بازگشت به لیست خدمات
                </Link>
            </main>
        );
    }

    return (
        <main className="mx-auto max-w-3xl p-8">
            <Link href="/services" className="text-sm text-blue-600 hover:underline">
                → بازگشت به خدمات
            </Link>

            <h1 className="mt-4 text-3xl font-bold">{service.title}</h1>
            <p className="mt-4 leading-8 text-gray-700">{service.description}</p>
        </main>
    );
}