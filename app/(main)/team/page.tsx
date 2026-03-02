"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { facultyIncharge, studentCoordinators, volunteers } from "@/data/Team";
import TeamCard from "@/components/TeamCard";

export default function TeamPage() {
    useEffect(() => {
        AOS.init({
            easing: "ease-in-out",
            duration: 600,
            delay: 25,
            once: true,
        });
    }, []);

    return (
        <div className="relative min-h-screen bg-slate-50 pb-20 pt-28 sm:pt-36">
            {/* Header Section */}
            <div className="section-shell relative z-10 text-center">
                <div data-aos="zoom-in" className="mx-auto max-w-3xl">
                    <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
                        Meet Our <span className="text-cyan-600">Team</span>
                    </h1>
                    <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
                        The Training and Placement Cell at IIIT Raichur is driven by a dedicated group of faculty and student coordinators, committed to bridging the gap between academia and the corporate world.
                    </p>
                </div>
            </div>

            {/* Faculty In-Charge */}
            <section className="section-shell mt-16 sm:mt-24">
                <div className="flex items-center gap-4 py-8" data-aos="fade-up">
                    <div className="h-px flex-1 bg-slate-200"></div>
                    <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                        Faculty In-Charge
                    </h2>
                    <div className="h-px flex-1 bg-slate-200"></div>
                </div>

                <div className="mx-auto mt-8 flex max-w-sm flex-col gap-8">
                    {facultyIncharge.map((member, idx) => (
                        <TeamCard key={member.id} member={member} delay={idx * 100} />
                    ))}
                </div>
            </section>

            {/* Student Coordinators */}
            <section className="section-shell mt-12 sm:mt-20">
                <div className="flex items-center gap-4 py-8" data-aos="fade-up">
                    <div className="h-px flex-1 bg-slate-200"></div>
                    <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                        Student Coordinators
                    </h2>
                    <div className="h-px flex-1 bg-slate-200"></div>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {studentCoordinators.map((member, idx) => (
                        <TeamCard key={member.id} member={member} delay={idx * 100} />
                    ))}
                </div>
            </section>

            {/* Volunteers */}
            <section className="section-shell mt-12 sm:mt-20">
                <div className="flex items-center gap-4 py-8" data-aos="fade-up">
                    <div className="h-px flex-1 bg-slate-200"></div>
                    <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                        Volunteers
                    </h2>
                    <div className="h-px flex-1 bg-slate-200"></div>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {volunteers.map((member, idx) => (
                        <TeamCard key={member.id} member={member} delay={idx * 100} />
                    ))}
                </div>
            </section>
        </div>
    );
}
