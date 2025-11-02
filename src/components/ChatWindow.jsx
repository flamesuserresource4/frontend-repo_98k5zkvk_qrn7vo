import React, { useMemo, useRef, useState, useEffect } from 'react';
import { Send, User, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MessageBubble = ({ role, content }) => {
  const isUser = role === 'user';
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2 }}
      className={`flex items-start gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      {!isUser && (
        <div className="mt-1 rounded-lg bg-white/10 p-2">
          <Bot className="h-4 w-4 text-violet-200" />
        </div>
      )}
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-lg backdrop-blur ${
          isUser
            ? 'bg-violet-600 text-white shadow-violet-600/30'
            : 'bg-white/10 text-white/90 shadow-black/30'
        }`}
      >
        {content}
      </div>
      {isUser && (
        <div className="mt-1 rounded-lg bg-violet-600/20 p-2">
          <User className="h-4 w-4 text-violet-200" />
        </div>
      )}
    </motion.div>
  );
};

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Welcome aboard. I am your cosmic copilot. How can I assist today?' },
  ]);
  const [input, setInput] = useState('');
  const listRef = useRef(null);

  useEffect(() => {
    if (!listRef.current) return;
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages]);

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;
    const userMsg = { role: 'user', content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    // playful local response to demonstrate UI
    setTimeout(() => {
      const reply = {
        role: 'assistant',
        content:
          'Synchronizing neural mesh… Received: ' +
          `“${text}”. Initiating a speculative response in a retro‑futuristic dialect.`,
      };
      setMessages((prev) => [...prev, reply]);
    }, 600);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section id="chat" className="relative z-10 w-full bg-gradient-to-b from-black to-[#0b021b] py-16 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="text-2xl font-semibold">Chat Console</h2>
          <span className="text-xs text-white/60">Local demo — no data leaves your browser</span>
        </div>
        <div className="relative rounded-2xl border border-white/10 bg-white/5 p-4 shadow-xl backdrop-blur">
          <div
            ref={listRef}
            className="h-[42vh] w-full space-y-4 overflow-y-auto rounded-xl bg-black/30 p-4"
          >
            <AnimatePresence initial={false}>
              {messages.map((m, idx) => (
                <MessageBubble key={idx} role={m.role} content={m.content} />
              ))}
            </AnimatePresence>
          </div>
          <div className="mt-4 flex items-end gap-3">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              rows={2}
              placeholder="Type your message…"
              className="min-h-[44px] flex-1 resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/40 outline-none ring-violet-500/40 focus:ring"
            />
            <button
              onClick={handleSend}
              className="inline-flex h-[44px] items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 text-sm font-semibold text-white shadow-lg shadow-violet-600/30 transition hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-400 disabled:opacity-50"
              disabled={!input.trim()}
            >
              <Send className="h-4 w-4" />
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatWindow;
