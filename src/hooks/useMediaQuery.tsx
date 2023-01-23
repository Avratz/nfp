import { useState, useEffect } from 'react'

let deviceSizes = {
  tablet: 768,
  desktop: 1200,
  bigDesktop: 1920,
}

export function useMediaQuery({
  device,
}: {
  device: 'tablet' | 'desktop' | 'bigDesktop'
}) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      `(min-width: ${deviceSizes[device]}px)`,
    )
    if (mediaQuery.matches !== matches) {
      setMatches(mediaQuery.matches)
    }
    function listener(event: MediaQueryListEvent) {
      setMatches(event.matches)
    }
    mediaQuery.addEventListener('change', listener)

    return () => {
      mediaQuery.removeEventListener('change', listener)
    }
  }, [device, matches])

  return {
    matches,
  }
}
