import type { Metadata } from 'next'
import styles from './preview.module.css'

export const metadata: Metadata = {
  title: 'Preview · Portfolio v2',
  robots: { index: false, follow: false },
}

/**
 * Design harness from the Claude Design project: renders the live page at both
 * target viewports side by side. Not linked from the site and not indexed.
 */
export default function PreviewPage() {
  return (
    <section className={styles.wrap}>
      <div className={styles.head}>
        <span className={styles.kicker}>Portfolio v2 · Bahasa Indonesia · mobile-first</span>
        <h1 className={styles.title}>Preview</h1>
      </div>

      <div className={styles.frames}>
        <div className={styles.frame} id="1a">
          <div className={styles.label}>
            <span className={styles.tag}>1a</span>
            <span>Mobile · 390 × 844 (utama)</span>
          </div>
          <div className={styles.phone}>
            <iframe src="/" title="Mobile" loading="lazy" />
          </div>
        </div>

        <div className={styles.frame} id="1b">
          <div className={styles.label}>
            <span className={styles.tag}>1b</span>
            <span>Desktop · 1440 × 900</span>
          </div>
          <div className={styles.desktop}>
            <div className={styles.chrome} aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <iframe src="/" title="Desktop" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}
