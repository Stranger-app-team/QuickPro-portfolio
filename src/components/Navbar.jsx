import { useState } from "react";

const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Game Modes", href: "#services" },
    { label: "Gameplay", href: "#gallery" },
    { label: "Why Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-ink/95 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
                <a
                    href="#home"
                    onClick={() => setOpen(false)}
                    className="shrink-0 font-display text-xl font-semibold tracking-tightish text-paper"
                >
                    Quick<span className="text-amber">Pro</span>
                </a>

                {/* Desktop nav — hidden below md, flex from md up */}
                <nav className="hidden items-center gap-8 md:flex">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm text-dim transition-colors hover:text-paper"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <a
                    href="#contact"
                    className="hidden shrink-0 rounded-sm bg-amber px-5 py-2 text-sm font-semibold text-ink transition-colors hover:bg-paper md:inline-block"
                >
                    Start playing
                </a>

                {/* Mobile toggle — visible below md, hidden from md up */}
                <button
                    type="button"
                    onClick={() => setOpen((v) => !v)}
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    aria-label="Toggle menu"
                    className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5 md:hidden"
                >
                    <span
                        style={{ backgroundColor: "#EDEBE4" }}
                        className={`h-0.5 w-6 transition-transform duration-200 ${open ? "translate-y-2 rotate-45" : ""}`}
                    />
                    <span
                        style={{ backgroundColor: "#EDEBE4" }}
                        className={`h-0.5 w-6 transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
                    />
                    <span
                        style={{ backgroundColor: "#EDEBE4" }}
                        className={`h-0.5 w-6 transition-transform duration-200 ${open ? "-translate-y-2 -rotate-45" : ""}`}
                    />
                </button>
            </div>

            {/* Mobile menu panel — height-animated, no layout jump, sits above page content */}
            <nav
                id="mobile-menu"
                className={`overflow-hidden border-t border-white/5 bg-ink transition-[max-height] duration-300 ease-in-out md:hidden ${open ? "max-h-96" : "max-h-0 border-t-0"
                    }`}
            >
                <div className="px-4 pb-6 pt-2 sm:px-6">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className="block border-b border-white/5 py-3 text-sm text-dim hover:text-paper"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setOpen(false)}
                        className="mt-4 block rounded-sm bg-amber px-5 py-2 text-center text-sm font-semibold text-ink"
                    >
                        Start playing
                    </a>
                </div>
            </nav>
        </header>
    );
}