"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import BarItems from "@/data/BarItems";

export default function HeroButtons() {
    const companyMenu = BarItems.find((item) => item.id === 5)?.drop ?? [];
    const studentMenu = BarItems.find((item) => item.id === 6)?.drop ?? [];

    return (
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="default"
                        size="lg"
                        className="w-[70%] md:w-full bg-white text-slate-900 hover:bg-slate-200 sm:w-auto font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 flex items-center gap-2"
                    >
                        For Companies <ChevronDown className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-60 bg-slate-900/40 border-slate-800 text-white backdrop-blur-md">
                    {companyMenu.map((item) => (
                        <DropdownMenuItem
                            key={item.id}
                            className="hover:bg-white/10 focus:bg-white/10 focus:text-white p-0"
                            asChild
                        >
                            <Link href={item.href} target="_blank" rel="noopener noreferrer" className="w-full px-2 py-1.5 cursor-pointer">
                                {item.heading}
                            </Link>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="outline"
                        size="lg"
                        className="w-[70%] md:w-full border-slate-400 bg-transparent text-white hover:bg-white/10 hover:text-white sm:w-auto flex items-center gap-2"
                    >
                        For Students <ChevronDown className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-60 bg-slate-900/40 border-slate-800 text-white backdrop-blur-md">
                    {studentMenu.map((item) => (
                        <DropdownMenuItem
                            key={item.id}
                            className="hover:bg-white/10 focus:bg-white/10 focus:text-white p-0"
                            asChild
                        >
                            <Link href={item.href} target="_blank" rel="noopener noreferrer" className="w-full px-2 py-1.5 cursor-pointer">
                                {item.heading}
                            </Link>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}
