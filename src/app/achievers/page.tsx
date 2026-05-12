import { topPlacements, higherEducation } from "@/data/Achievers";
import AchieversCarousel from "@/components/achievers/AchieversCarousel";

export default function StarPage() {
    return (
        <div className="relative min-h-screen pb-20 pt-32">
            <div className="section-shell relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-16 text-center sm:mb-24">
                    <h1 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                        Special <span className="text-cyan-600">Mentions</span>
                    </h1>
                    <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
                        Celebrating the exceptional achievements of our students in securing top-tier placements and admissions into prestigious universities worldwide.
                    </p>
                </div>

                {/* Top Placements Section */}
                {topPlacements.length > 0 && (
                <section className="mb-20 sm:mb-28">
                    <div className="mb-10 flex items-center justify-center gap-3 sm:justify-start">
                        <h2 className="w-full section-sub-title px-2">Top Placements</h2>
                    </div>
                    
                    <AchieversCarousel students={topPlacements} />
                </section>
                )}

                {/* Higher Education Section */}
                {higherEducation.length > 0 && (
                <section>
                    <div className="mb-10 flex items-center justify-center gap-3 sm:justify-start">
                        <h2 className="w-full section-sub-title px-2">Higher Education</h2>
                    </div>
                    
                    <AchieversCarousel students={higherEducation} />
                </section>
                )}
            </div>
        </div>
    );
}