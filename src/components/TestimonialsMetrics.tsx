import React, { useEffect, useRef, useState } from "react";

type Metric = { value: number; label: string; prefix?: string; suffix?: string };

const decimalPlaces = (num: number) => {
	const s = String(num);
	const i = s.indexOf(".");
	return i >= 0 ? s.length - i - 1 : 0;
};

const MetricTile = ({ value, label, prefix, suffix, start, delayMs = 0 }: { value: number; label: string; prefix?: string; suffix?: string; start: boolean; delayMs?: number; }) => {
	const [display, setDisplay] = useState<string>(prefix ? prefix + "0" : "0");
	const tileRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (!start) return;
		const places = decimalPlaces(value);
		let raf = 0;
		const duration = 1200;
		const startAt = performance.now() + delayMs;
		const step = (t: number) => {
			if (t < startAt) {
				raf = requestAnimationFrame(step);
				return;
			}
			const progress = Math.min(1, (t - startAt) / duration);
			const current = value * progress;
			const formatted = places > 0 ? current.toFixed(places) : String(Math.round(current));
			setDisplay(`${prefix ?? ""}${formatted}${suffix ?? ""}`);
			if (progress < 1) raf = requestAnimationFrame(step);
		};
		raf = requestAnimationFrame(step);
		return () => cancelAnimationFrame(raf);
	}, [value, prefix, suffix, start, delayMs]);

	return (
		<div
			ref={tileRef}
			className={`group relative rounded-xl sm:rounded-2xl border border-gray-200 p-3 sm:p-5 shadow-lg transition-all duration-300 hover:shadow-xl sm:md:p-6 ${start ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
			style={{ 
				transitionDelay: `${delayMs}ms`, 
				backgroundColor: '#ffffff',
				boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
				backdropFilter: 'blur(10px)',
				WebkitBackdropFilter: 'blur(10px)'
			}}
		>
			{/* Blue hover overlay */}
			<div className="absolute inset-0 bg-gradient-to-br from-blue-100/0 to-blue-100/0 group-hover:from-blue-100/60 group-hover:to-blue-100/60 transition-opacity duration-300 rounded-xl sm:rounded-2xl" />
			<div className="relative text-center">
				<div className="text-lg sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-1 sm:mb-2">{display}</div>
				<div className="text-gray-600 text-xs sm:text-sm">{label}</div>
			</div>
		</div>
	);
};

const TestimonialsMetrics = () => {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;
		el.classList.add("opacity-0", "translate-y-6");
		const io = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) {
					setVisible(true);
					el.classList.remove("opacity-0", "translate-y-6");
					el.classList.add("opacity-100", "translate-y-0");
					io.disconnect();
				}
			});
		}, { threshold: 0.25 });
		io.observe(el);
		return () => io.disconnect();
	}, []);

	const metrics: Metric[] = [
		{ value: 120, suffix: "+", label: "Projects delivered" },
		{ value: 3.2, suffix: "x", label: "Avg. SEO traffic lift" },
		{ value: 72, label: "NPS from clients" },
		{ value: 97, suffix: "%", label: "On-time delivery" },
	] as unknown as Metric[];

	return (
		<section className="relative bg-white">
			{/* Blue blur effects */}
			<div className="pointer-events-none absolute inset-0 overflow-hidden">
				<div className="absolute -top-24 -right-16 h-56 w-56 rounded-full bg-blue-200/50 blur-3xl" />
				<div className="absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-blue-200/50 blur-3xl" />
			</div>
			<div className="w-full max-w-7xl mx-auto px-6 py-16">
				<div ref={containerRef} className="transition-all duration-700 ease-out">
					<div className="relative rounded-3xl border border-gray-200 bg-white p-8 md:p-12">
						<div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
							<div>
								<h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Outcomes that matter: measurable growth and happy users</h3>
								<p className="text-gray-700">From faster page loads to higher conversions, we obsess over real results. This is what our partners consistently experience with SkillLogic.</p>
							</div>
							<div className="grid grid-cols-2 gap-4 md:gap-6">
								{[
									{ value: 68, suffix: "%", label: "Conversion rate" },
									{ value: -42, suffix: "%", label: "Bounce rate" },
									{ value: 2.7, suffix: "x", label: "Organic traffic" },
									{ value: 1, prefix: "< ", suffix: "s", label: "Largest Contentful Paint" },
								].map((m, i) => (
									<MetricTile key={i} value={m.value as number} prefix={(m as any).prefix} suffix={(m as any).suffix} label={(m as any).label} start={visible} delayMs={i * 120} />
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TestimonialsMetrics;
