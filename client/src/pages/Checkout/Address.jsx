import { useState, useEffect } from "react"
import ContentLoader from "react-content-loader"
import { useSecuredRequest } from "@hooks/useSecuredRequest"
import { Heading, Text } from "@ui"
import { Poster } from "./Poster"
import { AddressList } from "./Address.styled"

function AddressSkeleton() {
  return (
    <ContentLoader
      speed={2}
      width={218}
      height={106}
      viewBox="0 0 218 106"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="15" ry="15" width="218" height="106" />
    </ContentLoader>
  )
}

export function Address({ setNextStage, addData }) {
  const request = useSecuredRequest()
  const [addresses, setAddresses] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const clickHandler = (event) => {
    addData({ address: addresses[event.target.dataset.address] })
    setNextStage()
  }

  useEffect(() => {
    request("/api/account/info", {
      method: "POST",
    }).then((response) => {
      setAddresses(response.addresses)
      setIsLoading(false)
    })
  }, [request])

  if (!isLoading && !addresses.length) {
    return (
      <Poster
        image="no-address-sketch.svg"
        title="You have no addresses 😔"
        buttonText="Create one"
        to="/profile"
      />
    )
  }

  return (
    <AddressList>
      {isLoading ? (
        <>
          <AddressSkeleton />
          <AddressSkeleton />
          <AddressSkeleton />
        </>
      ) : (
        addresses.map((address, i) => (
          <button
            type="button"
            key={address._id}
            data-address={i}
            onClick={clickHandler}
          >
            <Heading as="span" $size="md" $mb="0.5rem">
              {address.title}
            </Heading>
            <Text as="span" $size="sm" $color="var(--gray)">
              {address.unit
                ? `${address.unit}-${address.streetNumber}`
                : address.streetNumber}{" "}
              {address.streetName}, {address.city}, {address.province},{" "}
              {address.postalCode}
            </Text>
          </button>
        ))
      )}
    </AddressList>
  )
}
