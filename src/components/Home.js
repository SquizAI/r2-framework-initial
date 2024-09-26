// src/components/Home.js
import React from 'react';
import { ArrowRight, Brain, Zap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import R2FrameworkDiagram from './R2FrameworkDiagram';
import ComponentBox from './ComponentBox';

const Home = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 rounded-lg shadow-xl">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to the R² Framework</h1>
          <p className="text-xl mb-8">
            Revolutionizing AI with Relative Reality: Integrating Symbolic Reasoning, 
            Game Theory, and Quantum Computing for Advanced Multi-Agent Systems
          </p>
          <Link 
            to="/about" 
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300"
          >
            Explore R² <ArrowRight className="inline ml-2" />
          </Link>
        </div>
      </section>

      {/* Key Features Section */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Key Features of R²</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ComponentBox
            title="Symbolic & Subsymbolic Integration"
            icon={Brain}
            items={[
              "Combines logic-based and data-driven approaches",
              "Enables both precise reasoning and flexible learning",
              "Bridges the gap between traditional AI and neural networks"
            ]}
          />
          <ComponentBox
            title="Quantum-Inspired Algorithms"
            icon={Zap}
            items={[
              "Leverages quantum principles for optimization",
              "Enhances decision-making in complex scenarios",
              "Prepares for future quantum hardware advancements"
            ]}
          />
          <ComponentBox
            title="Multi-Agent Coordination"
            icon={Users}
            items={[
              "Models interactions between diverse agents",
              "Incorporates game theory for strategic decision-making",
              "Adapts to dynamic, subjective realities of each agent"
            ]}
          />
        </div>
      </section>

      {/* Interactive Framework Diagram */}
      <section>
        <h2 className="text-3xl font-bold mb-6">The R² Framework at a Glance</h2>
        <R2FrameworkDiagram />
      </section>

      {/* Call to Action */}
      <section className="bg-gray-100 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Ready to Dive Deeper?</h2>
        <p className="mb-4">
          Explore our detailed sections on theoretical foundations, mathematical formulations, 
          and real-world applications of the R² framework.
        </p>
        <div className="space-x-4">
          <Link 
            to="/theoretical-foundations" 
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
          >
            Theoretical Foundations
          </Link>
          <Link 
            to="/applications" 
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
          >
            Applications
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;