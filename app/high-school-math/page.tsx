export default function HighSchoolMath() {
    return (
        <div className="min-h-screen bg-[#F9FAFB] text-[#212529] px-6 py-12 sm:px-12 font-sans">
            <section className="max-w-4xl mx-auto text-center py-12">
                <h1 className="text-4xl font-extrabold mb-4 text-[#1F75CB]">High School Math Tutoring</h1>
                <p className="text-lg mb-8">
                    Build a rock-solid foundation in algebra, geometry, calculus, and more — so you can feel confident and excel in your classes.
                </p>
                <a
                    href="#contact"
                    className="inline-block bg-[#20C997] text-white font-semibold rounded-full px-6 py-3 hover:bg-[#17b58a] transition"
                >
                    Book Your Free Session
                </a>
            </section>

            <section className="max-w-3xl mx-auto py-8">
                <h2 className="text-2xl font-bold mb-4 text-[#1F75CB]">Topics We Cover</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>Algebra I & II</li>
                    <li>Geometry & Trigonometry</li>
                    <li>Pre-Calculus & Calculus</li>
                    <li>Statistics & Probability</li>
                    <li>AP Math exam prep</li>
                </ul>
            </section>

            <section id="contact" className="max-w-3xl mx-auto text-center py-12">
                <h2 className="text-2xl font-bold mb-4 text-[#1F75CB]">Ready to Level Up?</h2>
                <p className="mb-6">Let’s create a custom study plan that helps you achieve your goals.</p>
                <a
                    href="mailto:hello@brightmind.com"
                    className="inline-block bg-[#20C997] text-white font-semibold rounded-full px-6 py-3 hover:bg-[#17b58a] transition"
                >
                    Get Started
                </a>
            </section>
        </div>
    );
}