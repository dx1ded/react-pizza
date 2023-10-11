import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import ContentLoader from "react-content-loader"
import { clearCart } from "@redux/cart/actions"
import { useSecuredRequest } from "@hooks/useSecuredRequest"
import { Button, Heading, Text } from "@ui"
import { ReviewSection, StyledReview, StyledTableItem } from "./Review.styled"
import { calculateTotal, getAddressString, types } from "../../utils"

function TableItemSkeleton() {
  return (
    <td>
      <ContentLoader
        speed={2}
        width={696}
        height={102}
        viewBox="0 0 696 102"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="9" ry="9" width="696" height="102" />
      </ContentLoader>
    </td>
  )
}

function TableItem({ item }) {
  const [_, type, size] = item._id.split("_")

  return (
    <StyledTableItem>
      <td>
        <img src={item.imageUrl} alt="Product" />
      </td>
      <td>{item.title}</td>
      <td>{types[type]}</td>
      <td>{size}</td>
      <td>{item.count}</td>
      <td>{item.price * item.count} $</td>
    </StyledTableItem>
  )
}

export function Review({ data, setIsDone }) {
  const dispatch = useDispatch()
  const request = useSecuredRequest()
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const cartList = JSON.parse(localStorage.getItem("cart"))

    request("/api/products/listByIds", {
      method: "POST",
      data: { ids: Object.keys(cartList) },
    }).then((data) => {
      const itemsWithCount = data.items.map((item) => ({
        ...item,
        count: cartList[item._id],
      }))

      setItems(itemsWithCount)
      setIsLoading(false)
    })
  }, [request])

  const clickHandler = () => {
    setIsLoading(true)
    request("/api/order/place", {
      method: "POST",
      data: { items, address: data.address, payMethod: data.payMethod },
    }).then(() => {
      dispatch(clearCart())
      setIsLoading(false)
      setIsDone(true)
    })
  }

  return (
    <StyledReview>
      <ReviewSection>
        <Heading $size="md" $mb="1rem">
          Cart
        </Heading>
        <table>
          <thead>
            <tr>
              <th aria-label="hidden" />
              <th>Title</th>
              <th>Dough</th>
              <th>Size</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody className={isLoading && !items.length ? "no-padding" : ""}>
            {isLoading && !items.length ? (
              <tr>
                <TableItemSkeleton />
              </tr>
            ) : (
              items.map((item) => <TableItem key={item._id} item={item} />)
            )}
          </tbody>
        </table>
      </ReviewSection>
      <ReviewSection>
        <Heading $size="md">
          Total price
          <span />
          <span>{calculateTotal(items)} $</span>
        </Heading>
      </ReviewSection>
      <ReviewSection>
        <Heading $size="md">
          Pay Method
          <span />
          <span>{data.payMethod}</span>
        </Heading>
      </ReviewSection>
      <ReviewSection>
        <Heading $size="md">
          Address
          <span />
          <Text $size="md">{getAddressString(data.address)}</Text>
        </Heading>
      </ReviewSection>
      <Button $type="primary" disabled={isLoading} onClick={clickHandler}>
        Order Now
      </Button>
    </StyledReview>
  )
}
