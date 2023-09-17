import { useQuery } from "@tanstack/react-query"
import { PageWrapper } from "@ui"
import { Header } from "@components/Header/Header"
import { Filter } from "@components/Filter/Filter"
import { useSecuredRequest } from "@hooks/useSecuredRequest"
import { Pizza } from "./Pizza"

export function Main() {
  const request = useSecuredRequest()
  const { isLoading, data } = useQuery({
    queryKey: ["products"],
    queryFn: () => request("/api/products/list", { method: "POST" }),
  })

  if (isLoading) return "Loading..."

  return (
    <PageWrapper>
      <Header hasSearch />
      <Filter />
      <Pizza />
    </PageWrapper>
  )
}
