import { useSelector } from "react-redux"
import { Outlet, Navigate, useLocation } from "react-router-dom"

export function PrivateRoutes() {
  const token = useSelector((state) => state.secret.token)

  return token ? <Outlet /> : <Navigate to="/auth" />
}

export function PublicRoutes() {
  const token = useSelector((state) => state.secret.token)
  const location = useLocation()

  return token && location.pathname === "/auth" ? (
    <Navigate to="/" />
  ) : (
    <Outlet />
  )
}
