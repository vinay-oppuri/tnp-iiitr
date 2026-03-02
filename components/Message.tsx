
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";

type ReusableCardProps = {
    isLeftAlign: boolean;
    haveLogo: boolean;
    heading: string;
    writer?: string;
    content: string;
    imgSrc?: string;
    altText?: string;
};

export default function ReusableCard({
    isLeftAlign,
    haveLogo,
    heading,
    writer,
    content,
    imgSrc,
    altText,
}: ReusableCardProps) {
    const paragraphs = String(content).split("\n\n");

    return (
        <article className={`flex flex-col gap-8 rounded-3xl border border-slate-200/60 bg-white p-8 shadow-sm transition-all hover:shadow-md sm:p-10 lg:flex-row ${!isLeftAlign ? "lg:flex-row-reverse" : ""}`} data-aos="fade-up">

            {/* Minimal Logo/Image Column */}
            {haveLogo && (
                <div className="flex w-full shrink-0 items-start justify-center lg:w-1/3">
                    <div className="relative aspect-square w-full max-w-[340px] overflow-hidden rounded-2xl bg-slate-50 ring-1 ring-slate-100">
                        <Image
                            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                            src={imgSrc || ""}
                            width={240}
                            height={240}
                            alt={altText || writer || "profile"}
                        />
                    </div>
                </div>
            )}

            {/* Content Column */}
            <div className={`flex flex-col ${haveLogo ? "lg:w-2/3" : "w-full"} ${!isLeftAlign && !haveLogo ? "items-end text-right" : "items-start text-left"}`}>
                <div className="mb-6">
                    <h3 className="font-display text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">{heading}</h3>
                    <div className={`mt-4 h-1 w-20 rounded bg-indigo-600 ${!isLeftAlign && !haveLogo ? "ml-auto" : ""}`} />
                </div>

                <ScrollArea className={`w-full rounded-md ${writer ? "h-60 pr-4" : ""}`}>
                    <div className="space-y-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                        {paragraphs.map((item, index) => (
                            <p key={index} dangerouslySetInnerHTML={{ __html: item }} />
                        ))}
                    </div>
                </ScrollArea>

                {writer && (
                    <div className={`mt-8 w-full ${!isLeftAlign && !haveLogo ? "text-right" : "text-left"}`}>
                        <p className="font-display text-lg font-semibold text-slate-900">— {writer}</p>
                    </div>
                )}
            </div>
        </article>
    );
}
