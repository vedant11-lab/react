import React, { useState } from 'react'

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null)

    const faqs = [
        {
            question: "What is React Router?",
            answer: "React Router is a standard library for routing in React. It enables navigation among views of various components in a React Application."
        },
        {
            question: "How do I install React Router?",
            answer: "You can install React Router using npm or yarn: npm install react-router-dom"
        },
        {
            question: "What is the difference between Link and NavLink?",
            answer: "NavLink is a special version of Link that adds styling attributes to the rendered element when it matches the current URL, while Link is just a basic navigation component."
        },
        {
            question: "Can I use React Router with other frameworks?",
            answer: "React Router is specifically designed for React applications. For other frameworks, you would need to use their respective routing solutions."
        },
        {
            question: "What is Outlet in React Router?",
            answer: "Outlet is a component that renders the child route elements. It's used in parent route elements to display nested routes."
        }
    ]

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-4 text-gray-600">
                        Find answers to common questions about our services
                    </p>
                </div>
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                            >
                                <span className="font-semibold text-gray-900">
                                    {faq.question}
                                </span>
                                <svg
                                    className={`w-5 h-5 text-gray-500 transform transition-transform ${
                                        openIndex === index ? 'rotate-180' : ''
                                    }`}
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            <div
                                className={`transition-all duration-300 ${
                                    openIndex === index
                                        ? 'max-h-96 opacity-100'
                                        : 'max-h-0 opacity-0 overflow-hidden'
                                }`}
                            >
                                <div className="p-4 bg-white text-gray-600">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
