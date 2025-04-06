"use client";

import { Project } from "@/lib/data";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Link2 } from "lucide-react";
import Image from "next/image";

export function ProjectDialog({
  project,
  isOpen,
  onClose,
}: {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
          {project.period && (
            <p className="text-muted-foreground">{project.period}</p>
          )}
        </DialogHeader>

        {project.image && (
          <div className="relative h-64 md:h-80 mt-4 rounded-lg overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        <div className="space-y-6 py-4">
          <div>
            <h3 className="font-semibold mb-2">Overview</h3>
            <p className="text-muted-foreground">
              {project.longDescription || project.description}
            </p>
          </div>

          {project.features && (
            <div>
              <h3 className="font-semibold mb-2">Key Features</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {project.technologies && (
            <div>
              <h3 className="font-semibold mb-2">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {project.links && (
            <div>
              <h3 className="font-semibold mb-3">Project Links</h3>
              <div className="flex flex-wrap gap-3">
                {project.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm" className="gap-2">
                      {link.type === "github" && <Github className="w-4 h-4" />}
                      {link.type === "demo" && <ExternalLink className="w-4 h-4" />}
                      {link.type === "docs" && <Link2 className="w-4 h-4" />}
                      {link.title}
                    </Button>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}