import { useEffect } from "react"

export const useOutsideClick = (ref, condition, fn) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (!ref.current.contains(event.target) && condition) {
        fn()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [ref, condition, fn])
}
