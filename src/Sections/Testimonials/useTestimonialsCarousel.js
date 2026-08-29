import { useEffect, useRef, useState } from 'react'

const getVisibleCount = () => {
  if (typeof window === 'undefined') return 3
  if (window.matchMedia('(max-width: 639px)').matches) return 1
  if (window.matchMedia('(max-width: 959px)').matches) return 2
  return 3
}

export default function useTestimonialsCarousel(testimonials) {
  const [activePage, setActivePage] = useState(0)
  const [visibleCount, setVisibleCount] = useState(getVisibleCount)
  const gestureRef = useRef(null)
  const pageCount = Math.ceil(testimonials.length / visibleCount)
  const currentPage = Math.min(activePage, Math.max(0, pageCount - 1))
  const firstVisibleIndex = currentPage * visibleCount
  const visibleTestimonials = testimonials.slice(firstVisibleIndex, firstVisibleIndex + visibleCount)

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 639px)')
    const tabletQuery = window.matchMedia('(max-width: 959px)')
    const updateVisibleCount = () => {
      const nextCount = mobileQuery.matches ? 1 : tabletQuery.matches ? 2 : 3
      setVisibleCount(nextCount)
      setActivePage((page) => Math.min(page, Math.max(0, Math.ceil(testimonials.length / nextCount) - 1)))
    }

    mobileQuery.addEventListener('change', updateVisibleCount)
    tabletQuery.addEventListener('change', updateVisibleCount)
    return () => {
      mobileQuery.removeEventListener('change', updateVisibleCount)
      tabletQuery.removeEventListener('change', updateVisibleCount)
    }
  }, [testimonials.length])

  const showPrevious = () => {
    if (pageCount > 1) setActivePage((page) => (page - 1 + pageCount) % pageCount)
  }
  const showNext = () => {
    if (pageCount > 1) setActivePage((page) => (page + 1) % pageCount)
  }
  const showPage = (page) => setActivePage(Math.max(0, Math.min(page, pageCount - 1)))

  const interactionProps = {
    onKeyDown: (event) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        showPrevious()
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        showNext()
      }
    },
    onPointerDown: (event) => {
      if (!event.isPrimary || event.target.closest('button, a, input, textarea, select')) return
      gestureRef.current = { id: event.pointerId, x: event.clientX, y: event.clientY }
      event.currentTarget.setPointerCapture?.(event.pointerId)
    },
    onPointerCancel: (event) => {
      gestureRef.current = null
      event.currentTarget.releasePointerCapture?.(event.pointerId)
    },
    onPointerUp: (event) => {
      const gesture = gestureRef.current
      if (!gesture || gesture.id !== event.pointerId) return
      const distanceX = event.clientX - gesture.x
      const distanceY = event.clientY - gesture.y
      gestureRef.current = null
      event.currentTarget.releasePointerCapture?.(event.pointerId)
      if (Math.abs(distanceX) < 45 || Math.abs(distanceX) <= Math.abs(distanceY) * 1.25) return
      if (distanceX < 0) showNext()
      else showPrevious()
    },
  }

  return {
    currentPage,
    firstVisibleIndex,
    interactionProps,
    pageCount,
    showNext,
    showPage,
    showPrevious,
    visibleCount,
    visibleTestimonials,
  }
}
