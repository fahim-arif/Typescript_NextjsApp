import React, {useRef, useState} from 'react';
import {Box, Flex, Button, keyframes} from '@chakra-ui/react';
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

export default function ProductCarousel({data, onOpenNewsletter}) {
  const slider = useRef<any>();
  const [sliderChange, setSliderChange] = useState(false);

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
        bottom={{base: '-4.5rem', md: '-5.6rem'}}
        padding="0.625rem"
        marginLeft={{
          base: '-0.8rem',
          sm: !sliderChange ? '-0.9375rem' : '0rem',
          md: !sliderChange ? '-2.5rem' : '0rem',
          lg: !sliderChange ? '-3.625rem' : '0rem',
        }}
      >
        {dots}
      </Box>
    );
  };

  return (
    <Box>
      <Box
        paddingLeft={{
          base: '0.8rem',
          sm: !sliderChange ? '1.875rem' : '0rem',
          md: !sliderChange ? '5rem' : '0rem',
          lg: !sliderChange ? '7.25rem' : '0rem',
        }}
        animation={{md: sliderChange && paddingLeftAnimation}}
      >
        <Box id="product-list-slider" width="full" height="19.625rem">
          <Slider
            ref={slider}
            {...settings}
            appendDots={appendDots}
            beforeChange={() => beforeChange()}
          >
            {data &&
              data.map((product: any, idx: number) => (
                <div key={idx} style={{width: 300}}>
                  <ProductCard
                    title={product.attributes.title}
                    price={product.attributes.price}
                    rating={product.attributes.rating}
                    sold={product.attributes.sold}
                    image={product.attributes.image}
                    categories={product.attributes.categories}
                    onOpenNewsletter={onOpenNewsletter}
                  />
                </div>
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
        marginTop={{base: '4.8rem', sm: '5rem', md: '6.6rem'}}
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
