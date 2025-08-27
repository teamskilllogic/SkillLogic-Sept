import { StaggerTestimonials } from "@/components/home/staggerTestimonials";

const Testimonial = () => {
    return (

        <section className="w-full py-20 flex flex-col items-center mt-16 text-center">
            {/* Section Label */}
            <span className="inline-flex items-center px-4 py-1 rounded-full bg-white text-gray-700 text-base font-semibold border border-gray-200 mb-4">
                Reviews
            </span>
            {/* Heading */}
            <h2 className="text-3xl md:text-6xl lg:text-6xl xl:text-[58px] leading-[38px] md:leading-[60px] lg:leading-[60px] xl:leading-[70px] font-extrabold text-zinc-900 text-center w-[70%] md:w-full lg:w-full xl:w-full mx-auto mb-5 md:mb-[30px] tracking-tight">
            What Our Clients Say
            </h2>
            {/* Description */}
            <p className="text-zinc-600 text-base md:text-base xl:text-lg font-medium tracking-normal leading-6 md:leading-[30px] w-[94%] md:w-[90%] lg:w-[80%] xl:w-[56%] mx-auto">
            Don't just take our word for it. Hear from businesses we've helped succeed.
            </p>
            <div className="flex w-full h-screen justify-center items-center">
                <StaggerTestimonials />
            </div>
        </section>
    );
};

export { Testimonial };
