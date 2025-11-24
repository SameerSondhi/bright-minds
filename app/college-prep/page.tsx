export default function CollegePrep() {
    return (
        <div className="min-h-screen bg-[#F9FAFB] text-[#212529] px-6 py-12 sm:px-12 font-sans">
            <section className="max-w-4xl mx-auto text-center py-12">
                <h1 className="text-4xl font-extrabold mb-4 text-[#1F75CB]">College Prep & Test Coaching</h1>
                <p className="text-lg mb-8">
                    Crush the SAT, ACT, and craft a standout application with personalized coaching and expert feedback.
                </p>
                <a
                    href="#contact"
                    className="inline-block bg-[#20C997] text-white font-semibold rounded-full px-6 py-3 hover:bg-[#17b58a] transition"
                >
                    Schedule a Strategy Session
                </a>
            </section>

            <section className="max-w-3xl mx-auto py-8">
                <h2 className="text-2xl font-bold mb-4 text-[#1F75CB]">Services Include</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>SAT & ACT test prep</li>
                    <li>Essay and personal statement guidance</li>
                    <li>Application review & feedback</li>
                    <li>Time management coaching</li>
                    <li>Scholarship application assistance</li>
                </ul>
            </section>

            <section id="contact" className="max-w-3xl mx-auto text-center py-12">
                <h2 className="text-2xl font-bold mb-4 text-[#1F75CB]">Let’s Craft Your Path</h2>
                <p className="mb-6">Together, we’ll create a strategy to make your application shine.</p>
                <a
                    href="mailto:hello@brightmind.com"
                    className="inline-block bg-[#20C997] text-white font-semibold rounded-full px-6 py-3 hover:bg-[#17b58a] transition"
                >
                    Contact Us
                </a>
            </section>
        </div>
    );
}