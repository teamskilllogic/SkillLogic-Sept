import { StaggerTestimonials } from "@/components/home/staggerTestimonials";
import { Rocket } from "lucide-react";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

const Testimonial = () => {
    return (
        <section className="w-full py-20 flex flex-col items-center mt-16 text-center">
            {/* Section Label */}
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white text-gray-700 text-base font-semibold border border-gray-200 mb-4"
                style={{ boxShadow: '0px 15px 25px rgba(0,0,0,0.15), 0px 5px 10px rgba(0,0,0,0.05)' }}>
                {/* Icon */}
                <Star className="w-4 h-4 text-black-500" />
                {/* {page} text */}
                Reviews
            </span>
            {/* Heading */}
            <h2 className="text-3xl md:text-6xl lg:text-6xl xl:text-[58px] leading-[38px] md:leading-[60px] lg:leading-[60px] xl:leading-[70px] font-extrabold text-zinc-900 text-center w-[70%] md:w-full lg:w-full xl:w-full mx-auto mb-5 md:mb-[30px] tracking-tight">
                Trusted by Founders, Loved by Teams
            </h2>
            {/* Description */}
            <p className="text-zinc-600 text-base md:text-base xl:text-lg font-medium tracking-normal leading-6 md:leading-[30px] w-[94%] md:w-[90%] lg:w-[80%] xl:w-[56%] mx-auto">
                Discover how Skill Logic Technologies has helped startups and businesses accelerate their growth and achieve real results.<br />
                Our clients value our speed, reliability, and partnership—from first idea to final launch.<br />
                Read their stories and see why we’re the go-to team for digital execution and ongoing support.
            </p>

            {/* Testimonials Grid */}
            <div className="flex w-full h-screen justify-center items-center">
                <StaggerTestimonials />
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-4">
                <Link to="/testimonials" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2 bg-black text-white px-3 py-2 rounded-xl font-medium hover:bg-gray-800 transition">
                    <Rocket size={18} />
                    Explore More Testimonials
                </Link>
            </div>


            <h3 className="text-lg font-bold text-blue-500 mt-8">
                <span className="block text-blue-500 font-bold">Real stories, real results.</span>
                <span className="text-gray-500 font-normal">Our clients consistently rate us for reliability, speed, and support. Your success is our greatest review.</span>
            </h3>
        </section>
    );
};

export { Testimonial };
