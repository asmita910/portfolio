
"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageSquare, Send, Youtube } from "lucide-react";
import { useFormStatus } from "react-dom";
import { submitContactForm } from "@/app/actions";
import { useState } from "react";

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className="flex w-full items-center justify-center rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
            {pending ? "Sending..." : "Send Message"} <Send className="ml-2 h-4 w-4" />
        </button>
    );
}

export default function Contact() {
    const [formState, setFormState] = useState<{ success?: boolean; error?: string } | null>(null);

    async function clientAction(formData: FormData) {
        const result = await submitContactForm(formData);
        if (result.success) {
            setFormState({ success: true });
            // Optional: Scroll to socials/email section could be handled here or just visualized by the UI change
        } else {
            setFormState({ error: result.error });
        }
    }

    return (
        <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-1/2 left-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-[100px]" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
                    >
                        Let's Collaborate
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-4 text-lg leading-8 text-slate-400"
                    >
                        Have an idea for an AI agent or a new app? I'm always open to discussing new projects and opportunities.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mx-auto mt-16 max-w-xl sm:mt-20"
                >
                    <div className="glass-card overflow-hidden rounded-2xl p-8 sm:p-10">
                        {formState?.success ? (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-10"
                            >
                                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10">
                                    <Send className="h-6 w-6 text-green-400" />
                                </div>
                                <h3 className="text-xl font-semibold text-white">Message Sent!</h3>
                                <p className="mt-2 text-slate-400">Thanks for reaching out. I'll get back to you soon.</p>
                                <button
                                    onClick={() => setFormState(null)}
                                    className="mt-6 text-sm text-indigo-400 hover:text-indigo-300"
                                >
                                    Send another message
                                </button>
                            </motion.div>
                        ) : (
                            <form action={clientAction} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold leading-6 text-white">Name</label>
                                    <div className="mt-2.5">
                                        <input type="text" name="name" id="name" autoComplete="name" className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" required />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">Email</label>
                                    <div className="mt-2.5">
                                        <input type="email" name="email" id="email" autoComplete="email" className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" required />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">Message</label>
                                    <div className="mt-2.5">
                                        <textarea name="message" id="message" rows={4} className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" required />
                                    </div>
                                </div>
                                <SubmitButton />
                                {formState?.error && (
                                    <p className="text-center text-sm text-red-500">{formState.error}</p>
                                )}
                            </form>
                        )}

                        <div id="socials" className="mt-8 flex justify-center gap-6 border-t border-white/10 pt-8 scroll-mt-20">
                            <div className="flex flex-col items-center">
                                <div className="rounded-full bg-white/5 p-3 ring-1 ring-white/10">
                                    <Mail className="h-6 w-6 text-indigo-400" />
                                </div>
                                <a href="mailto:asmitasaran6@gmail.com" className="mt-2 text-sm text-slate-400 hover:text-white">Email Me</a>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="rounded-full bg-white/5 p-3 ring-1 ring-white/10">
                                    <MessageSquare className="h-6 w-6 text-indigo-400" />
                                </div>
                                <div className="mt-2 flex gap-3">
                                    <a href="https://www.linkedin.com/in/asmita-saran-66485117a/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                                        <Linkedin className="h-5 w-5" />
                                    </a>
                                    <a href="https://github.com/asmita910" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                                        <Github className="h-5 w-5" />
                                    </a>
                                    <a href="https://www.youtube.com/@Asmitasaran" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                                        <Youtube className="h-5 w-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
