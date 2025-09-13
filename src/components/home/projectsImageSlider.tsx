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
    "/images/Brantashop.jpg",
]
const IMAGES_3 = [
    "/images/Brantashop.jpg",
    "/images/famzoa.jpg",
    "/images/adada.png",
    "/images/ishwar.jpg",
]


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
const ProjectImageSlider = () => {
    return (
        <div className="relative bg-white ">
            {/* Slider Container 1 :: Desktop Only */}
            <div className="hidden lg:block">
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

            {/* Slider Container 2 :: Mobile & Tablet Only */}
            <div className="w-full mt-16 lg:hidden">
                <div className="flex flex-col space-y-5 py-10">
                    {velocity.map((v, index) => (
                        <ScrollVelocity key={index} velocity={v}>
                            {images.map(({ title, thumbnail }) => (
                                <div
                                    key={title}
                                    className="relative h-[12rem] w-[18rem] md:h-[14rem] md:w-[22rem]"
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

export { ProjectImageSlider };
