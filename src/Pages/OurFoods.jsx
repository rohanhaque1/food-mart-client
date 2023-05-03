import React, { useEffect, useState } from "react";
import Food from "./Food";

const OurFoods = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/foods")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  return (
    <>
      <section className="px-8 md:px-20 py-14 mx-auto">
        <div className="text-center space-y-3 my-4 md:w-2/5 mx-auto">
          <h2 className="text-3xl font-bold">The Best Italian Foods</h2>
          <p className="text-md font-semibold text-gray-500 mb-5">
            Pizza Margherita is perhaps the most famous Italian food. Wherever
            you go in the world, you'll never be too far from a Margherita
            pizza.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {foods.map((food) => (
            <Food key={food.id} food={food}></Food>
          ))}
        </div>
      </section>
    </>
  );
};

export default OurFoods;
