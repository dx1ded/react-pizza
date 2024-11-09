import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { removeSecret } from "@redux/secret/actions"
import { getServerUrl } from "@/utils"

export const useSecuredRequest = () => {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.secret.token)

  return useCallback(
    (url, options) =>
      fetch(getServerUrl(url), {
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
