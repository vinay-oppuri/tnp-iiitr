import React from "react";
import Image from "next/image";
import { type TeamMember } from "../data/Team";
import { Linkedin, Mail } from "lucide-react";

type TeamCardProps = {
    member: TeamMember;
    delay?: number;
};

export default function TeamCard({ member, delay = 0 }: TeamCardProps) {
    return (
        <div
            className="group relative flex flex-col items-center overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-hover"
            data-aos="fade-up"
            data-aos-delay={delay}
        >
            <div className="relative h-64 w-full overflow-hidden bg-slate-100 sm:h-72">
                <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Social Overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-slate-900/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                    {member.linkedin ? (
                        <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-900 transition-transform hover:scale-110"
                            aria-label={`LinkedIn for ${member.name}`}
                        >
                            <Linkedin className="h-5 w-5" />
                        </a>
                    ) : null}

                    {member.email ? (
                        <a
                            href={`mailto:${member.email}`}
                            className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500 text-white transition-transform hover:scale-110"
                            aria-label={`Email ${member.name}`}
                        >
                            <Mail className="h-5 w-5" />
                        </a>
                    ) : null}
                </div>
            </div>

            <div className="w-full space-y-1 bg-white p-6 text-center">
                <h3 className="font-display text-xl font-bold text-slate-900">{member.name}</h3>
                <p className="text-sm font-medium text-cyan-600 uppercase tracking-wider">{member.role}</p>
            </div>
        </div>
    );
}
