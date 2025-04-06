"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, type Project } from "@/lib/data"; // Import Project type
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

export function ProjectsGrid() {
  // Fix 1: Properly type the state
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("programming");
  const [selectedTags, setSelectedTags] = useState<string[]>([]); // Fix 2: Specify string array type

  const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags || []))
  ).sort();

  const filteredProjects = projects
    .filter((project) => {
      const categoryMatch = project.category === selectedCategory;
      const projectTags = project.tags || []; // Fix 3: Provide fallback empty array
      const tagsMatch =
        selectedTags.length === 0 ||
        selectedTags.every((tag) => projectTags.includes(tag));
      return categoryMatch && tagsMatch;
    })
    .sort((a, b) => {
      if (a.date && b.date) {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return 0;
    });

  const categories = [
    { id: "programming", label: "Programming" },
    { id: "design", label: "Design" },
    { id: "work", label: "Work Experience" },
    { id: "education", label: "Education" }
  ];

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
                  onClick={() => setSelectedCategory(category.id)}
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

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2 rounded-full">
                  <Tags className="w-4 h-4" />
                  <span>Filter Tags</span>
                  {selectedTags.length > 0 && (
                    // Fix 4: Use valid Badge variant
                    <Badge variant="secondary" className="ml-2">
                      {selectedTags.length}
                    </Badge>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {allTags.map((tag) => (
                  <DropdownMenuItem
                    key={tag}
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() =>
                      setSelectedTags((prev) =>
                        prev.includes(tag)
                          ? prev.filter((t) => t !== tag)
                          : [...prev, tag]
                      )
                    }
                  >
                    <span>{tag}</span>
                    {selectedTags.includes(tag) && (
                      // Fix 5: Use valid Badge variant
                      <Badge variant="secondary" className="ml-2">
                        ✓
                      </Badge>
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
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
                  <span className="ml-2 opacity-60 group-hover:opacity-100">×</span>
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

        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

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