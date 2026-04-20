// src/components/ProgressBar.tsx
import { motion } from 'framer-motion';

interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = (current / total) * 100;

  return (
    <div className="w-full px-4 py-4">
      {/* 进度信息 */}
      <div className="flex justify-between items-center mb-3">
        <span className="text-white/70 text-sm font-medium">
          问题 {current + 1} / {total}
        </span>
        <span className="text-white/70 text-sm font-medium">
          {Math.round(progress)}%
        </span>
      </div>

      {/* 进度条背景 */}
      <div className="h-3 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
        {/* 进度条填充 */}
        <motion.div
          className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>

      {/* 装饰性点点 */}
      <div className="flex justify-between mt-2 px-1">
        {Array.from({ length: total }).map((_, index) => (
          <motion.div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index <= current ? 'bg-white' : 'bg-white/30'
            }`}
            initial={false}
            animate={{
              scale: index === current ? 1.5 : 1,
              backgroundColor:
                index <= current ? '#ffffff' : 'rgba(255,255,255,0.3)',
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </div>
  );
}
