"use client";

import React from "react";
import TimelineSteps from "../data/TimelineSteps";

export default function RecruitmentTimeline() {
    return (
        <div className="mx-auto max-w-5xl px-4 py-8">
            <div className="relative">
                {/* Center Line for mobile/desktop (moved to left) */}
                <div className="absolute left-6 top-0 h-full w-px bg-slate-300 sm:left-10"></div>

                <div>
                    {TimelineSteps.map((step: string, id: number) => {
                        return (
                            <div
                                key={id}
                                className="relative flex w-full flex-col sm:flex-row items-start sm:items-center py-2 sm:py-4"
                            >
                                {/* Circle Node */}
                                <div className="absolute left-6 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-slate-500 bg-white text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-800 hover:text-white sm:left-10">
                                    {id + 1}
                                </div>

                                {/* Content Card */}
                                <div className="w-full pl-16 sm:pl-28 pr-4">
                                    <div
                                        data-aos="fade-up"
                                        className="group flex min-h-[90px] w-full flex-col justify-center rounded-2xl bg-white/70 px-6 py-5 shadow-sm ring-1 ring-slate-200/60 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:shadow-md hover:ring-slate-300"
                                    >
                                        <p className="text-sm font-medium leading-relaxed text-slate-700 sm:text-base group-hover:text-slate-900">
                                            {step}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
