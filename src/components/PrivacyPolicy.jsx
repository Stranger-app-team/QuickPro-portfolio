export default function PrivacyPolicy({ onClose }) {
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="privacy-title"
            onClick={(e) => e.target === e.currentTarget && onClose()}
        >
            <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#0d0f14] shadow-2xl">
                {/* Header */}
                <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-[#0d0f14]/95 backdrop-blur px-6 py-4">
                    <h2
                        id="privacy-title"
                        className="font-display text-xl font-semibold text-paper"
                    >
                        Privacy <span className="text-amber">Policy</span>
                    </h2>
                    <button
                        onClick={onClose}
                        aria-label="Close privacy policy"
                        className="rounded-full p-1 text-dim transition hover:bg-white/10 hover:text-paper"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Body */}
                <div className="px-6 py-6 text-sm leading-relaxed text-dim space-y-5">
                    <p className="text-xs text-white/40">Last updated: September 2026</p>

                    <p>
                        Welcome to <span className="text-paper font-medium">QuickPro</span>. We are committed to protecting
                        your personal information and your right to privacy. This Privacy Policy describes how we collect,
                        use, and share information about you when you use our services.
                    </p>

                    <Section title="1. Information We Collect">
                        <p>We may collect the following types of information:</p>
                        <ul className="mt-2 list-disc pl-5 space-y-1">
                            <li><span className="text-paper">Personal details</span> — name, email address, and phone number provided via our contact form.</li>
                            <li><span className="text-paper">Usage data</span> — pages visited, time spent, and interactions on our website.</li>
                            <li><span className="text-paper">Device information</span> — browser type, IP address, and operating system (collected automatically).</li>
                        </ul>
                    </Section>

                    <Section title="2. How We Use Your Information">
                        <ul className="list-disc pl-5 space-y-1">
                            <li>To respond to inquiries and provide customer support.</li>
                            <li>To improve and personalise our platform and services.</li>
                            <li>To send service-related notifications (with your consent).</li>
                            <li>To comply with legal obligations.</li>
                        </ul>
                    </Section>

                    <Section title="3. Sharing of Information">
                        <p>
                            We do <span className="text-paper font-medium">not</span> sell, trade, or rent your personal
                            information to third parties. We may share data only with trusted service providers who assist us
                            in operating our website, provided they agree to keep this information confidential.
                        </p>
                    </Section>

                    <Section title="4. Cookies">
                        <p>
                            Our website may use cookies to enhance your browsing experience. You can choose to disable cookies
                            through your browser settings; however, some features of the site may not function properly as a result.
                        </p>
                    </Section>

                    <Section title="5. Data Security">
                        <p>
                            We implement commercially reasonable security measures to protect your data. However, no method of
                            transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                        </p>
                    </Section>

                    <Section title="6. Your Rights">
                        <p>You have the right to:</p>
                        <ul className="mt-2 list-disc pl-5 space-y-1">
                            <li>Access, correct, or delete your personal data.</li>
                            <li>Withdraw consent at any time (where processing is based on consent).</li>
                            <li>Lodge a complaint with a data protection authority.</li>
                        </ul>
                    </Section>

                    <Section title="7. Contact Us">
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at{" "}
                            <a href="mailto:book2main@gmail.com" className="text-amber hover:underline">
                                book2main@gmail.com
                            </a>{" "}
                            or call{" "}
                            <a href="tel:+919689884416" className="text-amber hover:underline">
                                +91 96898 84416
                            </a>.
                        </p>
                    </Section>
                </div>
            </div>
        </div>
    );
}

function Section({ title, children }) {
    return (
        <div>
            <h3 className="mb-2 font-display text-base font-semibold text-paper">{title}</h3>
            {children}
        </div>
    );
}
