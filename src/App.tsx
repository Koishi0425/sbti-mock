// src/App.tsx
import { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import Home from './components/Home';
import QuizCard from './components/QuizCard';
import ResultPage from './components/ResultPage';
import {
  questions,
  calculateScores,
  determinePersonalityType,
  getResultByType,
} from './data/mock';
import type { Result } from './data/mock';

// 状态类型
type AppStep = 'home' | 'quiz' | 'result';

function App() {
  const [step, setStep] = useState<AppStep>('home');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<Result | null>(null);
  const [isExiting, setIsExiting] = useState(false);
  const [direction, setDirection] = useState(1); // 1: forward, -1: backward

  // 开始测试
  const handleStart = useCallback(() => {
    setStep('quiz');
    setCurrentQuestionIndex(0);
    setAnswers({});
    setResult(null);
  }, []);

  // 回答问题
  const handleAnswer = useCallback(
    (optionId: string) => {
      const currentQuestion = questions[currentQuestionIndex];

      // 记录答案
      const newAnswers = {
        ...answers,
        [currentQuestion.id]: optionId,
      };
      setAnswers(newAnswers);

      // 如果还有下一题，切换到下一题
      if (currentQuestionIndex < questions.length - 1) {
        setIsExiting(true);
        setDirection(1);

        // 等待退出动画完成
        setTimeout(() => {
          setCurrentQuestionIndex((prev) => prev + 1);
          setIsExiting(false);
        }, 300);
      } else {
        // 计算结果
        const scores = calculateScores(newAnswers);
        const personalityType = determinePersonalityType(scores);
        const resultData = getResultByType(personalityType, scores);
        setResult(resultData);
        setStep('result');
      }
    },
    [answers, currentQuestionIndex]
  );

  // 重新开始
  const handleRestart = useCallback(() => {
    setStep('home');
    setCurrentQuestionIndex(0);
    setAnswers({});
    setResult(null);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
      <AnimatePresence mode="wait">
        {step === 'home' && <Home key="home" onStart={handleStart} />}

        {step === 'quiz' && (
          <QuizCard
            key={`quiz-${currentQuestionIndex}`}
            question={questions[currentQuestionIndex]}
            questionIndex={currentQuestionIndex}
            totalQuestions={questions.length}
            onAnswer={handleAnswer}
            isExiting={isExiting}
            direction={direction}
          />
        )}

        {step === 'result' && result && (
          <ResultPage key="result" result={result} onRestart={handleRestart} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
