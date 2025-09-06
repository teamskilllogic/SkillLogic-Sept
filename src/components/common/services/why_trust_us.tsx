import React from "react";

const WhyTrustUs = () => {
	return (
		<section className="w-full max-w-7xl mx-auto px-6 py-20">
			<div className="text-center mb-12">
				<span 
					className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white text-gray-700 text-base font-semibold border border-gray-200 mb-4"
					style={{ boxShadow: '0px 15px 25px rgba(0,0,0,0.15), 0px 5px 10px rgba(0,0,0,0.05)' }}
				>
					<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
						<path fillRule="evenodd" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" clipRule="evenodd" />
					</svg>
					Trust
				</span>
				<h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
					We deliver, we communicate, we stay accountable
				</h2>
				<p className="text-gray-600 mb-6">
					From discovery to launch, you get transparent progress updates, predictable
					timelines, and senior engineers focused on business impact—not just code.
				</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
				<div>
					<ul className="space-y-4">
						<li className="flex items-start gap-3">
							<span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
							<div>
								<div className="font-semibold text-black">Proven delivery</div>
								<p className="text-gray-600 text-sm">Battle‑tested playbooks and checklists for reliable releases.</p>
							</div>
						</li>
						<li className="flex items-start gap-3">
							<span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
							<div>
								<div className="font-semibold text-black">Business-first approach</div>
								<p className="text-gray-600 text-sm">Design and engineering decisions tied to measurable outcomes.</p>
							</div>
						</li>
						<li className="flex items-start gap-3">
							<span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
							<div>
								<div className="font-semibold text-black">Clear communication</div>
								<p className="text-gray-600 text-sm">Weekly demos, shared roadmaps, and single point of contact.</p>
							</div>
						</li>
					</ul>
				</div>
				<div className="flex justify-center">
					<img
						src="/images/strategy.png"
						alt="Why trust us"
						className="w-full max-w-md rounded-lg"
					/>
				</div>
			</div>
		</section>
	);
};

export { WhyTrustUs };


