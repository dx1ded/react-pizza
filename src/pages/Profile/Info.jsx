import { Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { Container, Heading, Text, Icon } from "@ui"
import {
  InfoDate,
  InfoSection,
  StyledInfo,
  SliderNavPrev,
  SliderNavNext,
  SliderNav,
} from "./Info.styled"

import "swiper/swiper.min.css"

export function Info() {
  return (
    <StyledInfo>
      <Container $mw="58rem">
        <img
          src="https://static.wixstatic.com/media/8b5c7c_08163db9119c45da8d492974b9c862b2~mv2.png/v1/fill/w_560,h_564,al_c,lg_1,q_85,enc_auto/8b5c7c_08163db9119c45da8d492974b9c862b2~mv2.png"
          alt="Profile"
        />
        <div style={{ minWidth: 0 }}>
          <Heading $size="1.75rem" $mb="0.2rem">
            Volodymyr Doskochynskyi
          </Heading>
          <Text $size="md" $color="var(--blue)" $mb="2rem">
            @vovados1
          </Text>
          <InfoSection>
            <Heading $size="md" $mb="0.9rem">
              Basic information
            </Heading>
            <InfoDate>
              <Icon $size="1rem">calendar_month</Icon>
              date of birth 21.02.2005
            </InfoDate>
            <InfoDate>
              <Icon $size="1rem">schedule</Icon>
              joined at 11.08.2022
            </InfoDate>
          </InfoSection>
          <InfoSection>
            <Heading $size="md" $mb="0.9rem">
              Addresses
            </Heading>
            <AddressSlider />
          </InfoSection>
        </div>
      </Container>
    </StyledInfo>
  )
}

function AddressSlider() {
  return (
    <div>
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
        slidesPerView={3}
        navigation={{
          prevEl: ".slider-nav-prev",
          nextEl: ".slider-nav-next",
        }}
      >
        <SwiperSlide>
          <Heading $size="1.125rem" $mb="0.5rem">
            Home address
          </Heading>
          <Text as="address" $size="sm" $color="var(--gray)">
            1111 Cairns Ave, Saskatoon, SK, S7H 2H1
          </Text>
        </SwiperSlide>
        <SwiperSlide>
          <Heading $size="1.125rem" $mb="0.5rem">
            Home address
          </Heading>
          <Text as="address" $size="sm" $color="var(--gray)">
            1111 Cairns Ave, Saskatoon, SK, S7H 2H1
          </Text>
        </SwiperSlide>
        <SwiperSlide>
          <Heading $size="1.125rem" $mb="0.5rem">
            Home address
          </Heading>
          <Text as="address" $size="sm" $color="var(--gray)">
            1111 Cairns Ave, Saskatoon, SK, S7H 2H1
          </Text>
        </SwiperSlide>
        <SwiperSlide>
          <Icon>add</Icon>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
