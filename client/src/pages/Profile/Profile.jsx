import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setUser, setAddresses, setIsLoading } from "@redux/profile/actions"
import { useSecuredRequest } from "@hooks/useSecuredRequest"
import { PageWrapper } from "@ui"
import { Header } from "@components/Header/Header"
import { Orders } from "./Orders"
import { Info } from "./Info"

export function Profile() {
  const dispatch = useDispatch()
  const request = useSecuredRequest()

  useEffect(() => {
    request("/api/account/info", {
      method: "POST",
    }).then((data) => {
      dispatch(setUser(data.user))
      dispatch(setAddresses(data.addresses))
      dispatch(setIsLoading(false))
    })
  }, [request, dispatch])

  return (
    <PageWrapper $pb="8rem">
      <Header />
      <Info />
      <Orders />
    </PageWrapper>
  )
}
