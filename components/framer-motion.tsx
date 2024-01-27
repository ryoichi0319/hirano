/* eslint-disable no-irregular-whitespace */
import { AnimatePresence, animate, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useInView } from 'react-intersection-observer'


export default function MotionWrapper({
  children,
  shouldAnimate = true, // デフォルトでアニメーションを有効にする
  customTransition = { duration: 3 }, // デフォルトのトランジション
}: {
  children: React.ReactNode
  shouldAnimate?: boolean
  customTransition?: object

}) {
  // 一意のキーを設定するためにラップした画面のパスを取得
  const pathName = usePathname()
  const [ref, inView] = useInView({
    triggerOnce: true, // 一度だけトリガーする
  })


  return (
    // アンマウント時の動きをつけるために必要な記述
    <AnimatePresence mode="wait">
      {/* 
// eslint-disable-next-line no-irregular-whitespace, no-irregular-whitespace
　　　　　　　　　　　　//　動きをつけるために必要な記述
// eslint-disable-next-line no-irregular-whitespace
　　　　　　　　　　　　//　具体的な動きを記述
　　　　　　　　　　　　//　今回はopacityを使用して　ふわっ　を実現 */}
<div className=' '>
      <motion.div
       key={pathName}
        ref={ref} // react-intersection-observerのrefをセット
        animate={shouldAnimate ? { opacity: inView ? 1 : 0 } : {opacity: inView ? 1 : 1}}

        initial={{ opacity: 0 }} //　初期状態
        exit={{ opacity: 1 }} // アンマウント時
        transition={customTransition}
         // 渡されたトランジション
         className=' '

        
        // アニメーションの期間を2秒に設定

      >
        {children}
      </motion.div>
      </div>
    </AnimatePresence>
  )
}
