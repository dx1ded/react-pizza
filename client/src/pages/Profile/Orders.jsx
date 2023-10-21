import { useState, useEffect, useCallback } from "react"
import ContentLoader from "react-content-loader"
import { useSecuredRequest } from "@hooks/useSecuredRequest"
import { Container, Heading, Icon } from "@ui"
import { Pagination } from "@components/Pagination/Pagination"
import { useModal } from "@components/Modal/useModal"
import { OrderDetails } from "./OrderDetails"
import { calculateTotal, formatDate } from "../../utils"
import { StyledOrders } from "./Orders.styled"

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

function Skeleton() {
  return (
    <ContentLoader
      speed={2}
      width="100%"
      height={68}
      viewBox="0 0 828 68"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="0" ry="0" width="828" height="68" />
    </ContentLoader>
  )
}

function OrderSkeleton() {
  return (
    <tr>
      <td aria-hidden style={{ padding: 0 }}>
        <Skeleton />
      </td>
      <td aria-hidden style={{ padding: 0 }}>
        <Skeleton />
      </td>
      <td aria-hidden style={{ padding: 0 }}>
        <Skeleton />
      </td>
      <td aria-hidden style={{ padding: 0 }}>
        <Skeleton />
      </td>
      <td aria-hidden style={{ padding: 0 }}>
        <Skeleton />
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

export function Orders() {
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
      setCurrentPage(page)
      setIsLoading(true)
      request(`/api/order/list/${page}`, {
        method: "POST",
        data: { ordersPerPage: 5 },
      }).then((data) => {
        setOrders(data.orders)
        setCount(data.count)
        setIsLoading(false)
      })
    },
    [request]
  )

  useEffect(getOrders, [getOrders])

  return (
    <StyledOrders>
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
    </StyledOrders>
  )
}
