import { useState } from "react";
import { Copy, Check } from "lucide-react"; // 使用 Lucide Icons 作为图标库
import { motion, AnimatePresence } from 'framer-motion';

const EmailCopyButton = () => {
    const [copied, setCopied] = useState(false);
  
    const handleCopy = () => {
      navigator.clipboard.writeText("xiangyang.qu2001@gmail.com");
      setCopied(true);
  
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    };
  
    return (
      <div
        className="flex items-center space-x-3 bg-white/90 text-black px-5 py-3 rounded-full shadow-md cursor-pointer hover:bg-gray-200 transition"
        onClick={handleCopy}
      >
        {/* AnimatePresence 让对勾恢复复制图标时有平滑退出动画 */}
        <AnimatePresence mode="wait">
          {copied ? (
            <motion.div
              key="check" // 让 Framer Motion 识别这是 "check" 状态
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2, ease: "easeInOut" } }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Check className="w-5 h-5 text-gray-700" />
            </motion.div>
          ) : (
            <motion.div
              key="copy" // 让 Framer Motion 识别这是 "copy" 状态
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2, ease: "easeInOut" } }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Copy className="w-5 h-5 text-gray-700" />
            </motion.div>
          )}
        </AnimatePresence>
  
        {/* 邮箱文本 */}
        <span className="text-sm font-medium select-all">xiangyang.qu2001@gmail.com</span>
      </div>
    );
  };
  
  export default EmailCopyButton;