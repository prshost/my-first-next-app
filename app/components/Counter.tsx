"use client";

import { useEffect, useState } from "react";

type CounterProps = {
    label: string;
    variant?: "layout" | "template";
};

const variantStyles = {
    layout: "border-blue-300 bg-blue-50 text-blue-800",
    template: "border-amber-300 bg-amber-50 text-amber-800",
};

export default function Counter({ label, variant = "layout" }: CounterProps) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`🟢 ${label} mounted`);
        return () => console.log(`🔴 ${label} unmounted`);
    }, [label]);

    return (
        <div
            className={`mb-4 flex items-center justify-between rounded-lg border px-4 py-2 text-sm ${variantStyles[variant]}`}
        >
      <span>
        {label}: <strong>{count}</strong>
      </span>
            <button
                type="button"
                onClick={() => setCount((c) => c + 1)}
                className="rounded-md bg-white px-3 py-1 shadow-sm hover:shadow"
            >
                +۱
            </button>
        </div>
    );
}