// src/components/ResultPage.tsx
import { motion } from 'framer-motion';
import type { Result, Song } from '../data/mock';

interface ResultPageProps {
  result: Result;
  onRestart: () => void;
}

// 歌曲卡片组件
function SongCard({ song, isPrimary = false }: { song: Song; isPrimary?: boolean }) {
  return (
    <motion.div
      className={`${isPrimary ? 'bg-white rounded-2xl p-5 sm:p-8 shadow-xl' : 'bg-white/80 backdrop-blur-sm rounded-xl p-3 sm:p-4'}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: isPrimary ? 0.2 : 0.5 }}
    >
      {/* 专辑封面 */}
      {song.albumImage && (
        <motion.div
          className={`${isPrimary ? 'mb-5' : 'mb-2'} flex justify-center`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15 }}
        >
          <img
            src={song.albumImage}
            alt={song.album}
            className={`${isPrimary ? 'w-56 h-56 sm:w-72 sm:h-72' : 'w-14 h-14 sm:w-18 sm:h-18'} object-cover rounded-lg shadow-md`}
          />
        </motion.div>
      )}

      {/* 歌曲标题 */}
      <motion.h2
        className={`${isPrimary ? 'text-3xl sm:text-4xl' : 'text-base sm:text-lg'} font-black text-gray-900 mb-2 text-center`}
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, type: 'spring' }}
      >
        {song.title}
      </motion.h2>

      {/* 年份和专辑 */}
      {isPrimary && (
        <p className="text-sm sm:text-base text-gray-600 mb-3 text-center">
          来自{song.year}年，收录于{song.album}
          {song.originalArtist && (
            <span className="text-gray-500"> (翻自{song.originalArtist})</span>
          )}
        </p>
      )}

      {/* 描述 */}
      {isPrimary && (
        <motion.p
          className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {song.description}
        </motion.p>
      )}

      {/* 歌词 */}
      {isPrimary && (
        <motion.p
          className="text-base sm:text-lg text-gray-500 italic text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {song.lyrics}
        </motion.p>
      )}
    </motion.div>
  );
}

// 旧的AbilityChart组件已删除

export default function ResultPage({ result, onRestart }: ResultPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 py-8">
      <div className="max-w-lg w-full">
        {/* 背景容器 */}
        <div className="bg-gradient-to-br from-stone-600 via-stone-500 to-stone-400 rounded-2xl p-4 sm:p-6">
          {/* 主结果 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SongCard song={result.primary} isPrimary={true} />
          </motion.div>

          {/* 次要结果（三列并排） */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-white font-bold text-lg sm:text-xl mt-4 sm:mt-6 mb-2 sm:mb-3">
              也可以试试：
            </h2>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 sm:p-4">
              <div className="grid grid-cols-3 gap-3">
                {result.secondaries.map((song) => (
                  <div key={song.id} className="flex items-center gap-2">
                    {song.albumImage && (
                      <img
                        src={song.albumImage}
                        alt={song.album}
                        className="w-12 h-12 sm:w-14 sm:h-14 object-cover rounded-lg shadow-sm flex-shrink-0"
                      />
                    )}
                    <p className="text-xs sm:text-sm font-black text-gray-900 leading-tight">
                      {song.title.replace(/^《|》$/g, '')}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* 操作按钮 */}
        <motion.div
          className="mt-4 sm:mt-6 space-y-2 sm:space-y-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >

          {/* 重新测试按钮 */}
          <motion.button
            onClick={onRestart}
            className="w-full py-3 sm:py-4 bg-stone-700/30 backdrop-blur-sm text-stone-100 font-bold text-base sm:text-lg rounded-xl sm:rounded-2xl border-2 border-stone-400/30 hover:bg-stone-600/40 transition-all"
            whileTap={{ scale: 0.98 }}
          >
            🔄 重新测试
          </motion.button>
        </motion.div>

      </div>
    </div>
  );
}
