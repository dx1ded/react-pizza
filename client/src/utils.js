export const formatDate = (dateStr) => {
  const date = new Date(dateStr)

  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date)
}

export const getAddressString = (address) => `
  ${
    address.unit
      ? `${address.unit}-${address.streetNumber}`
      : address.streetNumber
  } ${address.streetName}, ${address.city}, ${address.province}, ${
    address.postalCode
  }
`

export const getServerUrl = (path) => {
  const _env = String(import.meta.env.VITE_BASE_URL)
  const baseUrl = _env.endsWith("/") ? _env : `${_env}/`
  const newPath = path.startsWith("/") ? path.slice(1) : path

  return `${baseUrl}${newPath}`
}

export const calculateTotal = (items) =>
  items.reduce((acc, item) => (acc += item.price * item.count), 0)

export const options = ["All", "Meat", "Vegetarian", "Grill", "Spicy", "Closed"]

export const types = ["thin", "traditional"]

export const provincesList = [
  "NL",
  "PE",
  "NS",
  "NB",
  "QC",
  "ON",
  "MB",
  "SK",
  "AB",
  "BC",
  "YT",
  "NT",
  "NU",
]
