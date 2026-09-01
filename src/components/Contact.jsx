export default function Contact() {
    return (
        <section id="contact" className="border-t border-white/5 bg-surface">
            <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
                <div className="grid gap-10 md:grid-cols-2 md:gap-16">
                    <div>
                        <h2 className="font-display text-3xl font-semibold text-paper sm:text-4xl">
                            Ready to play?
                        </h2>
                        <p className="mt-4 max-w-md leading-relaxed text-dim">
                            Sign up in under a minute and get matched into your first ranked game — or reach
                            out if you have questions about tournaments and rooms.
                        </p>
                        <div className="mt-6 space-y-2 text-sm text-dim">
                            <p>support@quickpro.games</p>
                            <p>+91 00000 00000</p>
                            <p>Solapur, Maharashtra, India</p>
                        </div>
                    </div>

                    <form className="space-y-4 rounded-md border border-white/10 bg-ink p-6">
                        <div>
                            <label className="text-xs uppercase text-dim">Name</label>
                            <input
                                type="text"
                                className="mt-2 w-full rounded-sm border border-white/10 bg-surface px-4 py-3 text-sm text-paper outline-none focus:border-amber"
                                placeholder="Your name"
                            />
                        </div>
                        <div>
                            <label className="text-xs uppercase text-dim">Email</label>
                            <input
                                type="email"
                                className="mt-2 w-full rounded-sm border border-white/10 bg-surface px-4 py-3 text-sm text-paper outline-none focus:border-amber"
                                placeholder="you@email.com"
                            />
                        </div>
                        <div>
                            <label className="text-xs uppercase text-dim">Message</label>
                            <textarea
                                rows={4}
                                className="mt-2 w-full rounded-sm border border-white/10 bg-surface px-4 py-3 text-sm text-paper outline-none focus:border-amber"
                                placeholder="Tell us what you need"
                            />
                        </div>
                        <button
                            type="button"
                            className="w-full rounded-sm bg-amber px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-paper"
                        >
                            Send message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}