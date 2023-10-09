import { BrowserRouter, Routes, Route } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { PrivateRoutes, PublicRoutes } from "@components/AccessRoutes"
import { Main } from "./pages/Main/Main"
import { Cart } from "./pages/Cart/Cart"
import { Auth } from "./pages/Auth/Auth"
import { Profile } from "./pages/Profile/Profile"
import { Checkout } from "./pages/Checkout/Checkout"

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          {/* Private Routes */}
          <Route path="/" element={<PrivateRoutes />}>
            <Route path="/" element={<Main />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
          {/* Public Routes */}
          <Route path="/" element={<PublicRoutes />}>
            <Route path="/auth" element={<Auth />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}
