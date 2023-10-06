import { useMemo, useState } from "react"
import { createPortal } from "react-dom"
import { Modal } from "./Modal"

export const useModal = (props) => {
  const [isOpened, setIsOpened] = useState(false)
  const [data, setData] = useState({})

  const api = useMemo(
    () => ({
      // someData? -> Object
      open(someData = {}) {
        setIsOpened(true)
        setData(someData)
        document.body.style.overflow = "hidden"
      },
      close() {
        setIsOpened(false)
        document.body.style.overflow = "initial"
      },
    }),
    []
  )

  const contextHolder = useMemo(
    () =>
      createPortal(
        isOpened && <Modal api={api} data={data} {...props} />,
        document.querySelector("#root")
      ),
    [isOpened, api, data, props]
  )

  return [api, contextHolder]
}
