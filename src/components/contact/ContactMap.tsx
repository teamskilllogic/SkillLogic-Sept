import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Building } from "lucide-react";

const ContactMap = () => {
    return (
        <div className="w-full h-full flex flex-col">
            {/* Office Address Card */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm flex-1">
                <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-bold text-black flex items-center gap-2">
                        <Building className="h-4 w-4 text-black" />
                        Office Address
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                        <MapPin className="h-4 w-4 text-black mt-0.5 flex-shrink-0" />
                        <div>
                            <p className="font-medium text-black text-sm">SkillLogic Technologies</p>
                            <p className="text-gray-600 text-sm">Civil Lines, Power House Road</p>
                            <p className="text-gray-600 text-sm">Bhadohi - 221401</p>
                            <p className="text-gray-600 text-sm">Uttar Pradesh, India</p>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                        <Phone className="h-4 w-4 text-black flex-shrink-0" />
                        <div>
                            <p className="font-medium text-black text-sm">Phone Numbers</p>
                            <a href="tel:+918318943040" className="text-black hover:text-gray-700 text-sm">
                                +91 8318943040
                            </a>
                            <br />
                            <a href="tel:+919125138209" className="text-black hover:text-gray-700 text-sm">
                                +91 9125138209
                            </a>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                        <Mail className="h-4 w-4 text-black flex-shrink-0" />
                        <div>
                            <p className="font-medium text-black text-sm">Email</p>
                            <a href="mailto:info@skilllogic.in" className="text-black hover:text-gray-700 text-sm">
                                info@skilllogic.in
                            </a>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                        <Clock className="h-4 w-4 text-black flex-shrink-0" />
                        <div>
                            <p className="font-medium text-black text-sm">Business Hours</p>
                            <p className="text-gray-600 text-sm">Monday - Friday: 9:00 AM - 9:00 PM</p>
                            <p className="text-gray-600 text-sm">Saturday: 9:00 AM - 6:00 PM</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Google Map Card */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm flex-1 mt-4">
                <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-bold text-black">
                        Find Us on Google Maps
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="bg-gray-100 rounded-lg p-3 h-full min-h-[100px] flex flex-col items-center justify-center">
                        <div className="text-center text-gray-500">
                            <MapPin className="h-6 w-6 mx-auto mb-2 text-black" />
                            <p className="font-medium text-xs mb-1">Google Maps Integration</p>
                            <p className="text-xs mb-2">Map will be embedded here</p>
                            <p className="text-xs mb-3">
                                Civil Lines, Power House Road<br />
                                Bhadohi, Uttar Pradesh 221401
                            </p>
                            <a 
                                href="https://maps.google.com/?q=Civil+Lines+Power+House+Road+Bhadohi+Uttar+Pradesh+221401" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-black hover:text-gray-700 font-medium text-xs border border-gray-300 px-2 py-1 rounded hover:bg-gray-200 transition-colors"
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


