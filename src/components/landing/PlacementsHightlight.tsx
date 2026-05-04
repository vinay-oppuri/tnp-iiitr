const stats = [
    { label: "Highest Package", value: "48 LPA" },
    { label: "Average Package", value: "13.2 LPA" },
    { label: "Placement Rate", value: "68%+", ongoing: true },
];

export default function PlacementStatsSummary() {
    return (
        <div className="mx-auto w-full max-w-5xl px-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 rounded-3xl border border-slate-200/80 bg-white/90 p-8 shadow-sm backdrop-blur-xl">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className={`flex flex-col items-center justify-center space-y-2 text-center ${index === 2 ? "col-span-2 sm:col-span-1 mt-4 sm:mt-0" : ""}`}
                        data-aos-delay={index * 100}
                    >
                        <div className="flex flex-row items-center justify-center gap-2">
                            <div className="font-display text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-indigo-900">
                                {stat.value}
                            </div>
                            {stat.ongoing && (
                                <div className="flex items-center gap-1 text-emerald-500 font-semibold text-xs sm:text-sm">
                                    <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-emerald-500"></span>
                                    <span className="text-[10px] sm:text-xs">(Ongoing)</span>
                                </div>
                            )}
                        </div>
                        <div className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-wide text-slate-500 uppercase">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
