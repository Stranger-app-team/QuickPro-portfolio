const stats = [
    { label: "Players online now", value: "2,400+" },
    { label: "Matches played today", value: "18,300+" },
    { label: "Tournaments live", value: "6 running" },
];

export default function Hero() {
    return (
        <section id="home" className="mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 md:pb-20 md:pt-24">
            <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-center md:gap-12">
                <div>
                    <p className="text-sm text-dim">Solapur's online Tic-Tac-Toe gaming platform</p>
                    <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.08] tracking-tightish text-paper sm:text-5xl md:text-6xl">
                        Every square
                        <br />
                        counts.
                    </h1>
                    <div className="marquee-rule mt-6 h-[3px] w-24 bg-amber" />
                    <p className="mt-6 max-w-md text-base leading-relaxed text-dim">
                        Quick Pro is a licensed online gaming service — real-time 1v1 matches, private rooms
                        with friends, and daily tournaments built on a game everyone already knows.
                    </p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                        <a
                            href="#contact"
                            className="rounded-sm bg-amber px-6 py-3 text-center text-sm font-semibold text-ink transition-colors hover:bg-paper"
                        >
                            Start playing
                        </a>
                        <a
                            href="#services"
                            className="rounded-sm border border-white/15 px-6 py-3 text-center text-sm font-semibold text-paper transition-colors hover:border-amber hover:text-amber"
                        >
                            See game modes
                        </a>
                    </div>
                </div>

                <div className="scoreboard rounded-md border border-white/10 p-6">
                    <p className="font-display text-sm uppercase text-dim">Right now on Quick Pro</p>
                    <dl className="mt-5 space-y-5">
                        {stats.map((stat) => (
                            <div key={stat.label} className="flex items-baseline justify-between gap-4 border-b border-white/5 pb-4 last:border-0 last:pb-0">
                                <dt className="text-sm text-dim">{stat.label}</dt>
                                <dd className="stat-value font-display text-lg font-semibold text-amber">
                                    {stat.value}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
}