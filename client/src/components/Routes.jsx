import { Outlet, Navigate } from "react-router-dom"

export function PrivateRoutes() {
  const secret = localStorage.getItem("secret")

  return secret ? <Outlet /> : <Navigate to="/auth" />
}
