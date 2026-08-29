import { useRef, useState } from 'react'

export default function useFAQAccordion(items, initiallyOpenId = items[0]?.id ?? null) {
  const [openId, setOpenId] = useState(initiallyOpenId)
  const triggerRefs = useRef(new Map())
  const currentOpenId = items.some(({ id }) => id === openId) ? openId : null

  const toggleItem = (itemId) => {
    setOpenId((current) => current === itemId ? null : itemId)
  }

  const registerTrigger = (itemId) => (element) => {
    if (element) triggerRefs.current.set(itemId, element)
    else triggerRefs.current.delete(itemId)
  }

  const handleTriggerKeyDown = (event, index) => {
    let targetIndex

    switch (event.key) {
      case 'ArrowDown':
        targetIndex = (index + 1) % items.length
        break
      case 'ArrowUp':
        targetIndex = (index - 1 + items.length) % items.length
        break
      case 'Home':
        targetIndex = 0
        break
      case 'End':
        targetIndex = items.length - 1
        break
      default:
        return
    }

    event.preventDefault()
    triggerRefs.current.get(items[targetIndex]?.id)?.focus()
  }

  return {
    handleTriggerKeyDown,
    isOpen: (itemId) => currentOpenId === itemId,
    registerTrigger,
    toggleItem,
  }
}
