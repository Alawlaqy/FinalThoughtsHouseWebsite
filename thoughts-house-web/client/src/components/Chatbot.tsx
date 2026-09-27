/*
 * Design: Precision Shield — Corporate-Minimal
 * Chatbot: Floating chat window, separate from WhatsApp, for automated visitor triage
 */
import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot } from "lucide-react";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

export default function Chatbot() {
  const { t, lang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [initialized, setInitialized] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && !initialized) {
      setMessages([{ id: 1, text: t("chatbot.welcome"), isBot: true }]);
      setInitialized(true);
    }
  }, [isOpen, initialized, t]);

  // Reset when language changes
  useEffect(() => {
    if (initialized) {
      setMessages([{ id: 1, text: t("chatbot.welcome"), isBot: true }]);
    }
  }, [lang]);

  const quickOptions = [
    { key: "chatbot.option.services", responseKey: "chatbot.response.services" },
    { key: "chatbot.option.partners", responseKey: "chatbot.response.partners" },
    { key: "chatbot.option.contact", responseKey: "chatbot.response.contact" },
    { key: "chatbot.option.quote", responseKey: "chatbot.response.quote" },
  ];

  const getBotResponse = (userMessage: string): string => {
    const lower = userMessage.toLowerCase();
    if (lower.includes("service") || lower.includes("خدم")) {
      return t("chatbot.response.services");
    }
    if (lower.includes("partner") || lower.includes("شريك") || lower.includes("شركاء")) {
      return t("chatbot.response.partners");
    }
    if (lower.includes("contact") || lower.includes("تواصل") || lower.includes("اتصل")) {
      return t("chatbot.response.contact");
    }
    if (lower.includes("quote") || lower.includes("price") || lower.includes("سعر") || lower.includes("عرض")) {
      return t("chatbot.response.quote");
    }
    return t("chatbot.response.default");
  };

  const sendMessage = (text: string, responseKey?: string) => {
    const userMsg: Message = { id: Date.now(), text, isBot: false };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = responseKey ? t(responseKey) : getBotResponse(text);
      const botMsg: Message = { id: Date.now() + 1, text: botResponse, isBot: true };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage(input.trim());
  };

  return (
    <div className={`fixed bottom-6 ${lang === "ar" ? "right-6" : "left-6"} z-40`}>
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="mb-4 w-[340px] sm:w-[380px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col"
            style={{ maxHeight: "500px" }}
          >
            {/* Header */}
            <div className="bg-[#1E293B] px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-[#2563EB] rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t("chatbot.title")}</div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                    <span className="text-xs text-white/60">{lang === "en" ? "Online" : "متصل"}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                aria-label={lang === "en" ? "Close chat" : "إغلاق المحادثة"}
                className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5 text-white/70" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[250px] max-h-[320px]">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.isBot ? "justify-start" : "justify-end"}`}>
                  <div
                    className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                      msg.isBot
                        ? "bg-[#F1F5F9] text-[#334155] rounded-bl-sm"
                        : "bg-[#2563EB] text-white rounded-br-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-[#F1F5F9] px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#94A3B8] animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 rounded-full bg-[#94A3B8] animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 rounded-full bg-[#94A3B8] animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Options */}
            {messages.length <= 1 && (
              <div className="px-4 pb-2 flex flex-wrap gap-2">
                {quickOptions.map((opt) => (
                  <button
                    key={opt.key}
                    onClick={() => sendMessage(t(opt.key), opt.responseKey)}
                    className="px-3 py-1.5 text-xs font-medium bg-[#F1F5F9] text-[#2563EB] rounded-full hover:bg-[#2563EB]/10 transition-colors border border-[#2563EB]/20"
                  >
                    {t(opt.key)}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-3 border-t border-gray-100 flex gap-2">
              <input
                type="text"
                aria-label={t("chatbot.placeholder")}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t("chatbot.placeholder")}
                className="flex-1 px-4 py-2.5 bg-[#F8FAFC] border border-gray-200 rounded-xl text-sm text-[#1E293B] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB] transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                aria-label={lang === "en" ? "Send" : "إرسال"}
                className="p-2.5 bg-[#2563EB] text-white rounded-xl hover:bg-[#1D4ED8] transition-colors disabled:opacity-40"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? (lang === "en" ? "Close chat" : "إغلاق المحادثة") : (lang === "en" ? "Open chat assistant" : "فتح المساعد")}
        aria-expanded={isOpen}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
          isOpen
            ? "bg-[#1E293B] shadow-[#1E293B]/30"
            : "bg-[#2563EB] shadow-[#2563EB]/30 hover:shadow-xl hover:shadow-[#2563EB]/40"
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </motion.button>
    </div>
  );
}
