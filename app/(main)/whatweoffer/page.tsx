import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AcademicsData, ResearchData } from "@/data/WhatWeOffer";

export default function WhatWeOfferPage() {
    return (
        <div className="container mx-auto px-4 py-24 mb-24 min-h-screen max-w-7xl">
            <div className="space-y-4 text-center mb-16">
                <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">Discover</p>
                <h1 className="section-title text-4xl font-extrabold text-slate-900 sm:text-5xl">What We Offer</h1>
            </div>

            {/* Top Level Tabs: Academics vs Research */}
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

                {/* Academics Content */}
                <TabsContent value="academics" className="space-y-12 animate-in fade-in-50 duration-500">
                    <Tabs defaultValue="cse" className="w-full">
                        <div className="flex justify-center mb-8">
                            <TabsList className="bg-slate-50 border border-slate-200 py-1">
                                <TabsTrigger value="cse" className="text-sm px-6 py-2 data-[state=active]:bg-slate-900/90 data-[state=active]:text-white data-[state=active]:shadow-sm data-[state=active]:font-semibold">
                                    Computer Science and Engineering
                                </TabsTrigger>
                                <TabsTrigger value="aids" className="text-sm px-6 py-2 data-[state=active]:bg-slate-900/90 data-[state=active]:text-white data-[state=active]:shadow-sm data-[state=active]:font-semibold">
                                    Artificial Intelligence & Data Science
                                </TabsTrigger>
                            </TabsList>
                        </div>

                        <TabsContent value="cse" className="space-y-8 animate-in slide-in-from-left-2 duration-300">
                            {AcademicsData.filter(item => item.id === 1).map((item, id) => (
                                <CourseDisplay key={id} item={item} type="Courses" />
                            ))}
                        </TabsContent>
                        <TabsContent value="aids" className="space-y-8 animate-in slide-in-from-right-2 duration-300">
                            {AcademicsData.filter(item => item.id === 2).map((item, id) => (
                                <CourseDisplay key={id} item={item} type="Courses" />
                            ))}
                        </TabsContent>
                    </Tabs>
                </TabsContent>

                {/* Research Content */}
                <TabsContent value="research" className="space-y-12 animate-in fade-in-50 duration-500">
                    <Tabs defaultValue="cse" className="w-full">
                        <div className="flex justify-center mb-8">
                            <TabsList className="bg-slate-50 border border-slate-200 py-1">
                                <TabsTrigger value="cse" className="text-sm px-6 py-2 data-[state=active]:bg-slate-900/90 data-[state=active]:text-white data-[state=active]:shadow-sm data-[state=active]:font-semibold">
                                    Computer Science and Engineering
                                </TabsTrigger>
                                <TabsTrigger value="aids" className="text-sm px-6 py-2 data-[state=active]:bg-slate-900/90 data-[state=active]:text-white data-[state=active]:shadow-sm data-[state=active]:font-semibold">
                                    Artificial Intelligence & Data Science
                                </TabsTrigger>
                            </TabsList>
                        </div>

                        <TabsContent value="cse" className="space-y-8 animate-in slide-in-from-left-2 duration-300">
                            {ResearchData.filter(item => item.id === 1 || item.id === "1").map((item, id) => (
                                <CourseDisplay key={id} item={item as any} type="Focus Areas" />
                            ))}
                        </TabsContent>
                        <TabsContent value="aids" className="space-y-8 animate-in slide-in-from-right-2 duration-300">
                            {ResearchData.filter(item => item.id === 2 || item.id === "2").map((item, id) => (
                                <CourseDisplay key={id} item={item as any} type="Focus Areas" />
                            ))}
                        </TabsContent>
                    </Tabs>
                </TabsContent>
            </Tabs>
        </div>
    );
}

function CourseDisplay({ item, type }: { item: any; type: string }) {
    return (
        <div className="space-y-8 bg-white/40 p-6 sm:p-10 rounded-3xl border border-slate-100 shadow-sm">
            <div className="space-y-4 text-center">
                <p className="mx-auto max-w-4xl text-base leading-relaxed text-slate-600 sm:text-lg">
                    {item.facilities}
                </p>
            </div>

            <div className="space-y-8 mt-12">
                <div className="flex items-center justify-center gap-4">
                    <div className="h-px w-full max-w-[100px] bg-slate-200 sm:max-w-[200px]" />
                    <h3 className="text-xl font-semibold text-slate-800 whitespace-nowrap">{type}</h3>
                    <div className="h-px w-full max-w-[100px] bg-slate-200 sm:max-w-[200px]" />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {item.courses.map((course: any, idx: number) => (
                        <Card key={idx} className="group overflow-hidden border-slate-200/60 bg-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-slate-400 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
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
    );
}
