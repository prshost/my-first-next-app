export type Service = {
    slug: string;
    title: string;
    summary: string;
    description: string;
};

export const services: Service[] = [
    {
        slug: "web-design",
        title: "طراحی وبسایت",
        summary: "سایتهای سریع، ریسپانسیو و زیبا",
        description:
            "طراحی و توسعه وبسایتهای شرکتی با Next.js، از ایده اولیه تا انتشار نهایی.",
    },
    {
        slug: "seo",
        title: "بهینهسازی برای موتورهای جستجو",
        summary: "دیده شدن بیشتر در نتایج گوگل",
        description:
            "بهینهسازی فنی، ساختار محتوا و سرعت سایت برای رتبه بهتر در موتورهای جستجو.",
    },
    {
        slug: "mobile-app",
        title: "توسعه اپلیکیشن موبایل",
        summary: "اپلیکیشنهای کاربرپسند برای اندروید و iOS",
        description:
            "طراحی و ساخت اپلیکیشن موبایل با تجربه کاربری روان و عملکرد بالا.",
    },
];

export function getServiceBySlug(slug: string) {
    return services.find((service) => service.slug === slug);
}