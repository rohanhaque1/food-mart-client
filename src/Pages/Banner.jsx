import React from 'react';

const Banner = () => {
    return (
      <>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url("https://www.tastingtable.com/img/gallery/20-italian-dishes-you-need-to-try-at-least-once/l-intro-1643403830.jpg")`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">
                We serve the good taste of food
              </h1>
              <p className="mb-5">
                Good food can mean different things to different people, but at
                its core, it should be nutritious, delicious, and satisfying.
                Nutritious food is important because it provides the essential
                vitamins, minerals, and macronutrients that our bodies need to
                function properly. It's important to choose foods that are
                nutrient-dense and provide a wide range of vitamins and
                minerals. We provide the good food.
              </p>
              <button className="btn btn-primary">Explore More</button>
            </div>
          </div>
        </div>
      </>
    );
};

export default Banner;