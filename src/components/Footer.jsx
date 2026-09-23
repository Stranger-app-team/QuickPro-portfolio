const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Game Modes", href: "#services" },
    { label: "Gameplay", href: "#gallery" },
    { label: "Contact", href: "#contact" },
];

export default function Footer({ onPrivacyOpen, onTermsOpen }) {
    return (
        <footer className="border-t border-white/5 bg-ink">
            <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
                <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                    <div>
                        <p className="font-display text-xl font-semibold text-paper">
                            Quick<span className="text-amber">Pro</span>
                        </p>
                        <p className="mt-2 max-w-xs text-sm leading-relaxed text-dim">
                            A licensed online Tic-Tac-Toe gaming platform — ranked matches, private rooms, and
                            tournaments, 24/7.
                        </p>
                        {/* Website link */}
                        <a
                            href="https://www.quickpro.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 inline-flex items-center gap-1.5 text-xs text-amber hover:underline"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a9 9 0 100 18A9 9 0 0012 3z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8M12 3c-2.333 2.667-3.5 5.333-3.5 9s1.167 6.333 3.5 9M12 3c2.333 2.667 3.5 5.333 3.5 9s-1.167 6.333-3.5 9" />
                            </svg>
                            www.quickpro.in
                        </a>
                    </div>

                    <nav className="flex flex-wrap gap-x-6 gap-y-2">
                        {links.map((link) => (
                            <a key={link.href} href={link.href} className="text-sm text-dim hover:text-paper">
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <div className="text-sm text-dim">
                        <a href="tel:+919689884416" className="block hover:text-paper">
                            +91 96898 84416
                        </a>
                        <a href="mailto:book2main@gmail.com" className="mt-1 block hover:text-paper">
                            book2main@gmail.com
                        </a>
                        <p className="mt-3 max-w-[16rem] leading-relaxed">
                            Near Patrakar Bhavan, House No. 37, Kasturba Gandhi Nagar, Modi, Solapur,
                            Maharashtra 413001
                        </p>
                    </div>
                </div>

                <div className="mt-10 flex flex-col gap-2 border-t border-white/5 pt-6 text-xs text-dim sm:flex-row sm:items-center sm:justify-between">
                    <p>© {new Date().getFullYear()} Blue Lotus Spa. All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        <button
                            id="footer-privacy-btn"
                            onClick={onPrivacyOpen}
                            className="hover:text-paper transition-colors underline underline-offset-2"
                        >
                            Privacy Policy
                        </button>
                        <span className="text-white/20">|</span>
                        <button
                            id="footer-terms-btn"
                            onClick={onTermsOpen}
                            className="hover:text-paper transition-colors underline underline-offset-2"
                        >
                            Terms &amp; Conditions
                        </button>
                        <span className="text-white/20">|</span>
                        <p>Solapur, Maharashtra</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}