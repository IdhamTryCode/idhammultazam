import { nav, site } from '@/lib/site'
import { ThemeToggle } from './ThemeToggle'

export function Header() {
  return (
    <header className="header">
      <nav className="header__nav" aria-label="Utama">
        <a className="brand" href="#top">
          <span className="brand__mark" aria-hidden="true">
            IM
          </span>
          <span>{site.shortName}</span>
        </a>

        <div className="header__links">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <ThemeToggle />
      </nav>
    </header>
  )
}

export function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="Navigasi bawah">
      {nav.map((item, i) => (
        <a key={item.href} href={item.href} className={i === nav.length - 1 ? 'is-primary' : undefined}>
          {item.short}
        </a>
      ))}
    </nav>
  )
}
