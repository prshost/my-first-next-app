import Counter from "@/app/components/Counter";

export default function ServicesTemplate({
                                             children,
                                         }: {
    children: React.ReactNode;
}) {
    return (
        <div className="page-enter">
            <Counter label="شمارنده Template" variant="template" />
            {children}
        </div>
    );
}