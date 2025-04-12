
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { BarChart, Trophy, Search, Filter, Award, Brain, ArrowUp, ArrowDown, Equals } from 'lucide-react';
import { 
  BarChart as RechartBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';

// Sample data for the leaderboard
const leaderboardData = [
  { id: 1, aiModel: "GPT-4o-mini", framework: "React", version: "18.x", winRate: 72, totalMatches: 124, trend: "up" },
  { id: 2, aiModel: "Claude 3 Sonnet", framework: "Next.js", version: "14.x", winRate: 68, totalMatches: 97, trend: "up" },
  { id: 3, aiModel: "GPT-4.5 Preview", framework: "Three.js", version: "r150", winRate: 85, totalMatches: 62, trend: "up" },
  { id: 4, aiModel: "Claude 3 Opus", framework: "Vue", version: "3.x", winRate: 63, totalMatches: 105, trend: "down" },
  { id: 5, aiModel: "Anthropic Claude", framework: "Tailwind", version: "3.x", winRate: 58, totalMatches: 89, trend: "neutral" },
  { id: 6, aiModel: "Gemini 2.0", framework: "Angular", version: "15.x", winRate: 61, totalMatches: 72, trend: "up" },
  { id: 7, aiModel: "GPT-4o", framework: "Svelte", version: "4.x", winRate: 77, totalMatches: 54, trend: "up" },
  { id: 8, aiModel: "Anthropic Claude 3", framework: "React", version: "16.x", winRate: 52, totalMatches: 65, trend: "down" },
  { id: 9, aiModel: "Gemini 2.0 Pro", framework: "Express", version: "4.x", winRate: 56, totalMatches: 48, trend: "neutral" },
  { id: 10, aiModel: "Claude 2", framework: "Next.js", version: "12.x", winRate: 44, totalMatches: 58, trend: "down" },
];

// Data for charts
const frameworkData = [
  { name: 'React 18', newerVersion: 72, olderVersion: 59 },
  { name: 'Next.js 14', newerVersion: 68, olderVersion: 44 },
  { name: 'Three.js r150', newerVersion: 85, olderVersion: 62 },
  { name: 'Vue 3', newerVersion: 63, olderVersion: 48 },
  { name: 'Tailwind 3', newerVersion: 58, olderVersion: 52 },
];

const modelData = [
  { name: 'GPT-4o', value: 79, color: '#00FFFF' },
  { name: 'Claude 3', value: 68, color: '#9D00FF' },
  { name: 'GPT-4o-mini', value: 72, color: '#00FF9D' },
  { name: 'Claude Sonnet', value: 64, color: '#FF00FF' },
  { name: 'Gemini 2.0', value: 61, color: '#0066FF' },
];

const Leaderboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFramework, setSelectedFramework] = useState('all');
  
  // Filter the leaderboard data based on search term and selected framework
  const filteredData = leaderboardData.filter(item => {
    const matchesSearch = 
      item.aiModel.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.framework.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFramework = 
      selectedFramework === 'all' || 
      item.framework.toLowerCase() === selectedFramework.toLowerCase();
    
    return matchesSearch && matchesFramework;
  });
  
  const getTrendIcon = (trend: string) => {
    switch(trend) {
      case 'up':
        return <ArrowUp className="h-4 w-4 text-green-500" />;
      case 'down':
        return <ArrowDown className="h-4 w-4 text-red-500" />;
      default:
        return <Equals className="h-4 w-4 text-yellow-500" />;
    }
  };
  
  return (
    <Layout>
      <div className="container py-12">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold mb-4">AI Coding Benchmark Leaderboard</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See which AI models perform best with different frameworks and versions
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          <Card className="bg-card/60 backdrop-blur-sm border-neon-cyan/30 lg:col-span-2">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-xl">
                <Trophy className="h-5 w-5 text-neon-cyan" />
                <span>Framework Performance Comparison</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartBarChart
                    data={frameworkData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="name" tick={{ fill: '#ccc' }} />
                    <YAxis tick={{ fill: '#ccc' }} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(23, 23, 33, 0.9)', 
                        borderColor: '#555',
                        color: '#fff' 
                      }} 
                    />
                    <Bar dataKey="newerVersion" name="Newer Version" fill="#00FFFF" />
                    <Bar dataKey="olderVersion" name="Older Version" fill="#FF00FF" />
                  </RechartBarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-card/60 backdrop-blur-sm border-neon-pink/30">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-xl">
                <Brain className="h-5 w-5 text-neon-pink" />
                <span>Top AI Models</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartBarChart
                    data={modelData}
                    layout="vertical"
                    margin={{ top: 20, right: 30, left: 60, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis type="number" tick={{ fill: '#ccc' }} />
                    <YAxis 
                      dataKey="name" 
                      type="category" 
                      tick={{ fill: '#ccc' }} 
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(23, 23, 33, 0.9)', 
                        borderColor: '#555',
                        color: '#fff' 
                      }} 
                    />
                    <Bar dataKey="value" name="Win Rate (%)">
                      {modelData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </RechartBarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card className="border-neon-purple/30 bg-card/60 backdrop-blur-sm mb-8">
          <CardHeader className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-2">
            <CardTitle className="flex items-center gap-2 mb-4 sm:mb-0">
              <BarChart className="h-5 w-5 text-neon-purple" />
              <span>Performance Leaderboard</span>
            </CardTitle>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search models/frameworks..."
                  className="pl-8 bg-muted/50 border-border"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex items-center">
                <Filter className="mr-2 h-4 w-4 text-muted-foreground" />
                <Select value={selectedFramework} onValueChange={setSelectedFramework}>
                  <SelectTrigger className="w-[160px] bg-muted/50 border-border">
                    <SelectValue placeholder="Framework" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Frameworks</SelectItem>
                    <SelectItem value="react">React</SelectItem>
                    <SelectItem value="next.js">Next.js</SelectItem>
                    <SelectItem value="vue">Vue</SelectItem>
                    <SelectItem value="three.js">Three.js</SelectItem>
                    <SelectItem value="tailwind">Tailwind</SelectItem>
                    <SelectItem value="angular">Angular</SelectItem>
                    <SelectItem value="express">Express</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border text-muted-foreground">
                    <th className="text-left py-3 px-4">#</th>
                    <th className="text-left py-3 px-4">AI Model</th>
                    <th className="text-left py-3 px-4">Framework</th>
                    <th className="text-left py-3 px-4">Version</th>
                    <th className="text-left py-3 px-4">Win Rate</th>
                    <th className="text-left py-3 px-4">Total Matches</th>
                    <th className="text-left py-3 px-4">Trend</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((item, index) => (
                    <tr key={item.id} className="border-b border-border hover:bg-muted/20 transition-colors">
                      <td className="py-3 px-4">
                        {index === 0 ? (
                          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-neon-yellow/20 text-neon-yellow">
                            <Trophy className="h-3 w-3" />
                          </div>
                        ) : index + 1}
                      </td>
                      <td className="py-3 px-4 font-medium">{item.aiModel}</td>
                      <td className="py-3 px-4">{item.framework}</td>
                      <td className="py-3 px-4 text-muted-foreground">{item.version}</td>
                      <td className="py-3 px-4 font-semibold">{item.winRate}%</td>
                      <td className="py-3 px-4 text-muted-foreground">{item.totalMatches}</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center">
                          {getTrendIcon(item.trend)}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
        
        <div className="mt-10 text-center">
          <Tabs defaultValue="methodology" className="w-full max-w-3xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="methodology">Methodology</TabsTrigger>
              <TabsTrigger value="aimodels">AI Models</TabsTrigger>
              <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
            </TabsList>
            <TabsContent value="methodology" className="bg-card/30 p-4 rounded-md mt-4 text-left">
              <h3 className="font-semibold text-lg mb-2">Benchmark Methodology</h3>
              <p className="text-muted-foreground mb-3">
                Our benchmark evaluates AI models' coding performance through:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Anonymous side-by-side code comparisons</li>
                <li>Community voting on quality, functionality, and usability</li>
                <li>Testing across different framework versions</li>
                <li>Weighted scoring based on complexity of tasks</li>
                <li>Regular updates as new framework versions are released</li>
              </ul>
            </TabsContent>
            <TabsContent value="aimodels" className="bg-card/30 p-4 rounded-md mt-4 text-left">
              <h3 className="font-semibold text-lg mb-2">Evaluated AI Models</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-muted/30 p-3 rounded-md">
                  <div className="flex items-center gap-2 mb-1">
                    <Award className="h-4 w-4 text-neon-cyan" />
                    <h4 className="font-medium">OpenAI Models</h4>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1 pl-6">
                    <li>GPT-4o (April 2024)</li>
                    <li>GPT-4o-mini (April 2024)</li>
                    <li>GPT-4.5-preview (March 2025)</li>
                  </ul>
                </div>
                <div className="bg-muted/30 p-3 rounded-md">
                  <div className="flex items-center gap-2 mb-1">
                    <Award className="h-4 w-4 text-neon-pink" />
                    <h4 className="font-medium">Anthropic Models</h4>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1 pl-6">
                    <li>Claude 3 Opus (March 2024)</li>
                    <li>Claude 3 Sonnet (March 2024)</li>
                    <li>Claude 3 Haiku (March 2024)</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="frameworks" className="bg-card/30 p-4 rounded-md mt-4 text-left">
              <h3 className="font-semibold text-lg mb-2">Tested Frameworks & Versions</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { name: "React", versions: ["16.x", "17.x", "18.x"] },
                  { name: "Next.js", versions: ["12.x", "13.x", "14.x"] },
                  { name: "Vue", versions: ["2.x", "3.x"] },
                  { name: "Three.js", versions: ["r79", "r128", "r150"] },
                  { name: "Tailwind", versions: ["2.x", "3.x"] },
                  { name: "Angular", versions: ["13.x", "14.x", "15.x"] }
                ].map((framework, index) => (
                  <div key={index} className="bg-muted/30 p-3 rounded-md">
                    <h4 className="font-medium mb-1">{framework.name}</h4>
                    <div className="flex flex-wrap gap-1">
                      {framework.versions.map((version, idx) => (
                        <span key={idx} className="text-xs px-2 py-0.5 rounded bg-muted text-muted-foreground">
                          {version}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Leaderboard;
