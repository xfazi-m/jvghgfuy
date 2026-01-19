import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, RotateCcw, Loader2, Sparkles, User } from 'lucide-react';
import { Message } from '../types';
import { geminiService } from '../services/geminiService';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      text: "Dzień dobry. Jestem Twoim cyfrowym mentorem X_FAZI. Jak mogę pomóc Ci w rozwoju projektu lub nauce dzisiaj?",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', text: inputValue, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    const responseText = await geminiService.sendMessage(inputValue);
    const botMsg: Message = { role: 'model', text: responseText, timestamp: new Date() };
    setMessages(prev => [...prev, botMsg]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-12 right-12 z-[200]">
      <button
        id="chat-trigger"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-20 h-20 rounded-full flex items-center justify-center shadow-2xl transition-all duration-700 border border-white/10 group ${
          isOpen ? 'bg-white text-black rotate-90 scale-90' : 'bg-black text-white hover:bg-neutral-900 hover:scale-110'
        }`}
      >
        {isOpen ? <X className="w-8 h-8" /> : <MessageSquare className="w-8 h-8 group-hover:scale-110" />}
      </button>

      {isOpen && (
        <div className="absolute bottom-24 right-0 w-[90vw] sm:w-[450px] h-[75vh] bg-black border border-white/10 flex flex-col shadow-[0_40px_100px_rgba(0,0,0,0.9)] rounded-[2.5rem] overflow-hidden animate-in slide-in-from-bottom-8 duration-700">
          {/* Concierge Header */}
          <div className="p-10 border-b border-white/5 flex justify-between items-center bg-neutral-950/50">
            <div className="flex items-center space-x-5">
              <div className="bg-white p-3 rounded-full">
                <Sparkles className="w-5 h-5 text-black" />
              </div>
              <div>
                <h3 className="text-[11px] font-black text-white tracking-[0.3em] uppercase italic leading-none">FAZI CONCIERGE</h3>
                <div className="flex items-center space-x-2 mt-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-[9px] text-neutral-500 font-bold uppercase tracking-widest">Online & Ready</span>
                </div>
              </div>
            </div>
            <button onClick={() => { geminiService.resetChat(); setMessages([{ role: 'model', text: "Zrestartowano.", timestamp: new Date() }]); }} className="text-neutral-700 hover:text-white transition-colors">
              <RotateCcw className="w-5 h-5" />
            </button>
          </div>

          {/* Message Area */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-10 space-y-10">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div className={`flex items-end space-x-3 ${msg.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border border-white/10 ${msg.role === 'user' ? 'bg-neutral-900' : 'bg-white'}`}>
                    {msg.role === 'user' ? <User className="w-5 h-5 text-white" /> : <Sparkles className="w-5 h-5 text-black" />}
                  </div>
                  <div className={`max-w-[85%] p-7 text-[13px] leading-relaxed font-medium rounded-[2rem] shadow-xl ${
                    msg.role === 'user' ? 'bg-white text-black rounded-tr-none' : 'bg-neutral-900 text-neutral-300 rounded-tl-none border border-white/5'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-neutral-900 px-8 py-5 rounded-full border border-white/5 flex items-center space-x-4">
                  <Loader2 className="w-4 h-4 text-neutral-500 animate-spin" />
                  <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest">Procesowanie...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input Bar */}
          <div className="p-8 border-t border-white/5 bg-neutral-950/80 backdrop-blur-3xl">
            <div className="relative flex items-center bg-black rounded-full border border-white/10 px-8 py-2 focus-within:border-white transition-all duration-500">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Zadaj pytanie o cennik lub kod..."
                className="w-full bg-transparent text-white text-[13px] py-5 focus:outline-none"
              />
              <button 
                onClick={handleSend} 
                disabled={!inputValue.trim() || isLoading} 
                className="ml-4 text-neutral-500 hover:text-white transition-colors"
              >
                <Send className="w-6 h-6" />
              </button>
            </div>
            <p className="text-[8px] text-center text-neutral-800 mt-5 uppercase tracking-[0.5em] font-black">X_FAZI DIGITAL ASYSTENT</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;