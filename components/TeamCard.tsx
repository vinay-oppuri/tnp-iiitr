import React from "react";
import Image from "next/image";
import { type TeamMember } from "../data/Team";
import { Linkedin, Mail } from "lucide-react";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

type TeamCardProps = {
    member: TeamMember;
    delay?: number;
};

export default function TeamCard({ member, delay = 0 }: TeamCardProps) {
    return (
        <Card
            className="group relative flex flex-col items-center overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-hover"
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

            <CardContent className="w-full space-y-1 p-6 text-center">
                <CardTitle className="font-display text-xl font-bold text-slate-900">{member.name}</CardTitle>
                <CardDescription className="text-sm font-medium text-cyan-600 uppercase tracking-wider">{member.role}</CardDescription>
            </CardContent>
        </Card>
    );
}
