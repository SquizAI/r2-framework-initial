import React from 'react';
import { BookOpen } from 'lucide-react';
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';

const MathematicalFormulation = () => {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold mb-6">Mathematical Formulation</h2>
      
      <div className="space-y-8">
        {/* Advanced Perception Modeling */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <BookOpen className="mr-2" size={24} />
            Advanced Perception Modeling
          </h3>
          <p className="text-gray-700 mb-4">
            The Advanced Perception Module (APM) employs a Bayesian Perception Model to fuse multi-modal sensory data and quantify uncertainty.
          </p>
          <h4 className="text-lg font-semibold mb-2">Bayesian Perception Model</h4>
          <BlockMath math="p(\theta \mid x) \propto p(x \mid \theta) p(\theta)" />
          <p className="text-gray-700 mt-2">
            Where:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li><InlineMath math="p(\theta \mid x)" /> is the posterior probability distribution of the hidden state θ.</li>
            <li><InlineMath math="p(x \mid \theta)" /> is the likelihood of the sensory data x given θ.</li>
            <li><InlineMath math="p(\theta)" /> is the prior distribution of θ.</li>
          </ul>
        </div>

        {/* Game-Theoretic Multi-Agent Interaction Models */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <BookOpen className="mr-2" size={24} />
            Game-Theoretic Multi-Agent Interaction Models
          </h3>
          <p className="text-gray-700 mb-4">
            The Subjective Nash Equilibrium accounts for each agent's subjective reality in their utility functions.
          </p>
          <h4 className="text-lg font-semibold mb-2">Subjective Nash Equilibrium</h4>
          <BlockMath math="\text{SNE}: a_1^* = \arg \max_{a_1} U_1(a_1, a_{-1}^*, \theta_1)" />
          <p className="text-gray-700 mt-2">
            Where:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li><InlineMath math="a_1^*" /> is the optimal action for agent 1.</li>
            <li><InlineMath math="U_1(a_1, a_{-1}^*, \theta_1)" /> is the subjective utility for agent 1.</li>
            <li><InlineMath math="a_{-1}^*" /> represents the actions of all other agents.</li>
            <li><InlineMath math="\theta_1" /> is agent 1's subjective reality.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MathematicalFormulation;