import React from 'react';
import Banner from '../../Pages/Banner';
import Chefs from '../../pages/Chefs';
import OurFoods from '../../pages/OurFoods';
import OurRestaurants from '../../pages/OurRestaurants';

const Home = () => {
    return (
        <div>
            <Banner />
            <Chefs />
            <OurFoods />
            <OurRestaurants />
        </div>
    );
};

export default Home;