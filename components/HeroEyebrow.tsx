'use client'

import { useIsDark } from '@/lib/theme'
import ShinyText from './reactbits/ShinyText'

/**
 * ShinyText paints the text through a canvas-resolved gradient, so it needs
 * literal colours rather than CSS variables: these are --ink-3 per theme, with
 * the shine at full --ink.
 */
export function HeroEyebrow({ text }: { text: string }) {
  const isDark = useIsDark()
  return (
    <ShinyText
      text={text}
      color={isDark ? '#8F8C85' : '#6B6862'}
      shineColor={isDark ? '#EDEBE6' : '#141413'}
      speed={2.4}
      delay={2.5}
      shineWidth={30}
    />
  )
}
