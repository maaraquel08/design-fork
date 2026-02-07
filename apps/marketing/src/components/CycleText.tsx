import { useEffect, useRef, useState } from "react"
import { ContentWheel, type ContentWheelProps } from "../components/ContentWheel"

/**
 * Wrapper around the ContentWheel component that automatically cycles through
 * the items at a given interval. Items must be an array of strings.
 */

type CycleTextProps = Omit<
  ContentWheelProps<string>,
  "activeIndex" | "renderItem"
> & {
  intervalMs?: number
  pauseOnLastItem?: boolean
}

const CyclingContentWheel = ({
  intervalMs = 2000,
  pauseOnLastItem = false,
  ...props
}: CycleTextProps) => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) {
      return
    }

    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        if (pauseOnLastItem && prev === props.items.length - 1) {
          setIsPaused(true)
          return prev
        }
        return prev + 1
      })
    }, intervalMs)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [intervalMs, pauseOnLastItem, props.items.length, isPaused])

  return <ContentWheel activeIndex={activeIndex} {...props} />
}

export default CyclingContentWheel
