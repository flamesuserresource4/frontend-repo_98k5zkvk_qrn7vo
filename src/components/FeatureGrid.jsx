import React from 'react';
import { Cpu, Shield, Zap, Stars } from 'lucide-react';

const features = [
  {
    title: 'Neural Acceleration',
    desc: 'Optimized for rapid, fluid responses that feel instantaneous.',
    icon: Zap,
    color: 'from-violet-500 to-fuchsia-500',
  },
  {
    title: 'Cognitive Core',
    desc: 'Modular reasoning engine with context retention and memory.',
    icon: Cpu,
    color: 'from-indigo-500 to-cyan-500',
  },
  {
    title: 'Quantum Shield',
    desc: 'Privacy-first by design with secure, encrypted handshakes.',
    icon: Shield,
    color: 'from-emerald-500 to-teal-400',
  },
  {
    title: 'Stellar UX',
    desc: 'Cinematic motion and tactile micro-interactions throughout.',
    icon: Stars,
    color: 'from-rose-500 to-orange-400',
  },
];

const FeatureCard = ({ title, desc, icon: Icon, color }) => (
  <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
    <div className={`absolute inset-0 -z-0 rounded-2xl bg-gradient-to-br ${color} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20`} />
    <div className="relative z-10 flex items-start gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-1 text-sm text-white/70">{desc}</p>
      </div>
    </div>
  </div>
);

const FeatureGrid = () => {
  return (
    <section id="features" className="relative z-10 w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-2xl">
          <h2 className="bg-gradient-to-b from-white to-violet-200 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
            Built for the next era of interaction
          </h2>
          <p className="mt-2 text-white/70">
            Everything under the hood is engineered to feel seamless, responsive, and delightfully futuristic.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
