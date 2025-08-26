import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Glow } from "@/components/ui/glow"
import { FaGithub } from "react-icons/fa";
import { Rocket, Phone } from "lucide-react"; // icons

interface Hero {
    page: string
    title: string
    description: string
    className?: string
}

export function Hero({
    page,
    title,
    description,
    className,
}: Hero) {
    return (
        <section
            className={cn(
                "relative bg-background text-foreground",
                "py-12 px-4 md:py-24 lg:py-32",
                "overflow-hidden",
                className,
            )}
        >
            <div className="relative mx-auto max-w-[1280px] flex flex-col gap-12 lg:gap-24">
                <div className="relative z-10 flex flex-col items-center gap-6 pt-8 md:pt-16 text-center lg:gap-12">

                    <span className="inline-flex items-center px-4 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium border border-gray-200">
                        {page}
                    </span>
                    {/* Heading */}
                    <h1
                        className={cn(
                            "inline-block animate-appear",
                            "bg-gradient-to-b from-foreground via-foreground/90 to-muted-foreground",
                            "bg-clip-text text-transparent",
                            "text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl",
                            "leading-[1.1] sm:leading-[1.1]",
                            "drop-shadow-sm dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]",
                        )}
                    >
                        {title}
                    </h1>

                    {/* Description */}
                    <p
                        className={cn(
                            "max-w-[700px] animate-appear opacity-0 [animation-delay:150ms]",
                            "text-base sm:text-lg md:text-xl",
                            "text-muted-foreground",
                            "font-medium",
                        )}
                    >
                        {description}
                    </p>


                    {/* Buttons */}
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-lg font-medium hover:bg-gray-800 transition">
                        <Rocket size={18} />
                        Get Started
                        </button>

                        <button className="flex items-center gap-2 border border-gray-300 bg-white px-5 py-3 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition">
                        <Phone size={18} />
                        Book a Call
                        </button>
                    </div>
                </div>
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <Glow
                    variant="above"
                    className="animate-appear-zoom opacity-0 [animation-delay:1000ms]"
                />
            </div>
        </section>
    )
}
