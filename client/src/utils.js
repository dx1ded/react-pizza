export const formatDate = (dateStr) => {
  const date = new Date(dateStr)

  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date)
}

export const postalCodeHandler = (event, cb) => {
  const value = event.target.value.toUpperCase()
  const [partOne, partTwo] = value.split(" ")
  let newStr = value

  if (event.key === "Backspace" && newStr.length === 4 && !partTwo) {
    newStr = partOne
  } else if (partOne.length === 4 && !partTwo) {
    newStr = `${partOne.substring(0, 3)} ${partOne[3]}`
  }

  event.target.value = newStr
  cb(newStr)
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

export const calculateTotal = (items) =>
  items.reduce((acc, item) => (acc += item.price * item.count), 0)

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
