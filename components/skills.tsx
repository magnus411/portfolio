"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Palette, Database, Globe2 } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Palette className="w-6 h-6" />,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3"],
  },
  {
    title: "Backend Development",
    icon: <Database className="w-6 h-6" />,
    skills: ["Node.js", "Express", "RESTful APIs", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Programming Languages",
    icon: <Code2 className="w-6 h-6" />,
    skills: ["JavaScript", "TypeScript", "Python", "Java", "SQL"],
  },
  {
    title: "Other Skills",
    icon: <Globe2 className="w-6 h-6" />,
    skills: ["Git", "Docker", "AWS", "CI/CD", "Agile Methodologies"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
