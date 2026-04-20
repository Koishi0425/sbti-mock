// src/components/QuizCard.tsx
import { motion, AnimatePresence } from 'framer-motion';
import type { Question } from '../data/mock';

interface QuizCardProps {
  question: Question;
  questionIndex: number;
  totalQuestions: number;
  onAnswer: (optionId: string) => void;
  isExiting: boolean;
  direction: number;
}

export default function QuizCard({
  question,
  questionIndex,
  totalQuestions,
  onAnswer,
  isExiting,
  direction,
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
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-6">
      <div className="w-full max-w-md mx-auto">
        {/* 进度条 */}
        <div className="mb-6 mt-4">
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
              className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((questionIndex + 1) / totalQuestions) * 100}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          </div>
        </div>

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
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl text-3xl mb-4"
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
                  className="w-full p-4 bg-gray-50 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 border-2 border-gray-100 hover:border-purple-300 rounded-2xl text-left transition-all group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileTap={{ scale: 0.97 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-4">
                    {/* 选项字母标识 */}
                    <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 text-white font-bold rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      {String.fromCharCode(65 + index)}
                    </span>
                    {/* 选项文字 */}
                    <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors">
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
        className="fixed -bottom-10 -right-10 w-40 h-40 bg-purple-300 rounded-full opacity-20 blur-3xl pointer-events-none"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      </div>
    </div>
  );
}
