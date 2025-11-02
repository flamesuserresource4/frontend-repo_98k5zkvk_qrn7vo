import React from 'react';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import ChatWindow from './components/ChatWindow';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-black font-inter antialiased">
      <Hero />
      <FeatureGrid />
      <ChatWindow />
      <Footer />
    </div>
  );
}

export default App;
