import { useState } from "react";

const initialForm = { name: "", phone: "", message: "" };

export default function Contact() {
    const [form, setForm] = useState(initialForm);
    const [sent, setSent] = useState(false);

    function handleChange(e) {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        // Static for now — wire this up to Supabase or an email service when ready.
        setSent(true);
        setForm(initialForm);
    }

    return (
        <section id="contact" className="border-t border-white/5 bg-surface">
            <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-20">
                <div>
                    <h2 className="font-display text-3xl font-semibold text-paper sm:text-4xl">
                        Get in touch
                    </h2>
                    <p className="mt-4 max-w-sm leading-relaxed text-dim">
                        Sign up in under a minute and get matched into your first ranked game or reach
                        out if you have questions about tournaments and rooms.
                    </p>

                    <dl className="mt-8 space-y-4 text-sm">
                        <div>
                            <dt className="text-dim">Registered address</dt>
                            <dd className="mt-1 text-paper">
                                Near Patrakar Bhavan, House No. 37, Kasturba Gandhi Nagar, Modi,
                                <br />
                                Solapur, Maharashtra 413001
                            </dd>
                        </div>
                        <div>
                            <dt className="text-dim">Availability</dt>
                            <dd className="mt-1 text-paper">Matches run 24/7 support replies within a day</dd>
                        </div>
                        <div>
                            <dt className="text-dim">Phone</dt>
                            <dd className="mt-1 text-paper">
                                <a href="tel:+919689884416" className="hover:text-amber">
                                    +91 96898 84416
                                </a>
                            </dd>
                        </div>
                        <div>
                            <dt className="text-dim">Email</dt>
                            <dd className="mt-1 text-paper">
                                <a href="mailto:book2main@gmail.com" className="hover:text-amber">
                                    book2main@gmail.com
                                </a>
                            </dd>
                        </div>
                    </dl>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="text-sm text-dim">
                            Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={form.name}
                            onChange={handleChange}
                            className="mt-1 w-full rounded-sm border border-white/10 bg-ink px-4 py-2.5 text-paper placeholder:text-dim/60 focus:border-amber"
                            placeholder="Your name"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="text-sm text-dim">
                            Phone
                        </label>
                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            value={form.phone}
                            onChange={handleChange}
                            className="mt-1 w-full rounded-sm border border-white/10 bg-ink px-4 py-2.5 text-paper placeholder:text-dim/60 focus:border-amber"
                            placeholder="10-digit number"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="text-sm text-dim">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            value={form.message}
                            onChange={handleChange}
                            className="mt-1 w-full rounded-sm border border-white/10 bg-ink px-4 py-2.5 text-paper placeholder:text-dim/60 focus:border-amber"
                            placeholder="Your username, and what's going on"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full rounded-sm bg-amber px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-paper"
                    >
                        Send message
                    </button>
                    {sent && (
                        <p className="text-sm text-cyan" role="status">
                            Message ready — connect this form to Supabase or your inbox to actually send it.
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}