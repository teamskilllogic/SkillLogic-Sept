import { StaggerTestimonials } from "@/components/home/staggerTestimonials";

const Testimonial = () => {
    return (

        <section className="w-full py-20 flex flex-col items-center mt-16">
            {/* Section Label */}
            <span className="inline-flex items-center px-4 py-1 rounded-full bg-white text-gray-700 text-sm font-medium border border-gray-200" style={{ zIndex: 2, position: 'relative' }}>
                Reviews
            </span>
            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-center">
                What Our Clients Say
            </h2>
            <p className="text-gray-500 mt-4 text-center max-w-xl">
                Don't just take our word for it. Hear from businesses we've helped succeed.
            </p>
            <div className="flex w-full h-screen justify-center items-center">
                <StaggerTestimonials />
            </div>
        </section>
    );
};

export { Testimonial };
