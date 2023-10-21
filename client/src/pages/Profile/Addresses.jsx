import { useState } from "react"
import { useDispatch } from "react-redux"
import { Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { addAddress, editAddress, removeAddress } from "@redux/profile/actions"
import { useSecuredRequest } from "@hooks/useSecuredRequest"
import { Heading, Icon, Text } from "@ui"
import { useModal } from "@components/Modal/useModal"
import { AddressForm } from "./AddressForm"
import { getAddressString } from "../../utils"
import { SliderNav, SliderNavNext, SliderNavPrev } from "./Info.styled"

import "swiper/swiper.min.css"

export function Addresses({ userId, addresses }) {
  const dispatch = useDispatch()
  const request = useSecuredRequest()
  const [isLoading, setIsLoading] = useState(false)

  const [apiOne, contextHolderOne] = useModal({
    title: "Create New Address",
    Component: AddressForm,
    hasCancelButton: true,
    hasApplyButton: true,
    areButtonsDisabled: isLoading,
    onApply(address) {
      setIsLoading(true)
      request("/api/address/add", {
        method: "POST",
        data: { userId, address },
      }).then((data) => {
        dispatch(addAddress(data.address))
        setIsLoading(false)
        apiOne.close()
      })
    },
  })

  const [apiTwo, contextHolderTwo] = useModal({
    title: "Edit the address",
    Component: AddressForm,
    hasRemoveButton: true,
    hasCancelButton: true,
    hasApplyButton: true,
    areButtonsDisabled: isLoading,
    onApply(address) {
      setIsLoading(true)
      request("/api/address/edit", {
        method: "POST",
        data: { address },
      }).then(() => {
        dispatch(editAddress(address))
        setIsLoading(false)
        apiTwo.close()
      })
    },
    onRemove(address) {
      setIsLoading(true)
      request("/api/address/remove", {
        method: "POST",
        data: { id: address._id },
      }).then(() => {
        dispatch(removeAddress(address._id))
        setIsLoading(false)
        apiTwo.close()
      })
    },
  })

  return (
    <div>
      {contextHolderOne}
      {contextHolderTwo}
      <SliderNav>
        <SliderNavPrev>
          <Icon $size="1.1rem">arrow_back</Icon>
        </SliderNavPrev>
        <SliderNavNext>
          <Icon $size="1.1rem">arrow_back</Icon>
        </SliderNavNext>
      </SliderNav>
      <Swiper
        modules={[Navigation]}
        spaceBetween={15}
        slidesPerView={2}
        navigation={{
          prevEl: ".slider-nav-prev",
          nextEl: ".slider-nav-next",
        }}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
        }}
      >
        {addresses.map((address, i) => (
          <SwiperSlide key={i} onClick={() => apiTwo.open(address)}>
            <Heading $size="1.125rem" $mb="0.5rem">
              {address.title}
            </Heading>
            <Text as="address" $size="sm" $color="var(--gray)">
              {getAddressString(address)}
            </Text>
          </SwiperSlide>
        ))}
        <SwiperSlide onClick={() => apiOne.open()}>
          <Icon>add</Icon>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
