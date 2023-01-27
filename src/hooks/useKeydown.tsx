import { useEffect } from 'react'

/**
 * Summary: A hook that adds keydown event listeners to the document
 * @param listeners an object with keydown event keys as keys and event handlers as values
 * @returns null
 */
export function useKeydown(
  listeners: {
    [key: string]: (e: KeyboardEvent) => void
  },
  ref: React.RefObject<HTMLElement>,
) {
  useEffect(() => {
    if (ref.current === null) return undefined
    const currentRef = ref.current

    function handleKeyDown(e: KeyboardEvent) {
      if (listeners[e.key]) {
        listeners[e.key](e)
      }
    }
    currentRef.addEventListener('keydown', handleKeyDown)

    return () => {
      currentRef.removeEventListener('keydown', handleKeyDown)
    }
  }, [listeners, ref])

  return null
}
