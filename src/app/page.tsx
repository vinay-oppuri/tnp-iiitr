import Image from "next/image";

import { AboutIIITR, Thoughts } from "@/data/Home";
import HeroButtons from "@/components/landing/HeroButtons";

import PlacementStatsSummary from "@/components/landing/PlacementsHightlight";
import PlacementStats from "@/components/shared/PlacementStats";
import ReusableCard from "@/components/shared/Message";
import WhyRecruitUs from "@/components/landing/WhyRecruitUs";
import RecruitmentTimeline from "@/components/landing/RecruitmentTimeline";
import Display from "@/components/shared/Display";
import WhatWeOfferDisplay from "@/components/landing/WhatWeOfferDisplay";
import { Companies } from "@/data/Companies";
export default function HomePage() {

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

                <div className="section-shell relative z-10 flex min-h-screen flex-col items-center justify-center">
                    <div className="mx-auto w-full max-w-5xl">
                        <div className="flex flex-col items-center justify-center gap-6 text-center md:flex-row md:gap-10 md:text-left">
                            <Image src="/logos/tnp.svg" alt="TNP IIITR Logo" width={200} height={200} className="h-[120px] w-[120px] object-contain sm:h-[200px] sm:w-[200px] brightness-0 invert" />
                            <div className="space-y-3">
                                <h1 className="font-display text-2xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                                    Training and <br className="hidden lg:block" /> Placement Cell
                                </h1>
                                <p className="text-sm font-medium tracking-wide text-slate-300 sm:text-base">
                                    Indian Institute of Information Technology, Raichur
                                </p>
                                <HeroButtons />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full flex flex-col justify-center items-center mt-20">
                <div className="w-full">
                    <PlacementStatsSummary />
                </div>
            </section>

            <section className="flex flex-col gap-8 section-shell relative z-10 py-16 sm:py-20" id="scrollTO">
                <div id="aboutUs" className="scroll-mt-32">
                    <h2 className="section-title px-2">About Us</h2>
                    <div className="flex flex-col lg:flex-row gap-8 mt-6 rounded-3xl border border-slate-200/80 bg-white/85 p-6 shadow-soft backdrop-blur-xl sm:p-8 items-center lg:items-start">
                        <p className="text-sm leading-relaxed text-slate-700 sm:text-base">{AboutIIITR}</p>
                        <div className="hidden md:flex relative w-full max-w-[500px] shrink-0 lg:w-1/2">
                            <div className="aspect-square w-full max-w-[320px] overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-100 shadow-soft">
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
                            isLeftAlign={item.isLeftAlign}
                            haveLogo={item.haveLogo}
                            heading={item.heading}
                            writer={item.writer}
                            content={item.content}
                            imgSrc={item.imgSrc}
                            altText={item.altText}
                        />
                    ))}
                </div>

                <div className="mt-16 w-full flex justify-center">
                    <PlacementStats />
                </div>

                <WhatWeOfferDisplay />
            </section>

            <section className="section-shell relative z-10 py-6 sm:py-8">
                <div id="recruit" className="scroll-mt-32"></div>
                <h2 className="section-title text-center">
                    Why Recruit Us
                </h2>
                <div className="mt-8 sm:mt-10">
                    <WhyRecruitUs />
                </div>
            </section>

            <section className="section-shell relative z-10 py-10 sm:py-14">
                <h2
                    className="section-title scroll-mt-32 text-center"

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
