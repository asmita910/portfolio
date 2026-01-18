
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Projects />
      <Contact />

      <footer className="w-full border-t border-white/5 bg-slate-950 py-8 text-center text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} Asmita. All rights reserved.</p>
        <p className="mt-2 text-xs text-slate-600">Built with Next.js, Tailwind CSS, & Framer Motion</p>
      </footer>
    </main>
  );
}
