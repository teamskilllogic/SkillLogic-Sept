import React from "react";

const metrics = [
    { label: "Projects completed", value: "20+" },
    { label: "Happy clients served", value: "25+" },
    { label: "Technologies mastered", value: "20+" },
    { label: "Client satisfaction", value: "100%" },
];

const ImpactMetrics = () => {
    return (
        <section className="w-full max-w-7xl mx-auto px-6 py-3">
            <div className="text-center mb-8 mt-3">
                {/* Description */}
                <p className="text-zinc-600 text-base md:text-base xl:text-lg font-medium tracking-normal leading-6 md:leading-[30px] w-[96%] md:w-[95%] lg:w-[88%] xl:w-[70%] mx-auto tracking-tight text-center">
                    Our commitment to excellence isn't just words—it's backed by measurable results.
                    From consistent on-time delivery to significant performance improvements,
                    these metrics reflect our dedication to transforming your vision into reality
                    while exceeding expectations every step of the way.
                </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white shadow-lg p-8 md:p-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {metrics.map((m, idx) => (
                        <div key={idx} className="text-center">
                            <div className="text-3xl md:text-4xl font-extrabold text-gray-900">
                                {m.value}
                            </div>
                            <div className="text-xs md:text-sm text-gray-600 mt-1">{m.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export { ImpactMetrics };
