import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSearchParams } from "react-router-dom"
import {
  setProducts,
  setProductsCount,
  setProductsLoading,
} from "@redux/products/actions"
import { useSecuredRequest } from "@hooks/useSecuredRequest"
import { PageWrapper } from "@ui"
import { Header } from "@components/Header/Header"
import { FilterWrapper } from "./FilterWrapper"
import { PizzaList } from "./PizzaList"
import { PaginationWrapper } from "./PaginationWrapper"

export function Main() {
  const dispatch = useDispatch()
  const request = useSecuredRequest()
  const [searchParams] = useSearchParams()

  useEffect(() => {
    dispatch(setProductsLoading(true))
    request(`api/products/list?${searchParams.toString()}`, {
      method: "POST",
      data: { productsPerPage: 4 },
    }).then((data) => {
      dispatch(setProducts(data.products))
      dispatch(setProductsCount(data.count))
      dispatch(setProductsLoading(false))
    })
  }, [dispatch, request, searchParams])

  return (
    <PageWrapper>
      <Header hasSearch />
      <FilterWrapper />
      <PizzaList />
      <PaginationWrapper />
    </PageWrapper>
  )
}
