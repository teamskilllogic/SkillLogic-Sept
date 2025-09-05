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
			<div className="text-center mb-8 mt-9">
				<span 
					className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white text-gray-700 text-base font-semibold border border-gray-200 mb-4"
					style={{ boxShadow: '0px 15px 25px rgba(0,0,0,0.15), 0px 5px 10px rgba(0,0,0,0.05)' }}
				>
					<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
						<path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
					</svg>
					Metrics
				</span>
				<h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
					Our Impact in Numbers
				</h2>
				<p className="text-gray-600 mb-6">
					Real results that speak for themselves
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


