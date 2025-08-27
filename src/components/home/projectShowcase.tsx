import { Sparkles } from "@/components/home/sparkles"
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

const IMAGES_1 = [
    "/images/adada.png",
    "/images/asconstructs.png",
    "/images/sknph.jpg",
    "/images/famzoa.jpg",
]
const IMAGES_2 = [
    "/images/Vardan.jpg",
    "/images/ishwar.jpg",
    "/images/smilecare.jpeg",
    "/images/famzoa.jpg",
]
const IMAGES_3 = [
    "/images/famzoa.jpg",
    "/images/Brantashop.jpg",
    "/images/Vardan.jpg",
    "/images/ishwar.jpg",
]

const ProjectShowcase = () => {
    const { theme } = useTheme();

    return (
        <div className="relative mt-16">
            <ContainerStagger className="relative z-[9999] -mb-12 place-self-center px-6 pt-12 text-center">

                {/* Background Half Circle */}
                <div className="relative h-80 w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] mb-[-40px]">
                    <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#8350e8,transparent_70%)] before:opacity-40" />
                    <div className="absolute -left-1/2 top-1/2 aspect-[1/0.7] z-10 w-[200%] rounded-[100%] border-t border-zinc-900/20 dark:border-white/20 bg-white dark:bg-zinc-900" />
                    <Sparkles
                        density={1200}
                        className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
                        color={theme === "dark" ? "#ffffff" : "#000000"}
                    />
                </div>


                {/* Section Label */}
                <span className="inline-flex items-center px-4 py-1 rounded-full bg-white text-gray-700 text-base font-semibold border border-gray-200 mt-[-10px]">
                    Projects
                </span>
                {/* Heading */}
                <h2 className="text-3xl md:text-6xl lg:text-6xl xl:text-[58px] leading-[38px] md:leading-[60px] lg:leading-[60px] xl:leading-[70px] font-extrabold text-zinc-900 text-center w-[70%] md:w-full lg:w-full xl:w-full mx-auto mb-5 md:mb-[30px] tracking-tight">
                    Showcasing Our Impactful Work
                </h2>
                <p className="text-zinc-600 text-base md:text-base xl:text-lg font-medium tracking-normal leading-6 md:leading-[30px] w-[94%] md:w-[90%] lg:w-[80%] xl:w-[56%] mx-auto">
                    Explore a selection of our completed projects—each crafted to solve real business challenges and deliver measurable results.
                </p>
            </ContainerStagger>
            <div className="pointer-events-none absolute z-10 h-[70vh] w-full "
                style={{
                    background: "linear-gradient(to right, gray, rebeccapurple, blue)",
                    filter: "blur(84px)",
                    mixBlendMode: "screen",
                }}
            />
            <ContainerScroll className="relative h-[350vh]">
                <ContainerSticky className="h-svh">
                    <GalleryContainer className="">
                        <GalleryCol yRange={["-10%", "2%"]} className="-mt-2">
                            {IMAGES_1.map((imageUrl, index) => (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                    key={index}
                                    className="aspect-video block h-auto max-h-full w-full  rounded-md  object-cover shadow"
                                    src={imageUrl}
                                    alt="gallery item"
                                />
                            ))}
                        </GalleryCol>
                        <GalleryCol className="mt-[-50%]" yRange={["15%", "5%"]}>
                            {IMAGES_2.map((imageUrl, index) => (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                    key={index}
                                    className="aspect-video block h-auto max-h-full w-full  rounded-md  object-cover shadow"
                                    src={imageUrl}
                                    alt="gallery item"
                                />
                            ))}
                        </GalleryCol>
                        <GalleryCol yRange={["-10%", "2%"]} className="-mt-2">
                            {IMAGES_3.map((imageUrl, index) => (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                    key={index}
                                    className="aspect-video block h-auto max-h-full w-full  rounded-md  object-cover shadow"
                                    src={imageUrl}
                                    alt="gallery item"
                                />
                            ))}
                        </GalleryCol>
                    </GalleryContainer>
                </ContainerSticky>
            </ContainerScroll>
        </div>
    )
};

export { ProjectShowcase };
