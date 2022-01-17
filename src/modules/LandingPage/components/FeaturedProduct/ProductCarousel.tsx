import React, {useRef, useState} from 'react';
import {Box, Flex, Button, keyframes, useMediaQuery} from '@chakra-ui/react';
import {motion, useViewportScroll, useTransform} from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ProductCard from '@common/components/elements/ProductCard/ProductCard';
import CarouselSlideControls from '@modules/LandingPage/components/CarouselSlideControls';

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  centerMode: false,
  customPaging: function customPaging() {
    return (
      <Box
        width="1.25rem"
        height="1.5px"
        backgroundColor="grayScale.700"
        marginY="1rem"
        marginX="0rem"
        padding="0rem"
      ></Box>
    );
  },
};

const paddingLeftKeyframes = keyframes`
    from {padding-left: 7.25rem;}
    to {padding-left: 0rem}
  `;

const paddingLeftAnimation = `${paddingLeftKeyframes} 0.5s linear forwards`;

const MotionBox = motion(Box);

export default function ProductCarousel({data, onOpenNewsletter}) {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  const slider = useRef<any>();
  const [sliderChange, setSliderChange] = useState(false);

  const {scrollY} = useViewportScroll();
  const marginTopOffsetOdd = useTransform(
    scrollY,
    [300, 750, 900, 1100],
    ['0rem', '5rem', '5rem', '10rem']
  );
  const marginTopOffsetEven = useTransform(
    scrollY,
    [300, 750, 900, 1100],
    ['10rem', '5rem', '5rem', '0rem']
  );

  const next = () => {
    if (slider.current) slider.current.slickNext();
  };

  const previous = () => {
    if (slider.current) slider.current.slickPrev();
  };

  const beforeChange = () => {
    setSliderChange(true);
  };

  const appendDots = (dots: any) => {
    return (
      <Box
        position="absolute"
        top={{base: '21.4rem', md: '28rem'}}
        padding="0.625rem"
        left={{
          base: '-0.8rem',
          sm: !sliderChange ? '-1.875rem' : '0rem',
          md: !sliderChange ? '-5rem' : '0rem',
          lg: !sliderChange ? '-7.5rem' : '0rem',
        }}
      >
        {dots}
      </Box>
    );
  };

  return (
    <Box>
      <Box
        height="20rem"
        paddingLeft={{
          base: '0.8rem',
          sm: !sliderChange ? '1.875rem' : '0rem',
          md: !sliderChange ? '5rem' : '0rem',
          lg: !sliderChange ? '7.25rem' : '0rem',
        }}
        animation={{md: sliderChange && paddingLeftAnimation}}
      >
        <Box
          id="product-list-slider"
          position={{base: 'relative', md: 'absolute'}}
          top={{base: '0rem', lg: '2.4rem'}}
          width="full"
        >
          <Slider
            ref={slider}
            {...settings}
            appendDots={appendDots}
            beforeChange={() => beforeChange()}
          >
            {data &&
              data.map((product: any, idx: number) => (
                <Box key={idx} style={{width: 300}}>
                  <MotionBox
                    style={{
                      marginTop: !isLargerThan768
                        ? '0rem'
                        : idx % 2 === 0
                        ? marginTopOffsetEven
                        : marginTopOffsetOdd,
                    }}
                  >
                    <ProductCard
                      title={product.attributes.title}
                      price={product.attributes.price}
                      rating={product.attributes.rating}
                      sold={product.attributes.sold}
                      image={product.attributes.image}
                      categories={product.attributes.categories}
                      onOpenNewsletter={onOpenNewsletter}
                    />
                  </MotionBox>
                </Box>
              ))}
          </Slider>
        </Box>
      </Box>

      <Box
        display="flex"
        justifyContent={{base: 'center', lg: 'space-between'}}
        paddingX={{
          base: '1.75rem',
          sm: '1.875rem',
          md: '5rem',
          lg: '7.25rem',
        }}
        textAlign="center"
        marginTop={{base: '4.4rem', md: '6.8rem', lg: '6rem'}}
      >
        <Box visibility="hidden" width="6.5rem">
          <CarouselSlideControls previous={previous} next={next} />
        </Box>
        <Flex
          justify="center"
          width="full"
          paddingX={{base: '1rem', md: '0rem'}}
        >
          <Button
            width={{base: '20rem', md: 'auto'}}
            onClick={onOpenNewsletter}
          >
            See all products
          </Button>
        </Flex>

        <Box width="6.5rem">
          <CarouselSlideControls previous={previous} next={next} />
        </Box>
      </Box>
    </Box>
  );
}
