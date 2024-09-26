import React from 'react';
import { BookOpen, Lightbulb, Target, Zap } from 'lucide-react';
import ComponentBox from './ComponentBox';

const About = () => {
  return (
    <div className="space-y-12">
      {/* Executive Summary */}
      <section>
        <h2 className="text-3xl font-bold mb-6 flex items-center">
          <BookOpen className="mr-3" size={32} />
          Executive Summary
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          The Relative Reality (R²) framework represents a paradigm shift in artificial intelligence, 
          designed to transcend the limitations of traditional AI systems. By integrating symbolic 
          reasoning, subsymbolic AI, emotional intelligence, game-theoretic principles, and 
          quantum-inspired algorithms, R² fosters AI systems capable of nuanced, empathetic, 
          and adaptable behavior in complex, multi-agent environments across various industries.
        </p>
      </section>

      {/* Introduction */}
      <section>
        <h2 className="text-3xl font-bold mb-6 flex items-center">
          <Lightbulb className="mr-3" size={32} />
          Introduction
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          Traditional AI systems excel in processing objective data—numbers, images, and 
          structured text—but falter when it comes to subjective data related to personal 
          feelings, thoughts, and emotions. This gap is critical in fields where personalization 
          is paramount, such as healthcare, customer service, and education.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <ComponentBox
            title="Limitations of Traditional AI"
            icon={Target}
            items={[
              "Inability to formalize subjective experiences",
              "Lack of integration between symbolic and subsymbolic AI",
              "Limited reasoning capabilities",
              "Challenges in multi-agent coordination"
            ]}
          />
          <ComponentBox
            title="R² Framework Solutions"
            icon={Zap}
            items={[
              "Models and reasons about subjective realities",
              "Seamlessly integrates symbolic and subsymbolic methods",
              "Implements both inductive and deductive reasoning",
              "Utilizes game theory for multi-agent interactions"
            ]}
          />
        </div>
      </section>

      {/* Key Innovations */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Key Innovations of R²</h2>
        <div className="space-y-4">
          <div className="bg-blue-100 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Symbolic & Subsymbolic Integration</h3>
            <p>
              R² seamlessly combines formal, rule-based logic (symbolic) with adaptive, 
              learning-based reasoning (subsymbolic), allowing for both precise deductions 
              and flexible pattern recognition.
            </p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Emotional Intelligence Integration</h3>
            <p>
              By incorporating emotional processing units, R² can recognize, simulate, and 
              react to human emotions, making AI interactions more natural and empathetic.
            </p>
          </div>
          <div className="bg-purple-100 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Game-Theoretic Multi-Agent Modeling</h3>
            <p>
              R² uses advanced game theory to model interactions between multiple AI agents, 
              especially in scenarios with conflicting objectives or incomplete information.
            </p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Quantum-Inspired Computing</h3>
            <p>
              While implemented on classical hardware, R² incorporates quantum-inspired 
              algorithms, preparing it for future advancements in quantum computing technology.
            </p>
          </div>
        </div>
      </section>

      {/* Practical Applications */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Practical Applications</h2>
        <p className="text-lg text-gray-700 mb-4">
          The R² framework has far-reaching applications across various industries:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <strong>Healthcare:</strong> Personalized treatment plans considering both medical data and patient emotions.
          </li>
          <li>
            <strong>Finance:</strong> Advanced market sentiment analysis and risk management.
          </li>
          <li>
            <strong>Smart Cities:</strong> Optimized urban management considering diverse stakeholder perspectives.
          </li>
          <li>
            <strong>Education:</strong> Adaptive learning systems that respond to students' emotional states and learning styles.
          </li>
          <li>
            <strong>Customer Service:</strong> Emotionally intelligent chatbots and virtual assistants.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default About;