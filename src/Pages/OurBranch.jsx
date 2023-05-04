import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const OurBranch = ({ branch }) => {
  const { name, address, city, cuisine, phone, rating, state, zip } = branch;
  return (
    <>
      <div className="card w-96 bg-red-200 shadow-xl">
        <div className="card-body text-center">
          <h2 className="text-lg font-bold">{name}</h2>
          <p className="text-sm font-semibold">{cuisine}</p>
          <div className="text-sm font-semibold">
            <Rating
              className="mx-auto"
              style={{ maxWidth: 80 }}
              value={rating}
              readOnly
            />
            <p>{rating}</p>
          </div>
          <p className="text-sm font-semibold">
            {address}, {city}, {state}, zip-{zip}
          </p>
          <p className="text-sm font-semibold">Phone : {phone}</p>
        </div>
      </div>
    </>
  );
};

export default OurBranch;
