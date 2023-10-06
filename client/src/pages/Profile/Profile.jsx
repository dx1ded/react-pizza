import { useEffect } from "react"
import { useDispatch } from "react-redux"
import {
  setAddresses,
  setIsLoading,
  setProfileInfo,
} from "@redux/profile/actions"
import { useSecuredRequest } from "@hooks/useSecuredRequest"
import { PageWrapper } from "@ui"
import { Header } from "@components/Header/Header"
import { OrderHistory } from "./OrderHistory"
import { Info } from "./Info"

export function Profile() {
  const request = useSecuredRequest()
  const dispatch = useDispatch()

  useEffect(() => {
    request("/api/account/info", {
      method: "POST",
    }).then((response) => {
      dispatch(setProfileInfo(response.user))
      dispatch(setAddresses(response.addresses))
      dispatch(setIsLoading(false))
    })
  }, [request, dispatch])

  return (
    <PageWrapper $pb="8rem">
      <Header />
      <Info />
      <OrderHistory />
    </PageWrapper>
  )
}
