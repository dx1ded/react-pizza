import { useEffect } from "react"

export const useGlobalClick = (fn, condition) => {
  useEffect(() => {
    function handleGlobalClick() {
      if (condition) fn()
    }

    document.addEventListener("mousedown", handleGlobalClick)
    return () => {
      document.removeEventListener("mousedown", handleGlobalClick)
    }
  }, [fn, condition])
}
