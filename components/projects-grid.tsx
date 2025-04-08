"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, type Project } from "@/lib/data";
import { ProjectCard } from "./project-card";
import { ProjectDialog } from "./project-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tags } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";

export function ProjectsGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("programming");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags || []))
  ).sort();

  const t = useTranslation();
  const filteredProjects = projects
    .filter((project) => {
      const categoryMatch = project.category === selectedCategory;
      const projectTags = project.tags || [];
      const tagsMatch =
        selectedTags.length === 0 ||
        selectedTags.every((tag) => projectTags.includes(tag));
      return categoryMatch && tagsMatch;
    })
    .sort((a, b) => {
      // Define explicit priority order
      const priorityOrder = [
        "meta-power-quad", // Highest priority
        "live-display-x",
        "sparesti-system",
        "traffic-ai",
        "jotun-monitoring", // Third highest
        // ... add more as needed
      ];

      const aIndex = priorityOrder.indexOf(a.id);
      const bIndex = priorityOrder.indexOf(b.id);

      // If both are in priority list, sort by their position in the list
      if (aIndex !== -1 && bIndex !== -1) {
        return aIndex - bIndex;
      }

      // If only one is in priority list, it comes first
      if (aIndex !== -1) return -1;
      if (bIndex !== -1) return 1;

      // For non-priority projects, sort by date (newest first)
      if (a.date && b.date) {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return 0;
    });

  const categories = [
    { id: "programming", label: t.programming },
    { id: "design", label: t.design },
    { id: "work", label: t.work },
    { id: "education", label: t.education },
  ];

  const handleCategoryChange = (category: string) => {
    setIsAnimating(true);
    setSelectedCategory(category);
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Portfolio</h2>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="inline-flex bg-secondary/50 rounded-full p-1.5 flex-wrap justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {selectedTags.length > 0 && (
            <div className="flex flex-wrap gap-2 justify-center mt-4">
              {selectedTags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="px-3 py-1 cursor-pointer group"
                  onClick={() =>
                    setSelectedTags((prev) => prev.filter((t) => t !== tag))
                  }
                >
                  {tag}
                  <span className="ml-2 opacity-60 group-hover:opacity-100">
                    ×
                  </span>
                </Badge>
              ))}
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-foreground"
                onClick={() => setSelectedTags([])}
              >
                Clear all
              </Button>
            </div>
          )}
        </div>

        <div className="min-h-[500px] relative">
          <motion.div
            key={selectedCategory + selectedTags.join(",")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </motion.div>

          {filteredProjects.length === 0 && !isAnimating && (
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-muted-foreground">
                No projects found matching your filters
              </p>
            </div>
          )}
        </div>

        {selectedProject && (
          <ProjectDialog
            project={selectedProject}
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
}
