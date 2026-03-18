"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import { AboutIIITR, Thoughts } from "@/data/Home";
import { ChevronDown, ChevronsDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import PlacementStats from "@/components/landing/PlacementStats";
import ReusableCard from "@/components/Message";
import WhyRecruitUs from "@/components/landing/WhyRecruitUs";
import RecruitmentTimeline from "@/components/landing/RecruitmentTimeline";
import Display from "@/components/Display";
import WhatWeOfferDisplay from "@/components/landing/WhatWeOfferDisplay";
import { Companies } from "@/data/Companies";
import BarItems from "@/data/BarItems";

export default function HomePage() {
    const [screenSize, setScreenSize] = useState(0);

    useEffect(() => {
        setScreenSize(window.innerWidth);
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener("resize", handleResize);

        AOS.init({
            easing: "ease-in-out",
            duration: 600,
            delay: 25,
            once: true,
        });

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div id="home" className="relative overflow-hidden">
            <section className="relative min-h-screen overflow-hidden bg-slate-900/70">
                <Image
                    src="/images/banner/cover.webp"
                    alt="IIIT Raichur campus background"
                    fill
                    priority
                    className="absolute inset-0 object-cover opacity-30 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-slate-900/70" />

                <div className="section-shell relative z-10 flex min-h-screen flex-col items-center justify-center pt-20 pb-10">
                    <div className="mx-auto w-full max-w-5xl">
                        <div className="flex flex-col items-center justify-center gap-6 text-center md:flex-row md:gap-10 md:text-left">
                            <Image src="/images/logo.svg" alt="IIITR Logo" data-aos="zoom-in" width={200} height={200} className="h-[120px] w-[120px] object-contain sm:h-[200px] sm:w-[200px] brightness-0 invert" />
                            <div className="space-y-3" data-aos="fade-left" data-aos-delay="200">
                                <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                                    {screenSize > 960 ? (
                                        <>
                                            Training and <br /> Placement Cell
                                        </>
                                    ) : (
                                        "Training and Placement Cell"
                                    )}
                                </h1>
                                <p className="text-sm font-medium tracking-wide text-slate-300 sm:text-base md:text-lg">
                                    Indian Institute of Information Technology, Raichur
                                </p>
                                {(() => {
                                    const companyMenu = BarItems.find((item) => item.id === 5)?.drop ?? [];
                                    const studentMenu = BarItems.find((item) => item.id === 6)?.drop ?? [];
                                    return (
                                        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button
                                                        variant="default"
                                                        size="lg"
                                                        className="w-full bg-white text-slate-900 hover:bg-slate-200 sm:w-auto font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 flex items-center gap-2"
                                                    >
                                                        For Companies <ChevronDown className="h-4 w-4" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="start" className="w-56 bg-slate-900/95 border-slate-800 text-white backdrop-blur-md">
                                                    {companyMenu.map((item) => (
                                                        <DropdownMenuItem
                                                            key={item.id}
                                                            onClick={item.onClick}
                                                            className="hover:bg-white/10 cursor-pointer focus:bg-white/10 focus:text-white"
                                                        >
                                                            {item.heading}
                                                        </DropdownMenuItem>
                                                    ))}
                                                </DropdownMenuContent>
                                            </DropdownMenu>

                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button
                                                        variant="outline"
                                                        size="lg"
                                                        className="w-full border-slate-400 bg-transparent text-white hover:bg-white/10 hover:text-white sm:w-auto flex items-center gap-2"
                                                    >
                                                        For Students <ChevronDown className="h-4 w-4" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="start" className="w-56 bg-slate-900/95 border-slate-800 text-white backdrop-blur-md">
                                                    {studentMenu.map((item) => (
                                                        <DropdownMenuItem
                                                            key={item.id}
                                                            onClick={item.onClick}
                                                            className="hover:bg-white/10 cursor-pointer focus:bg-white/10 focus:text-white"
                                                        >
                                                            {item.heading}
                                                        </DropdownMenuItem>
                                                    ))}
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </div>
                                    );
                                })()}
                            </div>
                        </div>
                    </div>

                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => document.getElementById("scrollTO")?.scrollIntoView({ behavior: "smooth" })}
                        className="absolute bottom-10 h-16 w-16 animate-bounce rounded-full text-white/70 hover:bg-white/10 hover:text-white"
                        aria-label="Scroll down"
                    >
                        <ChevronsDown className="h-10 w-10 sm:h-12 sm:w-12" />
                    </Button>
                </div>
            </section>

            {/* <section className="w-full flex flex-col justify-center items-center mt-20">
                <div className="w-full max-w-6xl">
                    <PlacementStats />
                </div>
            </section> */}

            <section className="flex flex-col gap-8 section-shell relative z-10 py-16 sm:py-20" id="scrollTO">
                <div id="aboutUs" className="scroll-mt-32" data-aos="fade-up">
                    <h2 className="section-title">About Us</h2>
                    <div className="flex gap-8 mt-6 rounded-3xl border border-slate-200/80 bg-white/85 p-6 shadow-soft backdrop-blur-xl sm:p-8">
                        <p className="text-base leading-relaxed text-slate-700 sm:text-lg">{AboutIIITR}</p>
                        <div className="relative w-full max-w-[500px] shrink-0 lg:w-1/2">
                            <div className="aspect-square w-80 overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-100 shadow-soft">
                                <Image
                                    src="/images/banner/cover.webp"
                                    alt="About IIITR"
                                    fill
                                    className="object-cover transition-transform duration-700 hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 space-y-8 sm:mt-16">
                    {Thoughts.map((item, id) => (
                        <ReusableCard
                            key={id}
                            isLeftAlign={screenSize <= 960 ? true : item.isLeftAlign}
                            haveLogo={item.haveLogo}
                            heading={item.heading}
                            writer={item.writer}
                            content={item.content}
                            imgSrc={item.imgSrc}
                            altText={item.altText}
                        />
                    ))}
                </div>

                <WhatWeOfferDisplay />
            </section>

            <section className="section-shell relative z-10 py-6 sm:py-8">
                <div id="recruit" className="scroll-mt-32"></div>
                <h2 className="section-title text-center" data-aos="fade-up">
                    Why Recruit Us
                </h2>
                <div className="mt-8 sm:mt-10">
                    <WhyRecruitUs />
                </div>
            </section>

            <section className="section-shell relative z-10 py-10 sm:py-14">
                <h2
                    className="section-title scroll-mt-32 text-center"
                    data-aos="fade-up"
                    id="rProcess"
                >
                    Recruitment Process
                </h2>
                <div className="mt-8 sm:mt-10">
                    <RecruitmentTimeline />
                </div>
            </section>

            <section className="section-shell relative z-10 py-10 pb-20 sm:py-14 sm:pb-24">
                <Display collection={Companies} />
            </section>
        </div>
    );
}
