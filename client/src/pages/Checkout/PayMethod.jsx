import { Text } from "@ui"
import { StyledPayMethod } from "./PayMethod.styled"

export function PayMethod({ setNextStage, addData }) {
  const clickHandler = (event) => {
    addData({ payMethod: event.target.dataset.method })
    setNextStage()
  }

  return (
    <StyledPayMethod>
      <button type="button" data-method="Card" onClick={clickHandler}>
        <img src="card.svg" alt="Card" />
        <Text as="span" $size="md">
          Card
        </Text>
      </button>
      <button type="button" data-method="PayPal" onClick={clickHandler}>
        <img src="paypal.svg" alt="Paypal" />
        <Text as="span" $size="md">
          PayPal
        </Text>
      </button>
      <button type="button" data-method="Coupon" onClick={clickHandler}>
        <img src="coupon.svg" alt="Coupon" />
        <Text as="span" $size="md">
          Coupon
        </Text>
      </button>
    </StyledPayMethod>
  )
}
