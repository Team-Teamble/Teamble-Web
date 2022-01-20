import { useMemo } from "react";
import styled from "styled-components";
import Slider, { Settings } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideWrapper = styled.section`
  position: relative;
`;

interface sliderProps {
  /** 슬라이더 아이템 요소 */
  children: React.ReactNode;
  /** 커스텀 클래스 */
  className?: string;
  /** 자동재생 (속도 설정시 number 타입으로) */
  autoplay?: boolean | number;
  /** 슬라이더 속도 */
  speed?: number;
  /** 반복 여부 */
  loop?: boolean;

  cssEase?: string;
}

export function Slick({ children, className, autoplay = true, speed = 300, loop = true, cssEase }: sliderProps) {
  const settings = useMemo<Settings>(
    () => ({
      dots: false,
      infinite: loop,
      speed: 8000,
      slidesToShow: 5,
      autoplay: true,
      autoplaySpeed: 0,
      cssEase: "linear",
    }),
    [autoplay, loop, speed],
  );
  return (
    <SlideWrapper className={className}>
      <Slider {...settings}>{children}</Slider>
    </SlideWrapper>
  );
}
