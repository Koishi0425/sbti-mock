// src/components/MusicPlayer.tsx
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Song } from '../data/mock';

// 资源路径：使用相对路径兼容本地预览和腾讯云部署
const BASE_URL = '';

// 歌曲ID到音乐文件的映射
const songIdToMusic: Record<string, string> = {
  '胡思乱想': '/music/胡思乱想.mp3',
  '梦中人': '/music/梦中人.mp3',
  '讨好自己': '/music/讨好自己.mp3',
  '为非作歹': '/music/为非作歹.mp3',
  '假期': '/music/假期.mp3',
  'Di-Dar': '/music/Di-Dar.mp3',
  '浮躁': '/music/浮躁.mp3',
  '分裂': '/music/分裂.mp3',
  '末日': '/music/末日.mp3',
  '天空': '/music/天空.mp3',
  '天使': '/music/天使.mp3',
  '但愿人长久': '/music/但愿人长久.mp3',
  '不留': '/music/不留.mp3',
  '乘客': '/music/乘客.mp3',
  '脸': '/music/脸.mp3',
  '醒不来': '/music/醒不来.mp3',
  '你快乐所以我快乐': '/music/你快乐所以我快乐.mp3',
  '只爱陌生人': '/music/只爱陌生人.mp3',
  '百年孤寂': '/music/百年孤寂.mp3',
  '不得了': '/music/不得了.mp3',
  '新房客': '/music/新房客.mp3',
  '彼岸花': '/music/彼岸花.mp3',
};

interface MusicPlayerProps {
  currentSong: Song | null;
  onPlaySong?: (song: Song) => void;
}

export default function MusicPlayer({ currentSong, onPlaySong }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // 获取音乐文件路径
  const getMusicSrc = (song: Song): string | null => {
    if (song.music) {
      return `${BASE_URL}${song.music}`;
    }
    const musicPath = songIdToMusic[song.id];
    return musicPath ? `${BASE_URL}${musicPath}` : null;
  };

  const musicSrc = currentSong ? getMusicSrc(currentSong) : null;

  // 初始化音频
  useEffect(() => {
    if (audioRef.current && musicSrc) {
      audioRef.current.src = musicSrc;
      audioRef.current.load();
      // 自动播放
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // 浏览器可能会阻止自动播放，等待用户交互
        setIsPlaying(false);
      });
    }
  }, [musicSrc]);

  // 处理播放/暂停
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // 处理进度条变化
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
      setProgress((time / duration) * 100);
    }
  };

  // 更新进度
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const dur = audioRef.current.duration || 0;
      setCurrentTime(current);
      setDuration(dur);
      setProgress((current / dur) * 100);
    }
  };

  // 格式化时间
  const formatTime = (time: number): string => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!currentSong) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed bottom-0 left-0 right-0 z-50"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      >
        {/* 音频元素 */}
        <audio
          ref={audioRef}
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => setIsPlaying(false)}
          onLoadedMetadata={handleTimeUpdate}
        />

        {/* 播放器主界面 */}
        <div className="bg-gradient-to-r from-stone-800 to-stone-700 backdrop-blur-lg border-t border-stone-600/30 shadow-2xl">
          <div className="max-w-4xl mx-auto p-3 sm:p-4">
            <div className="flex items-center gap-3 sm:gap-4">
              {/* 专辑封面 */}
              <motion.button
                onClick={() => onPlaySong && onPlaySong(currentSong)}
                className="flex-shrink-0 relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {currentSong.albumImage && (
                  <img
                    src={`${BASE_URL}${currentSong.albumImage}`}
                    alt={currentSong.album}
                    className="w-12 h-12 sm:w-14 sm:h-14 object-cover rounded-lg shadow-md"
                  />
                )}
              </motion.button>

              {/* 歌曲信息 */}
              <div className="flex-1 min-w-0">
                <h3 className="text-white text-sm font-bold truncate">
                  {currentSong.title.replace(/^《|》$/g, '')}
                </h3>
                <p className="text-stone-400 text-xs truncate">
                  {currentSong.album} • {currentSong.year}年
                </p>
              </div>

              {/* 播放控制按钮 */}
              <div className="flex items-center gap-2 sm:gap-3">
                {/* 播放/暂停按钮 */}
                <motion.button
                  onClick={togglePlay}
                  className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full text-stone-800 shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {isPlaying ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </motion.button>
              </div>
            </div>

            {/* 进度条 */}
            <div className="mt-3 flex items-center gap-2">
              <span className="text-xs text-stone-400 w-10 text-right">{formatTime(currentTime)}</span>
              <div className="flex-1 relative">
                <input
                  type="range"
                  min={0}
                  max={duration || 100}
                  value={currentTime}
                  onChange={handleSeek}
                  className="w-full h-1.5 bg-stone-600 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-md"
                  style={{
                    background: `linear-gradient(to right, #a8a29e ${progress}%, #57534e ${progress}%)`,
                  }}
                />
              </div>
              <span className="text-xs text-stone-400 w-10">{formatTime(duration)}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

// 导出独立的播放器挂载函数，用于在其他组件中调用
export function useMusicPlayer() {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlayerVisible, setPlayerVisible] = useState(false);

  const playSong = (song: Song) => {
    setCurrentSong(song);
    setPlayerVisible(true);
  };

  const hidePlayer = () => {
    setPlayerVisible(false);
  };

  return {
    currentSong,
    isPlayerVisible,
    playSong,
    hidePlayer,
  };
}