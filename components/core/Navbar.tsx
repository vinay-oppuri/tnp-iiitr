"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import BarItems from "../../data/BarItems";
import FullScreenDialog from "../TeamDialog";
import { Menu, X, ChevronDown, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { ScrollToTop } from "../ui/scroll-to-top";

type NavItem = {
    label: string;
    target: string;
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
    { label: "Home", target: "home" },
    { label: "About Us", target: "aboutUs" },
    { label: "Why Recruit Us", target: "recruit" },
    { label: "Recruitment Process", target: "rProcess" },
];

type MenuLink = {
    id: number;
    heading: string;
    onClick: () => void;
};

function isDesktop() {
    if (typeof window === "undefined") return false;
    return window.innerWidth >= 768;
}

export default function Navbar() {
    const router = useRouter();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [mobileCompaniesOpen, setMobileCompaniesOpen] = useState(false);
    const [mobileStudentsOpen, setMobileStudentsOpen] = useState(false);

    const companyMenu = useMemo(() => {
        const list = BarItems.find((item) => item.id === 5)?.drop ?? [];
        return list as MenuLink[];
    }, []);

    const studentMenu = useMemo(() => {
        const list = BarItems.find((item) => item.id === 6)?.drop ?? [];
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
        setMobileStudentsOpen(false);
    }, [pathname]);

    function jumpToSection(target: string) {
        if (pathname !== "/") {
            router.push(`/#${target}`);
            return;
        }
        document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function closeMobileMenu() {
        setIsOpen(false);
        setMobileCompaniesOpen(false);
        setMobileStudentsOpen(false);
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
                        <Image src="/images/logo.svg" alt="IIIT Raichur logo" width={36} height={36} className={cn("h-9 w-9 transition-all", isTransparent && "brightness-0 invert")} priority />
                        <div className="leading-tight text-left">
                            <p className={cn("text-[10px] font-medium uppercase tracking-[0.2em] transition-colors", isTransparent ? "text-slate-300" : "text-slate-500")}>TNP Cell</p>
                            <p className="font-display text-sm font-semibold transition-colors text-white">IIIT Raichur</p>
                        </div>
                    </Button>

                    <Button
                        variant="outline"
                        size="icon"
                        className={cn(
                            "md:hidden transition",
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

                    <div className="hidden items-center gap-1 md:flex">
                        {sectionLinks.map((item) => (
                            <Button
                                key={item.target}
                                variant="ghost"
                                className={cn(
                                    "text-sm font-medium transition",
                                    isTransparent
                                        ? "text-slate-300 hover:text-white hover:bg-white/10"
                                        : "text-slate-300 hover:text-white hover:bg-slate-800"
                                )}
                                onClick={() => jumpToSection(item.target)}
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
                                            : "text-slate-300 hover:text-white hover:bg-slate-800"
                                    )}
                                >
                                    For Companies <ChevronDown className="ml-1 h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56" align="end">
                                {companyMenu.map((item) => (
                                    <DropdownMenuItem key={item.id} onClick={item.onClick} className="cursor-pointer">
                                        {item.heading}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="ghost"
                                    className={cn(
                                        "text-sm font-medium transition",
                                        isTransparent
                                            ? "text-slate-300 hover:text-white hover:bg-white/10"
                                            : "text-slate-300 hover:text-white hover:bg-slate-800"
                                    )}
                                >
                                    For Students <ChevronDown className="ml-1 h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56" align="end">
                                {studentMenu.map((item) => (
                                    <DropdownMenuItem key={item.id} onClick={item.onClick} className="cursor-pointer">
                                        {item.heading}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <Button
                            variant="outline"
                            onClick={() => setOpenDialog(true)}
                            className={cn(
                                "ml-2 transition bg-transparent",
                                isTransparent
                                    ? "border-white/30 text-white hover:bg-white/10 hover:text-white"
                                    : "border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
                            )}
                        >
                            Team Members
                        </Button>
                    </div>
                </nav>

                <div
                    id="mobile-menu"
                    className={cn(
                        "mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/95 shadow-[0_12px_30px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all duration-300 md:hidden",
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
                                        jumpToSection(item.target);
                                        closeMobileMenu();
                                    }}
                                >
                                    {item.label}
                                </Button>
                            </li>
                        ))}

                        <li>
                            <Button
                                variant="ghost"
                                className="w-full justify-between text-slate-300 hover:text-white hover:bg-slate-800"
                                onClick={() => setMobileCompaniesOpen((prev) => !prev)}
                            >
                                For Companies
                                <ChevronDown className={cn("h-4 w-4 transition-transform", mobileCompaniesOpen && "rotate-180")} />
                            </Button>
                            {mobileCompaniesOpen && (
                                <div className="mt-1 space-y-1 pl-4 border-l border-slate-800 ml-4">
                                    {companyMenu.map((item) => (
                                        <Button
                                            key={item.id}
                                            variant="ghost"
                                            className="w-full justify-start text-sm text-slate-400 hover:text-white hover:bg-slate-800"
                                            onClick={() => {
                                                item.onClick();
                                                closeMobileMenu();
                                            }}
                                        >
                                            {item.heading}
                                        </Button>
                                    ))}
                                </div>
                            )}
                        </li>

                        <li>
                            <Button
                                variant="ghost"
                                className="w-full justify-between text-slate-300 hover:text-white hover:bg-slate-800"
                                onClick={() => setMobileStudentsOpen((prev) => !prev)}
                            >
                                For Students
                                <ChevronDown className={cn("h-4 w-4 transition-transform", mobileStudentsOpen && "rotate-180")} />
                            </Button>
                            {mobileStudentsOpen && (
                                <div className="mt-1 space-y-1 pl-4 border-l border-slate-800 ml-4">
                                    {studentMenu.map((item) => (
                                        <Button
                                            key={item.id}
                                            variant="ghost"
                                            className="w-full justify-start text-sm text-slate-400 hover:text-white hover:bg-slate-800"
                                            onClick={() => {
                                                item.onClick();
                                                closeMobileMenu();
                                            }}
                                        >
                                            {item.heading}
                                        </Button>
                                    ))}
                                </div>
                            )}
                        </li>

                        <li>
                            <Button
                                className="w-full mt-2 bg-indigo-600 text-white hover:bg-indigo-700"
                                onClick={() => {
                                    setOpenDialog(true);
                                    closeMobileMenu();
                                }}
                            >
                                Team Members
                            </Button>
                        </li>
                    </ul>
                </div>
            </header>

            <ScrollToTop />
            <FullScreenDialog open={openDialog} handleClose={() => setOpenDialog(false)} />
        </>
    );
}