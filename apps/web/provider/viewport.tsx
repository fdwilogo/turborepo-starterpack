'use client'

import { ReactElement, ReactNode, createContext, useEffect, useState } from 'react'

export interface ViewportContextType {
  isMobile: boolean
  isMobileExtend: boolean
  viewport: number
}

export const ViewportContext = createContext<ViewportContextType>({
  isMobile: false,
  isMobileExtend: false,
  viewport: 0,
})

interface IViewportProvider {
  children: React.ReactNode
}

export function ViewportProvider({ children }: { children: ReactNode }): ReactElement<IViewportProvider> {
  const [isMobile, setIsMobile] = useState(false)
  const [isMobileExtend, setIsMobileExtend] = useState(false)
  const [viewport, setViewport] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      setIsMobileExtend(window.innerWidth < 900)
      setViewport(window.innerWidth)
    }

    // Initial check on component mount
    handleResize()

    // Event listener for window resize
    window.addEventListener('resize', handleResize)

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <ViewportContext.Provider value={{ isMobile, isMobileExtend, viewport }}>{children}</ViewportContext.Provider>
}
