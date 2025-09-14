import { ShieldAlert, Rocket } from "lucide-react";
import React, { useState } from "react";

type FAQItem = {
    question: string;
    answer: string;
};

const faqs: FAQItem[] = [
    {
        question: "What services does SkillLogic offer?",
        answer:
            "SkillLogic specializes in comprehensive digital solutions including web development, mobile app development, and Enterprise Resource Planning (ERP) systems. We create custom websites, web applications, mobile apps for iOS and Android, and tailored ERP solutions to streamline your business operations.\n\nOur expertise spans modern technologies like React, Node.js, Python, and cloud platforms to deliver scalable, secure, and user-friendly solutions that drive business growth.",
    },
    {
        question: "How long does it take to develop a website or mobile app?",
        answer:
            "Development timelines vary based on project complexity and requirements. A simple website typically takes 4-6 weeks, while complex web applications or mobile apps can take 8-12 weeks or more.\n\nWe follow an agile development process with regular updates and milestones to ensure transparency. The timeline includes planning, design, development, testing, and deployment phases.",
    },
    {
        question: "What technologies do you specialize in?",
        answer:
            "We work with cutting-edge technologies including:\n\n• Frontend: React, Next.js, TypeScript\n• Backend: Node.js, PHP (Laravel Framework), \n• Mobile: React Native, Flutter, \n• Database: MongoDB, MySQL\n• Cloud: AWS, \n• DevOps: Docker, Kubernetes, CI/CD pipelines\n\nWe choose the best technology stack based on your project requirements and long-term goals.",
    },
    {
        question: "Do you provide ongoing maintenance and support?",
        answer:
            "Yes, we offer comprehensive post-launch support including:\n\n• Regular maintenance and updates\n• Performance monitoring and optimization\n• Security patches and updates\n• Bug fixes and technical support\n• Feature enhancements and upgrades\n• 24/7 monitoring for critical applications\n\nWe provide flexible support packages tailored to your needs, from basic maintenance to full managed services.",
    },
    {
        question: "What is your development process?",
        answer:
            "We follow a proven agile development methodology:\n\n1. **Discovery & Planning**: Understanding your requirements and goals\n2. **Design & Prototyping**: Creating wireframes and user experience designs\n3. **Development**: Building your solution using best practices and modern technologies\n4. **Testing & Quality Assurance**: Rigorous testing across multiple devices and scenarios\n5. **Deployment & Launch**: Smooth rollout with performance optimization\n6. **Post-Launch Support**: Ongoing maintenance and feature enhancements\n\nWe provide regular updates and maintain transparent communication throughout the process.",
    },
    {
        question: "How much do your services cost?",
        answer:
            "Our pricing depends on project scope, complexity, and requirements. We offer flexible pricing models:\n\n• **Fixed Price**: For well-defined projects with clear specifications\n• **Time & Materials**: For projects with evolving requirements\n• **Retainer**: For ongoing development and maintenance\n\nWe provide detailed quotes after understanding your specific needs. Contact us for a free consultation and customized pricing proposal. Our goal is to deliver exceptional value while ensuring your project stays within budget.",
    },
    {
        question: "Can you work with existing systems or legacy code?",
        answer:
            "Absolutely! We specialize in system integration and modernization:\n\n• **Legacy System Integration**: Connecting new solutions with existing systems\n• **API Development**: Building robust APIs for seamless data exchange\n• **Database Migration**: Safely migrating data between systems\n• **Code Refactoring**: Modernizing legacy codebases while preserving functionality\n• **Cloud Migration**: Moving applications to modern cloud infrastructure\n\nOur team has extensive experience working with various legacy systems and can help you modernize your technology stack without disrupting your business operations.",
    },
    {
        question: "What makes SkillLogic different from other agencies?",
        answer:
            "What sets us apart:\n\n• **Technical Excellence**: Deep expertise across modern technologies and best practices\n• **Agile Methodology**: Flexible, iterative approach that adapts to your changing needs\n• **End-to-End Solutions**: From concept to deployment and ongoing support\n• **Transparent Communication**: Regular updates and clear project visibility\n• **Quality Focus**: Rigorous testing and attention to detail in every deliverable\n• **Business Understanding**: We don't just code – we understand your business goals\n• **Long-term Partnership**: We aim to be your technology partner, not just a vendor\n\nWe measure our success by your success and are committed to delivering solutions that drive real business value.",
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
                        <a
                            href="https://wa.me/918318943040?text=Hi%20SkillLogic%20Team!%20I%20have%20some%20questions%20about%20your%20services.%20Could%20you%20please%20help%20me%20understand%20more%20about%20your%20offerings?"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-black text-white px-3 py-2 rounded-xl font-medium hover:bg-gray-800 transition"
                        >
                            <Rocket size={18} />
                            Have Any Questions? Let's Chat On WhatsApp
                        </a>
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
