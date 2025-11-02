import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-black py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-xs text-white/60">© {new Date().getFullYear()} Nebula UI • Crafted for sci‑fi chat experiences</p>
        <div className="flex items-center gap-3 text-xs text-white/60">
          <a href="#features" className="hover:text-white/90">Features</a>
          <span>•</span>
          <a href="#chat" className="hover:text-white/90">Chat</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
