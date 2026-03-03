import React from "react";

const stats = [
    { label: "Highest Package", value: "45 LPA" },
    { label: "Average Package", value: "15.5 LPA" },
    { label: "Placement Rate", value: "95%+" },
    { label: "Top Recruiters", value: "50+" },
];

export default function PlacementStats() {
    return (
        <div className="mx-auto w-full max-w-5xl px-4">
            <div className="grid grid-cols-2 gap-6 rounded-3xl border border-slate-200/80 bg-white/90 p-8 shadow-sm backdrop-blur-xl sm:grid-cols-4 sm:gap-8">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center space-y-2 text-center"
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                    >
                        <div className="font-display text-3xl font-bold text-indigo-900 sm:text-4xl md:text-5xl">
                            {stat.value}
                        </div>
                        <div className="text-sm font-semibold tracking-wide text-slate-500 uppercase">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
