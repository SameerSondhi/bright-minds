export default function Pricing() {
    return (
        <div className="min-h-screen bg-[#F9FAFB] text-[#212529] px-6 py-12 sm:px-12 font-sans">
            <section className="max-w-4xl mx-auto text-center py-12">
                <h1 className="text-4xl font-extrabold mb-4 text-[#1F75CB]">Flexible Pricing</h1>
                <p className="text-lg mb-8">
                    We offer personalized packages to match the needs of every learner. Contact us for a custom quote and to discuss what is right for you.
                </p>
            </section>

            <section className="max-w-3xl mx-auto py-8 grid sm:grid-cols-3 gap-6">
                <div className="bg-white border rounded-lg p-6 shadow hover:shadow-lg transition text-center">
                    <h2 className="text-xl font-bold mb-2 text-[#1F75CB]">Starter</h2>
                    <p className="mb-4">Perfect for quick refreshers or single-topic sessions.</p>
                    <p className="font-semibold">From $75/session</p>
                </div>
                <div className="bg-white border rounded-lg p-6 shadow hover:shadow-lg transition text-center">
                    <h2 className="text-xl font-bold mb-2 text-[#1F75CB]">Standard</h2>
                    <p className="mb-4">Ideal for ongoing weekly or bi-weekly tutoring.</p>
                    <p className="font-semibold">From $65/session (package rate)</p>
                </div>
                <div className="bg-white border rounded-lg p-6 shadow hover:shadow-lg transition text-center">
                    <h2 className="text-xl font-bold mb-2 text-[#1F75CB]">Intensive</h2>
                    <p className="mb-4">Designed for accelerated prep or support for demanding programs.</p>
                    <p className="font-semibold">Contact for custom quote</p>
                </div>
            </section>

            <section className="max-w-3xl mx-auto text-center py-12">
                <p className="mb-6">Not sure which plan fits? Let us discuss your goals and build a custom approach.</p>
                <a
                    href="mailto:hello@brightmind.com"
                    className="inline-block bg-[#20C997] text-white font-semibold rounded-full px-6 py-3 hover:bg-[#17b58a] transition"
                >
                    Get in Touch
                </a>
            </section>
        </div>
    );
}