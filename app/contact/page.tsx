export default function ContactPage() {
    return (
        <main className="mx-auto max-w-3xl p-8">
            <h1 className="text-3xl font-bold">تماس با ما</h1>
            <p className="mt-2 text-gray-600">
                از هر کدام از راههای زیر با ما در ارتباط باش.
            </p>

            <ul className="mt-8 space-y-4">
                <li>
                    📞 تلفن:{" "}
                    <a href="tel:+982100000000" className="text-blue-600" dir="ltr">
                        021-0000-0000
                    </a>
                </li>
                <li>
                    ✉️ ایمیل:{" "}
                    <a href="mailto:hello@example.com" className="text-blue-600">
                        hello@example.com
                    </a>
                </li>
                <li>
                    💼 لینکدین:{" "}
                    <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600"
                    >
                        صفحه شرکت
                    </a>
                </li>
            </ul>
        </main>
    );
}