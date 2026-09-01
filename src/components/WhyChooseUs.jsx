const reasons = [
    { stat: "99.9%", label: "Match uptime across all servers" },
    { stat: "<80ms", label: "Average matchmaking response time" },
    { stat: "50K+", label: "Active players across India" },
    { stat: "24/7", label: "Live support during tournaments" },
];

export default function WhyChooseUs() {
    return (
        <section className="border-t border-white/5 bg-surface">
            <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
                <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
                    <div>
                        <h2 className="font-display text-3xl font-semibold text-paper sm:text-4xl">
                            Why players stick with Quick Pro
                        </h2>
                        <p className="mt-4 leading-relaxed text-dim">
                            We built the infrastructure so matches never lag, rankings are always fair, and
                            tournaments run on schedule — every single day.
                        </p>
                        <ul className="mt-6 space-y-3 text-sm text-dim">
                            <li className="flex gap-2">
                                <span className="text-amber">✓</span> Licensed and audited matchmaking algorithm
                            </li>
                            <li className="flex gap-2">
                                <span className="text-amber">✓</span> Secure payments for tournament entries
                            </li>
                            <li className="flex gap-2">
                                <span className="text-amber">✓</span> Anti-cheat monitoring on every ranked match
                            </li>
                        </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {reasons.map((r) => (
                            <div
                                key={r.label}
                                className="rounded-md border border-white/10 bg-ink p-6 text-center"
                            >
                                <p className="font-display text-2xl font-semibold text-amber sm:text-3xl">
                                    {r.stat}
                                </p>
                                <p className="mt-2 text-xs leading-relaxed text-dim">{r.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}