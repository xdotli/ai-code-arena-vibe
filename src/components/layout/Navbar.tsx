
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code2, BarChart2, Award } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative">
            <Code2 className="h-7 w-7 text-neon-cyan" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-neon-pink rounded-full animate-pulse-slow"></span>
          </div>
          <span className="font-bold text-xl tracking-tight animate-glow text-neon-cyan">
            AI Code Arena
          </span>
        </Link>
        
        <Tabs defaultValue="arena" className="hidden md:flex">
          <TabsList className="bg-muted/50">
            <TabsTrigger value="home" asChild>
              <Link to="/" className="flex items-center gap-1">Home</Link>
            </TabsTrigger>
            <TabsTrigger value="arena" asChild>
              <Link to="/arena" className="flex items-center gap-1">
                <Code2 className="h-4 w-4" />Arena
              </Link>
            </TabsTrigger>
            <TabsTrigger value="leaderboard" asChild>
              <Link to="/leaderboard" className="flex items-center gap-1">
                <BarChart2 className="h-4 w-4" />Leaderboard
              </Link>
            </TabsTrigger>
            <TabsTrigger value="about" asChild>
              <Link to="/about" className="flex items-center gap-1">About</Link>
            </TabsTrigger>
          </TabsList>
        </Tabs>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden sm:flex border-neon-cyan/30 text-neon-cyan hover:text-neon-cyan hover:border-neon-cyan transition-colors">
            <Award className="h-4 w-4 mr-2" />
            Submit Code
          </Button>
          <Button className="bg-neon-cyan text-primary-foreground hover:bg-neon-cyan/80">
            Vote Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
