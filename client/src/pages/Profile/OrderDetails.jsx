import { Heading, Text } from "@ui"
import {
  StyledOrderDetails,
  OrderDetailsHeader,
  OrderDetailsTable,
} from "./OrderDetails.styled"
import {
  calculateTotal,
  formatDate,
  getAddressString,
  types,
} from "../../utils"

function OrderItem({ item }) {
  const [_, type, size] = item._id.split("_")

  return (
    <tr>
      <td>{item.title}</td>
      <td>{types[type]}</td>
      <td>{size} cm.</td>
      <td>{item.count}</td>
      <td>{item.price * item.count}$</td>
    </tr>
  )
}

export function OrderDetails({ data }) {
  return (
    <StyledOrderDetails>
      <OrderDetailsHeader>
        <Text $size="sm">Order ID - {data._id}</Text>
        <Text $size="sm">Date - {formatDate(data.createdAt)}</Text>
      </OrderDetailsHeader>
      <OrderDetailsTable>
        <Heading $size="md" $mb="1rem">
          Items
        </Heading>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Dough</th>
              <th>Size</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {data.items.map((item) => (
              <OrderItem key={item._id} item={item} />
            ))}
          </tbody>
        </table>
      </OrderDetailsTable>
      <Text $size="md">
        Total price
        <span />
        <span>{calculateTotal(data.items)} $</span>
      </Text>
      <Text $size="md">
        Address
        <span />
        <span>{getAddressString(data.address)}</span>
      </Text>
      <Text $size="md">
        Pay Method
        <span />
        <span>{data.payMethod}</span>
      </Text>
    </StyledOrderDetails>
  )
}
