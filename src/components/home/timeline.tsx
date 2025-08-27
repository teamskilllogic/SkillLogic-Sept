import React from "react";

type Step = {
  time: string;
  text: string;
};

const steps: Step[] = [
  { time: "80h+", text: "Designing all web app pages & the landing" },
  { time: "240h+", text: "Coding from scratch all pages in NextJS" },
  { time: "6h+", text: "Implementing & handling all Stripe webhooks" },
  { time: "2h+", text: "Setting up all essential SEO details & tags" },
  { time: "10h+", text: "Setting up the whole Supabase structure & tables" },
  { time: "Infinite hours", text: "On completely useless things" },
];

const Timeline: React.FC = () => {
  return (
    <div className="relative w-full flex justify-center  body-bg">
      {/* Red dashed connector (SVG curve) */}
      <svg
        className="absolute top-1/2 -translate-y-1/2 w-full h-32 pointer-events-none"
        fill="none"
        viewBox="0 0 1000 200"
        preserveAspectRatio="none"
      >
        <path
          d="M 0 100 Q 250 0, 500 100 T 1000 100"
          stroke="url(#dashedStroke)"
          strokeWidth="2"
          fill="transparent"
          strokeDasharray="8 8"
        />
        <defs>
          <linearGradient id="dashedStroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ef4444" /> {/* Tailwind red-500 */}
            <stop offset="100%" stopColor="#ef4444" />
          </linearGradient>
        </defs>
      </svg>

      {/* Steps */}
      <div className="flex flex-wrap justify-center gap-8 relative z-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl border border-gray-200 px-6 py-4 w-56 text-center"
          >
            <p className="text-blue-500 font-semibold">{step.time}</p>
            <p className="text-black mt-1">{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  );

    time: string;
    text: string;
};

const steps: Step[] = [
    { time: "80h+", text: "Designing all web app pages & the landing" },
    { time: "240h+", text: "Coding from scratch all pages in NextJS" },
    { time: "6h+", text: "Implementing & handling all Stripe webhooks" },
    { time: "2h+", text: "Setting up all essential SEO details & tags" },
    { time: "10h+", text: "Setting up the whole Supabase structure & tables" },
    { time: "Infinite hours", text: "On completely useless things" },
];

const Timeline: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen relative overflow-hidden mt-16">
            {/* Title */}
            <span className="inline-flex items-center px-4 py-1 rounded-full bg-white text-gray-700 text-sm font-medium border border-gray-200" style={{ zIndex: 2, position: 'relative' }}>
                Our Team
            </span>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-center mt-4">
                Meet Our Talented Team
            </h2>
            <p className="text-gray-500 mt-4 text-center max-w-xl">
                Empowering innovation through collaboration—our diverse team brings expertise, creativity, and passion to every project we build together.
            </p>


            <div className="relative w-full flex justify-center body-bg mt-16">
                {/* Blue dashed connector (SVG curve) */}
                <svg
                    className="absolute top-1/2 -translate-y-1/2 w-full h-32 pointer-events-none"
                    fill="none"
                    viewBox="0 0 1000 200"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M 0 100 Q 250 0, 500 100 T 1000 100"
                        stroke="url(#dashedStroke)"
                        strokeWidth="2"
                        fill="transparent"
                        strokeDasharray="8 8"
                    />
                    <defs>
                        <linearGradient id="dashedStroke" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#3b82f6" /> {/* Tailwind blue-500 */}
                            <stop offset="100%" stopColor="#3b82f6" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* Steps */}
                <div className="flex flex-wrap justify-center gap-8 relative z-10">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-xl border border-gray-200 px-6 py-4 w-56 text-center"
                        >
                            <p className="text-blue-500 font-semibold">{step.time}</p>
                            <p className="text-black mt-1">{step.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export { Timeline };
