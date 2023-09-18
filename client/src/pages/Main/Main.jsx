import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useLocation } from "react-router-dom"
import { PageWrapper } from "@ui"
import { Header } from "@components/Header/Header"
import { useSecuredRequest } from "@hooks/useSecuredRequest"
import { setProductsList, setListIsLoading } from "@redux/products/actions"
import { FilterContainer } from "./FilterContainer"
import { PizzaList } from "./PizzaList"

export function Main() {
  const dispatch = useDispatch()
  const request = useSecuredRequest()
  const location = useLocation()

  useEffect(() => {
    dispatch(setListIsLoading(true))
    request(`/api/products/list${location.search}`, {
      method: "POST",
    }).then((response) => {
      dispatch(setProductsList(response.products))
      dispatch(setListIsLoading(false))
    })
  }, [dispatch, request, location.search])

  return (
    <PageWrapper>
      <Header hasSearch />
      <FilterContainer />
      <PizzaList />
    </PageWrapper>
  )
}
