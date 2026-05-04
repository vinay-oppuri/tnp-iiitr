"use client";

import Link from "next/link";
import { FileText, FileDown, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroButtons() {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full">

            {/* Placement Brochure */}
            <Button
                variant="default"
                size="lg"
                className="group w-[70%] sm:w-auto h-11 sm:h-14 px-3 sm:px-4 gap-2 sm:gap-3 rounded-lg sm:rounded-xl bg-white text-slate-900 shadow-md sm:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all hover:-translate-y-0 sm:hover:-translate-y-1 hover:bg-slate-50"
                asChild
            >
                <Link href="/files/PLACEMENT_BROCHURE.pdf" target="_blank">
                    <div className="hidden md:flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-md sm:rounded-lg bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                        <FileText className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold sm:font-bold">
                        Placement Brochure
                    </span>
                </Link>
            </Button>

            {/* Internship */}
            <Button
                variant="outline"
                size="lg"
                className="group w-[70%] sm:w-auto h-11 sm:h-14 px-3 sm:px-4 gap-2 sm:gap-3 rounded-lg sm:rounded-xl border-white/10 bg-white/5 text-white backdrop-blur-sm transition-all hover:bg-white/10"
                asChild
            >
                <Link href="/files/INTERNSHIP_BROCHURE.pdf" target="_blank">
                    <div className="hidden md:flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-md sm:rounded-lg bg-white/10 text-white group-hover:bg-white group-hover:text-slate-900 transition-colors">
                        <FileDown className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold sm:font-bold">
                        Internship Brochure
                    </span>
                </Link>
            </Button>

            {/* Recruitment */}
            <Button
                variant="outline"
                size="lg"
                className="group w-[70%] sm:w-auto h-11 sm:h-14 px-3 sm:px-4 gap-2 sm:gap-3 rounded-lg sm:rounded-xl border-white/10 bg-white/5 text-white backdrop-blur-sm transition-all hover:bg-white/10"
                asChild
            >
                <Link href="https://forms.gle/c8aXW35ay6L34Dro9" target="_blank">
                    <div className="hidden md:flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-md sm:rounded-lg bg-white/10 text-white group-hover:bg-white group-hover:text-slate-900 transition-colors">
                        <ClipboardList className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold sm:font-bold">
                        Recruitment Form
                    </span>
                </Link>
            </Button>

        </div>
    );
}
