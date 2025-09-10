import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, Headphones, MessageCircle } from "lucide-react";
import { Button } from "@/components/common/button";

const NeedHelp = () => {
    return (
        <section className="w-full max-w-7xl mx-auto px-6 py-20">
            <div className="text-center mb-8 mt-9">
                <span 
                    className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white text-gray-700 text-base font-semibold border border-gray-200 mb-4"
                    style={{ boxShadow: '0px 15px 25px rgba(0,0,0,0.15), 0px 5px 10px rgba(0,0,0,0.05)' }}
                >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                    Support
                </span>
                <h2 className="text-3xl md:text-6xl lg:text-6xl xl:text-[58px] leading-[38px] md:leading-[60px] lg:leading-[60px] xl:leading-[70px] font-extrabold text-black mb-4 tracking-tight">
                    Need Help?
                </h2>
                <p className="text-gray-600 text-base md:text-base xl:text-lg font-medium tracking-normal leading-6 md:leading-[30px] mb-6">
                    Our dedicated tech support team is here to help you with any questions or technical issues.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Tech Support Card */}
                <Card className="shadow-lg border-0 bg-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="text-center pb-4">
                        <div className="mx-auto w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4">
                            <Headphones className="h-8 w-8 text-white" />
                        </div>
                        <CardTitle className="text-2xl md:text-3xl font-bold text-black">
                            Tech Support
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center space-y-4">
                        <p className="text-gray-600 text-base md:text-base xl:text-lg font-medium tracking-normal leading-6 md:leading-[30px]">
                            Get immediate technical assistance for all your project needs
                        </p>
                        <div className="space-y-2">
                            <div className="flex items-center justify-center gap-2">
                                <Phone className="h-4 w-4 text-black" />
                                <span className="font-semibold text-black text-base">Call us on:</span>
                            </div>
                            <a 
                                href="tel:+918318943040" 
                                className="text-black hover:text-gray-700 font-semibold text-base"
                            >
                                +91 8318943040
                            </a>
                        </div>
                        <Button className="w-full bg-black hover:bg-gray-800">
                            Call Now
                        </Button>
                    </CardContent>
                </Card>

                {/* Email Support Card */}
                <Card className="shadow-lg border-0 bg-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="text-center pb-4">
                        <div className="mx-auto w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4">
                            <Mail className="h-8 w-8 text-white" />
                        </div>
                        <CardTitle className="text-2xl md:text-3xl font-bold text-black">
                            Email Support
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center space-y-4">
                        <p className="text-gray-600 text-base md:text-base xl:text-lg font-medium tracking-normal leading-6 md:leading-[30px]">
                            Send us a detailed message and we'll get back to you within 24 hours
                        </p>
                        <div className="space-y-2">
                            <div className="flex items-center justify-center gap-2">
                                <Mail className="h-4 w-4 text-black" />
                                <span className="font-semibold text-black text-base">Email us at:</span>
                            </div>
                            <a 
                                href="mailto:info@skilllogic.in" 
                                className="text-black hover:text-gray-700 font-semibold text-base"
                            >
                                info@skilllogic.in
                            </a>
                        </div>
                        <Button className="w-full bg-black hover:bg-gray-800">
                            Send Email
                        </Button>
                    </CardContent>
                </Card>

                {/* Live Chat Card */}
                <Card className="shadow-lg border-0 bg-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="text-center pb-4">
                        <div className="mx-auto w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4">
                            <MessageCircle className="h-8 w-8 text-white" />
                        </div>
                        <CardTitle className="text-2xl md:text-3xl font-bold text-black">
                            Live Chat
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center space-y-4">
                        <p className="text-gray-600 text-base md:text-base xl:text-lg font-medium tracking-normal leading-6 md:leading-[30px]">
                            Chat with our support team in real-time for quick assistance
                        </p>
                        <div className="space-y-2">
                            <div className="flex items-center justify-center gap-2">
                                <MessageCircle className="h-4 w-4 text-black" />
                                <span className="font-semibold text-black text-base">Available:</span>
                            </div>
                            <span className="text-black font-semibold text-base">
                                9:00 AM - 9:00 PM
                            </span>
                        </div>
                        <Button className="w-full bg-black hover:bg-gray-800">
                            Start Chat
                        </Button>
                    </CardContent>
                </Card>
            </div>

            {/* Additional Support Info */}
            <div className="mt-16 text-center">
                <div className="bg-gray-100 rounded-2xl p-8 max-w-4xl mx-auto">
                    <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                        Support Response Times
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div>
                            <div className="text-3xl font-bold text-black mb-2">24h</div>
                            <p className="text-gray-600 text-base font-medium">Email Response</p>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-black mb-2">2h</div>
                            <p className="text-gray-600 text-base font-medium">Phone Response</p>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-black mb-2">Instant</div>
                            <p className="text-gray-600 text-base font-medium">Live Chat</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NeedHelp;


