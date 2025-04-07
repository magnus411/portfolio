"use client";

import { ProjectCard } from "@/components/project-card";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { ProjectsGrid } from "@/components/projects-grid";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <ProjectsGrid />
      <Footer />
    </main>
  );
}
