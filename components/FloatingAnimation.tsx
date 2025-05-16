import { motion } from 'framer-motion';
import type React from 'react';

type Props = {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  amount?: number;
  className?: string;
};

/**
 * 画像をふわふわと浮遊させるアニメーションコンポーネント
 * 優しく上下に浮かぶような動きを実現します
 */
export default function FloatingAnimation({
  children,
  delay = 0,
  duration = 6,
  amount = 8,
  className = '',
}: Props) {
  // ふわふわと浮かぶようなアニメーション定義
  const floatingAnimation = {
    y: [0, -amount, 0],
    transition: {
      delay: delay,
      duration: duration,
      repeat: 2,
      repeatType: 'reverse' as const,
      ease: 'easeInOut',
    },
  };

  return (
    <motion.div 
      animate={floatingAnimation}
      className={className}
    >
      {children}
    </motion.div>
  );
}
