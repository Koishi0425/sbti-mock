// src/components/Home.tsx
import { motion } from 'framer-motion';

interface HomeProps {
  onStart: () => void;
}

export default function Home({ onStart }: HomeProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-8 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-16 sm:top-20 left-4 sm:left-10 w-24 sm:w-32 h-24 sm:h-32 bg-yellow-300 rounded-full opacity-20 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-16 sm:bottom-20 right-4 sm:right-10 w-32 sm:w-40 h-32 sm:h-40 bg-pink-400 rounded-full opacity-20 blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-20 sm:w-24 h-20 sm:h-24 bg-purple-400 rounded-full opacity-15 blur-2xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 7, repeat: Infinity }}
        />
      </div>

      {/* 主要内容 */}
      <motion.div
        className="relative z-10 text-center max-w-lg mx-auto px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* 标题 */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-3 sm:mb-4 tracking-tight leading-tight"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Faye TI
        </motion.h1>

        {/* 副标题 */}
        <motion.p
          className="text-lg sm:text-xl text-white/80 mb-8 sm:mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          推荐一首王菲的歌
        </motion.p>

        {/* 特点标签 */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {['12道选择题', '发现你的王菲歌'].map((tag) => (
            <span
              key={tag}
              className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs sm:text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* 开始按钮 */}
        <motion.button
          onClick={onStart}
          className="relative px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold text-lg sm:text-xl rounded-2xl shadow-lg shadow-orange-500/40 hover:shadow-xl hover:shadow-orange-500/50 transition-all"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7, type: 'spring' }}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.02 }}
        >
          <span className="flex items-center justify-center gap-2 sm:gap-3">
            <span className="text-xl sm:text-2xl">🎤</span>
            <span>开始测试</span>
          </span>
          {/* 呼吸灯效果 */}
          <motion.div
            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500"
            animate={{
              opacity: [0.5, 0.8, 0.5],
              scale: [1, 1.02, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ zIndex: -1 }}
          />
        </motion.button>

        {/* 底部提示 */}
        <motion.p
          className="mt-6 sm:mt-8 text-white/50 text-xs sm:text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          ⏱️ 预计用时 2 分钟
        </motion.p>
      </motion.div>
    </div>
  );
}
