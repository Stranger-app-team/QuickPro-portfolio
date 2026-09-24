export default function TermsConditions({ onClose }) {
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="terms-title"
            onClick={(e) => e.target === e.currentTarget && onClose()}
        >
            <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#0d0f14] shadow-2xl">
                {/* Header */}
                <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-[#0d0f14]/95 backdrop-blur px-6 py-4">
                    <h2
                        id="terms-title"
                        className="font-display text-xl font-semibold text-paper"
                    >
                        Terms &amp; <span className="text-amber">Conditions</span>
                    </h2>
                    <button
                        onClick={onClose}
                        aria-label="Close terms and conditions"
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
                        By accessing and using the <span className="text-paper font-medium">QuickPro</span> website and
                        services, you accept and agree to be bound by the following Terms &amp; Conditions. Please read
                        them carefully before using our platform.
                    </p>

                    <Section title="1. Acceptance of Terms">
                        <p>
                            By using our website, you confirm that you are at least 18 years of age and have the legal
                            capacity to enter into these terms. If you do not agree to these terms, please discontinue
                            use of our services immediately.
                        </p>
                    </Section>

                    <Section title="2. Use of Services">
                        <p>You agree to use our services only for lawful purposes and in a manner that does not:</p>
                        <ul className="mt-2 list-disc pl-5 space-y-1">
                            <li>Infringe the rights of any third party.</li>
                            <li>Transmit any unsolicited or unauthorised advertising material.</li>
                            <li>Attempt to gain unauthorised access to our systems or networks.</li>
                            <li>Engage in any fraudulent or deceptive activity.</li>
                        </ul>
                    </Section>

                    <Section title="3. Intellectual Property">
                        <p>
                            All content on this website — including text, graphics, logos, images, and software — is the
                            property of <span className="text-paper font-medium">QuickPro</span> and is protected by
                            applicable intellectual property laws. You may not reproduce, distribute, or create derivative
                            works without our prior written consent.
                        </p>
                    </Section>

                    <Section title="4. Account Responsibility">
                        <p>
                            If you create an account or submit information through our contact form, you are responsible
                            for maintaining the accuracy of the information provided and for any activity that occurs
                            under your submissions.
                        </p>
                    </Section>

                    <Section title="5. Limitation of Liability">
                        <p>
                            To the fullest extent permitted by law, QuickPro shall not be liable for any indirect,
                            incidental, special, consequential, or punitive damages arising out of your use of or
                            inability to use our services.
                        </p>
                    </Section>

                    <Section title="6. Third-Party Links">
                        <p>
                            Our website may contain links to third-party websites. These links are provided for your
                            convenience only. We have no control over those sites and accept no responsibility for their
                            content or practices.
                        </p>
                    </Section>

                    <Section title="7. Modifications">
                        <p>
                            We reserve the right to modify these Terms &amp; Conditions at any time. Changes will be
                            effective immediately upon posting to the website. Your continued use of our services
                            constitutes your acceptance of the revised terms.
                        </p>
                    </Section>

                    <Section title="8. Governing Law">
                        <p>
                            These Terms &amp; Conditions are governed by and construed in accordance with the laws of
                            Maharashtra, India. Any disputes arising shall be subject to the exclusive jurisdiction of
                            the courts in Navi Mumbai, Maharashtra.
                        </p>
                    </Section>

                    <Section title="9. Contact Us">
                        <p>
                            For any questions regarding these Terms &amp; Conditions, please contact us at{" "}
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
