"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import { AboutIIITR, Thoughts } from "@/data/Home";
import { ChevronsDown } from "lucide-react";
import { Button } from "@/components/ui/button";

import PlacementStats from "@/components/PlacementStats";
import ReusableCard from "@/components/Message";
import WhyRecruitUs from "@/components/WhyRecruitUs";
import RecruitmentTimeline from "@/components/RecruitmentTimeline";
import Display from "@/components/Display";
import WhatWeOfferDisplay from "@/components/WhatWeOfferDisplay";
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
                    <div className="mx-auto w-full max-w-5xl" data-aos="zoom-in">
                        <div className="flex flex-col items-center justify-center gap-6 text-center md:flex-row md:gap-10 md:text-left">
                            <img src="/images/logo.svg" alt="IIITR Logo" className="h-[120px] w-[120px] object-contain sm:h-[160px] sm:w-[160px] brightness-0 invert" />
                            <div className="space-y-3">
                                <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
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
                                    const studentMenu = BarItems.find((item) => item.id === 6)?.drop ?? [];
                                    return (
                                        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start">
                                            {studentMenu.map((item, index) => (
                                                <Button
                                                    key={item.id}
                                                    variant={index === 0 ? "default" : "outline"}
                                                    onClick={item.onClick}
                                                    className={index === 0
                                                        ? "w-full bg-white text-slate-900 hover:bg-slate-200 sm:w-auto"
                                                        : "w-full border-slate-400 bg-transparent text-white hover:bg-white/10 hover:text-white sm:w-auto"
                                                    }
                                                    size="lg"
                                                >
                                                    {item.heading}
                                                </Button>
                                            ))}
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

            <section className="relative z-20 mx-auto -mt-20 w-full max-w-6xl px-4 sm:-mt-24 sm:px-6 lg:px-8">
                <PlacementStats />
            </section>

            <section className="flex flex-col gap-8 section-shell relative z-10 py-16 sm:py-20" id="scrollTO">
                <div id="aboutUs" className="scroll-mt-32" data-aos="fade-up">
                    <h2 className="section-title">About Us</h2>
                    <div className="flex gap-8 mt-6 rounded-3xl border border-slate-200/80 bg-white/85 p-6 shadow-soft backdrop-blur-xl sm:p-8">
                        <p className="text-base leading-relaxed text-slate-700 sm:text-lg">{AboutIIITR}</p>
                        <Image
                            src="/images/about.png"
                            alt="About IIITR"
                            width={500}
                            height={500}
                            className="mt-6 rounded-3xl border border-slate-200/80 bg-white/85 p-6 shadow-soft backdrop-blur-xl sm:p-8"
                        />
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
