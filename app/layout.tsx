
import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Import Inter
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] }); // Configure Inter

export const metadata: Metadata = {
  title: "Asmita | AI Builder & Engineer",
  description: "Professional portfolio of Asmita, an AI builder specializing in agents, workflows, and intelligent applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={cn(inter.className, "bg-background text-foreground antialiased min-h-screen selection:bg-primary/20 selection:text-primary")}>
        <div className="fixed inset-0 -z-10 h-full w-full bg-slate-950 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-indigo-500 opacity-20 blur-[100px]"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
