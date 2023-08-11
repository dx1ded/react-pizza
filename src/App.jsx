import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Main } from "./pages/Main/Main"
import { Cart } from "./pages/Cart/Cart"
// import { Auth } from "./pages/Auth/Auth"
// import { Account } from "./pages/Account/Account"

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/auth" element={<Auth />} /> */}
        {/* <Route path="/account" element={<Account />} /> */}
      </Routes>
    </BrowserRouter>
  )
}
