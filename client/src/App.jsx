import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PrivateRoutes } from "@components/Routes"
import { Main } from "./pages/Main/Main"
import { Cart } from "./pages/Cart/Cart"
import { Auth } from "./pages/Auth/Auth"
import { Profile } from "./pages/Profile/Profile"

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Private Routes */}
        <Route path="/" element={<PrivateRoutes />}>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        {/* Public Routes */}
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  )
}
