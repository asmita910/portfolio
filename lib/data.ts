
import { Brain, Smartphone, Workflow, Layers, LucideIcon } from 'lucide-react';

export interface Project {
    title: string;
    description: string;
    tags: string[];
    icon: LucideIcon;
    image: string;
    link?: string;
}

export const projects: Project[] = [
    {
        title: "Emotion Recognition",
        description: "An Android application that uses computer vision to detect and classify human emotions in real-time.",
        tags: ["Java", "Kotlin", "Android SDK", "TensorFlow Lite"],
        icon: Smartphone,
        image: "/images/emotion-recognition.jpg", // Placeholder
    },
    {
        title: "Memorix",
        description: "A Python-based AI agent capable of answering questions and processing documents using RAG.",
        tags: ["Python", "LangChain", "OpenAI", "RAG"],
        icon: Brain,
        image: "/images/pyq-agent.jpg", // Placeholder
    },
    {
        title: "Opal Learning App",
        description: "A personal learning application utilizing spaced repetition to enhance memory retention. Built with Opal 3.",
        tags: ["Opal 3", "Spaced Repetition", "Education Tech"],
        link: "https://opal.google/?flow=drive:/1hmDx5sfKtMe9QErCds77ZjBqgBQ0Rd-0&shared&mode=app",
        icon: Layers,
        image: "/images/opal-learning.png",
    },
    {
        title: "AI Workflows",
        description: "Complex automation workflows using n8n and ElevenLabs for voice synthesis and task automation.",
        tags: ["n8n", "ElevenLabs", "Automation", "AI Agents"],
        icon: Workflow,
        image: "/images/workflow.jpg", // Placeholder
    }
];
