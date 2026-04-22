"use client";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-4 bg-white"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Let&apos;s Connect & Collaborate 🚀
        </h2>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          Whether you have a project idea, a question, or just want to chat tech, drop me a message and I&apos;ll get back to you!
        </p>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white transition shadow-sm p-4 sm:p-6 md:p-8">
          <iframe
            src="https://tally.so/embed/mYpqJn?alignLeft=1&hideTitle=1&transparentBackground=1"
            width="100%"
            title="Contact Form"
            className="w-full h-[500px] rounded-xl"
            allow="clipboard-write"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
