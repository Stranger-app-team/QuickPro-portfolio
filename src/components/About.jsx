function BoardGraphic() {
    return (
        <svg viewBox="0 0 300 300" className="h-full w-full" aria-hidden="true">
            <rect width="300" height="300" fill="#171A22" />
            <g stroke="#9AA0AE" strokeWidth="3" strokeLinecap="round">
                <line x1="100" y1="20" x2="100" y2="280" />
                <line x1="200" y1="20" x2="200" y2="280" />
                <line x1="20" y1="100" x2="280" y2="100" />
                <line x1="20" y1="200" x2="280" y2="200" />
            </g>
            <g stroke="#E8A33D" strokeWidth="6" strokeLinecap="round">
                <line x1="45" y1="45" x2="85" y2="85" />
                <line x1="85" y1="45" x2="45" y2="85" />
                <line x1="145" y1="145" x2="185" y2="185" />
                <line x1="185" y1="145" x2="145" y2="185" />
                <line x1="245" y1="245" x2="285" y2="285" />
                <line x1="285" y1="245" x2="245" y2="285" />
            </g>
            <g stroke="#4FD1C5" strokeWidth="6">
                <circle cx="165" cy="65" r="22" fill="none" />
                <circle cx="65" cy="165" r="22" fill="none" />
                <circle cx="265" cy="165" r="22" fill="none" />
            </g>
            <line
                x1="35"
                y1="35"
                x2="295"
                y2="295"
                stroke="#E8A33D"
                strokeWidth="5"
                strokeLinecap="round"
                opacity="0.6"
            />
        </svg>
    );
}

export default function About() {
    return (
        <section id="about" className="border-t border-white/5 bg-surface">
            <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1fr_1.1fr] md:items-center md:py-20">
                <div className="aspect-square w-full overflow-hidden rounded-md border border-white/10">
                    <BoardGraphic />
                </div>
                <div>
                    <h2 className="font-display text-3xl font-semibold text-paper sm:text-4xl">
                        A game everyone knows, built for real competition
                    </h2>
                    <p className="mt-5 max-w-xl leading-relaxed text-dim">
                        Tic-Tac-Toe takes a minute to learn, which is exactly why it works as a competitive
                        game — the skill gap shows up fast once you're playing someone who actually studies
                        openings. Quick Pro started as a weekend project between a few friends and grew into
                        a full platform once people started asking for ranked matches instead of just casual
                        ones.
                    </p>
                    <p className="mt-4 max-w-xl leading-relaxed text-dim">
                        We operate as a registered online gaming service under Maharashtra's shop and
                        establishment rules, so the license behind the platform isn't just for show.
                    </p>
                </div>
            </div>
        </section>
    );
}