import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Building } from "lucide-react";
import { mapConfig, generateMapEmbedUrl, generateMapSearchUrl } from "@/config/mapConfig";

const ContactMap = () => {
    return (
        <div className="w-full h-full flex flex-col gap-6">
            {/* Office Address Card */}
            <Card className="shadow-xl border border-gray-100 bg-white z-10 relative flex-1">
                <CardHeader className="pb-6 bg-gradient-to-r from-gray-50 to-white border-b border-gray-100">
                    <CardTitle className="text-2xl md:text-3xl font-bold text-black flex items-center gap-3">
                        Office Address
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 p-8 bg-white">
                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:bg-gray-100 transition-all duration-200">
                        <div className="p-2 bg-black rounded-lg flex-shrink-0">
                            <MapPin className="h-4 w-4 text-white" />
                        </div>
                        <div>
                            <p className="font-bold text-black text-lg mb-1">{mapConfig.address.company}</p>
                            <p className="text-gray-700 text-base font-medium leading-relaxed">{mapConfig.address.street}</p>
                            <p className="text-gray-700 text-base font-medium leading-relaxed">{mapConfig.address.city} - {mapConfig.address.pincode}</p>
                            <p className="text-gray-700 text-base font-medium leading-relaxed">{mapConfig.address.state}, {mapConfig.address.country}</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:bg-gray-100 transition-all duration-200">
                        <div className="p-2 bg-black rounded-lg flex-shrink-0">
                            <Phone className="h-4 w-4 text-white" />
                        </div>
                        <div>
                            <p className="font-bold text-black text-lg mb-2">Phone Numbers</p>
                            <div className="space-y-1">
                                <a href="tel:+918318943040" className="block text-gray-700 hover:text-black text-base font-medium hover:underline transition-colors">
                                    +91 8318943040
                                </a>
                                <a href="tel:+919125138209" className="block text-gray-700 hover:text-black text-base font-medium hover:underline transition-colors">
                                    +91 9125138209
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:bg-gray-100 transition-all duration-200">
                        <div className="p-2 bg-black rounded-lg flex-shrink-0">
                            <Mail className="h-4 w-4 text-white" />
                        </div>
                        <div>
                            <p className="font-bold text-black text-lg mb-2">Email</p>
                            <a href="mailto:info@skilllogic.in" className="text-gray-700 hover:text-black text-base font-medium hover:underline transition-colors">
                                info@skilllogic.in
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:bg-gray-100 transition-all duration-200">
                        <div className="p-2 bg-black rounded-lg flex-shrink-0">
                            <Clock className="h-4 w-4 text-white" />
                        </div>
                        <div>
                            <p className="font-bold text-black text-lg mb-2">Business Hours</p>
                            <div className="space-y-1">
                                <p className="text-gray-700 text-base font-medium">Monday - Friday: 9:00 AM - 6:00 PM</p>
                                <p className="text-gray-700 text-base font-medium">Saturday: 10:00 AM - 6:00 PM</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default ContactMap;
