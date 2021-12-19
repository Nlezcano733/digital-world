import React from 'react';
import Carousel from 'react-multi-carousel';

import Banner1 from '../../Assets/Images/banner.jpg';
import Banner2 from '../../Assets/Images/BannerCompra.jpg';
import Banner3 from '../../Assets/Images/BannerGabinetes.jpg';
import Banner4 from '../../Assets/Images/BannerLenovo.jpg';

import './carousel.css';
import "react-multi-carousel/lib/styles.css";

const HomeCarousel = (props) => {
  const images = [Banner1, Banner2, Banner3, Banner4];

  const responsive = {
    mobile: {
      breakpoint: { max: 2160, min: 1024 },
      items: 1,
      paritialVisibilityGutter: 60
    }
  };

  return (
    <div className='carousel'>
      <Carousel
        responsive={ responsive }
        autoPlay={ true }
        transitionDuration={ 1200 }
        autoPlaySpeed={ 6000 }
        swipeable={ true }
        arrows={ true }
        infinite={ true }
      >
        {
          images?.map((img, i) => (
            <img src={ img } alt={ `banner${i}` } key={ i } className='carousel-item-img' />
          ))
        }
      </Carousel>
    </div>
  );
};

export default HomeCarousel;