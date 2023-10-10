import { useState, useEffect, useCallback } from "react"
import ContentLoader from "react-content-loader"
import { useSecuredRequest } from "@hooks/useSecuredRequest"
import { Pagination } from "@components/Pagination/Pagination"
import { Container, Heading, Icon } from "@ui"
import { useModal } from "@components/Modal/useModal"
import { StyledOrderHistory } from "./OrderHistory.styled"
import { calculateTotal, formatDate } from "../../utils"
import { OrderDetails } from "./OrderDetails"

function Order({ data, api }) {
  const itemsTitles = data.items.reduce(
    (acc, item) =>
      !acc.includes(item.title) ? (acc.push(item.title), acc) : acc,
    []
  )

  return (
    <tr>
      <td>{formatDate(data.createdAt)}</td>
      <td>{data._id}</td>
      <td>{itemsTitles.join(", ")}</td>
      <td>$ {calculateTotal(data.items)}.00</td>
      <td>
        <button type="button" onClick={() => api.open(data)}>
          <Icon>navigate_next</Icon>
        </button>
      </td>
    </tr>
  )
}

function OrderSkeleton() {
  return (
    <tr>
      <td aria-hidden style={{ padding: 0 }}>
        <ContentLoader
          speed={2}
          width={828}
          height={68}
          viewBox="0 0 828 68"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="0" ry="0" width="828" height="68" />
        </ContentLoader>
      </td>
    </tr>
  )
}

function NoOrders() {
  return (
    <tr>
      <td aria-hidden />
      <td aria-hidden />
      <td style={{ textAlign: "center" }}>No records</td>
      <td aria-hidden />
      <td aria-hidden />
    </tr>
  )
}

export function OrderHistory() {
  const request = useSecuredRequest()
  const [currentPage, setCurrentPage] = useState(1)
  const [count, setCount] = useState(0)
  const [orders, setOrders] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [api, contentHolder] = useModal({
    title: "Details",
    Component: OrderDetails,
    hasCancelButton: true,
  })

  const getOrders = useCallback(
    (page = 1) => {
      setIsLoading(true)
      request(`/api/order/list/${page}`, {
        method: "POST",
      }).then((response) => {
        setOrders(response.orders)
        setCount(response.count)
        setIsLoading(false)
      })
    },
    [request]
  )

  useEffect(getOrders, [getOrders])

  return (
    <StyledOrderHistory>
      {contentHolder}
      <Container $mw="58rem">
        <Heading $size="1.5rem" $mb="1.5rem">
          Order History
        </Heading>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Order ID</th>
              <th>Items</th>
              <th>Total</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <OrderSkeleton />
            ) : !isLoading && !orders.length ? (
              <NoOrders />
            ) : (
              orders.map((order) => (
                <Order key={order._id} data={order} api={api} />
              ))
            )}
          </tbody>
        </table>
        <Pagination
          currentPage={currentPage}
          totalElements={count}
          elementsPerPage={5}
          onChange={getOrders}
        />
      </Container>
    </StyledOrderHistory>
  )
}
