import { PageWrapper } from "@ui"
import { Header } from "@components/Header/Header"
import { Info } from "./Info"
import { OrderHistory } from "./OrderHistory"

export function Profile() {
  return (
    <PageWrapper $pb="8rem">
      <Header />
      <Info />
      <OrderHistory />
    </PageWrapper>
  )
}
