import React from "react";

const ChefsCard = ({ chef }) => {
  const { id, chefName, chefPicture, experience, numRecipes, likes } = chef;
  return (
    <>
      <div className="max-w-xs rounded-lg shadow-lg bg-white">
        <img
          src={chefPicture}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">{chefName}</h3>
            <p className="text-md font-semibold text-gray-500 mb-5">
              {experience} Years of Experience
            </p>
            <p className="text-md font-semibold text-gray-500 mb-5">
              Recipes : {numRecipes}
            </p>
            <p className="text-md font-semibold text-gray-500 mb-5">
              Likes : {likes}
            </p>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-amber-800 text-white"
          >
            View Recipes
          </button>
        </div>
      </div>
    </>
  );
};

export default ChefsCard;
