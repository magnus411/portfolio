"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code, Palette, ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
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
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
              A passionate Computer Engineering student at NTNU, combining technical expertise with creative innovation.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
                <GraduationCap className="w-5 h-5" />
                <span>NTNU Student</span>
              </div>
              <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
                <Code className="w-5 h-5" />
                <span>Developer</span>
              </div>
              <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
                <Palette className="w-5 h-5" />
                <span>3D Artist</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-8">
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
                href="https://linkedin.com/in/magnus-gjerstad"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-6 h-6" />
                <span className="font-medium">LinkedIn</span>
              </a>
              <a
                href="mailto:magnus.gjerstad@outlook.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-6 h-6" />
                <span className="font-medium">Email</span>
              </a>
            </div>

            <Button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
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