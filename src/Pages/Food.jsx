import React from 'react';

const Food = ({ food }) => {
    const {name, picture, ingredients, review } = food;
    return (
      <>
        <div className="card bg-white shadow-xl">
          <figure>
            <img src={picture} alt="food" className="h-96 w-full" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">
              {name}
              <div className="badge badge-warning">{review ? review : "No review"}</div>
            </h2>
            <p className="font-bold">Ingredients :</p>
            <ul>{ingredients.map((item, index) => <li key={index}><span>{index + 1}. </span>{item}</li>)}</ul>
            
          </div>
        </div>
      </>
    );
};

export default Food;