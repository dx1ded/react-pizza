import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSearchParams } from "react-router-dom"
import { PageWrapper } from "@ui"
import { Header } from "@components/Header/Header"
import { useSecuredRequest } from "@hooks/useSecuredRequest"
import {
  setProductsList,
  setTotalCount,
  setListLoading,
} from "@redux/products/actions"
import { FilterContainer } from "./FilterContainer"
import { PizzaList } from "./PizzaList"
import { PaginationContainer } from "./PaginationContainer"

export function Main() {
  const dispatch = useDispatch()
  const request = useSecuredRequest()
  const [searchParams] = useSearchParams()

  useEffect(() => {
    dispatch(setListLoading(true))
    request(`api/products/list?${searchParams.toString()}`, {
      method: "POST",
    }).then((response) => {
      dispatch(setProductsList(response.products))
      dispatch(setTotalCount(response.totalCount))
      dispatch(setListLoading(false))
    })
  }, [dispatch, request, searchParams])

  return (
    <PageWrapper>
      <Header hasSearch />
      <FilterContainer />
      <PizzaList />
      <PaginationContainer />
    </PageWrapper>
  )
}
