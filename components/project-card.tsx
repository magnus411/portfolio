"use client";

import { motion } from "framer-motion";
import { Project } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ChevronRight, Code2, Palette, FileCode, Briefcase, GraduationCap } from "lucide-react";

export function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  const CategoryIcon = {
    programming: Code2,
    "3d": Palette,
    design: FileCode,
    work: Briefcase,
    education: GraduationCap
  }[project.category];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="group"
    >
      <Card className="relative overflow-hidden bg-card hover:shadow-xl transition-all duration-300 border border-border/50">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <CategoryIcon className="w-5 h-5 text-primary" />
            </div>
            <span className="text-sm font-medium text-muted-foreground capitalize">
              {project.category}
            </span>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-2 shrink-0">
                  {project.links?.filter(link => link.type === "github").slice(0, 2).map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  ))}
                  {project.links?.filter(link => link.type === "demo").map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {project.period && (
                <div className="text-sm text-muted-foreground mt-1">
                  {project.period}
                </div>
              )}
            </div>

            <p className="text-muted-foreground line-clamp-2">
              {project.description}
            </p>

            <div className="space-y-4">
              {project.tags && project.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="bg-secondary/50 hover:bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge 
                      variant="secondary" 
                      className="bg-secondary/50 hover:bg-secondary text-secondary-foreground"
                    >
                      +{project.tags.length - 3}
                    </Badge>
                  )}
                </div>
              )}

              <Button
                variant="ghost"
                size="sm"
                className="group/btn w-full justify-between hover:bg-primary hover:text-primary-foreground"
                onClick={onClick}
              >
                View Details
                <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}