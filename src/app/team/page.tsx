import { facultyIncharge, studentCoordinator, volunteers } from "@/data/Team";
import TeamCard from "@/components/shared/TeamCard";

export default function TeamPage() {
    return (
        <div className="relative min-h-screen bg-slate-50 pb-20 pt-28 sm:pt-36">

            {/* Header */}
            <div className="section-shell relative z-10 text-center">
                <div className="mx-auto max-w-3xl">
                    <h1 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
                        Meet Our <span className="text-cyan-600">Team</span>
                    </h1>
                    <p className="mt-6 text-base text-slate-600 sm:text-lg">
                        The Career Service Cell at IIIT Raichur is driven by a dedicated group of faculty and student coordinators.
                    </p>
                </div>
            </div>

            {/* Core Members */}
            <section className="section-shell mt-12 sm:mt-20">
                <SectionTitle title="Core Members" />

                <div className="mt-8 flex flex-wrap justify-center gap-6 md:gap-8">
                    {facultyIncharge.map((member, idx) => (
                        <div key={member.id} className="w-[280px]">
                            <TeamCard member={member} delay={idx * 100} />
                        </div>
                    ))}
                </div>
            </section>

            {/* Student Coordinator */}
            <section className="section-shell mt-12 sm:mt-20">
                <SectionTitle title="Student Coordinators" />

                <div className="mt-8 flex justify-center">
                    <div className="w-[280px]">
                        <TeamCard member={studentCoordinator} />
                    </div>
                </div>
            </section>

            {/* Volunteers */}
            <section className="section-shell mt-12 sm:mt-20">
                <SectionTitle title="Volunteers" />

                <div className="mt-8 flex flex-wrap justify-center gap-6 md:gap-8">
                    {volunteers.map((member, idx) => (
                        <div key={member.id} className="w-[280px]">
                            <TeamCard member={member} delay={idx * 100} />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

function SectionTitle({ title }: { title: string }) {
    return (
        <div className="flex items-center gap-4 py-8">
            <div className="h-px flex-1 bg-slate-200"></div>
            <h2 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl whitespace-nowrap">
                {title}
            </h2>
            <div className="h-px flex-1 bg-slate-200"></div>
        </div>
    );
}