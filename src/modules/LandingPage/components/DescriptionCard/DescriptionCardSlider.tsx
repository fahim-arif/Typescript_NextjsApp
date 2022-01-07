import React from 'react';
import {Box} from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import DescriptionCards from '@modules/LandingPage/components/DescriptionCard/DescriptionCard';

const settings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  centerMode: false,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        speed: 500,
        variableWidth: true,
        centerMode: true,
      },
    },
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

export default function DescriptionCardCarousel({data}) {
  return (
    <Box marginBottom={{base: '16rem', md: '30rem', lg: '15.125rem'}}>
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
