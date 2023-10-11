import { useMemo, useState } from "react"
import { Dropdown } from "./Dropdown"

export const useDropdown = ({ children }) => {
  const [isOpened, setIsOpened] = useState(false)

  const api = useMemo(
    () => ({
      open: () => setIsOpened(true),
      close: () => setIsOpened(false),
    }),
    []
  )

  const contextHolder = useMemo(
    () => (
      <Dropdown isOpened={isOpened} api={api}>
        {children}
      </Dropdown>
    ),
    [isOpened, api, children]
  )

  return [api, contextHolder]
}
