import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../Components/Hero';
import CategoryTile from '../Components/CategoryTile';

import Banner1 from '../Assets/Images/banner.jpg';
import ps4 from '../Assets/Images/PS4.png';
import xbox from '../Assets/Images/Xbox.png';
import nintendo from '../Assets/Images/Nswitch.png';
import accesorios from '../Assets/Images/Accesorios.png';

import './styles/home.css';

const Home = () => {
  const categories = [
    { title: 'Play Station', img: ps4, color: '#006FCD' },
    { title: 'Xbox', img: xbox, color: '#107C11' },
    { title: 'Nintendo Switch', img: nintendo, color: '#E70009' },
    { title: 'Accesories', img: accesorios, color: '#FF821D' },
  ];

  const data = [
    { title: 'Play Station', img: ps4, color: '#006FCD' },
    { title: 'Xbox', img: xbox, color: '#107C11' },
    { title: 'Nintendo Switch', img: nintendo, color: '#E70009' },
    { title: 'Accesorios', img: accesorios, color: '#FF821D' },
  ];

  return (
    <main>
      <Hero
        img={Banner1}
        content="The best of Gaming in an only place"
      />

      <section className='container grid'>
        <div className='col-full home-title'>
          <h2 style={{ marginLeft: '6px' }}>Categories</h2>
          <Link to='/products'>See all products</Link>
        </div>
        {categories.map((c, i) =>
          <CategoryTile
            key={i}
            title={c.title}
            img={c.img}
            color={c.color}
            query={c.query}
          />
        )}
      </section>

      <section className='container developers'>
        <div className='home-title'>
          <h2 style={{ marginLeft: '6px' }}>Developers</h2>
          <Link to='/products'>See all games</Link>
        </div>
        {categories.map((c, i) =>
          <Link to='/products' className='developers-card' key={i}>
            <img src={c.img} alt={c.title} className='developers-img' />
          </Link>
        )}
      </section>

      <section className='container developers'>
        <h2 className='home-title'>{data.length > 0 && 'History'}</h2>
        {data?.map((c, i) =>
          <Link to={`/product-detail/${c.id}`} className='developers-card' key={i}>
            <img src={c.img} alt={c.title} className='developers-img' />
          </Link>
        )}
      </section>
    </main>
  );
};

export default Home;