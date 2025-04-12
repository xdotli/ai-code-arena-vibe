
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code, ThumbsUp, ThumbsDown, PanelRight, PanelLeft, Shuffle, CornerDownRight } from 'lucide-react';
import { toast } from "sonner";

// Sample code for demonstration
const sampleCodes = {
  reactRouter: {
    newer: `
// React Router v6 approach
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}`,
    older: `
// React Router v5 approach
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}`
  },
  threeJS: {
    newer: `
// Three.js r150 with modern ES modules
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1, 1, 1);
scene.add(light);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

camera.position.z = 5;

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  controls.update();
  renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});`,
    older: `
// Three.js r79 with older style
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function render() {
  requestAnimationFrame(render);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}

render();

window.addEventListener('resize', function() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});`
  }
};

const Arena = () => {
  const [selectedFramework, setSelectedFramework] = useState('reactRouter');
  const [expandedCode, setExpandedCode] = useState<string | null>(null);
  
  const handleVote = (version: string) => {
    toast.success(`Vote recorded for ${version} version`);
  };
  
  const handleSkip = () => {
    toast.info("Skipped to next comparison");
  };
  
  return (
    <Layout>
      <div className="container py-12">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold mb-4">AI Code Arena</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Compare AI-generated code for different framework versions and vote for the better solution
          </p>
        </div>
        
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="text-muted-foreground">Select Framework:</span>
            <Select 
              value={selectedFramework} 
              onValueChange={setSelectedFramework}
            >
              <SelectTrigger className="w-[200px] border-neon-cyan/30">
                <SelectValue placeholder="Select Framework" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="reactRouter">React Router</SelectItem>
                <SelectItem value="threeJS">Three.js</SelectItem>
                <SelectItem value="tailwind">Tailwind CSS</SelectItem>
                <SelectItem value="nextjs">Next.js</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              className="border-neon-pink/30 text-neon-pink hover:border-neon-pink"
              onClick={handleSkip}
            >
              <Shuffle className="mr-2 h-4 w-4" />
              Skip
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Newer Version Card */}
          <Card className="border-neon-cyan/20 bg-card/60 backdrop-blur-sm neon-border">
            <CardHeader className="border-b border-border pb-3">
              <div className="flex justify-between items-center">
                <CardTitle>
                  <span className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-neon-cyan" />
                    <span className="text-neon-cyan">AI Model A</span>
                  </span>
                </CardTitle>
                <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">Newer Version</span>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              {expandedCode === 'newer' ? (
                <pre className="bg-muted/50 p-4 rounded-md overflow-x-auto whitespace-pre-wrap text-xs sm:text-sm h-[500px] overflow-y-auto">
                  <code>{sampleCodes[selectedFramework as keyof typeof sampleCodes].newer}</code>
                </pre>
              ) : (
                <>
                  <pre className="bg-muted/50 p-4 rounded-md overflow-x-auto whitespace-pre-wrap text-xs sm:text-sm max-h-[300px] overflow-y-auto">
                    <code>{sampleCodes[selectedFramework as keyof typeof sampleCodes].newer}</code>
                  </pre>
                  <Button 
                    variant="ghost" 
                    className="w-full mt-2 text-neon-cyan hover:text-neon-cyan hover:bg-muted/50"
                    onClick={() => setExpandedCode('newer')}
                  >
                    <PanelRight className="mr-2 h-4 w-4" />
                    Expand Code
                  </Button>
                </>
              )}
            </CardContent>
            <CardFooter className="border-t border-border pt-4 flex justify-between">
              <Button 
                variant="outline" 
                size="lg"
                className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10"
                onClick={() => setExpandedCode(expandedCode === 'newer' ? null : 'newer')}
              >
                {expandedCode === 'newer' ? (
                  <>
                    <PanelLeft className="mr-2 h-5 w-5" />
                    Collapse
                  </>
                ) : (
                  <>
                    <PanelRight className="mr-2 h-5 w-5" />
                    Full View
                  </>
                )}
              </Button>
              <Button 
                className="bg-neon-cyan text-primary-foreground hover:bg-neon-cyan/80"
                size="lg"
                onClick={() => handleVote('newer')}
              >
                <ThumbsUp className="mr-2 h-5 w-5" />
                Vote for This
              </Button>
            </CardFooter>
          </Card>

          {/* Older Version Card */}
          <Card className="border-neon-pink/20 bg-card/60 backdrop-blur-sm neon-border">
            <CardHeader className="border-b border-border pb-3">
              <div className="flex justify-between items-center">
                <CardTitle>
                  <span className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-neon-pink" />
                    <span className="text-neon-pink">AI Model B</span>
                  </span>
                </CardTitle>
                <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">Older Version</span>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              {expandedCode === 'older' ? (
                <pre className="bg-muted/50 p-4 rounded-md overflow-x-auto whitespace-pre-wrap text-xs sm:text-sm h-[500px] overflow-y-auto">
                  <code>{sampleCodes[selectedFramework as keyof typeof sampleCodes].older}</code>
                </pre>
              ) : (
                <>
                  <pre className="bg-muted/50 p-4 rounded-md overflow-x-auto whitespace-pre-wrap text-xs sm:text-sm max-h-[300px] overflow-y-auto">
                    <code>{sampleCodes[selectedFramework as keyof typeof sampleCodes].older}</code>
                  </pre>
                  <Button 
                    variant="ghost" 
                    className="w-full mt-2 text-neon-pink hover:text-neon-pink hover:bg-muted/50"
                    onClick={() => setExpandedCode('older')}
                  >
                    <PanelRight className="mr-2 h-4 w-4" />
                    Expand Code
                  </Button>
                </>
              )}
            </CardContent>
            <CardFooter className="border-t border-border pt-4 flex justify-between">
              <Button 
                variant="outline" 
                size="lg"
                className="border-neon-pink text-neon-pink hover:bg-neon-pink/10"
                onClick={() => setExpandedCode(expandedCode === 'older' ? null : 'older')}
              >
                {expandedCode === 'older' ? (
                  <>
                    <PanelLeft className="mr-2 h-5 w-5" />
                    Collapse
                  </>
                ) : (
                  <>
                    <PanelRight className="mr-2 h-5 w-5" />
                    Full View
                  </>
                )}
              </Button>
              <Button 
                className="bg-neon-pink text-primary-foreground hover:bg-neon-pink/80"
                size="lg"
                onClick={() => handleVote('older')}
              >
                <ThumbsUp className="mr-2 h-5 w-5" />
                Vote for This
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        <div className="mt-10 text-center">
          <Tabs defaultValue="criteria" className="w-full max-w-2xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="criteria">Voting Criteria</TabsTrigger>
              <TabsTrigger value="task">Task Description</TabsTrigger>
              <TabsTrigger value="frameworks">Framework Info</TabsTrigger>
            </TabsList>
            <TabsContent value="criteria" className="bg-card/30 p-4 rounded-md mt-4 text-left">
              <h3 className="font-semibold mb-2">Code Evaluation Criteria:</h3>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Code quality and readability</li>
                <li>Modern practices and patterns</li>
                <li>Efficiency and performance</li>
                <li>Error handling and edge cases</li>
                <li>Framework-specific best practices</li>
              </ul>
            </TabsContent>
            <TabsContent value="task" className="bg-card/30 p-4 rounded-md mt-4 text-left">
              <h3 className="font-semibold mb-2">Current Task:</h3>
              <p className="text-muted-foreground mb-2">
                Create a basic routing configuration for a web application with Home, About, and Dashboard pages.
              </p>
              <div className="text-xs bg-muted/50 p-2 rounded">
                <span className="text-neon-green"><CornerDownRight className="inline h-3 w-3 mr-1" />Task ID:</span> R7429
              </div>
            </TabsContent>
            <TabsContent value="frameworks" className="bg-card/30 p-4 rounded-md mt-4 text-left">
              <h3 className="font-semibold mb-2">Framework Versions:</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-neon-cyan block">Newer:</span>
                  <span className="text-muted-foreground">React Router v6.4</span>
                </div>
                <div>
                  <span className="text-neon-pink block">Older:</span>
                  <span className="text-muted-foreground">React Router v5.2</span>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Arena;
