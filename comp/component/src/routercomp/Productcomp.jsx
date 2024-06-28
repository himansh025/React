import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { featchsignleproduct } from "../Redux/Actions/Product";
import "./Productcomp.css"

function Productcomp() {
  const dispatch = useDispatch();
  const prod = useSelector((state) => state.Products.singleProduct);
  const isLoading = useSelector((state) => state.Products.isLoading);
  const { id } = useParams();

  useEffect(() => {
    dispatch(featchsignleproduct(id));
  }, [id, dispatch]);

  return (
    <div className="product-comp">
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="product-details">
              <div className="product-images">
            {/* <h2>Images</h2> */}
            <div className="image-gallery flex justify-center border-black border-solid border-2 ">
              {prod?.images?.map((image, index) => (
                <div key={index} className="image-container">
                  <img src={image} alt={`product-${index}`} className="product-image" />
                </div>
              ))}
            </div>
          </div>
          <h1 className="product-title">{prod?.title}</h1>
          <p className="product-description">Category :{prod?.category}</p>
          <p className="product-price"><strong>Price:</strong> ${prod?.price}</p>
          <p className="product-rating"><strong>Rating:</strong> {prod?.rating}</p>
          <p className="product-brand"><strong>Brand:</strong> {prod?.brand}</p>
        
        </div>
      )}
    </div>
  );
}

export default Productcomp;
