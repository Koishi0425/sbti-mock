// src/components/ResultPage.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import html2canvas from 'html2canvas';
import type { Result, Song } from '../data/mock';

interface ResultPageProps {
  result: Result;
  onRestart: () => void;
}

// 歌曲卡片组件
function SongCard({ song, isPrimary = false }: { song: Song; isPrimary?: boolean }) {
  return (
    <motion.div
      className={`${isPrimary ? 'bg-white rounded-2xl p-4 sm:p-6 shadow-xl' : 'bg-white/80 backdrop-blur-sm rounded-xl p-3 sm:p-4'}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: isPrimary ? 0.2 : 0.5 }}
    >
      {/* 歌曲标题 */}
      <motion.h2
        className={`${isPrimary ? 'text-2xl sm:text-3xl' : 'text-lg sm:text-xl'} font-black text-gray-900 mb-2`}
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, type: 'spring' }}
      >
        {song.title}
      </motion.h2>
      
      {/* 年份和专辑 */}
      <p className={`${isPrimary ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'} text-gray-600 mb-2`}>
        来自{song.year}年，收录于{song.album}
        {song.originalArtist && (
          <span className="text-gray-500"> (翻自{song.originalArtist})</span>
        )}
      </p>
      
      {/* 描述 */}
      {isPrimary && (
        <motion.p
          className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {song.description}
        </motion.p>
      )}
      
      {/* 歌词 */}
      <motion.p
        className={`${isPrimary ? 'text-base sm:text-lg' : 'text-xs sm:text-sm'} text-gray-500 italic`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: isPrimary ? 0.5 : 0.6 }}
      >
        {song.lyrics}
      </motion.p>
    </motion.div>
  );
}

// 旧的AbilityChart组件已删除

export default function ResultPage({ result, onRestart }: ResultPageProps) {
  const posterRef = document.getElementById('poster-container');
  const [isGenerating, setIsGenerating] = useState(false);

  // 生成海报
  const generatePoster = async () => {
    if (!posterRef) return;
    
    setIsGenerating(true);
    try {
      const canvas = await html2canvas(posterRef, {
        scale: 2,
        backgroundColor: '#8B5CF6',
        useCORS: true,
      });
      
      const link = document.createElement('a');
      link.download = `Faye-TI-结果.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error('Failed to generate poster:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 py-8">
      <div className="max-w-lg w-full">
        {/* 海报容器（用于截图） */}
        <div id="poster-container" className="bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 rounded-2xl p-4 sm:p-6">
          {/* 主结果 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-4xl sm:text-5xl mb-2">🎵</div>
            <h1 className="text-2xl sm:text-3xl font-black text-white mb-4">
              你的王菲歌
            </h1>
            <SongCard song={result.primary} isPrimary={true} />
          </motion.div>

          {/* 可以再试试 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-white font-bold text-lg sm:text-xl mt-4 sm:mt-6 mb-2 sm:mb-3">
              可以再试试：
            </h2>
            <SongCard song={result.secondary} isPrimary={false} />
          </motion.div>

          {/* 底部品牌 */}
          <motion.div
            className="text-center mt-4 sm:mt-6 text-white/60 text-xs sm:text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Faye TI - 推荐一首王菲的歌
          </motion.div>
        </div>

        {/* 操作按钮 */}
        <motion.div
          className="mt-4 sm:mt-6 space-y-2 sm:space-y-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
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
          transition={{ delay: 0.9 }}
        >
          分享给你的朋友们，看看他们的王菲歌是什么！
        </motion.p>
      </div>
    </div>
  );
}
