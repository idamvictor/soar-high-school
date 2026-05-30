import { useState, useRef, useEffect } from "react";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const SendIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

export default function WhatsAppButton({ isFixed = true }: { isFixed?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const whatsappNumber = "08138835191";
  const agentName = "SoarHigh Schools";
  const waLink = `https://wa.me/${whatsappNumber.replace(/\+/g, "")}`;

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleSend = () => {
    if (message.trim()) {
      window.open(`${waLink}?text=${encodeURIComponent(message.trim())}`, "_blank", "noopener,noreferrer");
      setMessage("");
      setIsOpen(false);
    }
  };

  return (
    <div className={isFixed ? "fixed bottom-6 right-6 z-[999] flex flex-col items-end gap-3" : "relative flex flex-col items-start md:items-end gap-3 mr-4"} ref={dropdownRef}>
      {/* Dropdown UI */}
      {isOpen && (
        <div className="w-72 rounded-2xl overflow-hidden shadow-2xl animate-in slide-in-from-bottom-4 fade-in duration-200 mb-4 bg-white border border-gray-100">
          {/* Header */}
          <div className="bg-[#075E54] px-4 py-4 flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center text-white font-bold text-lg flex-shrink-0 border-2 border-white/30">
              SH
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-bold text-sm leading-tight uppercase tracking-wide truncate">
                {agentName}
              </p>
              <div className="flex items-center gap-1 mt-1">
                <span className="w-2 h-2 rounded-full bg-[#25D366] inline-block" />
                <span className="text-white/70 text-xs">Online</span>
              </div>
            </div>
          </div>

          {/* Chat body — WhatsApp wallpaper style */}
          <div
            className="px-4 py-5 min-h-[140px]"
            style={{
              backgroundColor: "#ECE5DD",
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c5bdb6' fill-opacity='0.35'%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3Ccircle cx='30' cy='10' r='2'/%3E%3Ccircle cx='50' cy='10' r='2'/%3E%3Ccircle cx='70' cy='10' r='2'/%3E%3Ccircle cx='90' cy='10' r='2'/%3E%3Ccircle cx='10' cy='30' r='2'/%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Ccircle cx='50' cy='30' r='2'/%3E%3Ccircle cx='70' cy='30' r='2'/%3E%3Ccircle cx='90' cy='30' r='2'/%3E%3Ccircle cx='10' cy='50' r='2'/%3E%3Ccircle cx='30' cy='50' r='2'/%3E%3Ccircle cx='50' cy='50' r='2'/%3E%3Ccircle cx='70' cy='50' r='2'/%3E%3Ccircle cx='90' cy='50' r='2'/%3E%3Ccircle cx='10' cy='70' r='2'/%3E%3Ccircle cx='30' cy='70' r='2'/%3E%3Ccircle cx='50' cy='70' r='2'/%3E%3Ccircle cx='70' cy='70' r='2'/%3E%3Ccircle cx='90' cy='70' r='2'/%3E%3Ccircle cx='10' cy='90' r='2'/%3E%3Ccircle cx='30' cy='90' r='2'/%3E%3Ccircle cx='50' cy='90' r='2'/%3E%3Ccircle cx='70' cy='90' r='2'/%3E%3Ccircle cx='90' cy='90' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          >
            <div className="bg-white rounded-xl rounded-tl-sm px-4 py-3 shadow-sm max-w-[90%]">
              <p className="text-gray-500 text-[10px] font-semibold uppercase tracking-wide mb-1">
                {agentName}
              </p>
              <p className="text-gray-800 text-sm leading-relaxed">
                Hi, welcome to {agentName}, how can we help you today 😀
              </p>
              <div className="flex justify-end items-center gap-1 mt-1">
                <span className="text-gray-400 text-[10px]">
                  {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </span>
                <svg viewBox="0 0 18 18" className="w-3.5 h-3.5 text-[#53bdeb]" fill="currentColor">
                  <path d="M17.394 5.035l-.57-.444a.434.434 0 00-.606.07L8.007 15.035 5.22 11.59a.434.434 0 00-.606-.07l-.57.444a.434.434 0 00-.07.606l3.25 4.12a.58.58 0 00.9.005l9.343-11.043a.434.434 0 00-.073-.617z" />
                  <path d="M12.94 5.035l-.57-.444a.434.434 0 00-.606.07L4.723 12.19l-.573-.715a.434.434 0 00-.606-.07l-.57.444a.434.434 0 00-.07.606l1.215 1.54a.58.58 0 00.9.005L13.013 5.65a.434.434 0 00-.073-.615z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Message input bar */}
          <div className="flex items-center gap-3 bg-white px-4 py-3 border-t border-gray-100">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && message.trim()) {
                  handleSend();
                }
              }}
              placeholder="Type a message.."
              className="flex-1 text-sm text-gray-700 placeholder:text-gray-400 outline-none bg-transparent"
            />
            <button
              onClick={handleSend}
              aria-label="Send message"
              className="w-9 h-9 rounded-full bg-[#25D366] hover:bg-[#1ebe57] flex items-center justify-center flex-shrink-0 transition-colors disabled:opacity-40"
              disabled={!message.trim()}
            >
              <SendIcon className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      )}

      {/* Trigger Button */}
      <div className="relative cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-50" />
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse opacity-30" />
        <button
          aria-label="Open WhatsApp chat"
          className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
        >
          <WhatsAppIcon />
        </button>
      </div>
    </div>
  );
}
