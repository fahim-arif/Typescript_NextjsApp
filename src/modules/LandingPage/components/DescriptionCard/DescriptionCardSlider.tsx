import React from 'react';
import {Box, Circle} from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import DescriptionCards from '@modules/LandingPage/components/DescriptionCard/DescriptionCard';

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  variableWidth: true,
  appendDots: function appendDots(dots: any) {
    return (
      <Box bottom="-2.7rem" padding="0.625rem">
        {dots}
      </Box>
    );
  },
  customPaging: function customPaging() {
    return (
      <Box>
        <Circle
          className="outer-circle"
          size="11px"
          border="1px"
          borderColor="transparent"
        >
          <Circle
            className="inner-circle"
            size="5px"
            backgroundColor="grayScale.400"
          />
        </Circle>
      </Box>
    );
  },
  responsive: [
    {
      breakpoint: 500,
      settings: {
        centerMode: false,
      },
    },
  ],
};

export default function DescriptionCardCarousel({data}) {
  return (
    <Box
      marginBottom={{base: '18rem', sm: '24rem', md: '36rem', lg: '15.125rem'}}
    >
      <Box display="flex" justifyContent="center">
        {data.map((cardInfo: any, idx: number) => (
          <Box display={{base: 'none', xl: 'block'}} key={idx}>
            <DescriptionCards
              title={cardInfo.attributes.title}
              content={cardInfo.attributes.content}
              image={cardInfo.attributes.image}
            />
          </Box>
        ))}
      </Box>

      <div id="description_card_slider">
        <Box
          display={{base: 'flex', xl: 'none'}}
          justifyContent="center"
          alignItems="center"
          width="full"
          height="39.375rem"
          paddingLeft={{base: '2rem', sm: '0rem'}}
          overflow="hidden"
        >
          <Slider {...settings}>
            {data.map((cardInfo: any, idx: number) => (
              <Box key={idx} paddingY="2rem">
                <DescriptionCards
                  title={cardInfo.attributes.title}
                  content={cardInfo.attributes.content}
                  image={cardInfo.attributes.image}
                />
              </Box>
            ))}
          </Slider>
        </Box>
      </div>
    </Box>
  );
}
