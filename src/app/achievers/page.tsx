"use client";

import React, { useState, useRef } from "react";
import { topPlacements, higherEducation } from "@/data/Achievers";
import Image from "next/image";

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

function AchieversCarousel({ students }: { students: any[] }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        if (scrollRef.current) {
            const scrollPosition = scrollRef.current.scrollLeft;
            const cardWidth = scrollRef.current.children[0]?.clientWidth || scrollRef.current.offsetWidth;
            const gap = 24; // gap-6 is 24px
            const newIndex = Math.round(scrollPosition / (cardWidth + gap));
            if (newIndex !== activeIndex) {
                setActiveIndex(newIndex);
            }
        }
    };

    return (
        <div>
            <div 
                ref={scrollRef}
                onScroll={handleScroll}
                className="flex lg:flex-wrap lg:justify-center gap-6 px-2 mx-auto overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory pb-4 lg:pb-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
                {students.map((student) => (
                    <div key={student.id} className="shrink-0 w-[85vw] sm:w-[350px] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] snap-center h-auto flex">
                        <StudentCard student={student} />
                    </div>
                ))}
            </div>

            {/* Pagination Dots - Mobile Only */}
            {students.length > 1 && (
            <div className="flex lg:hidden justify-center gap-2 mt-4">
                {students.map((_, i) => (
                <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeIndex === i ? "w-6 bg-cyan-600" : "w-1.5 bg-slate-300"
                    }`}
                />
                ))}
            </div>
            )}
        </div>
    );
}

function StudentCard({ student }: { student: any }) {
    const isPlacement = student.type === "placement";
    
    return (
        <div className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/85 p-6 shadow-soft backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md w-full flex flex-col">
            {/* Glow effect on hover */}
            <div className={`absolute -inset-0.5 rounded-3xl opacity-0 blur-md transition duration-500 group-hover:opacity-100 ${isPlacement ? 'bg-gradient-to-br from-cyan-500/10 to-blue-500/10' : 'bg-gradient-to-br from-purple-500/10 to-pink-500/10'}`}></div>
            
            <div className="relative z-10 flex flex-col justify-center items-center text-center h-full">
                <div className="relative mb-5 h-28 w-28 overflow-hidden rounded-full border-2 border-white shadow-md transition-transform duration-500 group-hover:scale-105 shrink-0">
                    <Image 
                        src={student.image} 
                        alt={student.name} 
                        fill 
                        className="object-cover"
                    />
                </div>
                
                <h3 className="mb-1 text-xl font-bold tracking-tight text-slate-900">{student.name}</h3>
                <p className="mb-4 text-xs font-medium uppercase tracking-wider text-slate-500">Batch of {student.batch}</p>
                
                <div className="mb-4 w-full rounded-xl bg-slate-50 p-3 border border-slate-100 shrink-0">
                    <p className={`text-sm font-semibold ${isPlacement ? 'text-cyan-700' : 'text-purple-700'}`}>
                        {student.achievement}
                    </p>
                </div>
                
                <p className="mb-6 line-clamp-3 text-sm text-slate-600 flex-grow">
                    {student.description}
                </p>
            </div>
        </div>
    );
}