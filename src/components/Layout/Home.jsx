import React from 'react';
import Banner from '../../Pages/Banner';
import Chefs from '../../pages/Chefs';
import OurFoods from '../../pages/OurFoods';

const Home = () => {
    return (
        <div>
            <Banner />
            <OurFoods />
            <Chefs />
        </div>
    );
};

export default Home;