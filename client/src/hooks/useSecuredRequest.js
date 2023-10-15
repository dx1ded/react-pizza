import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { removeSecret } from "@redux/secret/actions"

export const useSecuredRequest = () => {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.secret.token)

  return useCallback(
    (url, options) =>
      fetch(url, {
        ...options,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...(options.data || {}),
          token,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw response.status
          }

          return response.json()
        })
        .catch((errorStatus) => {
          if (errorStatus === 401) {
            localStorage.removeItem("secret")
            dispatch(removeSecret())
          }
        }),
    [token, dispatch]
  )
}
