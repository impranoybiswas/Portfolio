"use client";

import { Bot, Send, User, Sparkles } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Modal from "../ui/Modal";
import Image from "next/image";

type Message = { role: "user" | "assistant"; text: string };

export default function AiChatBot() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<Message[]>([
    {
      role: "assistant",
      text: "Hi! I'm Pranoy. Feel free to ask me anything about my work, skills, or background. How can I help you today?",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chat, loading]);

  const sendMessage = async () => {
    const trimmed = message.trim();
    if (!trimmed || loading) return;

    setChat((prev) => [...prev, { role: "user", text: trimmed }]);
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("/api/groq-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });
      const data = await res.json();
      setChat((prev) => [
        ...prev,
        {
          role: "assistant",
          text: res.ok ? data.reply : data.error || "Something went wrong.",
        },
      ]);
    } catch {
      setChat((prev) => [
        ...prev,
        { role: "assistant", text: "Network error. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <Modal
      label={
        <Bot className="group-hover:rotate-12 transition-transform duration-300" />
      }
      title={
        <div className="flex items-center gap-2">
          <Sparkles className="size-5 text-primary animate-pulse" />
          <span>AI Assistant</span>
        </div>
      }
    >
      <div className="flex flex-col h-[60vh] -mx-4">
        {/* Chat Area */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto px-4 py-4 space-y-4 no-scrollbar bg-linear-to-b from-transparent to-base-200/30"
        >
          <AnimatePresence initial={false}>
            {chat.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.2 }}
                className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
              >
                <div
                  className={`size-8 rounded-full flex items-center justify-center shrink-0 mt-1 shadow-sm
                    ${
                      msg.role === "assistant"
                        ? "bg-primary/10 text-primary border border-primary/20"
                        : "bg-secondary/10 text-secondary border border-secondary/20"
                    }`}
                >
                  {msg.role === "assistant" ? (
                    <Image
                      src="/images/photo.png"
                      alt="Logo"
                      width={64}
                      height={64}
                      className="object-cover rounded-full bg-foreground"
                    />
                  ) : (
                    <User size={16} />
                  )}
                </div>

                <div
                  className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-xs backdrop-blur-md
                    ${
                      msg.role === "user"
                        ? "bg-primary/90 text-primary-content rounded-tr-none border border-primary/20"
                        : "bg-base-100/80 text-base-content border border-base-content/10 rounded-tl-none"
                    }`}
                >
                  {msg.text}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {loading && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-3"
            >
              <div className="size-8 rounded-full bg-primary/10 text-primary border border-primary/20 flex items-center justify-center shrink-0 shadow-sm">
                <Bot size={16} />
              </div>
              <div className="bg-base-100/80 backdrop-blur-md border border-base-content/10 rounded-2xl rounded-tl-none px-4 py-3 flex gap-1.5 items-center shadow-xs">
                <span className="size-1.5 bg-primary/60 rounded-full animate-bounce [animation-delay:0ms]" />
                <span className="size-1.5 bg-primary/60 rounded-full animate-bounce [animation-delay:150ms]" />
                <span className="size-1.5 bg-primary/60 rounded-full animate-bounce [animation-delay:300ms]" />
              </div>
            </motion.div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-primary/10 bg-base-100/50 backdrop-blur-lg">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-linear-to-r from-primary to-secondary rounded-xl opacity-20 group-focus-within:opacity-40 transition-opacity blur-xs" />
            <div className="relative flex items-center gap-2 bg-base-100 rounded-xl p-1.5 border border-primary/40">
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Ask Pranoy's AI..."
                className="flex-1 bg-transparent px-3 py-2 text-sm focus:outline-none placeholder:text-foreground/40"
              />
              <button
                onClick={sendMessage}
                disabled={!message.trim() || loading}
                className={`size-9 rounded-lg flex items-center justify-center transition-all duration-300 cursor-pointer bg-primary text-white font-semibold
                  ${
                    message.trim() && !loading
                      ? "shadow-lg hover:shadow-primary/30"
                      : " opacity-40 cursor-not-allowed"
                  }`}
              >
                <Send size={16} />
              </button>
            </div>
          </div>
          <p className="text-[10px] text-center text-base-content/30 mt-2 italic">
            Power by Groq Llama 3.3
          </p>
        </div>
      </div>
    </Modal>
  );
}
