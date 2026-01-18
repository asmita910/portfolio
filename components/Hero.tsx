
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

const features = {
    llm: {
        title: "LLMs",
        image: "/images/llm_3d_icon_1768752679122.png",
        color: "from-purple-500 to-indigo-500",
    },
    automation: {
        title: "Automation",
        image: "/images/automation_3d_icon_1768752694721.png",
        color: "from-blue-500 to-cyan-500",
    },
    workflow: {
        title: "Intelligent Workflows",
        image: "/images/workflow_3d_icon_1768752713512.png",
        color: "from-emerald-500 to-teal-500",
    },
};


const textRevealDiff = {
    initial: { y: "100%" },
    animate: {
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1] as const // Type assertion to fix easing array
        }
    }
};

const container = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

export default function Hero() {
    const [hoveredFeature, setHoveredFeature] = useState<keyof typeof features | null>(null);

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden px-6 lg:px-8">
            {/* Neural Background */}
            <div className="absolute inset-0 -z-20 opacity-10 pointer-events-none">
                <Image
                    src="/images/neural_background_1768752727939.png"
                    alt="Neural Network Background"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Background Gradients */}
            <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[100px]" />
            <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[100px]" />


            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">


                {/* LEFT COLUMN: Interactive Feature Reveal */}
                <div className="flex flex-col justify-center order-2 lg:order-1 relative min-h-[400px]">
                    <div className="relative z-10 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mb-4"
                        >
                            <span className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-400 opacity-80">
                                Building Intelligent Solutions with —
                            </span>
                        </motion.div>
                        {(Object.entries(features) as [keyof typeof features, typeof features.llm][]).map(([key, feature]) => (
                            <div
                                key={key}
                                className="relative group cursor-pointer w-fit"
                                onMouseEnter={() => setHoveredFeature(key)}
                                onMouseLeave={() => setHoveredFeature(null)}
                            >
                                <motion.h2
                                    className={cn(
                                        "text-4xl md:text-5xl font-bold transition-colors duration-300",
                                        hoveredFeature === key ? "text-transparent bg-clip-text bg-gradient-to-r " + feature.color : "text-slate-500 hover:text-slate-300"
                                    )}
                                >
                                    {feature.title}
                                </motion.h2>

                                <AnimatePresence>
                                    {hoveredFeature === key && (
                                        <motion.div
                                            initial={{ opacity: 0, x: 20, scale: 0.8 }}
                                            animate={{ opacity: 1, x: 50, scale: 1 }}
                                            exit={{ opacity: 0, x: 20, scale: 0.8 }}
                                            transition={{ duration: 0.3 }}
                                            className="absolute left-full top-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 pointer-events-none z-20 hidden md:block"
                                        >
                                            <div className="relative w-full h-full glass-card rounded-2xl p-2">
                                                <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${feature.color}`}></div>
                                                <Image
                                                    src={feature.image}
                                                    alt={feature.title}
                                                    fill
                                                    className="object-contain drop-shadow-2xl"
                                                />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Fallback Image Display (since hover doesn't work well on touch) */}
                    <div className="md:hidden mt-8 h-48 w-full relative block">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={hoveredFeature || "default"}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 flex items-center justify-center p-4"
                            >
                                {hoveredFeature ? (
                                    <Image
                                        src={features[hoveredFeature].image}
                                        alt="Feature"
                                        fill
                                        className="object-contain"
                                    />
                                ) : (
                                    <div className="text-slate-600 text-sm">Tap topics above to explore</div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* RIGHT COLUMN: Profile & Bio */}
                <div className="flex flex-col justify-center order-1 lg:order-2">
                    <motion.div
                        variants={container}
                        initial="initial"
                        animate="animate"
                        className="flex flex-col items-start text-left space-y-8"
                    >


                        {/* Profile Image & Reveal */}
                        <div className="overflow-visible">
                            <motion.div
                                variants={textRevealDiff}
                                className="relative h-44 w-44 mx-auto lg:mx-0"
                            >
                                {/* Subtle Back Glow (Static, Classy) */}
                                <div className="absolute inset-0 rounded-full bg-indigo-500/20 blur-2xl" />

                                <div className="relative h-full w-full overflow-hidden rounded-full border-[3px] border-white/10 bg-slate-800 shadow-2xl z-10">
                                    <Image
                                        src="/images/profile.jpg"
                                        alt="Asmita"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </motion.div>
                        </div>


                        {/* Title */}
                        <div className="space-y-2 overflow-hidden">
                            <motion.h2 variants={textRevealDiff} className="text-2xl font-bold text-white sm:text-3xl">
                                AI Developer & Engineer
                            </motion.h2>
                            <motion.div
                                variants={textRevealDiff}
                                className="flex flex-wrap items-center gap-x-4 text-base md:text-lg font-medium tracking-wide text-slate-400"
                            >
                                <div className="flex items-center gap-2">
                                    <span className="text-slate-400 font-medium">I Build</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-300 to-purple-400 font-semibold antialiased">
                                        AI Applications
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-300 to-purple-400 font-semibold antialiased">
                                        Systems
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-300 to-purple-400 font-semibold antialiased">
                                        Agents
                                    </span>
                                </div>
                            </motion.div>
                        </div>


                        {/* Bio */}
                        <div className="space-y-6 max-w-xl">
                            <motion.p
                                className="text-slate-300 text-lg leading-relaxed flex flex-wrap gap-x-1.5"
                                variants={{
                                    animate: { transition: { staggerChildren: 0.02 } }
                                }}
                            >
                                {"Hi, I'm Asmita, an Applied AI Engineer focused on systems, agents, and automation.".split(" ").map((word, i) => (
                                    <motion.span
                                        key={i}
                                        variants={{
                                            initial: { y: 10, opacity: 0, filter: "blur(4px)" },
                                            animate: { y: 0, opacity: 1, filter: "blur(0px)", transition: { duration: 0.4 } }
                                        }}
                                        className={i < 3 ? "font-semibold text-white" : ""}
                                    >
                                        {word}
                                    </motion.span>
                                ))}
                            </motion.p>

                            <motion.p
                                className="text-slate-300 text-lg leading-relaxed flex flex-wrap gap-x-1.5"
                                variants={{
                                    animate: { transition: { staggerChildren: 0.01, delayChildren: 0.5 } } // Delay second paragraph slightly
                                }}
                            >
                                {"I build AI-powered products by designing clarity-first AI systems—where strong architecture, well-defined inputs and outputs, and product thinking come together to solve real problems.".split(" ").map((word, i) => (
                                    <motion.span
                                        key={i}
                                        variants={{
                                            initial: { y: 10, opacity: 0, filter: "blur(4px)" },
                                            animate: { y: 0, opacity: 1, filter: "blur(0px)", transition: { duration: 0.4 } }
                                        }}
                                    >
                                        {word}
                                    </motion.span>
                                ))}
                            </motion.p>

                        </div>

                        {/* Buttons */}
                        <div className="overflow-hidden pt-4">
                            <motion.div variants={textRevealDiff} className="flex flex-wrap gap-4">
                                <Link
                                    href="#projects"
                                    className="group inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-semibold text-slate-900 transition-all hover:bg-slate-200"
                                >
                                    View Projects
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                                <Link
                                    href="#contact"
                                    className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/50 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-slate-800"
                                >
                                    Contact Me
                                </Link>
                            </motion.div>
                        </div>

                        {/* Socials */}
                        <div className="overflow-hidden">
                            <motion.div variants={textRevealDiff} className="flex items-center gap-6 text-slate-400">
                                <a href="https://github.com/asmita910" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                    <Github className="h-6 w-6" />
                                </a>
                                <a href="https://www.linkedin.com/in/asmita-saran-66485117a/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                    <Linkedin className="h-6 w-6" />
                                </a>
                                <a href="https://www.youtube.com/@Asmitasaran" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                    <Youtube className="h-6 w-6" />
                                </a>
                                <a href="mailto:asmitasaran6@gmail.com" className="hover:text-white transition-colors">
                                    <Mail className="h-6 w-6" />
                                </a>
                            </motion.div>
                        </div>

                    </motion.div>
                </div>
            </div >
        </section >
    );
}
