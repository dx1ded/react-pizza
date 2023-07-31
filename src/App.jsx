import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Main } from "./pages/Main/Main"
import { Cart } from "./pages/Cart/Cart"

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}
