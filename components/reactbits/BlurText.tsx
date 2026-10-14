/*
 * BlurText from React Bits (https://reactbits.dev), adapted for this site.
 * Copyright (c) 2026 David Haz. MIT + Commons Clause License Condition v1.0:
 * free to use as part of a website; the components themselves may not be sold
 * or redistributed on their own.
 *
 * Changes from the original:
 * - renders any heading/paragraph tag and keeps normal text flow, so lines
 *   wrap between words (letters of one word never split across lines);
 * - uses LazyMotion + `m` with the domAnimation feature set, which is a much
 *   smaller bundle than the full `motion` component;
 * - the plain text sits in a visually hidden span for screen readers and the
 *   animated spans are aria-hidden;
 * - with prefers-reduced-motion the text appears at once, without the blur.
 */
'use client'

import { LazyMotion, domAnimation, m, useReducedMotion, type Transition } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

type Tag = 'h1' | 'h2' | 'h3' | 'p'
type Frame = Record<string, string | number>

type BlurTextProps = {
  text: string
  as?: Tag
  className?: string
  /** ms between consecutive segments */
  delay?: number
  /** ms before the first segment starts */
  startDelay?: number
  animateBy?: 'words' | 'letters'
  direction?: 'top' | 'bottom'
  threshold?: number
  rootMargin?: string
  /** seconds per keyframe step */
  stepDuration?: number
}

const buildKeyframes = (from: Frame, steps: Frame[]) => {
  const keys = new Set([...Object.keys(from), ...steps.flatMap((s) => Object.keys(s))])
  const keyframes: Record<string, Array<string | number>> = {}
  keys.forEach((k) => {
    keyframes[k] = [from[k] ?? 0, ...steps.map((s) => s[k] ?? 0)]
  })
  return keyframes
}

export function BlurText({
  text,
  as: Component = 'p',
  className,
  delay = 200,
  startDelay = 0,
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  stepDuration = 0.35,
}: BlurTextProps) {
  const ref = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)
  const reduce = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  const offset = direction === 'top' ? -1 : 1
  const from: Frame = { filter: 'blur(10px)', opacity: 0, y: 50 * offset }
  const steps: Frame[] = [
    { filter: 'blur(5px)', opacity: 0.5, y: -5 * offset },
    { filter: 'blur(0px)', opacity: 1, y: 0 },
  ]
  const keyframes = buildKeyframes(from, steps)
  const times = steps.length === 0 ? [0] : [0, ...steps.map((_, i) => (i + 1) / steps.length)]

  const words = text.split(' ')
  let index = 0

  const segment = (content: string, key: string) => {
    const i = index++
    const transition: Transition = reduce
      ? { duration: 0 }
      : { duration: stepDuration * steps.length, times, delay: (startDelay + i * delay) / 1000 }
    return (
      <m.span
        key={key}
        initial={from}
        animate={inView || reduce ? keyframes : from}
        transition={transition}
        style={{ display: 'inline-block', willChange: 'transform, filter, opacity' }}
      >
        {content}
      </m.span>
    )
  }

  return (
    <LazyMotion features={domAnimation} strict>
      <Component ref={ref as never} className={className}>
        <span className="sr-only">{text}</span>
        <span aria-hidden="true">
          {words.map((word, w) => (
            <span key={w}>
              {animateBy === 'letters' ? (
                <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
                  {Array.from(word).map((letter, l) => segment(letter, `${w}-${l}`))}
                </span>
              ) : (
                segment(word, String(w))
              )}
              {w < words.length - 1 ? ' ' : null}
            </span>
          ))}
        </span>
      </Component>
    </LazyMotion>
  )
}
