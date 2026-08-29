import { useEffect, useRef, useState } from 'react'

export default function useHeroCarousel(slides, { onNext, onPrevious } = {}) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [previousIndex, setPreviousIndex] = useState(null)
  const swipeStartRef = useRef(null)
  const currentIndex = activeIndex % slides.length
  const currentSlide = slides[currentIndex]
  const previousSlide = previousIndex === null ? null : slides[previousIndex % slides.length]
  const hasMultipleSlides = slides.length > 1

  const changeSlide = (nextIndex) => {
    if (nextIndex === currentIndex) return
    setPreviousIndex(currentIndex)
    setActiveIndex(nextIndex)
  }

  const showPrevious = () => {
    const nextIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1
    changeSlide(nextIndex)
    onPrevious?.(nextIndex)
  }

  const showNext = () => {
    const nextIndex = (currentIndex + 1) % slides.length
    changeSlide(nextIndex)
    onNext?.(nextIndex)
  }

  const handleKeyDown = (event) => {
    if (!hasMultipleSlides || event.currentTarget !== event.target) return
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      showPrevious()
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      showNext()
    }
  }

  const handlePointerDown = (event) => {
    if (!event.isPrimary || event.target.closest('a, button')) return
    swipeStartRef.current = { x: event.clientX, y: event.clientY }
  }

  const handlePointerUp = (event) => {
    const start = swipeStartRef.current
    swipeStartRef.current = null
    if (!start || !event.isPrimary || !hasMultipleSlides) return

    const deltaX = event.clientX - start.x
    const deltaY = event.clientY - start.y
    if (Math.abs(deltaX) < 48 || Math.abs(deltaX) <= Math.abs(deltaY) * 1.25) return
    if (deltaX > 0) showPrevious()
    else showNext()
  }

  useEffect(() => {
    if (previousIndex === null) return undefined
    const timeoutId = window.setTimeout(() => setPreviousIndex(null), 700)
    return () => window.clearTimeout(timeoutId)
  }, [currentIndex, previousIndex])

  return {
    currentIndex,
    currentSlide,
    previousSlide,
    hasMultipleSlides,
    showPrevious,
    showNext,
    showSlide: changeSlide,
    interactionProps: {
      onKeyDown: handleKeyDown,
      onPointerDown: handlePointerDown,
      onPointerUp: handlePointerUp,
      onPointerCancel: () => { swipeStartRef.current = null },
    },
  }
}
