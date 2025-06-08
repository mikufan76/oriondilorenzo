'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface HeaderLinks {
  title?: string
  href?: any
}

export function HeaderLinks(props: HeaderLinks) {
  const { title, href } = props
  const pathname = usePathname()

  return (
    <Link
      className={`rounded-full border px-3 py-1 text-lg md:text-2xl ${
        pathname === '/about'
          ? 'bg-secondary border-secondary text-primary'
          : 'border-secondary hover:bg-secondary hover:text-primary'
      }`}
      href={href}
    >
      {title}
    </Link>
  )
}
