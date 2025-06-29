"use client";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-4 bg-white"
    >
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Reach Out to Me 🤝
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            I’d love to hear from you. Fill out the form and I’ll get back to you soon!
          </p>
        </div>

        {/* Contact Form */}
        <div className="rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white transition shadow-sm p-4 sm:p-6 md:p-8">
          <iframe
            src="https://tally.so/embed/mYpqJn?alignLeft=1&hideTitle=1&transparentBackground=1"
            width="100%"
            height="600"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Contact Form"
            className="w-full h-[600px] rounded-xl"
            allow="clipboard-write"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;