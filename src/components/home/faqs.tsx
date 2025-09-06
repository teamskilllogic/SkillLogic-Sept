import { ShieldAlert, Rocket } from "lucide-react";
import React, { useState } from "react";

type FAQItem = {
    question: string;
    answer: string;
};

const faqs: FAQItem[] = [
    {
        question: "Why do I need a NextJS Boilerplate?",
        answer:
            "A complex NextJS Boilerplate like this one can help you more than you imagine, it helps you save thousands of coding hours, and it can boost your workflow 10–20X faster than ever before (it sounds crazy, we know). We used to ask ourselves this question all the time. We didn’t realize the power of a boilerplate until we built Horizon.\n\nHorizon AI Boilerplate was built to have all those essential things. We’ve thought of everything you need for your project, we adapted it to a trendy UI design, made a bunch of useful example sections, and wrapped all of this into one premium well-organized package.",
    },
    {
        question: "What are the differences between the licenses from the pricing section?",
        answer:
            "The licenses differ in terms of usage rights, project scope, and support options. Please refer to our pricing page for detailed information.",
    },
    {
        question: "How do I access updates after purchasing?",
        answer:
            "After purchasing, you’ll receive lifetime access to updates. You can download them directly from your account dashboard.",
    },
    {
        question: "How many developers can access the product?",
        answer:
            "The number of developers depends on your chosen license. Single licenses are for individuals, while extended ones allow multiple developers.",
    },
];

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full py-20 flex justify-center items-center">
            <div className="max-w-6xl w-full mx-auto px-6 flex flex-col items-center justify-center text-center">
                <div className="flex flex-col items-center justify-center min-h-screen relative overflow-hidden mt-16 text-center">
                    {/* Section Label */}
                    <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white text-gray-700 text-base font-semibold border border-gray-200 mb-4"
                        style={{ boxShadow: '0px 15px 25px rgba(0,0,0,0.15), 0px 5px 10px rgba(0,0,0,0.05)' }}>
                        {/* Icon */}
                        <ShieldAlert className="w-4 h-4 text-black-500" />
                        {/* {page} text */}
                        FAQs
                    </span>
                    {/* Heading */}
                    <h2 className="text-3xl md:text-6xl lg:text-6xl xl:text-[58px] leading-[38px] md:leading-[60px] lg:leading-[60px] xl:leading-[70px] font-extrabold text-zinc-900 text-center w-[70%] md:w-full lg:w-full xl:w-full mx-auto mb-5 md:mb-[30px] tracking-tight">
                        Frequently Asked Questions
                    </h2>
                    {/* Description */}
                    <p className="text-zinc-600 text-base md:text-base xl:text-lg font-medium tracking-normal leading-6 md:leading-[30px] w-[94%] md:w-[90%] lg:w-[80%] xl:w-[56%] mx-auto">
                        Find answers to common questions about our services, process, and support. If you need more details, our team is always here to help you make the best decision for your business.
                    </p>


                    <div className="max-w-6xl mx-auto px-6 text-center mt-16 mb-5 md:mb-[30px] tracking-tight">
                        {/* FAQ List */}
                        <div className="space-y-6">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="bg-white shadow-lg rounded-xl p-6 transition-all duration-300 border border-gray-100"
                                >
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="flex justify-between items-center w-full text-left group hover:bg-gray-50 rounded-lg px-2 py-2 transition"
                                    >
                                        <span className="font-bold text-lg text-gray-900 group-hover:text-blue-600">
                                            {faq.question}
                                        </span>
                                        <span className="ml-2 text-blue-500 text-xl">
                                            {openIndex === index ? "−" : "+"}
                                        </span>
                                    </button>

                                    <div
                                        className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
                                    >
                                        <p className="text-gray-600 whitespace-pre-line">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center gap-4 mt-4">
                        <button className="flex items-center gap-2 bg-black text-white px-3 py-2 rounded-xl font-medium hover:bg-gray-800 transition">
                            <Rocket size={18} />
                            Have Any Questions? Let's Chat
                        </button>
                    </div>


                    <h3 className="text-lg font-bold text-blue-500 mt-8">
                        <span className="block text-blue-500 font-bold">Still have questions?</span>
                        <span className="text-gray-500 font-normal">If you can't find the answer you're looking for, our team is just a message away. We're here to help you make the best decision for your business.</span>
                    </h3>
                </div>
            </div>
        </section>
    );
};

export { FAQ };
