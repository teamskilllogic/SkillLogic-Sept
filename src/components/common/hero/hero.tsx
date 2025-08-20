import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Glow } from "@/components/ui/glow"
import { FaGithub } from "react-icons/fa";

interface Hero {
    title: string
    description: string
    className?: string
}

export function Hero({
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
                            "max-w-[550px] animate-appear opacity-0 [animation-delay:150ms]",
                            "text-base sm:text-lg md:text-xl",
                            "text-muted-foreground",
                            "font-medium",
                        )}
                    >
                        {description}
                    </p>
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
