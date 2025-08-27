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
    return (
        <div className="relative mt-16">
            <ContainerStagger className="relative z-[9999] -mb-12 place-self-center px-6 pt-12 text-center">

                {/* Section Label */}
                <span className="inline-flex items-center px-4 py-1 rounded-full bg-white text-gray-700 text-sm font-medium border border-gray-200" style={{ zIndex: 2, position: 'relative' }}>
                    Projects
                </span>
                {/* Heading */}
                <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-center mt-4">
                    Showcasing Our Impactful Work
                </h2>
                <p className="mt-4 mb-4 text-gray-500 max-w-xl mx-auto">
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
