import React from "react";
import { useLoaderData } from "react-router-dom";
import Recipe from "./Recipe";

const ChefsRecipe = () => {
  const details = useLoaderData();

  const {
    id,
    chefName,
    chefPicture,
    description,
    experience,
    likes,
    numRecipes,
    recipes,
  } = details;
  return (
    <>
      <section className="md:px-12 py-8">
        <div>
          <div className="p-5 mx-auto sm:p-10 md:p-14">
            <div className="flex flex-col max-w-xl mx-auto overflow-hidden rounded-lg">
              <img
                src={chefPicture}
                alt=""
                className="w-full h-60 sm:h-96 dark:bg-gray-500 rounded-lg"
              />
              <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-white">
                <div className="space-y-2">
                  <h2 className="font-bold text-lg">{chefName}</h2>
                  <p className="text-sm font-semibold">{description}</p>
                  <p className="text-xs font-bold">
                    Total Recipes : {numRecipes}
                  </p>
                  <p className="text-xs font-bold">Likes {likes}</p>
                  <p className="text-xs font-bold">
                    {experience} years of experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-2 border-rose-800 p-8 rounded-lg space-y-4">
          <h2 className="text-xl text-center font-bold text-rose-800">
            Chef's Special Recipe
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {details.recipes.map((recipe) => (
              <Recipe key={recipe.id} recipe={recipe}></Recipe>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ChefsRecipe;
