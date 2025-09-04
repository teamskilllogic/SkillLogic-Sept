"use client";
import { WorldMap } from "@/components/ui/world-map";
import { motion } from "framer-motion";

function Connectivity() {
    return (
        <div className="w-full py-5 dark:bg-black">
            <div className="max-w-7xl mx-auto text-center">
                {/* <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
                    Remote{" "}
                    <span className="text-neutral-400">
                        {"Connectivity".split("").map((word, idx) => (
                            <motion.span
                                key={idx}
                                className="inline-block"
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: idx * 0.04 }}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </span>
                </p> */}
                {/* <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
                    Break free from traditional boundaries. Work from anywhere, at the
                    comfort of your own studio apartment. Perfect for Nomads and
                    Travellers.
                </p> */}
            </div>
            <WorldMap
                dots={[
                    {
                        start: {
                            lat: 64.2008,
                            lng: -149.4937,
                        }, // Alaska (Fairbanks)
                        end: {
                            lat: 34.0522,
                            lng: -118.2437,
                        }, // Los Angeles
                    },
                    {
                        start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
                        end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                    },
                    {
                        start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                        end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
                    },
                    {
                        start: { lat: 51.5074, lng: -0.1278 }, // London
                        end: { lat: 28.6139, lng: 77.209 }, // New Delhi
                    },
                    {
                        start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                        end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
                    },
                    {
                        start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                        end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
                    },
                    {
                        start: { lat: 40.7128, lng: -74.0060 }, // New York
                        end: { lat: 37.7749, lng: -122.4194 }, // San Francisco
                    },
                    {
                        start: { lat: 43.6532, lng: -79.3832 }, // Toronto
                        end: { lat: 53.3498, lng: -6.2603 }, // Dublin
                    },
                    {
                        start: { lat: 1.3521, lng: 103.8198 }, // Singapore
                        end: { lat: -33.8688, lng: 151.2093 }, // Sydney
                    },
                    {
                        start: { lat: 35.6895, lng: 139.6917 }, // Tokyo
                        end: { lat: 37.5665, lng: 126.9780 }, // Seoul
                    },
                    {
                        start: { lat: -26.2041, lng: 28.0473 }, // Johannesburg
                        end: { lat: -33.9249, lng: 18.4241 }, // Cape Town
                    },
                    {
                        start: { lat: 19.0760, lng: 72.8777 }, // Mumbai
                        end: { lat: 25.2048, lng: 55.2708 }, // Dubai
                    },
                    {
                        start: { lat: 19.4326, lng: -99.1332 }, // Mexico City
                        end: { lat: 4.7110, lng: -74.0721 }, // Bogota
                    },
                ]}
            />
        </div>
    );
}

export { Connectivity };
