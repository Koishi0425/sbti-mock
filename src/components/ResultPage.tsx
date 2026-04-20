// src/components/ResultPage.tsx
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import html2canvas from 'html2canvas';
import type { Result, AbilityScore } from '../data/mock';

interface ResultPageProps {
  result: Result;
  onRestart: () => void;
}

// 能力雷达图组件
function AbilityChart({ abilities }: { abilities: AbilityScore[] }) {
  const maxScore = 100;
  const centerX = 150;
  const centerY = 150;
  const radius = 100;

  // 计算每个点的坐标
  const points = abilities.map((ability, index) => {
    const angle = (Math.PI * 2 * index) / abilities.length - Math.PI / 2;
    const value = (ability.score / maxScore) * radius;
    return {
      x: centerX + Math.cos(angle) * value,
      y: centerY + Math.sin(angle) * value,
      ability,
    };
  });

  // 计算多边形点
  const polygonPoints = points.map((p) => `${p.x},${p.y}`).join(' ');

  // 计算背景网格
  const gridLevels = [25, 50, 75, 100];
  const gridPolygons = gridLevels.map((level) => {
    const r = (level / maxScore) * radius;
    return abilities
      .map((_, index) => {
        const angle =
          (Math.PI * 2 * index) / abilities.length - Math.PI / 2;
        return `${centerX + Math.cos(angle) * r},${
          centerY + Math.sin(angle) * r
        }`;
      })
      .join(' ');
  });

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 sm:p-4">
      <svg viewBox="0 0 300 300" className="w-full max-w-[250px] sm:max-w-xs mx-auto">
        {/* 背景网格 */}
        {gridPolygons.map((points, index) => (
          <polygon
            key={index}
            points={points}
            fill="none"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1"
          />
        ))}

        {/* 连接线 */}
        {points.map((point, index) => (
          <line
            key={index}
            x1={centerX}
            y1={centerY}
            x2={point.x}
            y2={point.y}
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1"
          />
        ))}

        {/* 数据多边形 */}
        <motion.polygon
          points={polygonPoints}
          fill="rgba(255,200,100,0.3)"
          stroke="#FFD700"
          strokeWidth="2"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />

        {/* 数据点 */}
        {points.map((point, index) => (
          <motion.circle
            key={index}
            cx={point.x}
            cy={point.y}
            r="5"
            fill="#FFD700"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
          />
        ))}

        {/* 标签 */}
        {abilities.map((ability, index) => {
          const angle =
            (Math.PI * 2 * index) / abilities.length - Math.PI / 2;
          const labelRadius = radius + 25;
          const x = centerX + Math.cos(angle) * labelRadius;
          const y = centerY + Math.sin(angle) * labelRadius;

          return (
            <text
              key={index}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="white"
              fontSize="12"
              fontWeight="bold"
            >
              {ability.label}
            </text>
          );
        })}
      </svg>

      {/* 数值显示 */}
      <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-3 sm:mt-4">
        {abilities.map((ability, index) => (
          <motion.div
            key={index}
            className="bg-white/10 rounded-xl p-2 sm:p-3 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + index * 0.1 }}
          >
            <div className="text-white/70 text-xs mb-1">{ability.label}</div>
            <div className="text-white text-lg sm:text-xl font-bold">{ability.score}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function ResultPage({ result, onRestart }: ResultPageProps) {
  const resultRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  // 生成海报
  const generatePoster = async () => {
    if (!resultRef.current) return;

    setIsGenerating(true);
    try {
      const canvas = await html2canvas(resultRef.current, {
        backgroundColor: null,
        scale: 2,
        useCORS: true,
      });

      // 转换为图片并下载
      const link = document.createElement('a');
      link.download = `SBTI_${result.title}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error('生成海报失败:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen py-4 sm:py-6 px-3 sm:px-4 overflow-auto">
      <div className="max-w-lg mx-auto">
        {/* 可截图区域 - 海报内容 */}
        <div ref={resultRef} className="bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl">
          {/* 标题 */}
          <motion.div
            className="text-center mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-4xl sm:text-5xl md:text-6xl mb-2">🎉</div>
            <h1 className="text-2xl sm:text-3xl font-black text-white mb-2">
              你的性格类型
            </h1>
            <motion.div
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white/20 backdrop-blur-md rounded-xl sm:rounded-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: 'spring' }}
            >
              <span className="text-4xl sm:text-5xl md:text-6xl font-black text-white">
                {result.title}
              </span>
            </motion.div>
          </motion.div>

          {/* 抽象标签 */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-4 sm:mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {result.tags.map((tag, index) => (
              <motion.span
                key={index}
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/30 backdrop-blur-sm rounded-full text-white font-bold text-xs sm:text-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* 详细描述 */}
          <motion.div
            className="bg-white/95 rounded-xl sm:rounded-2xl p-4 sm:p-5 mb-4 sm:mb-6 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-gray-700 leading-relaxed text-center text-sm sm:text-base">
              {result.description}
            </p>
          </motion.div>

          {/* 能力雷达图 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-white font-bold text-base sm:text-lg mb-2 sm:mb-3 text-center">
              📊 能力雷达图
            </h3>
            <AbilityChart abilities={result.abilities} />
          </motion.div>

          {/* 建议 */}
          <motion.div
            className="mt-4 sm:mt-6 bg-white/95 rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h3 className="text-purple-600 font-bold text-base sm:text-lg mb-2 sm:mb-3 flex items-center gap-2">
              💡 专属建议
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {result.recommendations.map((rec, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-2 text-gray-700 text-sm sm:text-base"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <span className="text-purple-500 mt-0.5">•</span>
                  <span>{rec}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* 底部品牌 */}
          <motion.div
            className="text-center mt-4 sm:mt-6 text-white/60 text-xs sm:text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            SBTI 傻大个性格测试
          </motion.div>
        </div>

        {/* 操作按钮 */}
        <motion.div
          className="mt-4 sm:mt-6 space-y-2 sm:space-y-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          {/* 生成海报按钮 */}
          <motion.button
            onClick={generatePoster}
            disabled={isGenerating}
            className="w-full py-3 sm:py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold text-base sm:text-lg rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 sm:gap-3"
            whileTap={{ scale: 0.98 }}
            whileHover={{ scale: 1.02 }}
          >
            {isGenerating ? (
              <>
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  🔄
                </motion.span>
                生成中...
              </>
            ) : (
              <>
                <span>📸</span>
                生成海报保存
              </>
            )}
          </motion.button>

          {/* 重新测试按钮 */}
          <motion.button
            onClick={onRestart}
            className="w-full py-3 sm:py-4 bg-white/20 backdrop-blur-sm text-white font-bold text-base sm:text-lg rounded-xl sm:rounded-2xl border-2 border-white/30 hover:bg-white/30 transition-all"
            whileTap={{ scale: 0.98 }}
          >
            🔄 重新测试
          </motion.button>
        </motion.div>

        {/* 分享提示 */}
        <motion.p
          className="text-center text-white/50 text-xs sm:text-sm mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          分享给你的朋友们，看看他们的性格类型吧！
        </motion.p>
      </div>
    </div>
  );
}
