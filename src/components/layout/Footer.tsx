
import React from 'react';
import { Github, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border mt-auto py-6 bg-background/80 backdrop-blur-md">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-sm text-muted-foreground">
            © 2025 AI Code Arena Benchmark. All rights reserved.
          </span>
          <p className="text-xs text-muted-foreground mt-1">
            Created to measure AI coding performance across different frameworks.
          </p>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="#" className="text-muted-foreground hover:text-neon-cyan transition-colors">
            <Github className="h-5 w-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-neon-cyan transition-colors">
            <Twitter className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
