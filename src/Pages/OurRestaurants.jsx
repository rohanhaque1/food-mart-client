import React, { useEffect, useState } from "react";
import OurBranch from "./OurBranch";

const OurRestaurants = () => {
  const [branches, setBranches] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/branch")
      .then((res) => res.json())
      .then((data) => setBranches(data));
  }, []);

  return (
    <>
          <section className="px-8 md:px-20 py-14 mx-auto">
              <h2 className="text-center text-3xl font-bold my-8">Our Branches</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {branches.map((branch) => (
            <OurBranch key={branch.id} branch={branch}></OurBranch>
          ))}
        </div>
      </section>
    </>
  );
};

export default OurRestaurants;
