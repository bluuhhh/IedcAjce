import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How can I join IEDC?",
      answer: "Joining IEDC is simple! You can register through our website or visit our office at Amal Jyothi College of Engineering. We welcome students from all disciplines who are passionate about innovation and entrepreneurship. Just fill out our membership form and attend our orientation session."
    },
    {
      question: "Do I need to pay any fees to participate?",
      answer: "No, IEDC membership is completely free! We believe in making innovation accessible to all students. However, some specialized workshops or events may have nominal fees to cover materials and resources, but these are kept at minimal cost."
    },
    {
      question: "How do I turn my idea into a startup?",
      answer: "Our structured incubation program guides you through every step: idea validation, market research, prototype development, business model creation, funding assistance, and go-to-market strategy. We provide mentorship, resources, and connections to help transform your concept into a viable business."
    },
    {
      question: "How will IEDC help in my entrepreneurial journey?",
      answer: "IEDC offers comprehensive support including expert mentorship, funding guidance, networking opportunities, technical resources, legal assistance, market access, and a collaborative ecosystem. We've helped launch 85+ startups and continue to provide ongoing support even after graduation."
    },
    {
      question: "What kind of startups does IEDC support?",
      answer: "We support startups across all domains - technology, healthcare, sustainability, social impact, biotech, fintech, and more. Our focus is on innovative solutions that solve real-world problems, regardless of the industry vertical."
    },
    {
      question: "Can I get funding through IEDC?",
      answer: "Yes! We help connect startups with various funding sources including government schemes, angel investors, VCs, and our own seed funding programs. We also assist in preparing pitch decks and connecting with our extensive investor network."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-primary-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Frequently Asked{' '}
            <span className="text-primary-500">
              Questions
            </span>
          </h2>
          <p className="text-xl text-primary-900/70 max-w-3xl mx-auto">
            Got questions? We've got answers. Find everything you need to know about IEDC and your entrepreneurial journey.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group bg-primary-50/80 backdrop-blur-sm rounded-2xl border border-primary-500/20 hover:border-primary-500/50 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-2xl"
              >
                <span className="text-lg font-semibold text-primary-900 group-hover:text-primary-500 transition-colors">
                  {faq.question}
                </span>
                <div className="ml-4 flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-primary-500 transition-transform duration-300" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary-900/60 group-hover:text-primary-500 transition-all duration-300" />
                  )}
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <div className="h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent mb-4"></div>
                  <p className="text-primary-900/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-primary-100/5 to-primary-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-primary-900/70 mb-6">Still have questions?</p>
          <button className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-100 text-primary-50 rounded-full text-lg font-semibold hover:from-primary-500/80 hover:to-primary-100/80 transition-all duration-300 transform hover:scale-105">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;