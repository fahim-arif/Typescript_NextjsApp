import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Box, Text} from '@chakra-ui/react';
import {getDescriptionCard} from '@modules/LandingPage/services/DescriptionCard';
import {GetDescriptionCard} from '@modules/LandingPage/types/DescriptionCard';
import DescriptionCards from './DescriptionCard';

class DescriptionCardCarousel extends React.Component<{}, GetDescriptionCard> {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    const {data} = await getDescriptionCard();
    this.setState({data});
  }

  render() {
    const settings = {
      dots: true,
      arrows: true,
      // fade: true,
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
    return (
      <Box marginBottom={{base: '16rem', md: '30rem', lg: '15.125rem'}}>
        <Box display="flex" justifyContent="center">
          {this.state.data.map((cardInfo, idx) => (
            <Box display={{base: 'none', xl: 'block'}} key={idx}>
              <DescriptionCards
                title={cardInfo.attributes.title}
                content={cardInfo.attributes.content}
                image={cardInfo.attributes.image}
                index={idx}
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
            // margin="auto"
            // mb={60}
            // h="100vh"
            // px={{base: '1.75rem', sm: '1.875rem', md: '5rem', lg: '7.25rem'}}
          >
            <Slider {...settings}>
              {this.state.data.map((cardInfo, idx) => (
                <Box key={idx} paddingY="2rem">
                  <DescriptionCards
                    title={cardInfo.attributes.title}
                    content={cardInfo.attributes.content}
                    image={cardInfo.attributes.image}
                    index={idx}
                  />
                </Box>
              ))}
            </Slider>
          </Box>
        </div>
      </Box>
    );
  }
}
export default DescriptionCardCarousel;
