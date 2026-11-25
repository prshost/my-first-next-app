import ServicesSidebar from "./_components/ServicesSidebar";
import Counter from "@/app/components/Counter";

export default function ServicesLayout({ children, }: { children: React.ReactNode; }) {
    return (
        <div className="mx-auto flex max-w-5xl flex-col gap-6 p-4 md:flex-row md:p-8">
            <ServicesSidebar />
            <div className="flex-1">
                <Counter label="شمارنده Layout" variant="layout" />
                {children}
            </div>
        </div>
    );
}