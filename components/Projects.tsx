
"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

export default function Projects() {
    return (
        <section id="projects" className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
                    >
                        Featured Projects
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-4 text-lg leading-8 text-slate-400"
                    >
                        A diverse collection of AI agents, mobile apps, and automated workflows.
                    </motion.p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
                >
                    {projects.map((project, index) => {
                        const Icon = project.icon;
                        return (
                            <motion.article
                                key={project.title}
                                variants={item}
                                className="glass-card flex flex-col items-start justify-between rounded-2xl p-6 transition-transform hover:scale-[1.02]"
                            >
                                <div className="relative w-full">
                                    <div className="aspect-[16/9] w-full rounded-xl bg-slate-800 overflow-hidden relative group">
                                        {/* Icon Background (Visible if image fails or transparent) */}
                                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-500/20 to-purple-500/20">
                                            <Icon className="h-12 w-12 text-slate-500" />
                                        </div>

                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.style.opacity = '0';
                                            }}
                                        />

                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
                                    </div>
                                </div>

                                <div className="mt-8 flex items-center gap-x-4 text-xs">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="relative z-10 rounded-full bg-slate-800 px-3 py-1.5 font-medium text-slate-300 hover:bg-slate-700"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-indigo-400">
                                        <a href={project.link || "#"} target="_blank" rel="noopener noreferrer">
                                            <span className="absolute inset-0" />
                                            {project.title}
                                        </a>
                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-slate-400">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="relative mt-8 flex w-full items-center gap-x-4">
                                    {project.link && (
                                        <Link href={project.link} target="_blank" className="z-10 inline-flex items-center text-sm font-medium text-indigo-400 hover:text-indigo-300">
                                            View Details <ExternalLink className="ml-1 h-3 w-3" />
                                        </Link>
                                    )}
                                    {!project.link && (
                                        <span className="text-sm text-slate-600 italic">Internal / Private Project</span>
                                    )}
                                </div>
                            </motion.article>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
