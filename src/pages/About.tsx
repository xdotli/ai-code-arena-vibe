
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { HelpCircle, Code, Database, BarChart2, Users, Star, ExternalLink } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      <div className="container py-12">
        <div className="mb-10 text-center">
          <div className="inline-block mb-3">
            <Code className="h-12 w-12 text-neon-cyan" />
          </div>
          <h1 className="text-3xl font-bold mb-4">About AI Code Arena</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Understanding how AI models perform with different frameworks and versions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Our Mission</h2>
            <p className="text-muted-foreground">
              AI Code Arena was created to measure how different AI coding assistants perform 
              when working with various frameworks and libraries - especially when dealing with 
              newer versus older versions.
            </p>
            <p className="text-muted-foreground">
              As AI models have different training data cutoffs, we wanted to provide a 
              comprehensive benchmark that helps developers understand which AI tools 
              work best for their specific tech stack.
            </p>
          </div>
          
          <Card className="border-neon-cyan/20 bg-card/60 backdrop-blur-sm overflow-hidden neon-border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">What We Measure</h3>
              <ul className="space-y-4">
                {[
                  {
                    icon: <Code className="h-5 w-5 text-neon-cyan" />,
                    title: "Framework Mastery",
                    description: "How well AI models understand specific frameworks and their versions"
                  },
                  {
                    icon: <BarChart2 className="h-5 w-5 text-neon-pink" />,
                    title: "Version Adaptation",
                    description: "Ability to generate code for both newer and older framework versions"
                  },
                  {
                    icon: <Star className="h-5 w-5 text-neon-purple" />,
                    title: "Real-world Usability",
                    description: "Practical evaluation of generated code by the developer community"
                  }
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <div className="mt-0.5">{item.icon}</div>
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <Separator className="my-10 bg-muted/30" />
        
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Code className="h-10 w-10 text-neon-cyan" />,
                title: "AI Code Generation",
                description: "We challenge multiple AI models to solve identical coding tasks using specific frameworks and versions."
              },
              {
                icon: <Users className="h-10 w-10 text-neon-pink" />,
                title: "Community Voting",
                description: "Developers vote on anonymized code samples, evaluating quality, functionality, and adherence to best practices."
              },
              {
                icon: <Database className="h-10 w-10 text-neon-purple" />,
                title: "Data Analysis",
                description: "Results are compiled into our benchmark database to identify trends and performance insights."
              }
            ].map((step, i) => (
              <Card key={i} className="border-border/30 bg-card/40 backdrop-blur-sm">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">Frameworks & Libraries</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "React", versions: ["16.x", "17.x", "18.x"] },
              { name: "Next.js", versions: ["12.x", "13.x", "14.x"] },
              { name: "Three.js", versions: ["r79", "r128", "r150"] },
              { name: "Vue", versions: ["2.x", "3.x"] },
              { name: "Tailwind CSS", versions: ["2.x", "3.x"] },
              { name: "Angular", versions: ["13.x", "14.x", "15.x"] },
              { name: "Express", versions: ["4.x", "5.x"] },
              { name: "Svelte", versions: ["3.x", "4.x"] }
            ].map((framework, i) => (
              <Card key={i} className="border-border/30 bg-card/40 backdrop-blur-sm">
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{framework.name}</h3>
                  <div className="flex flex-wrap gap-1">
                    {framework.versions.map((version, idx) => (
                      <span key={idx} className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                        {version}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-6 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "Why compare AI performance on different framework versions?",
                answer: "AI models have different training cutoff dates, meaning they may excel with frameworks they were trained on, but struggle with newer versions released after their training cutoff."
              },
              {
                question: "How are the coding tasks designed?",
                answer: "Tasks range from simple component creation to complex feature implementation, with varying levels of difficulty to test different aspects of AI coding capabilities."
              },
              {
                question: "Are the AI models aware of which framework version they're using?",
                answer: "Yes, each AI model is explicitly prompted to use a specific framework version when generating code."
              },
              {
                question: "How can I contribute to the benchmark?",
                answer: "You can participate by voting on code samples in the Arena, or by submitting task suggestions for future benchmarks."
              }
            ].map((faq, i) => (
              <Card key={i} className="border-border/30 bg-card/40 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex gap-3 items-start">
                    <HelpCircle className="h-5 w-5 text-neon-cyan shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            AI Code Arena is a community research project focused on improving our understanding of AI coding capabilities.
          </p>
          <div className="flex justify-center gap-4 text-sm">
            <a href="#" className="text-neon-cyan hover:underline flex items-center">
              <ExternalLink className="h-3 w-3 mr-1" /> GitHub
            </a>
            <a href="#" className="text-neon-cyan hover:underline flex items-center">
              <ExternalLink className="h-3 w-3 mr-1" /> Twitter
            </a>
            <a href="#" className="text-neon-cyan hover:underline flex items-center">
              <ExternalLink className="h-3 w-3 mr-1" /> Contact
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
