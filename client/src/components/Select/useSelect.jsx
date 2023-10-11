import { useState, useMemo, useEffect } from "react"
import { Select } from "./Select"

export const useSelect = ({ list, activeIndex = 0, onChange }) => {
  const [isOpened, setIsOpened] = useState(false)
  const [active, setActive] = useState(list[0])

  useEffect(() => setActive(list[activeIndex]), [list, activeIndex])

  const props = useMemo(
    () => ({
      isOpened,
      active,
      toggle: () => setIsOpened(!isOpened),
    }),
    [isOpened, active]
  )

  const contextHandler = useMemo(
    () => (
      <Select
        list={list}
        setActive={setActive}
        onChange={onChange}
        {...props}
      />
    ),
    [list, onChange, props]
  )

  return { ...props, contextHandler }
}
