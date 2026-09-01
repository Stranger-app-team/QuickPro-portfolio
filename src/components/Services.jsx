import { services } from "../data/services";

export default function Services() {
    return (
        <section id="services" className="border-t border-white/5 bg-ink">
            <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
                <div className="max-w-xl">
                    <h2 className="font-display text-3xl font-semibold text-paper sm:text-4xl">
                        Game modes built for every kind of player
                    </h2>
                    <p className="mt-4 leading-relaxed text-dim">
                        Whether you want a quick ranked match or a full tournament bracket, Quick Pro has a
                        mode for it.
                    </p>
                </div>

                <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="rounded-md border border-white/10 bg-surface p-6 transition-colors hover:border-amber/40"
                        >
                            <span className="text-2xl">{service.icon}</span>
                            <h3 className="mt-4 font-display text-lg font-semibold text-paper">
                                {service.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-dim">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}