import { Container, Heading, Icon } from "@ui"
import { Pagination } from "@components/Pagination/Pagination"
import { StyledOrderHistory } from "./OrderHistory.styled"

export function OrderHistory() {
  return (
    <StyledOrderHistory>
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
            <tr>
              <td>2017-09-29 01:22</td>
              <td>24151</td>
              <td>Mozarella, 3 Cheese Pizza, Bacon Pizza, Botty Mog Pizza</td>
              <td>$999.00</td>
              <td>
                <button type="button">
                  <Icon>navigate_next</Icon>
                </button>
              </td>
            </tr>
            <tr>
              <td>2017-09-29 01:22</td>
              <td>24151</td>
              <td>Mozarella, 3 Cheese Pizza, Bacon Pizza, Botty Mog Pizza</td>
              <td>$999.00</td>
              <td>
                <button type="button">
                  <Icon>navigate_next</Icon>
                </button>
              </td>
            </tr>
            <tr>
              <td>2017-09-29 01:22</td>
              <td>24151</td>
              <td>Mozarella, 3 Cheese Pizza, Bacon Pizza, Botty Mog Pizza</td>
              <td>$999.00</td>
              <td>
                <button type="button">
                  <Icon>navigate_next</Icon>
                </button>
              </td>
            </tr>
            <tr>
              <td>2017-09-29 01:22</td>
              <td>24151</td>
              <td>Mozarella, 3 Cheese Pizza, Bacon Pizza, Botty Mog Pizza</td>
              <td>$999.00</td>
              <td>
                <button type="button">
                  <Icon>navigate_next</Icon>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <Pagination />
      </Container>
    </StyledOrderHistory>
  )
}
