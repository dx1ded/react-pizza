import { CLOSE_BURGER, OPEN_BURGER } from "./types"

export const openBurger = () => ({
  type: OPEN_BURGER,
})

export const closeBurger = () => ({
  type: CLOSE_BURGER,
})
