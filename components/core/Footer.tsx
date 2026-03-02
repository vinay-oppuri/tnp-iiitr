import React from "react";
import { address, Contacts, FooterLinks } from "../../data/footerInfo";

type FooterContact = {
    id: number;
    name: string;
    email: string;
    phoneNum?: string;
};

type FooterLink = {
    id: number;
    name: string;
    link: string;
};

export default function Footer() {
    const contacts = Contacts as FooterContact[];
    const links = FooterLinks as FooterLink[];

    return (
        <footer className="border-t border-slate-800 bg-[linear-gradient(145deg,#071935_0%,#0b2145_58%,#122b55_100%)] text-slate-200">
            <div className="section-shell py-14">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <div className="inline-flex items-center gap-3">
                            <img src="/images/logo.svg" alt="IIITR Logo" className="h-12 w-12 rounded-md object-contain" />
                            <div>
                                <p className="text-xs uppercase tracking-[0.14em] text-cyan-300">TNP Cell</p>
                                <p className="font-display text-sm font-semibold text-white">IIIT Raichur</p>
                            </div>
                        </div>
                        <p className="mt-4 text-sm leading-relaxed text-slate-300">
                            A focused interface for internship and placement support with streamlined communication for students and recruiters.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-display text-lg font-semibold text-white">Address</h3>
                        <p className="mt-4 text-sm text-slate-300">Temporary Campus</p>
                        <p className="mt-1 text-sm leading-relaxed text-slate-300">{address}</p>
                        <div className="mt-4 overflow-hidden rounded-xl border border-slate-700">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3830.4501724340257!2d77.36376861384535!3d16.248682338922013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc9d17abbd87b87%3A0x28afde55f519a10b!2sIndian%20Institute%20of%20Information%20Technology%2C%20Raichur!5e0!3m2!1sen!2sin!4v1626109545024!5m2!1sen!2sin"
                                title="IIIT Raichur Map"
                                className="h-[220px] w-full"
                                frameBorder="0"
                                style={{ border: 0 }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>

                    <div>
                        <h3 className="font-display text-lg font-semibold text-white">Quick Links</h3>
                        <ul className="mt-4 space-y-3 text-sm">
                            {links.map((link) => (
                                <li key={link.id}>
                                    <a href={link.link} className="text-slate-300 transition hover:text-cyan-300">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-display text-lg font-semibold text-white">Contact Us</h3>
                        <div className="mt-4 space-y-4 text-sm">
                            {contacts.map((item) => (
                                <div key={item.id}>
                                    <p className="font-medium text-slate-100">{item.name}</p>
                                    <a href={`mailto:${item.email}`} className="mt-1 block text-slate-300 transition hover:text-cyan-300">
                                        {item.email}
                                    </a>
                                    {item.phoneNum ? (
                                        <a href={`tel:${item.phoneNum}`} className="mt-1 block text-slate-400 transition hover:text-slate-200">
                                            {item.phoneNum}
                                        </a>
                                    ) : null}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-10 flex flex-col gap-2 border-t border-slate-800 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
                    <p>© {new Date().getFullYear()} Indian Institute of Information Technology, Raichur</p>
                    <a href="https://www.iiitr.ac.in/" target="_blank" rel="noreferrer" className="transition hover:text-cyan-300">
                        Visit IIIT Raichur
                    </a>
                </div>
            </div>
        </footer>
    );
}
