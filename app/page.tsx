export default function Home() {
  return (
      <div className="min-h-screen bg-[#F9FAFB] text-[#212529] flex flex-col items-center px-6 py-12 sm:px-12 font-sans">
        {/* Hero Section */}
        <section className="w-full max-w-5xl text-center py-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-[#1F75CB]">Unlock Your Academic Potential</h1>
          <p className="text-lg sm:text-xl mb-8 text-[#212529]">
            Personalized tutoring to help you excel in high school, ace college prep, or succeed in your MBA.
          </p>
          <a
              href="#contact"
              className="inline-block bg-[#20C997] text-white font-semibold rounded-full px-6 py-3 hover:bg-[#17b58a] transition"
          >
            Book a Free Consultation
          </a>
        </section>

        {/* Services */}
        <section className="w-full max-w-5xl grid sm:grid-cols-3 gap-8 py-12">
          <div className="bg-white border rounded-lg p-6 shadow hover:shadow-lg transition">
            <h2 className="text-xl font-bold mb-2 text-[#1F75CB]">High School Math</h2>
            <p>Build a strong foundation and feel confident in exams and coursework.</p>
          </div>
          <div className="bg-white border rounded-lg p-6 shadow hover:shadow-lg transition">
            <h2 className="text-xl font-bold mb-2 text-[#1F75CB]">College Prep</h2>
            <p>Improve test scores, craft standout applications, and get ready for college life.</p>
          </div>
          <div className="bg-white border rounded-lg p-6 shadow hover:shadow-lg transition">
            <h2 className="text-xl font-bold mb-2 text-[#1F75CB]">MBA & Grad Support</h2>
            <p>Balance work and study while mastering advanced material with expert guidance.</p>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full max-w-3xl text-center py-12">
          <h2 className="text-3xl font-bold mb-6 text-[#1F75CB]">What Students Are Saying</h2>
          <blockquote className="italic mb-4">"BrightMind helped me improve my SAT score dramatically and get into my top choice!"</blockquote>
          <p className="font-semibold">— Sarah L., High School Senior</p>
          <blockquote className="italic mt-8 mb-4">"I finally balanced my MBA program and full-time job, thanks to BrightMind’s tailored help."</blockquote>
          <p className="font-semibold">— Alex T., MBA Candidate</p>
        </section>

        {/* FAQ */}
        <section className="w-full max-w-4xl py-12">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#1F75CB]">FAQs</h2>
          <div className="mb-4">
            <h3 className="font-semibold">Do you offer online sessions?</h3>
            <p>Yes! Sessions are fully online and flexible to your schedule and needs.</p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">What subjects do you specialize in?</h3>
            <p>High school math, college test prep, and graduate-level strategy and support.</p>
          </div>
          <div>
            <h3 className="font-semibold">How do I start?</h3>
            <p>Book a free consultation below and we’ll create your personalized study plan.</p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="w-full max-w-3xl text-center py-16">
          <h2 className="text-3xl font-bold mb-4 text-[#1F75CB]">Start Your Journey Today</h2>
          <p className="mb-6">Reach out and let's create a roadmap for your success together.</p>
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