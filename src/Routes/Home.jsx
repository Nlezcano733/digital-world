import React, { useContext } from 'react';
import { ProductsContext } from '../Context/ProductsContext';
import HomeCarousel from '../Components/Carousel';

const Home = (props) => {
  const { games } = useContext(ProductsContext);

  console.log(games);

  return (
    <>
      <HomeCarousel />
    </>
  );
};

export default Home;