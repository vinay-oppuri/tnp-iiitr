import React from "react";
import { cn } from "@/lib/utils";

type CompanyItem = {
    id: number;
    name: string;
    image: string | { src: string };
    url: string;
};

type DisplayProps = {
    collection: CompanyItem[];
};

export default function Display({ collection }: DisplayProps) {
    return (
        <div className="mx-auto w-full">
            <h3 className="font-display mb-6 text-center text-2xl font-semibold text-indigo-900 sm:mb-8 sm:text-3xl">
                Recruiters
            </h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {collection.map((item, id) => {
                    const image = (item.image as { src: string }).src || (item.image as string);

                    if (item.url) {
                        return (
                            <a
                                key={id}
                                target="_blank"
                                rel="noreferrer"
                                href={item.url}
                                className={cn(
                                    "flex h-28 items-center justify-center rounded-2xl border border-slate-200/80 bg-white/90 p-4 shadow-sm backdrop-blur-xl transition hover:-translate-y-0.5 hover:shadow-md"
                                )}
                                data-aos="fade-up"
                                data-aos-delay="80"
                            >
                                <img src={image} alt={item.name} className="h-full w-full object-contain" />
                            </a>
                        );
                    }

                    return (
                        <div
                            key={id}
                            className={cn(
                                "flex h-28 items-center justify-center rounded-2xl border border-slate-200/80 bg-white/90 p-4 shadow-sm backdrop-blur-xl transition hover:-translate-y-0.5 hover:shadow-md"
                            )}
                            data-aos="fade-up"
                            data-aos-delay="80"
                        >
                            <img src={image} alt={item.name} className="h-full w-full object-contain" />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
