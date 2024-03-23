import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import DNASpinner from "../components/class/spinners/dna-spinner";

function ProductScreen() {
  const paramsInformation = useParams();
  const [productDetail, setProductDetail] = useState({});
  console.log(paramsInformation);
  useEffect(() => {
    fetchProductData();
  }, [paramsInformation.product]);
  async function fetchProductData() {
    const result = await axios.get(
      `https://fakestoreapi.com/products/${paramsInformation.product}`
    );
    if (result.status === 200) {
      setProductDetail(result.data);
    }
    console.log(result.data);
  }

  function isEmpty(data) {
    return Object.keys(data).length === 0;
  }
  return (
    <div>
      {isEmpty(productDetail) ? (
        <DNASpinner />
      ) : (
        <>
        <div style={{border:"2px solid black", width:"420px"}}>
          <h3>{productDetail.category}</h3>
          <img
            src={productDetail.image}
            alt={productDetail.title}
            width={400}
            height={300}
          />
          </div>
        </>
      )}
    </div>
  );
}

export default ProductScreen;
