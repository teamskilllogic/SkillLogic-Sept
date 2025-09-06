import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Building } from "lucide-react";
import { mapConfig, generateMapEmbedUrl, generateMapSearchUrl } from "@/config/mapConfig";

const ContactMap = () => {
    return (
        <div className="w-full h-full flex flex-col">
            {/* Office Address Card */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm flex-1">
                <CardHeader className="pb-3">
                    <CardTitle className="text-2xl md:text-3xl font-bold text-black flex items-center gap-2">
                        <Building className="h-4 w-4 text-black" />
                        Office Address
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                        <MapPin className="h-4 w-4 text-black mt-0.5 flex-shrink-0" />
                        <div>
                            <p className="font-semibold text-black text-base">{mapConfig.address.company}</p>
                            <p className="text-gray-600 text-base font-medium">{mapConfig.address.street}</p>
                            <p className="text-gray-600 text-base font-medium">{mapConfig.address.city} - {mapConfig.address.pincode}</p>
                            <p className="text-gray-600 text-base font-medium">{mapConfig.address.state}, {mapConfig.address.country}</p>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                        <Phone className="h-4 w-4 text-black flex-shrink-0" />
                        <div>
                            <p className="font-semibold text-black text-base">Phone Numbers</p>
                            <a href="tel:+918318943040" className="text-black hover:text-gray-700 text-base font-medium">
                                +91 8318943040
                            </a>
                            <br />
                            <a href="tel:+919125138209" className="text-black hover:text-gray-700 text-base font-medium">
                                +91 9125138209
                            </a>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                        <Mail className="h-4 w-4 text-black flex-shrink-0" />
                        <div>
                            <p className="font-semibold text-black text-base">Email</p>
                            <a href="mailto:info@skilllogic.in" className="text-black hover:text-gray-700 text-base font-medium">
                                info@skilllogic.in
                            </a>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                        <Clock className="h-4 w-4 text-black flex-shrink-0" />
                        <div>
                            <p className="font-semibold text-black text-base">Business Hours</p>
                            <p className="text-gray-600 text-base font-medium">Monday - Friday: 9:00 AM - 9:00 PM</p>
                            <p className="text-gray-600 text-base font-medium">Saturday: 9:00 AM - 6:00 PM</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Google Map Card */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm flex-1 mt-4">
                <CardHeader className="pb-2">
                    <CardTitle className="text-2xl md:text-3xl font-bold text-black">
                        Find Us on Google Maps
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="bg-gray-100 rounded-lg overflow-hidden h-full min-h-[300px] relative">
                        {/* Google Maps Embed */}
                        <iframe
                            src={generateMapEmbedUrl(mapConfig)}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-lg"
                            title="SkillLogic Technologies Location"
                        />
                        
                        {/* Overlay with address info */}
                        <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                            <div className="flex items-center gap-2 mb-2">
                                <MapPin className="h-4 w-4 text-black" />
                                <span className="font-semibold text-sm text-black">Our Location</span>
                            </div>
                            <p className="text-sm font-medium text-gray-700 mb-2">
                                {mapConfig.address.street}<br />
                                {mapConfig.address.city}, {mapConfig.address.state} {mapConfig.address.pincode}
                            </p>
                            <a 
                                href={generateMapSearchUrl(mapConfig)} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-black hover:text-gray-700 font-semibold text-xs border border-gray-300 px-2 py-1 rounded hover:bg-gray-200 transition-colors"
                            >
                                <MapPin className="h-3 w-3" />
                                Open in Google Maps
                            </a>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default ContactMap;


