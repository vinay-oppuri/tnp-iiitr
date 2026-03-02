"use client";

import React from "react";
import TimelineSteps from "../data/TimelineSteps";

export default function RecruitmentTimeline() {
    return (
        <div className="mx-auto max-w-4xl px-4 py-4">
            <div className="relative">
                {/* Center Line for mobile/desktop (moved to left) */}
                <div className="absolute left-6 top-0 h-full w-px bg-slate-200 sm:left-10"></div>

                <div className="space-y-6">
                    {TimelineSteps.map((step: string, id: number) => {
                        return (
                            <div
                                key={id}
                                className="group relative flex w-full flex-col sm:flex-row items-start sm:items-center"
                            >
                                {/* Circle Node */}
                                <div className="absolute left-6 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-4 border-slate-50 bg-white text-sm font-bold text-slate-400 shadow-sm transition-all duration-300 group-hover:border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white sm:left-10">
                                    {id + 1}
                                </div>

                                {/* Content Card */}
                                <div className="w-full pl-16 sm:pl-24">
                                    <div
                                        data-aos="fade-up"
                                        className="relative flex w-full items-center overflow-hidden rounded-2xl border border-slate-200/60 bg-white p-6 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg"
                                    >
                                        <div className="absolute left-0 top-0 h-full w-1 bg-indigo-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                        <p className="text-base font-medium leading-relaxed text-slate-600 transition-colors duration-300 group-hover:text-slate-900">
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
