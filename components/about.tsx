"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import {
  Code2,
  Database,
  Cloud,
  Palette,
  Server,
  Monitor,
  Box,
  Cpu,
  Film,
  Lock,
  GitBranch,
  FileJson,
  Link as Linux,
  Radio,
  Zap,
  MessageSquare,
} from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";

const skillCategories = {
  frontend: {
    icon: <Monitor className="w-5 h-5" />,
    title: "Frontend",
    skills: [
      { name: "React", icon: <Code2 className="w-4 h-4" /> },
      { name: "TypeScript", icon: <Code2 className="w-4 h-4" /> },
      { name: "Next.js", icon: <Code2 className="w-4 h-4" /> },
      { name: "TailwindCSS", icon: <Code2 className="w-4 h-4" /> },
    ],
  },
  backend: {
    icon: <Server className="w-5 h-5" />,
    title: "Backend",
    skills: [
      { name: "Java", icon: <Code2 className="w-4 h-4" /> },
      { name: "Spring Boot", icon: <Box className="w-4 h-4" /> },
      { name: "Node.js", icon: <Server className="w-4 h-4" /> },
      { name: "Python", icon: <Code2 className="w-4 h-4" /> },
      { name: "C", icon: <Code2 className="w-4 h-4" /> },
    ],
  },
  protocols: {
    icon: <MessageSquare className="w-5 h-5" />,
    title: "Protocols & Messaging",
    skills: [
      { name: "WebSockets", icon: <Radio className="w-4 h-4" /> },
      { name: "Server-Sent Events", icon: <Radio className="w-4 h-4" /> },
      { name: "Firebase Realtime DB", icon: <Database className="w-4 h-4" /> },
      { name: "RabbitMQ", icon: <MessageSquare className="w-4 h-4" /> },
      { name: "JWT", icon: <Lock className="w-4 h-4" /> },
      { name: "REST", icon: <FileJson className="w-4 h-4" /> },
      { name: "MQTT", icon: <Radio className="w-4 h-4" /> },
      { name: "OAuth2", icon: <Radio className="w-4 h-4" /> },
    ],
  },
  database: {
    icon: <Database className="w-5 h-5" />,
    title: "Database",
    skills: [
      { name: "PostgreSQL", icon: <Database className="w-4 h-4" /> },
      { name: "MySQL", icon: <Database className="w-4 h-4" /> },
      { name: "Redis", icon: <Database className="w-4 h-4" /> },
      { name: "Prisma ORM", icon: <Database className="w-4 h-4" /> },
    ],
  },
  devops: {
    icon: <GitBranch className="w-5 h-5" />,
    title: "DevOps",
    skills: [
      { name: "Docker", icon: <Box className="w-4 h-4" /> },
      { name: "Docker Compose", icon: <Box className="w-4 h-4" /> },
      { name: "GitHub Actions", icon: <GitBranch className="w-4 h-4" /> },
      { name: "Git", icon: <GitBranch className="w-4 h-4" /> },
      { name: "Prometheus", icon: <Zap className="w-4 h-4" /> },
      { name: "Grafana", icon: <Zap className="w-4 h-4" /> },
    ],
  },
  cloud: {
    icon: <Cloud className="w-5 h-5" />,
    title: "Cloud",
    skills: [
      {
        name: "AWS (EC2, ECS, RDS, ELB, S3)",
        icon: <Cloud className="w-4 h-4" />,
      },
      { name: "Azure", icon: <Cloud className="w-4 h-4" /> },
      { name: "Digital Ocean", icon: <Cloud className="w-4 h-4" /> },
      { name: "Vercel", icon: <Cloud className="w-4 h-4" /> },
    ],
  },
  infrastructure: {
    icon: <Cpu className="w-5 h-5" />,
    title: "Infrastructure",
    skills: [
      { name: "Windows Server", icon: <Server className="w-4 h-4" /> },
      { name: "Active Directory", icon: <Server className="w-4 h-4" /> },
      {
        name: "Windows Deployment Services",
        icon: <Box className="w-4 h-4" />,
      },

      { name: "Ubuntu Server", icon: <Linux className="w-4 h-4" /> },
      { name: "Debian 8", icon: <Linux className="w-4 h-4" /> },
      { name: "Fortigate", icon: <Lock className="w-4 h-4" /> },
    ],
  },
  design: {
    icon: <Palette className="w-5 h-5" />,
    title: "Design",
    skills: [
      { name: "Figma", icon: <Palette className="w-4 h-4" /> },
      { name: "Blender", icon: <Box className="w-4 h-4" /> },
      { name: "Photoshop", icon: <Palette className="w-4 h-4" /> },
      { name: "After Effects", icon: <Film className="w-4 h-4" /> },
      { name: "Premiere Pro", icon: <Film className="w-4 h-4" /> },
      { name: "Lightroom", icon: <Palette className="w-4 h-4" /> },
    ],
  },
};

export function About() {
  const t = useTranslation();
  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>

          <p className="text-lg text-muted-foreground mb-12 text-center">
            {t.aboutme1}
          </p>
          <p className="text-lg text-muted-foreground mb-12 text-center">
            {t.aboutme2}
          </p>
          <p className="text-lg text-muted-foreground mb-12 text-center">
            {t.aboutme3}
          </p>

          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="inline-flex bg-background/50 backdrop-blur-sm rounded-full p-1.5 gap-2 flex-wrap justify-center mb-8 h-auto relative z-10 mx-auto">
              {Object.entries(skillCategories).map(([key, category]) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="rounded-full px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
                >
                  <div className="flex items-center gap-2">
                    {category.icon}
                    <span className="font-medium">{category.title}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(skillCategories).map(([key, category]) => (
              <TabsContent key={key} value={key}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                >
                  {category.skills.map((skill, index) => (
                    <Card
                      key={index}
                      className="p-4 flex items-center gap-3 bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-all duration-300 border-border/50"
                    >
                      <div className="p-2 bg-primary/10 rounded-full">
                        {skill.icon}
                      </div>
                      <span className="font-medium">{skill.name}</span>
                    </Card>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
