// components/FAQ.js
'use client'

import Link from 'next/link';
import { useState } from 'react';

const faqItems = [
  {
    question: "So, you're a startup?",
    answer: "Yes, we are a startup focused on helping other startups succeed."
  },
  {
    question: "Is Genie right for me?",
    answer: "If you want to supercharge your current stack and workflow, Genie might be perfect for you."
  },
  {
    question: "How do I sign up?",
    answer: "Signing up is easy! Just head to our signup page and fill in your details."
  },
  {
    question: "What's the onboarding like? Do you charge for implementation?",
    answer: "Our onboarding is smooth and straightforward, and we don't charge extra for implementation."
  }
];

export default function FAQ() {  // Rename the component to start with an uppercase letter
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="custom-width mx-auto text-center py-16">
      <h2 className="text-4xl font-bold mb-6">{"We're here to answer all your questions."}</h2>
      <p className="mb-10 text-gray-500 text-lg">
        {"If you're new to Genie or looking to supercharge your current stack, this section will help you learn more about the platform and its features."}
      </p>
      <div className="space-y-4 w-10/12 mx-auto">

        {faqItems.map((item, index) => (
          <div key={index} className="border-b border-gray-300">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full py-4 text-left text-2xl font-medium"
            >
              {item.question}
              <span className={`transform ${activeIndex === index ? 'rotate-45' : 'rotate-0'} transition-transform duration-200`}>
                +
              </span>
            </button>
            {activeIndex === index && (
              <p className="text-gray-500 text-base p-4">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
      <div className="mt-12">
        <p className="text-gray-500">Got any more questions?</p>
        <Link href='/contact'><button className="mt-4 btn-custom">Get in touch</button></Link>
      </div>
    </div>
  );
}
