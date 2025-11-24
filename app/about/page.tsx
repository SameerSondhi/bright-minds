export default function About() {
    return (
        <div className="min-h-screen bg-[#F9FAFB] text-[#212529] px-6 py-12 sm:px-12 font-sans">
            <section className="max-w-4xl mx-auto text-center py-12">
                <h1 className="text-4xl font-extrabold mb-4 text-[#1F75CB]">About BrightMind</h1>
                <p className="text-lg mb-8">
                    Founded by a passionate educator dedicated to helping students excel at every stage. Whether you're tackling high school algebra or managing an MBA course load, we believe in personalized, supportive guidance.
                </p>
            </section>

            <section className="max-w-3xl mx-auto py-8 text-center">
                <h2 className="text-2xl font-bold mb-4 text-[#1F75CB]">Contact</h2>
                <p className="mb-6">Have questions or ready to get started? We would love to hear from you.</p>
                <a
                    href="mailto:hello@brightmind.com"
                    className="inline-block bg-[#20C997] text-white font-semibold rounded-full px-6 py-3 hover:bg-[#17b58a] transition"
                >
                    Email Us
                </a>
            </section>
        </div>
    );
}