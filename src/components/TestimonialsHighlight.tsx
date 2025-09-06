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
			className={`group relative overflow-hidden rounded-2xl border border-gray-200 bg-white/70 p-5 shadow-sm transition hover:shadow md:p-6 ${start ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
			style={{ transitionDelay: `${delayMs}ms`, transform: "perspective(900px) rotateX(0deg) rotateY(0deg)" }}
			onMouseMove={(e) => {
				const card = e.currentTarget as HTMLDivElement;
				const rect = card.getBoundingClientRect();
				const x = e.clientX - rect.left;
				const y = e.clientY - rect.top;
				const rotateY = ((x / rect.width) - 0.5) * 6;
				const rotateX = -((y / rect.height) - 0.5) * 6;
				card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
			}}
			onMouseLeave={(e) => {
				const card = e.currentTarget as HTMLDivElement;
				card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
			}}
		>
			<div className="absolute inset-0 bg-gradient-to-br from-emerald-100/0 to-blue-100/0 group-hover:from-emerald-100/60 group-hover:to-blue-100/60 transition-opacity" />
			<div className="relative">
				<div className="text-2xl md:text-3xl font-extrabold text-gray-900">{display}</div>
				<div className="text-xs md:text-sm text-gray-600 mt-1">{label}</div>
			</div>
		</div>
	);
};

const TestimonialsHighlight = () => {
	const sectionRef = useRef<HTMLElement | null>(null);
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

	useEffect(() => {
		const section = sectionRef.current;
		if (!section) return;
		const onScroll = () => {
			const rect = section.getBoundingClientRect();
			const center = rect.top + rect.height / 2;
			const delta = (window.innerHeight / 2) - center;
			section.style.setProperty("--parallax", `${delta * 0.05}px`);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const metrics: Metric[] = [
		{ value: 68, suffix: "%", label: "Conversion rate" },
		{ value: -42, suffix: "%", label: "Bounce rate" },
		{ value: 2.7, suffix: "x", label: "Organic traffic" },
		{ value: 1, prefix: "< ", suffix: "s", label: "Largest Contentful Paint" },
	] as unknown as Metric[];

	return (
		<section ref={sectionRef} className="relative bg-transparent">
			<div className="pointer-events-none absolute inset-0 overflow-hidden">
				<div className="absolute -top-24 -right-16 h-56 w-56 rounded-full bg-emerald-200/50 blur-3xl" style={{ transform: "translateY(var(--parallax, 0px))" }} />
				<div className="absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-blue-200/50 blur-3xl" style={{ transform: "translateY(calc(var(--parallax, 0px) * -1))" }} />
			</div>
			<div className="w-full max-w-7xl mx-auto px-6 py-16">
				<div ref={containerRef} className="transition-all duration-700 ease-out">
					<div className="relative rounded-3xl border border-gray-200/60 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/40 p-8 md:p-12 overflow-hidden">
						<div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
							<div>
								{/* <p className="text-sm font-semibold tracking-wider text-emerald-700 uppercase mb-3">Main highlight</p> */}
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

export default TestimonialsHighlight;


