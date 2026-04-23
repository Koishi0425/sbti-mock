// src/components/Home.tsx
import { motion } from 'framer-motion';
import homeImage from '../assets/首页王菲.png';

interface HomeProps {
  onStart: () => void;
}

export default function Home({ onStart }: HomeProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-8 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-16 sm:top-20 left-4 sm:left-10 w-24 sm:w-32 h-24 sm:h-32 bg-amber-200 rounded-full opacity-20 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-16 sm:bottom-20 right-4 sm:right-10 w-32 sm:w-40 h-32 sm:h-40 bg-stone-300 rounded-full opacity-20 blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-20 sm:w-24 h-20 sm:h-24 bg-stone-400 rounded-full opacity-15 blur-2xl"
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
          className="text-2xl sm:text-3xl font-light text-white/60 mb-6 tracking-widest uppercase"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Faye TI
        </motion.h1>

        {/* 主标题 */}
        <motion.p
          className="text-2xl sm:text-3xl md:text-4xl font-black font-serif-sc text-white mb-10 sm:mb-12 leading-snug"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          ✨ 推荐一首王菲的歌 ✨
        </motion.p>

        {/* 王菲照片 */}
        <motion.div
          className="mb-10 sm:mb-12 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <img
            src={homeImage}
            alt="王菲"
            className="w-72 h-72 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] object-cover rounded-full shadow-2xl border-4 border-stone-300/40"
          />
        </motion.div>


        {/* 开始按钮 */}
        <motion.button
          onClick={onStart}
          className="relative px-8 sm:px-12 py-4 sm:py-5 text-stone-800 font-bold text-lg sm:text-xl rounded-2xl mt-10 sm:mt-12"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.05, type: 'spring' }}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.03 }}
        >
          {/* 渐变背景+阴影呼吸 */}
          <motion.span
            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-100 to-stone-200"
            animate={{
              boxShadow: [
                '0 8px 30px rgba(251, 191, 36, 0.20), 0 4px 15px rgba(0,0,0,0.15)',
                '0 8px 50px rgba(251, 191, 36, 0.45), 0 4px 20px rgba(0,0,0,0.25)',
                '0 8px 30px rgba(251, 191, 36, 0.20), 0 4px 15px rgba(0,0,0,0.15)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <span className="relative flex items-center justify-center gap-2 sm:gap-3">
            <span className="text-xl sm:text-2xl">🎤</span>
            <span>开始测试</span>
          </span>
        </motion.button>

        {/* 作者 */}
        <motion.p
          className="mt-10 sm:mt-12 text-white/40 text-xs sm:text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <a
            href="https://www.xiaohongshu.com/user/profile/65cb1e65000000000901690e"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/60 transition-colors"
          >
            Mieule
          </a>
          &格拉摩根
        </motion.p>
      </motion.div>
    </div>
  );
}
