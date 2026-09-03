import { useEffect, useRef, useState } from 'react'

/**
 * Animates a number from 0 to `target` once the returned ref scrolls into
 * view. Runs once per mount (re-entering the viewport doesn't restart it).
 * Respects prefers-reduced-motion by jumping straight to the target.
 */
export function useCountUp(target, { duration = 1200 } = {}) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const hasRun = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || hasRun.current) return
          hasRun.current = true

          if (prefersReducedMotion) {
            setValue(target)
            return
          }

          const start = performance.now()
          const tick = (now) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            // ease-out cubic — fast start, gentle settle
            const eased = 1 - Math.pow(1 - progress, 3)
            setValue(Math.round(eased * target))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)

          observer.disconnect()
        })
      },
      { threshold: 0.4 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [target, duration])

  return [ref, value]
}
