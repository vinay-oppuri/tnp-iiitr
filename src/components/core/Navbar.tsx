"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import BarItems from "../../data/BarItems";
import { Menu, X, ChevronDown, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { ScrollToTop } from "../ui/scroll-to-top";

type NavItem = {
    label: string;
    target: string;
    href?: string;
};

type NavLink = {
    name: string;
    link: string;
    external?: boolean;
};

const menuLinks: NavLink[] = [
    { name: "Programs", link: "/programs" },
    { name: "Syllabus", link: "https://iiitr.ac.in/CS_Syllabus", external: true },
    { name: "Clubs", link: "/clubs" },
    { name: "Team", link: "/team" },
];

const sectionLinks: NavItem[] = [
    { label: "About Us", target: "aboutUs" },
    { label: "What We Offer", target: "whatWeOffer", href: "/what-we-offer" },
    { label: "Why Recruit Us", target: "recruit", href: "/why-recruit-us" },
    { label: "Recruitment Process", target: "recruitmentProcess"},
];

type MenuLink = {
    id: number;
    heading: string;
    href: string;
};

export default function Navbar() {
    const router = useRouter();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileCompaniesOpen, setMobileCompaniesOpen] = useState(false);

    const companyMenu = useMemo(() => {
        const list = BarItems.find((item) => item.id === 5)?.drop ?? [];
        return list as MenuLink[];
    }, []);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
        setMobileCompaniesOpen(false);
    }, [pathname]);

    function jumpToSection(item: NavItem) {
        if (item.href) {
            router.push(item.href);
            return;
        }
        if (pathname !== "/") {
            router.push(`/#${item.target}`);
            return;
        }
        document.getElementById(item.target)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function closeMobileMenu() {
        setIsOpen(false);
        setMobileCompaniesOpen(false);
    }

    const isHome = pathname === "/";
    const isTransparent = isHome && !isScrolled;

    return (
        <>
            <header className="fixed inset-x-0 top-0 z-50 px-3 py-3 sm:px-6">
                <nav
                    className={cn(
                        "mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 sm:px-6",
                        isTransparent ? "bg-transparent mt-2" : "bg-slate-900/90 backdrop-blur-sm mt-0"
                    )}
                    aria-label="Primary"
                >
                    <Button
                        variant="ghost"
                        onClick={() => router.push("/")}
                        className="group flex h-auto items-center gap-3 rounded-md p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 hover:bg-transparent"
                    >
                        <Image src="/logos/iiitr.png" alt="CSC IIITR logo" width={36} height={36} style={{ width: "auto", height: "auto" }} className="h-9 w-auto brightness-0 invert" priority />
                        <div className="leading-tight text-left">
                            <p className={cn("text-[10px] font-medium uppercase tracking-[0.2em] transition-colors", isTransparent ? "text-slate-300" : "text-slate-500")}>CS Cell</p>
                            <p className="font-display text-sm font-semibold transition-colors text-white">IIIT Raichur</p>
                        </div>
                    </Button>

                    <Button
                        variant="outline"
                        size="icon"
                        className={cn(
                            "lg:hidden transition",
                            isTransparent
                                ? "text-white border-white/20 bg-transparent hover:bg-white/10 hover:text-white"
                                : "text-slate-300 border-slate-700 bg-transparent hover:bg-slate-800 hover:text-white"
                        )}
                        onClick={() => setIsOpen((prev) => !prev)}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                        aria-label="Toggle navigation"
                    >
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </Button>

                    <div className="hidden items-center gap-1 lg:flex">
                        {sectionLinks.map((item) => (
                            <Button
                                key={item.target}
                                variant="ghost"
                                className={cn(
                                    "text-sm font-medium transition",
                                    isTransparent
                                        ? "text-slate-300 hover:text-white hover:bg-white/10"
                                        : "text-slate-300 hover:text-white hover:bg-white/10"
                                )}
                                onClick={() => jumpToSection(item)}
                            >
                                {item.label}
                            </Button>
                        ))}

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="ghost"
                                    className={cn(
                                        "text-sm font-medium transition",
                                        isTransparent
                                            ? "text-slate-300 hover:text-white hover:bg-white/10"
                                            : "text-slate-300 hover:text-white hover:bg-white/10"
                                    )}
                                >
                                    Rules <ChevronDown className="ml-1 h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                className="w-48 border border-slate-700/80 bg-slate-900/90 backdrop-blur-xl text-slate-300 shadow-[0_8px_30px_rgba(0,0,0,0.3)] rounded-xl p-1"
                                align="end"
                            >
                                <DropdownMenuItem className="cursor-pointer rounded-lg p-0 focus:bg-slate-800 focus:text-white" asChild>
                                    <Link href="/files/INTERNSHIP_RULES.pdf" target="_blank" rel="noopener noreferrer" className="w-full px-3 py-2 text-sm text-slate-300 hover:text-white">
                                        Internship Rules
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="cursor-pointer rounded-lg p-0 focus:bg-slate-800 focus:text-white" asChild>
                                    <Link href="/files/PLACEMENT_RULES.pdf" target="_blank" rel="noopener noreferrer" className="w-full px-3 py-2 text-sm text-slate-300 hover:text-white">
                                        Placement Rules
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>



                        {/* <Button
                            variant="ghost"
                            onClick={() => router.push("/achievers")}
                            className={cn(
                                "ml-2 inline-flex h-10 items-center gap-2 rounded-full border px-4 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-0 text-white/80 hover:text-white",
                                isTransparent
                                    ? "border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10"
                                    : "border-slate-700 bg-slate-800/80 hover:bg-slate-800"
                            )}
                        >
                            <Sparkles className="h-4 w-4" />
                            <span>Achievers</span>
                        </Button> */}

                        <Button
                            variant="ghost"
                            onClick={() => router.push("/team")}
                            className={cn(
                                "ml-2 inline-flex h-10 items-center gap-2 rounded-full border px-4 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-0 text-white/80 hover:text-white",
                                isTransparent
                                    ? "border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10"
                                    : "border-slate-700 bg-slate-800/80 hover:bg-slate-800"
                            )}
                        >
                            <Users className="h-4 w-4" />
                            <span>Team Members</span>
                        </Button>
                    </div>
                </nav>


                {/* MOBILE MENU */}
                <div
                    id="mobile-menu"
                    className={cn(
                        "mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/80 shadow-[0_12px_30px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all duration-300 lg:hidden",
                        isOpen ? "max-h-[720px] opacity-100" : "max-h-0 opacity-0 border-transparent"
                    )}
                >
                    <ul className="space-y-1 p-3">
                        {sectionLinks.map((item) => (
                            <li key={item.target}>
                                <Button
                                    variant="ghost"
                                    className="w-full justify-start text-slate-300 hover:text-white hover:bg-slate-800"
                                    onClick={() => {
                                        jumpToSection(item);
                                        closeMobileMenu();
                                    }}
                                >
                                    {item.label}
                                </Button>
                            </li>
                        ))}

                        <li className="px-1">
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="rules" className="border-b-0">
                                    <AccordionTrigger className="justify-between px-3 py-2 text-sm font-medium text-slate-300 transition-all hover:bg-slate-800 hover:text-white hover:no-underline rounded-md">
                                        Rules
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-1 pt-1 ml-4 border-l border-slate-700/50 pl-4 flex flex-col gap-1 mt-1">
                                        <Link
                                            href="/files/INTERNSHIP_RULES.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={() => closeMobileMenu()}
                                            className="flex w-full items-center py-2 text-sm text-slate-400 hover:text-white"
                                        >
                                            Internship Rules
                                        </Link>
                                        <Link
                                            href="/files/PLACEMENT_RULES.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={() => closeMobileMenu()}
                                            className="flex w-full items-center py-2 text-sm text-slate-400 hover:text-white"
                                        >
                                            Placement Rules
                                        </Link>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </li>



                        {/* <li>
                            <Button
                                variant="ghost"
                                className="mt-2 flex h-12 w-full items-center justify-start gap-3 rounded-xl border border-slate-700 bg-slate-800/90 px-4 text-white transition-colors hover:bg-slate-800"
                                onClick={() => {
                                    router.push("/achievers");
                                    closeMobileMenu();
                                }}
                            >
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-700 text-slate-100">
                                    <Sparkles className="h-4 w-4 text-cyan-400" />
                                </span>
                                <span className="text-sm font-medium">Special Mentions</span>
                            </Button>
                        </li> */}

                        <li>
                            <Button
                                variant="ghost"
                                className="mt-2 flex h-12 w-full items-center justify-start gap-3 rounded-xl border border-slate-700 bg-slate-800/90 px-4 text-white transition-colors hover:bg-slate-800"
                                onClick={() => {
                                    router.push("/team");
                                    closeMobileMenu();
                                }}
                            >
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-700 text-slate-100">
                                    <Users className="h-4 w-4" />
                                </span>
                                <span className="text-sm font-medium">Team Members</span>
                            </Button>
                        </li>
                    </ul>
                </div>
            </header>

            <ScrollToTop />
        </>
    );
}
