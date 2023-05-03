import React, { useEffect, useState } from 'react';

const Chefs = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/recipe")
          .then((res) => res.json())
          .then((data) => setChefs(data));

        }, [])
        console.log(chefs)
    
    return (
      <>
        <section className="px-8 md:px-20 py-14">
          <div className="grid grid-cols-4 gap-6">
            
          </div>
        </section>
      </>
    );
};

export default Chefs;