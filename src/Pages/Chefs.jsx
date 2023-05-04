import React, { useEffect, useState } from "react";
import ChefsCard from "./ChefsCard";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("https://food-recipe-server-rohanhaque1.vercel.app/recipe")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);

  return (
    <>
      <section className="px-8 md:px-20 py-14 mx-auto">
        <div className="text-center space-y-3 my-4 md:w-2/5 mx-auto">
          <h2 className="text-3xl font-bold">Our Chef's</h2>
          <p className="text-md font-semibold text-gray-500 mb-5">
            A good chef is someone who is dedicated to their craft, constantly
            seeking to improve and innovate in order to create the best possible
            dining experience for their customers.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chefs.map((chef) => (
            <ChefsCard key={chef.id} chef={chef}></ChefsCard>
          ))}
        </div>
      </section>
    </>
  );
};

export default Chefs;
