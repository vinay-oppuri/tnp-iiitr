"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ContactUsCard from "./ContactUsCard";
import {
    PlacementTeamCurrent,
    PlacementTeamPrev,
    PlacementOfficer,
} from "../data/Contact";

export default function FullScreenDialog(props: any) {
    const [placementTeam, setPlacementTeam] = useState<any>(PlacementTeamCurrent);
    const { open, handleClose } = props;

    // Prevent body scroll when dialog is open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [open]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-[100] flex flex-col bg-slate-50 animate-in slide-in-from-bottom-full duration-300">
            {/* Header */}
            <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-between bg-slate-900 px-4 shadow-md sm:px-6">
                <h2 className="text-lg font-semibold text-white">Team Members</h2>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleClose}
                    className="rounded-full text-slate-300 hover:bg-slate-800 hover:text-white focus-visible:ring-slate-400"
                    aria-label="Close dialog"
                >
                    <X className="h-6 w-6" />
                </Button>
            </header>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto w-full">
                <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

                    {/* Placement Officer Section */}
                    <div className="mb-16">
                        <div className="mb-8 text-center">
                            <h3 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
                                Placement Officer
                            </h3>
                            <div className="mx-auto mt-4 h-1 w-20 rounded bg-cyan-600"></div>
                        </div>

                        <div className="flex flex-wrap justify-center gap-8">
                            {PlacementOfficer.map((item: any, id: number) => (
                                <ContactUsCard
                                    key={id}
                                    name={item.name}
                                    email={item.email}
                                    linkedIn={item.linkedIn}
                                    phone={item.phone}
                                    image={item.image}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Placement Team Section */}
                    <div>
                        <div className="mb-8 text-center">
                            <h3 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
                                Placement Team
                            </h3>
                            <div className="mx-auto mt-4 h-1 w-20 rounded bg-cyan-600"></div>
                        </div>

                        {/* Team Toggle Buttons */}
                        <div className="mb-10 flex justify-center gap-4">
                            <Button
                                variant={placementTeam === PlacementTeamCurrent ? "default" : "outline"}
                                onClick={() => setPlacementTeam(PlacementTeamCurrent)}
                                className={cn(
                                    "rounded-full px-6 py-5 text-sm font-semibold transition-all duration-200",
                                    placementTeam === PlacementTeamCurrent
                                        ? "bg-slate-900 hover:bg-slate-800 shadow-md ring-2 ring-slate-900 ring-offset-2"
                                        : "text-slate-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
                                )}
                            >
                                Current Team
                            </Button>
                            <Button
                                variant={placementTeam === PlacementTeamPrev ? "default" : "outline"}
                                onClick={() => setPlacementTeam(PlacementTeamPrev)}
                                className={cn(
                                    "rounded-full px-6 py-5 text-sm font-semibold transition-all duration-200",
                                    placementTeam === PlacementTeamPrev
                                        ? "bg-slate-900 hover:bg-slate-800 shadow-md ring-2 ring-slate-900 ring-offset-2"
                                        : "text-slate-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
                                )}
                            >
                                Previous Team
                            </Button>
                        </div>

                        {/* Team Grid */}
                        <div className="flex flex-wrap justify-center gap-x-6 gap-y-10">
                            {placementTeam.map((item: any, id: number) => (
                                <ContactUsCard
                                    key={id}
                                    name={item.name}
                                    linkedIn={item.linkedIn}
                                    email={item.email}
                                    phone={item.phone}
                                    image={item.image}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
