// src/components/QuizCard.tsx
import { motion, AnimatePresence } from 'framer-motion';
import type { Question } from '../data/mock';

interface QuizCardProps {
  question: Question;
  questionIndex: number;
  totalQuestions: number;
  onAnswer: (optionId: string) => void;
  onGoBack: () => void;
  isExiting: boolean;
  direction: number;
  canGoBack: boolean;
}

export default function QuizCard({
  question,
  questionIndex,
  totalQuestions,
  onAnswer,
  onGoBack,
  isExiting,
  direction,
  canGoBack,
}: QuizCardProps) {
  // 滑入滑出动画变体
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-4 py-8 relative">
      <div className="w-full max-w-md mx-auto relative">
        {/* 进度条 */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-white/80 text-sm font-medium">
              问题 {questionIndex + 1} / {totalQuestions}
            </span>
            <span className="text-white/80 text-sm font-medium">
              {Math.round(((questionIndex + 1) / totalQuestions) * 100)}%
            </span>
          </div>
          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-stone-400 to-stone-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((questionIndex + 1) / totalQuestions) * 100}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          </div>
        </div>

        {/* 返回按钮 */}
        {canGoBack && (
          <motion.button
            onClick={onGoBack}
            className="absolute top-4 left-4 sm:top-6 sm:left-6 px-3 py-1.5 bg-white/20 hover:bg-white/30 text-white/80 hover:text-white text-sm font-medium rounded-xl transition-all backdrop-blur-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileTap={{ scale: 0.95 }}
          >
            ← 返回
          </motion.button>
        )}

      {/* 题目卡片 */}
      <AnimatePresence mode="wait" custom={direction}>
        {!isExiting && (
          <motion.div
            key={question.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
              scale: { duration: 0.2 },
            }}
            className="bg-white/95 backdrop-blur-lg rounded-3xl p-6 shadow-2xl"
          >
            {/* 题目图标 */}
            <div className="text-center mb-6">
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-stone-500 to-stone-600 rounded-2xl text-3xl mb-4"
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              >
                💭
              </motion.div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 leading-relaxed">
                {question.questionText}
              </h2>
            </div>

            {/* 选项列表 */}
            <div className="space-y-3">
              {question.options.map((option, index) => (
                <motion.button
                  key={option.id}
                  onClick={() => onAnswer(option.id)}
                  className="w-full p-4 bg-stone-100 hover:bg-gradient-to-r hover:from-stone-100 hover:to-stone-200 border-2 border-stone-200 hover:border-stone-400 rounded-2xl text-left transition-all group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileTap={{ scale: 0.97 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-4">
                    {/* 选项字母标识 */}
                    <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-stone-500 to-stone-600 text-white font-bold rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      {String.fromCharCode(65 + index)}
                    </span>
                    {/* 选项文字 */}
                    <span className="text-stone-700 font-medium group-hover:text-stone-900 transition-colors">
                      {option.text}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 装饰元素 */}
      <motion.div
        className="fixed -bottom-10 -right-10 w-40 h-40 bg-stone-400 rounded-full opacity-20 blur-3xl pointer-events-none"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      </div>
    </div>
  );
}
