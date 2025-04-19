import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { BarChart, Trophy, Search, Filter, Award, Brain, ArrowUp, ArrowDown, Equal } from 'lucide-react';
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

const leaderboardData = [
  { id: 1, aiModel: "GPT-4o", framework: "React", version: "18.x", winRate: 83, totalMatches: 154, trend: "up" },
  { id: 2, aiModel: "Claude 3.5 Sonnet", framework: "Next.js", version: "14.x", winRate: 79, totalMatches: 127, trend: "up" },
  { id: 3, aiModel: "Anthropic Claude 3.7 Sonnet", framework: "Three.js", version: "r150", winRate: 85, totalMatches: 92, trend: "up" },
  { id: 4, aiModel: "GPT-4o-mini", framework: "Vue", version: "3.x", winRate: 71, totalMatches: 115, trend: "up" },
  { id: 5, aiModel: "Gemini 2.5 Pro", framework: "Tailwind", version: "3.x", winRate: 76, totalMatches: 89, trend: "up" },
  { id: 6, aiModel: "DeepSeek R1", framework: "Angular", version: "15.x", winRate: 69, totalMatches: 72, trend: "up" },
  { id: 7, aiModel: "DeepSeek v3 0324", framework: "Svelte", version: "4.x", winRate: 64, totalMatches: 54, trend: "neutral" },
  { id: 8, aiModel: "Gemini 2.5 Flash", framework: "React", version: "16.x", winRate: 62, totalMatches: 65, trend: "up" },
  { id: 9, aiModel: "Grok 3", framework: "Express", version: "4.x", winRate: 67, totalMatches: 58, trend: "neutral" },
  { id: 10, aiModel: "Llama 4", framework: "Next.js", version: "12.x", winRate: 68, totalMatches: 72, trend: "up" },
  { id: 11, aiModel: "Llama 3.1 70B", framework: "React", version: "18.x", winRate: 61, totalMatches: 64, trend: "neutral" },
  { id: 12, aiModel: "O1", framework: "Svelte", version: "5.x", winRate: 87, totalMatches: 43, trend: "up" },
];

const frameworkData = [
  { name: 'React 18', newerVersion: 83, olderVersion: 62 },
  { name: 'Next.js 14', newerVersion: 79, olderVersion: 58 },
  { name: 'Three.js r150', newerVersion: 85, olderVersion: 69 },
  { name: 'Vue 3', newerVersion: 71, olderVersion: 54 },
  { name: 'Tailwind 3', newerVersion: 76, olderVersion: 65 },
];

const modelData = [
  { name: 'O1', value: 87, color: '#FF00FF' },
  { name: 'GPT-4o', value: 83, color: '#00FFFF' },
  { name: 'Claude 3.7', value: 85, color: '#9D00FF' },
  { name: 'GPT-4o-mini', value: 71, color: '#00FF9D' },
  { name: 'Gemini 2.5 Pro', value: 76, color: '#0066FF' },
];

const Leaderboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFramework, setSelectedFramework] = useState('all');
  
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
        return <Equal className="h-4 w-4 text-yellow-500" />;
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
                    <h4 className="font-medium">Latest Models</h4>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1 pl-6">
                    <li>GPT-4o (April 2024)</li>
                    <li>GPT-4o-mini (April 2024)</li>
                    <li>O1 (July 2024)</li>
                    <li>Claude 3.5 Sonnet (June 2024)</li>
                    <li>Claude 3.7 Sonnet (August 2024)</li>
                  </ul>
                </div>
                <div className="bg-muted/30 p-3 rounded-md">
                  <div className="flex items-center gap-2 mb-1">
                    <Award className="h-4 w-4 text-neon-pink" />
                    <h4 className="font-medium">Other Leading Models</h4>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1 pl-6">
                    <li>Gemini 2.5 Pro (June 2024)</li>
                    <li>Gemini 2.5 Flash (June 2024)</li>
                    <li>DeepSeek R1 (August 2024)</li>
                    <li>DeepSeek v3 0324 (March 2024)</li>
                    <li>Grok 3 (August 2024)</li>
                    <li>Llama 4 (July 2024)</li>
                    <li>Llama 3.1 70B (April 2024)</li>
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
