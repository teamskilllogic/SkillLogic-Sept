import { Sparkles } from "@/components/home/sparkles"
import { SquareChartGantt } from "lucide-react";
import {
    ContainerAnimated,
    ContainerScroll,
    ContainerStagger,
    ContainerSticky,
    GalleryCol,
    GalleryContainer
} from "@/components/home/animatedGallery"
import { Button } from "@/components/ui/button"
import { VideoIcon } from "lucide-react"
import { useTheme } from "@/providers/ThemeProvider";

import { ScrollVelocity } from "@/components/home/scroll-velocity"


const images = [
    {
        title: "adada",
        thumbnail: "/images/adada.png",
    },
    {
        title: "asconstructs",
        thumbnail: "/images/asconstructs.png",
    },
    {
        title: "sknph",
        thumbnail: "/images/sknph.jpg",
    },
    {
        title: "famzoa",
        thumbnail: "/images/famzoa.jpg",
    },
    {
        title: "ishwar",
        thumbnail: "/images/ishwar.jpg",
    },
    {
        title: "vardan",
        thumbnail: "/images/Vardan.jpg",
    },
    {
        title: "smilecare",
        thumbnail: "/images/smilecare.jpeg",
    },
    {
        title: "brantashop",
        thumbnail: "/images/Brantashop.jpg",
    },
]

const velocity = [3, -3]
const ProjectShowcase = () => {
    const { theme } = useTheme();

    return (
        <div className="w-full relative mt-16 text-center">
            <ContainerStagger className="relative z-[9999] -mb-12 place-self-center px-6 pt-12 text-center">
                {/* Background Half Circle */}
                <div className="relative h-80 w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] mb-[-80px]">
                    <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#60a5fa,transparent_70%)] before:opacity-40" />
                    <div className="absolute -left-1/2 top-1/2 aspect-[1/0.7] z-10 w-[200%] rounded-[100%] border-t border-zinc-900/20 dark:border-white/20 bg-white dark:bg-zinc-900" />
                    <Sparkles
                        density={1200}
                        className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
                        color={theme === "dark" ? "#ffffff" : "#000000"}
                    />
                </div>
                {/* Section Label */}
                <span className="relative z-[100] inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white text-gray-700 text-base font-semibold border border-gray-200 mb-4"
                        style={{ boxShadow: '0px 15px 25px rgba(0,0,0,0.15), 0px 5px 10px rgba(0,0,0,0.05)' }}>
                {/* Icon */}
                <SquareChartGantt className="w-4 h-4 text-black-500" />
                {/* {page} text */}
                    Projects
                </span>
                {/* Heading */}
                <h2 className="text-3xl md:text-6xl lg:text-6xl xl:text-[58px] leading-[38px] md:leading-[60px] lg:leading-[60px] xl:leading-[70px] font-extrabold text-zinc-900 text-center w-[70%] md:w-full lg:w-full xl:w-full mx-auto mb-5 md:mb-[30px] tracking-tight">
                    Showcasing Our Impactful Work
                </h2>
                {/* Description */}
                <p className="text-zinc-600 text-base md:text-base xl:text-lg font-medium tracking-normal leading-6 md:leading-[30px] w-[94%] md:w-[90%] lg:w-[80%] xl:w-[56%] mx-auto">
                    Explore a selection of our completed projects—each crafted to solve real business challenges and deliver measurable results.
                </p>
            </ContainerStagger>

            <div className="w-full mt-16">
                <div className="flex flex-col space-y-5 py-10">
                    {velocity.map((v, index) => (
                        <ScrollVelocity key={index} velocity={v}>
                            {images.map(({ title, thumbnail }) => (
                                <div
                                    key={title}
                                    className="relative h-[12rem] w-[18rem] md:h-[14rem] md:w-[22rem] xl:h-[18rem] xl:w-[28rem]"
                                >
                                    <img
                                        src={thumbnail}
                                        alt={title}
                                        className="h-full w-full object-cover object-center rounded-xl shadow-lg"
                                    />
                                </div>
                            ))}
                        </ScrollVelocity>
                    ))}
                </div>
            </div>
        </div>
    )
};

export { ProjectShowcase };
