"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary/50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <p className="text-muted-foreground mb-8">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat!
          </p>
          
          <div className="flex justify-center gap-8">
            <a
              href="https://github.com/magnus411"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/magnus-gjerstad"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <a
              href="mailto:magnus.gjerstad@outlook.com"
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-6 h-6" />
              <span className="text-sm font-medium">Email</span>
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Magnus Gjerstad. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}