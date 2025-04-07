"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Code,
  Palette,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50 z-10" />

      <div className="container relative z-20 mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Magnus Gjerstad
            </h1>
            <p className="text-xl md:text-xl text-muted-foreground mb-8 max-w-2xl">
              Passionate NTNU Computer Engineering student specializing in
              full-stack development and system design & architecture, with
              experience across multiple frameworks and problem domains.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
                <GraduationCap className="w-5 h-5" />
                <span>NTNU Student</span>
              </div>
              <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
                <Code className="w-5 h-5" />
                <span>Full Stack Developer</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-3">
              <a
                href="https://github.com/magnus411"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-6 h-6" />
                <span className="font-medium">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/magnus-gjerstad-85b184177/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-6 h-6" />
                <span className="font-medium">LinkedIn</span>
              </a>
              <a
                href="mailto:magnusgjerstad00@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-6 h-6" />
                <span className="font-medium">Email</span>
              </a>
            </div>
            <a href="tel:+4748218789">
              <h1 className="text-md text-muted-foreground font-medium mb-4 hover:text-primary transition-colors">
                +47 482 18 789
              </h1>
            </a>
            <Button
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group"
            >
              Learn More
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl transform rotate-6"></div>
              <div className="absolute inset-0 bg-primary/20 rounded-3xl transform -rotate-6"></div>
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/Gjerstad.webp"
                  alt="Magnus Gjerstad"
                  width={500}
                  height={500}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
