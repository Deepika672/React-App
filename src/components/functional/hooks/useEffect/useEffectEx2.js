import axios from "axios";
import React, { useEffect, useState } from "react";
import DNASpinner from "../../../class/spinners/dna-spinner"
import "./index.css"; // Ensure you create this CSS file in the same directory
import { Link } from "react-router-dom";
import useAxios from "../customHook/useAxios";

const UseEffectEx2 = () => {
  const url="https://fakestoreapi.com/products"
  const[products]=useAxios(url)
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   axios.get("https://fakestoreapi.com/products").then((response) => {
  //     if (response.status === 200) {
  //       setProducts(response.data);
  //     } else {
  //       alert("Something went wrong");
  //     }
  //   });
  // }, []);

  return (
    <>
      <h1>UseEffect example</h1>
      <div className="product-container">
        {products.length > 0 ? (
          products.map((eachObject) => {
            return (
              <div className="product-card" key={eachObject.id}>
                <img
                  src={eachObject.image}
                  alt={eachObject.title}
                  width={100}
                  height={"20px"}
                />
                <h2>{eachObject.title}</h2>

                <h5>${eachObject.price}</h5>
                <button>
                  <Link to={`/${eachObject.category}/${eachObject.id}`}>
                    Click to see the product
                  </Link>
                </button>
              </div>
            );
          })
        ) : (
          <DNASpinner />
        )}
      </div>
    </>
  );
};

export default UseEffectEx2;
