import React from 'react';
import {Box, Button} from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductCard from '@root/common/components/elements/ProductCard/ProductCard';
import CarouselBtn from '@root/common/components/elements/Button/CarouselBtn';
import {ProductGet} from '@modules/LandingPage/types/Product';
import {getProducts} from '@modules/LandingPage/services/Products';

class ProductCarousel extends React.Component<any, ProductGet> {
  slider: any;

  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  async componentDidMount() {
    const {data} = await getProducts();
    this.setState({data});
  }

  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      // dots: true,
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

    return (
      <Box>
        <Box
          paddingLeft={{
            base: '1.75rem',
            sm: '1.875rem',
            md: '5rem',
            lg: '7.25rem',
          }}
        >
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            {this.state.data &&
              this.state.data.map((product, idx) => (
                <div
                  style={{width: 300}}
                  key={idx}
                  className="hero_container_right"
                >
                  <ProductCard
                    id={product.attributes.id}
                    title={product.attributes.title}
                    price={product.attributes.price}
                    rating={product.attributes.rating}
                    sold={product.attributes.sold}
                    image={product.attributes.image}
                    categories={product.attributes.categories}
                    index={idx}
                    onOpenNewsletter={this.props.onOpenNewsletter}
                  />
                </div>
              ))}
          </Slider>
        </Box>

        <Box
          paddingX={{
            base: '1.75rem',
            sm: '1.875rem',
            md: '5rem',
            lg: '7.25rem',
          }}
          textAlign="center"
          mt={{base: '3.125rem', sm: '5rem', md: '7.25rem'}}
        >
          <Box
            display="flex"
            justifyContent={{base: 'center', lg: 'space-between'}}
          >
            <Box width="6.5rem" display={{base: 'none', lg: 'flex'}}></Box>
            <Box>
              <Button
                fontWeight="500"
                fontSize={{base: '1rem'}}
                fontFamily="Barlow"
                px={{base: '6.25rem', sm: '2.25rem'}}
                py={{base: '1.1875rem'}}
                height={{base: '3.75rem'}}
                onClick={this.props.onOpenNewsletter}
              >
                See all products
              </Button>
            </Box>
            <CarouselBtn previous={this.previous} next={this.next} />
          </Box>
        </Box>
      </Box>
    );
  }
}

export default ProductCarousel;
