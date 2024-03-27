import { useEffect, useState } from "react";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";


const SlideWrapper = styled.div`
  // padding-top: 50rem;
  width: 30%;
  margin-left: 35%;
`;

const SliderStyled = styled(Slider)`
`;

const ActiveCard = styled.div`;
  background: url("/images/active.png");
  background-repeat: no-repeat;
  background-size: contain;
  margin-top: 5px;
  position: relative;
  right: 15px;
`;

const InActiveCard = styled.div`
  background: url("/images/normal.png");
  background-repeat: no-repeat;
  background-size: contain;
  margin-top: 24px;
`;

const ActiveItem = styled.img`
  width: 100%;
  position: relative;
  bottom: 0px;
  left: 5px;

`;

const InActiveItem = styled.img`
    width: 75%;
    position: relative;
    bottom: 0px;
    left: 5px;

`;


function NextArrowButton(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src="/images/NextArrow.png"
      className={className}
      style={{ ...style, display: "block",right: '-40px' }}
      onClick={onClick}
    />
  );
}

function PrevArrowButton(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src="/images/PrevArrow.png"
      className={className}
      style={{ ...style, display: "block", left: "-40px" }}
      onClick={onClick}
    />
  );
}

function Carousel(props) {
  const { data,form, setForm } = props;
  const [selectIndex, setSelectIndex] = useState(0);

  const settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    arrows: true,
    // focusOnSelect: true,
    nextArrow: <NextArrowButton />,
    prevArrow: <PrevArrowButton />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const handleClickSlide=(item,index)=>{
    setSelectIndex(index);
    setForm({...item, imageUrl:item.imageUrl, critterName: item.critterName, description: item.description})
  }

  return (
    <SlideWrapper>
    <SliderStyled {...settings}>
      {data.map((item, index) => (
        index === selectIndex ? (
          <ActiveCard key={index} onClick={() => handleClickSlide(item, index)}>
            {/* <ActiveCard src={"/images/active.png"}/> */}
            <ActiveItem src={item.imageUrl} />
          </ActiveCard>
        ) : (
          <InActiveCard key={index} onClick={() => handleClickSlide(item, index)}>
            {/* <InActiveCard src={"/images/normal.png"}/> */}
            <InActiveItem src={item.imageUrl} />
          </InActiveCard>
        )
      ))}
    </SliderStyled>
  </SlideWrapper>

  );
}

export default Carousel;