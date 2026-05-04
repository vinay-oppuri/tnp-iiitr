
import { WhyUs } from "@/data/Home";

export default function WhyRecruitUs() {
    return (
        <div className="flex flex-col mb-[10vh]">
            {WhyUs.map((reason: any, id: number) => (
                <article key={id} className="group relative w-full overflow-hidden rounded-2xl border border-slate-200/60 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8 mb-4">
                    <div className="absolute top-0 left-0 w-1 h-full bg-indigo-600 transition-all duration-300 group-hover:w-2" />
                    <div className="pl-4">
                        <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight text-slate-800">{reason.heading}</h3>
                        <div className="mt-4 h-1 w-16 rounded bg-slate-200 transition-all duration-300 group-hover:w-24 group-hover:bg-indigo-600" />
                        <p className="mt-6 text-sm leading-relaxed text-slate-600 sm:text-base">{reason.content}</p>
                    </div>
                </article>
            ))}
        </div>
    );
}
