import React from 'react';
import {Box} from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ImageCard from '@modules/LandingPage/components/ImageSection/ImageCard';

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  vertical: true,
  verticalSwiping: true,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        centerMode: false,
      },
    },
  ],
};

export default function ChangingGameSlider({data}) {
  return (
    <div id="image_section_slider">
      <Box
        position="absolute"
        display="flex"
        justifyContent="end"
        top={[
          '-9.75rem',
          '-12.8125rem',
          '-25rem',
          '1rem',
          '0.5rem',
          '0.625rem',
        ]}
        right={{base: '0rem', sm: '1rem', md: '1rem', lg: '2.75rem'}}
      >
        <Box
          height={{base: '13.875rem', sm: '21.875rem', md: '34.375rem'}}
          width={{
            base: '18.125rem',
            sm: '25.6875rem',
            md: '37.5rem',
            lg: '28.125rem',
            xl: '40rem',
          }}
        >
          <Slider {...settings}>
            {data.length > 0 &&
              data.map((imageData: any, index: number) => (
                <ImageCard key={index} image={imageData.attributes.image} />
              ))}
          </Slider>
        </Box>
      </Box>
    </div>
  );
}
