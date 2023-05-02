import React from 'react';

const Banner = () => {
    return (
      <>
        <section className="bg-[url('https://www.tastingtable.com/img/gallery/20-italian-dishes-you-need-to-try-at-least-once/l-intro-1643403830.jpg')] p-10 h-screen object-cover opacity-75">
          <div className="w-2/4 mx-auto text-center my-24 space-y-6">
            <h1 className="text-6xl font-bold text-white">
              We serve the good taste of food
            </h1>
            <p className="text-white font-semibold">
              Good food can mean different things to different people, but at
              its core, it should be nutritious, delicious, and satisfying.
              Nutritious food is important because it provides the essential
              vitamins, minerals, and macronutrients that our bodies need to
              function properly. It's important to choose foods that are
              nutrient-dense and provide a wide range of vitamins and minerals. We serve the good food.
            </p>
          </div>
        </section>
      </>
    );
};

export default Banner;