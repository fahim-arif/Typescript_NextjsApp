import React, {useRef} from 'react';
import {Box, Flex, Button} from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ProductCard from '@common/components/elements/ProductCard/ProductCard';
import CarouselBtn from '@common/components/elements/Button/CarouselBtn';

const settings = {
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  centerMode: true,
  responsive: [
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        centerMode: false,
      },
    },
  ],
};

export default function ProductCarousel({data, onOpenNewsletter}) {
  const slider = useRef<any>();

  const next = () => {
    if (slider.current) slider.current.slickNext();
  };

  const previous = () => {
    if (slider.current) slider.current.slickPrev();
  };

  return (
    <Box>
      <Box
        paddingLeft={{
          base: '0.8rem',
          sm: '1.875rem',
          md: '5rem',
          lg: '7.25rem',
        }}
      >
        <Box width="full">
          <Slider ref={slider} {...settings}>
            {data &&
              data.map((product: any, idx: number) => (
                <div key={idx} style={{width: 300}}>
                  <ProductCard
                    id={product.id}
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
        marginTop={{base: '3.125rem', sm: '5rem', md: '7.25rem'}}
      >
        <Box width="6.5rem" display={{base: 'none', lg: 'flex'}}></Box>
        <Flex
          justify="center"
          width="full"
          paddingX={{base: '1rem', md: '0rem'}}
        >
          <Button
            width={{base: '20rem', md: 'auto'}}
            paddingX="2.25rem"
            paddingY="1.125rem"
            onClick={onOpenNewsletter}
          >
            See all products
          </Button>
        </Flex>
        <CarouselBtn previous={previous} next={next} />
      </Box>
    </Box>
  );
}
