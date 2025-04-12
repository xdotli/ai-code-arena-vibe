
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/layout/Layout';
import { Code2, Brain, BarChart2, ArrowRight, Zap } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#000510,#001030,#000510)] opacity-80 z-0" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiMwYTEwMmYiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />
        
        <div className="container relative z-10 flex flex-col items-center text-center">
          <div className="inline-block relative mb-6">
            <Code2 className="h-16 w-16 text-neon-cyan animate-float" />
            <span className="absolute top-0 right-0 w-3 h-3 bg-neon-pink rounded-full animate-pulse-slow"></span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink animate-glow">
            AI Code Arena
          </h1>
          
          <p className="text-xl md:text-2xl max-w-3xl mb-8 text-gray-300">
            Benchmark AI coding performance across different frameworks and versions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button asChild size="lg" className="bg-neon-cyan text-primary-foreground hover:bg-neon-cyan/80 font-semibold text-lg">
              <Link to="/arena">
                Enter the Arena
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-neon-pink/50 text-neon-pink hover:text-neon-pink hover:border-neon-pink font-semibold text-lg">
              <Link to="/leaderboard">
                View Leaderboard
                <BarChart2 className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
            <Card className="bg-card/50 backdrop-blur border-neon-cyan/20 overflow-hidden neon-border">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <Zap className="h-12 w-12 mb-4 text-neon-cyan" />
                  <h3 className="text-xl font-semibold mb-2">Framework Benchmarks</h3>
                  <p className="text-muted-foreground">
                    Compare AI performance between different framework versions like Next.js 14 vs 15.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur border-neon-pink/20 overflow-hidden neon-border">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <Brain className="h-12 w-12 mb-4 text-neon-pink" />
                  <h3 className="text-xl font-semibold mb-2">AI Model Showdowns</h3>
                  <p className="text-muted-foreground">
                    See which AI models excel at specific libraries and coding tasks.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur border-neon-purple/20 overflow-hidden neon-border">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <BarChart2 className="h-12 w-12 mb-4 text-neon-purple" />
                  <h3 className="text-xl font-semibold mb-2">Community Voting</h3>
                  <p className="text-muted-foreground">
                    Vote between code samples to help rank real-world usability.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-b from-background/80 to-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Evaluating AI coding abilities through real-world challenges and community votes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "AI Code Generation",
                description: "Different AI models generate code for the same task using specified frameworks",
                color: "text-neon-cyan"
              },
              {
                step: "2",
                title: "Side-by-Side Comparison",
                description: "Users see anonymized code samples solving the same problem",
                color: "text-neon-pink"
              },
              {
                step: "3",
                title: "Community Voting",
                description: "Vote on code quality, functionality, and real-world usability",
                color: "text-neon-purple"
              },
              {
                step: "4",
                title: "Benchmark Results",
                description: "Data collected builds performance metrics for AI models across frameworks",
                color: "text-neon-green"
              }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl font-bold mb-4 ${item.color} border-2 border-current`}>
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button asChild size="lg" className="bg-neon-cyan text-primary-foreground hover:bg-neon-cyan/80">
              <Link to="/arena">Enter the Arena Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
