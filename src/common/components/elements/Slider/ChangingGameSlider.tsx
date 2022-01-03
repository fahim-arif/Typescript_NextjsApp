import React from 'react';
import {Box} from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImageCard from '@root/modules/LandingPage/components/ImageSection/ImageCard';
import {GetImageContent} from '@root/modules/LandingPage/types/ImageSection';
class ChangingGameSlider extends React.Component<GetImageContent, {}> {
  slider: any;
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
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
    return (
      <div id='image_section_slider'>
        <Box
          px={{base: '0.625rem', sm: '1.5rem', md: '2rem', lg: '2.75rem'}}
          display="flex"
          justifyContent="end"
          position="absolute"
          top={['-9.75rem', '-12.8125rem', '-25rem', '-1.5rem', '-1.5rem', '0.625rem']}
          right={['0px', '0px', '0px', '0px', '0px', '44px']}
          width="48.125rem"
        >
          <Box
            maxWidth={['18.125rem', '25.6875rem', '37.5rem', '28.125rem', '37.5rem', '47.5rem']}
          >
            <Slider ref={(c) => (this.slider = c)} {...settings}>
              {this.props.data.map((imageData, index) => (
                <ImageCard key={index} image={imageData.attributes.image} />
              ))}
            </Slider>
          </Box>
        </Box>
      </div>
    );
  }
}

export default ChangingGameSlider;
