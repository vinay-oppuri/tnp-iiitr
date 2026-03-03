
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AcademicsData, ResearchData } from "@/data/WhatWeOffer";

export default function WhatWeOfferDisplay() {
    return (
        <div id="whatWeOffer" className="scroll-mt-32 mt-16 space-y-16 sm:mt-24">
            <div className="space-y-4 text-center">
                <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">Discover</p>
                <h1 className="section-title">What We Offer</h1>
            </div>

            <Tabs defaultValue="academics" className="w-full">
                <div className="flex justify-center mb-12">
                    <TabsList className="bg-slate-100 py-1">
                        <TabsTrigger value="academics" className="text-sm px-8 py-2.5 data-[state=active]:bg-slate-900/90 data-[state=active]:text-white data-[state=active]:shadow-sm">
                            Academics
                        </TabsTrigger>
                        <TabsTrigger value="research" className="text-sm px-8 py-2.5 data-[state=active]:bg-slate-900/90 data-[state=active]:text-white data-[state=active]:shadow-sm">
                            Research
                        </TabsTrigger>
                    </TabsList>
                </div>

                <TabsContent value="academics" className="space-y-24 animate-in fade-in-50 duration-500">
                    {AcademicsData.map((item, id) => (
                        <div key={id} data-aos="fade-up" className="space-y-8">
                            <div className="space-y-4 text-center">
                                <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">{item.title}</h2>
                                <p className="mx-auto max-w-5xl text-base leading-relaxed text-slate-600 sm:text-lg md:text-justify lg:text-center">
                                    {item.facilities}
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div className="flex items-center justify-center gap-4">
                                    <div className="h-px w-full max-w-[100px] bg-slate-200 sm:max-w-[200px]" />
                                    <h3 className="text-xl font-semibold text-slate-800">Courses</h3>
                                    <div className="h-px w-full max-w-[100px] bg-slate-200 sm:max-w-[200px]" />
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                    {item.courses.map((course, idx) => (
                                        <Card key={idx} className="group overflow-hidden border-slate-200/60 bg-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-slate-400 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                                            <CardContent className="flex h-full flex-col items-center justify-center gap-4 p-6 text-center">
                                                <div className="rounded-xl bg-slate-100 p-4 transition-colors duration-300 group-hover:bg-slate-900 group-hover:text-white">
                                                    <course.icon className="h-8 w-8" strokeWidth={1.5} />
                                                </div>
                                                <h4 className="font-semibold text-slate-800 transition-colors duration-300 group-hover:text-slate-900">{course.name}</h4>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </TabsContent>

                <TabsContent value="research" className="space-y-24 animate-in fade-in-50 duration-500">
                    {ResearchData.map((item, id) => (
                        <div key={id} data-aos="fade-up" className="space-y-8">
                            <div className="space-y-4 text-center">
                                <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">{item.title}</h2>
                                <p className="mx-auto max-w-5xl text-base leading-relaxed text-slate-600 sm:text-lg md:text-justify lg:text-center">
                                    {item.facilities}
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div className="flex items-center justify-center gap-4">
                                    <div className="h-px w-full max-w-[100px] bg-slate-200 sm:max-w-[200px]" />
                                    <h3 className="text-xl font-semibold text-slate-800">Focus Areas</h3>
                                    <div className="h-px w-full max-w-[100px] bg-slate-200 sm:max-w-[200px]" />
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                    {item.courses.slice(0, 8).map((course, idx) => (
                                        <Card key={idx} className="group overflow-hidden border-slate-200/60 bg-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-slate-400 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                                            <CardContent className="flex h-full flex-col items-center justify-center gap-4 p-6 text-center">
                                                <div className="rounded-xl bg-slate-100 p-4 transition-colors duration-300 group-hover:bg-slate-900 group-hover:text-white">
                                                    <course.icon className="h-8 w-8" strokeWidth={1.5} />
                                                </div>
                                                <h4 className="font-semibold text-slate-800 transition-colors duration-300 group-hover:text-slate-900">{course.name}</h4>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </TabsContent>
            </Tabs>
        </div>
    );
}
