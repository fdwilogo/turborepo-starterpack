'use client'

import { useEffect, useRef, useState } from 'react'
import type { LottiePlayer } from 'lottie-web'
import { AnimationConfigWithData, AnimationConfigWithPath } from 'lottie-web'
import { HTMLAttributes, DetailedHTMLProps } from 'react'

interface LottieAnimationProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  animationConfig:
    | Omit<AnimationConfigWithPath<'svg'>, 'container' | 'renderer'>
    | Omit<AnimationConfigWithData<'svg'>, 'container' | 'renderer'>
}

export default function LottieAnimation({ animationConfig, ...props }: LottieAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [lottie, setLottie] = useState<LottiePlayer | null>(null)

  useEffect(() => {
    import('lottie-web').then((Lottie) => setLottie(Lottie.default))
  }, [])

  useEffect(() => {
    if (lottie && ref.current) {
      const animation = lottie.loadAnimation({
        container: ref.current,
        renderer: 'svg',
        ...animationConfig,
      })

      return () => animation.destroy()
    }
  }, [animationConfig, lottie])

  return <div ref={ref} {...props} />
}
