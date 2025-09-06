import React from "react";

const metrics = [
	{ label: "Projects delivered", value: "120+" },
	{ label: "Avg. SEO traffic lift", value: "3.2x" },
	{ label: "NPS from clients", value: "72" },
	{ label: "On-time delivery", value: "97%" },
];

const ImpactMetrics = () => {
	return (
		<section className="w-full max-w-7xl mx-auto px-6 py-12">
			<div className="rounded-2xl border border-gray-200 bg-white p-8 md:p-10">
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


