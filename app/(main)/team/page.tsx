"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { facultyIncharge, studentCoordinators, volunteers, type TeamMember } from "@/data/Team";
import TeamCard from "@/components/TeamCard";
import { Search } from "lucide-react";

export default function TeamPage() {
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        AOS.init({
            easing: "ease-in-out",
            duration: 600,
            delay: 25,
            once: true,
        });
    }, []);

    // Combine all members and group dynamically based on search and sort alphabetical
    const allMembers = [...facultyIncharge, ...studentCoordinators, ...volunteers];

    // Filter and Sort by Name
    const filteredMembers = allMembers
        .filter((m) => m.name.toLowerCase().includes(searchQuery.toLowerCase()))
        .sort((a, b) => a.name.localeCompare(b.name));

    // Group by Role
    const groupedMembers = filteredMembers.reduce((acc, current) => {
        const role = current.role || "Others";
        if (!acc[role]) acc[role] = [];
        acc[role].push(current);
        return acc;
    }, {} as Record<string, TeamMember[]>);

    // Maintain a consistent order of roles
    const orderOfRoles = [
        "Faculty In-Charge (T&P)",
        "Student Coordinator",
        "Volunteer"
    ];

    const sortedRoles = Object.keys(groupedMembers).sort((a, b) => {
        const indexA = orderOfRoles.indexOf(a);
        const indexB = orderOfRoles.indexOf(b);
        if (indexA !== -1 && indexB !== -1) return indexA - indexB;
        if (indexA !== -1) return -1;
        if (indexB !== -1) return 1;
        return a.localeCompare(b);
    });

    const getRoleHeading = (role: string) => {
        switch (role) {
            case "Faculty In-Charge (T&P)": return "Faculty In-Charge";
            case "Student Coordinator": return "Student Coordinators";
            case "Volunteer": return "Volunteers";
            default: return role + "s";
        }
    };

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

            {/* Search Bar */}
            <div className="section-shell relative z-10 mt-12 flex justify-center" data-aos="fade-up">
                <div className="relative w-full max-w-lg">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                        <Search className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                        type="text"
                        className="block w-full rounded-full border border-slate-300 bg-white p-4 pl-12 text-sm text-slate-900 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                        placeholder="Search team members by name..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            {/* Dynamic Rendering */}
            {sortedRoles.length === 0 ? (
                <div className="mt-20 text-center text-slate-500">
                    No team members found matching "{searchQuery}"
                </div>
            ) : (
                sortedRoles.map((role) => {
                    const isFaculty = role === "Faculty In-Charge (T&P)";
                    const gridClass = isFaculty
                        ? "mx-auto mt-8 flex max-w-sm flex-col gap-8"
                        : "mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";

                    return (
                        <section key={role} className="section-shell mt-12 sm:mt-20">
                            <div className="flex items-center gap-4 py-8" data-aos="fade-up">
                                <div className="h-px flex-1 bg-slate-200"></div>
                                <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl text-center whitespace-nowrap">
                                    {getRoleHeading(role)}
                                </h2>
                                <div className="h-px flex-1 bg-slate-200"></div>
                            </div>

                            <div className={gridClass}>
                                {groupedMembers[role].map((member, idx) => (
                                    <TeamCard key={member.id} member={member} delay={idx * 100} />
                                ))}
                            </div>
                        </section>
                    );
                })
            )}
        </div>
    );
}
