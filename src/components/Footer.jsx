const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Game Modes", href: "#services" },
    { label: "Gameplay", href: "#gallery" },
    { label: "Contact", href: "#contact" },
];

export default function Footer() {
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
                    <p>© {new Date().getFullYear()} Quick Pro. All rights reserved.</p>
                    <p>Solapur, Maharashtra</p>
                </div>
            </div>
        </footer>
    );
}