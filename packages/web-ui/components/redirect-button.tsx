'use client'

import cn from '@repo/tailwind-config/cn'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button } from './button'

interface Props {
  redirectUrl: string
  text: string
  countdown: number
  className?: string
}

export function RedirectButton({ redirectUrl, text, countdown, className }: Props) {
  const [countdownInit, setCountdownInit] = useState(countdown)
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      if (countdownInit > 0) {
        setCountdownInit(countdownInit - 1)

        if (countdownInit === 1) {
          router.push(redirectUrl)
        }
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [countdownInit, redirectUrl, router])

  return (
    <Link href={redirectUrl}>
      <Button variant='link' className={cn('w-fit text-lg', className)} tabIndex={-1}>
        {text} ({countdownInit})
      </Button>
    </Link>
  )
}
