import Image from "next/image";
import { cn } from "@/lib/utils";
import { type CompanyItem } from "@/data/Companies";

type DisplayProps = {
    collection: CompanyItem[];
};

export default function Display({ collection }: DisplayProps) {
    const mid = Math.ceil(collection.length / 2);
    const row1 = collection.slice(0, mid);
    const row2 = collection.slice(mid);

    const renderMarqueeRow = (items: CompanyItem[], reverse: boolean = false) => {
        return (
            <div className="flex w-full overflow-hidden group [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <div className={cn("flex shrink-0 min-w-full justify-around gap-8 py-4 animate-marquee", reverse && "animate-marquee-reverse", "group-hover:[animation-play-state:paused]")}>
                    {items.map((item) => (
                        <div key={item.id} className="relative flex h-20 w-32 sm:h-24 sm:w-40 shrink-0 items-center justify-center opacity-80 transition-all hover:opacity-100 hover:scale-110">
                            {item.url ? (
                                <a target="_blank" rel="noreferrer" href={item.url} className="relative h-full w-full">
                                    <Image src={item.image} alt={item.name} fill className="object-contain" sizes="160px" />
                                </a>
                            ) : (
                                <div className="relative h-full w-full">
                                    <Image src={item.image} alt={item.name} fill className="object-contain" sizes="160px" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                {/* Duplicate for seamless loop */}
                <div aria-hidden="true" className={cn("flex shrink-0 min-w-full justify-around gap-8 py-4 animate-marquee", reverse && "animate-marquee-reverse", "group-hover:[animation-play-state:paused]")}>
                    {items.map((item) => (
                        <div key={`${item.id}-dup`} className="relative flex h-20 w-32 sm:h-24 sm:w-40 shrink-0 items-center justify-center opacity-80 transition-all hover:opacity-100 hover:scale-110">
                            {item.url ? (
                                <a target="_blank" rel="noreferrer" href={item.url} className="relative h-full w-full">
                                    <Image src={item.image} alt={item.name} fill className="object-contain" sizes="160px" />
                                </a>
                            ) : (
                                <div className="relative h-full w-full">
                                    <Image src={item.image} alt={item.name} fill className="object-contain" sizes="160px" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
            <h3 className="section-sub-title px-2 mb-12 sm:mb-16">
                Past Recruiters
            </h3>
            <div className="flex flex-col gap-6 sm:gap-10 overflow-hidden">
                {renderMarqueeRow(row1)}
                {renderMarqueeRow(row2, true)}
            </div>
        </div>
    );
}
