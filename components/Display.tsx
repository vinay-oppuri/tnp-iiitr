import Image from "next/image";
import { cn } from "@/lib/utils";
import { type CompanyItem } from "../data/Companies";

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
                {collection.map((item) => {
                    const image = item.image;

                    if (item.url) {
                        return (
                            <a
                                key={item.id}
                                target="_blank"
                                rel="noreferrer"
                                href={item.url}
                                className={cn(
                                    "relative flex h-28 items-center justify-center rounded-2xl border border-slate-200/80 bg-white/90 p-4 shadow-sm backdrop-blur-xl transition hover:-translate-y-0.5 hover:shadow-md overflow-hidden"
                                )}
                                data-aos="fade-up"
                                data-aos-delay="80"
                            >
                                <div className="relative h-full w-full">
                                    <Image src={image} alt={item.name} fill className="object-contain" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" />
                                </div>
                            </a>
                        );
                    }

                    return (
                        <div
                            key={item.id}
                            className={cn(
                                "relative flex h-28 items-center justify-center rounded-2xl border border-slate-200/80 bg-white/90 p-4 shadow-sm backdrop-blur-xl transition hover:-translate-y-0.5 hover:shadow-md overflow-hidden"
                            )}
                            data-aos="fade-up"
                            data-aos-delay="80"
                        >
                            <div className="relative h-full w-full">
                                <Image src={image} alt={item.name} fill className="object-contain" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
