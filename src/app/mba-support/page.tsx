export default function MBAHelp() {
    return (
        <div className="min-h-screen bg-[#F9FAFB] text-[#212529] px-6 py-12 sm:px-12 font-sans">
            <section className="max-w-4xl mx-auto text-center py-12">
                <h1 className="text-4xl font-extrabold mb-4 text-[#1F75CB]">MBA & Graduate Tutoring</h1>
                <p className="text-lg mb-8">
                    Balance work, life, and advanced studies with strategic support tailored for busy professionals.
                </p>
                <a
                    href="#contact"
                    className="inline-block bg-[#20C997] text-white font-semibold rounded-full px-6 py-3 hover:bg-[#17b58a] transition"
                >
                    Start Today
                </a>
            </section>

            <section className="max-w-3xl mx-auto py-8">
                <h2 className="text-2xl font-bold mb-4 text-[#1F75CB]">Focus Areas</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>Quantitative coursework coaching</li>
                    <li>Case study preparation</li>
                    <li>Presentation and communication skills</li>
                    <li>Time and project management strategies</li>
                </ul>
            </section>

            <section id="contact" className="max-w-3xl mx-auto text-center py-12">
                <h2 className="text-2xl font-bold mb-4 text-[#1F75CB]">Empower Your Journey</h2>
                <p className="mb-6">We’ll help you tackle your toughest challenges and achieve academic excellence.</p>
                <a
                    href="mailto:hello@brightmind.com"
                    className="inline-block bg-[#20C997] text-white font-semibold rounded-full px-6 py-3 hover:bg-[#17b58a] transition"
                >
                    Contact for Details
                </a>
            </section>
        </div>
    );
}