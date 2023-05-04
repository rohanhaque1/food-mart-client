import React, { useState } from "react";
import { BookmarkIcon } from "@heroicons/react/24/solid";
import toast, { Toaster } from "react-hot-toast";

const Recipe = ({ recipe }) => {
  const { cookingMethod, img, ingredients, ratings, recipeName } = recipe;
  const [isDisabled, setIsDisabled] = useState(false);

  const handleBookmark = () => {
    console.log("clicked")
    setIsDisabled(true);
    toast("Showing the recipe is your favorite..!");
  }
  return (
    <>
      <div className="card card-side bg-white shadow-xl">
        <figure>
          <img src={img} alt="recipe" />
        </figure>
        <div className="card-body">
          <h2 className="text-lg font-bold">{recipeName}</h2>
          <p className="text-md font-bold">Ingredients :</p>
          <ul className="grid grid-cols-2 gap-2">
            {ingredients.map((data, index) => (
              <li
                key={index}
                className="list-disc text-gray-600 font-semibold text-sm"
              >
                {data}
              </li>
            ))}
          </ul>
          <p>
            <strong>Cooking Method: </strong>
            {cookingMethod}
          </p>
          <div className="flex justify-between items-center">
            <p>
              Rating : <strong>{ratings}</strong>
            </p>
            <p>
              <BookmarkIcon
                onClick={handleBookmark}
                disabled={isDisabled}
                className={isDisabled ? 'text-gray-500 h-8 w-8' : 'text-rose-400 h-8 w-8'}
              />
              <Toaster />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipe;
