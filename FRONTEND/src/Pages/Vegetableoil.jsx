
import React, { useContext } from "react";
import Navbar from "../Components/Navbar";
import { myContext } from "../Context/ContextProvider";
import Icon from "../Components/Icon";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const Vegetableoil= () => {
  const {
    navigate,
    productData,
    wishlist,
    cart,
    addToWishlist,
    addToCart,
  } = useContext(myContext);

  return (
    <>
     
      <div className="sticky-wrapper">
        <Navbar />

        <div className="category-bar">
          <h3 className="text-danger fw-bold m-0">
           Vegetable oil
          </h3>
        </div>
      </div>

      
      <div className="container" style={{ paddingTop: "20px", paddingBottom: "90px" }}>
        <div className="row justify-content-center g-4">
          {productData
            .filter((value) => value.productCategory === "Vegetableoil")
            .map((value, index) => (
              <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                <div
                  className="card h-100 border-0 mt-3 product-card"
                  onClick={() => navigate(`/product/${value._id}`)}
                >
                  <div className="img-wrapper">
                   
                    <FaHeart
                      onClick={(e) => {
                        e.stopPropagation();
                        addToWishlist(value);
                      }}
                      className="wishlist-icon"
                      style={{
                        color: wishlist.some((i) => i._id === value._id)
                          ? "red"
                          : "#ccc",
                      }}
                    />

                    
                    <FaShoppingCart
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(value);
                      }}
                      className="cart-icon"
                      style={{
                        color: cart.some((i) => i._id === value._id)
                          ? "#3e2723"
                          : "#ccc",
                      }}
                    />

                    <img
                      src={value.productImg}
                      alt={value.productName}
                      className="product-img"
                    />
                  </div>

                  <div className="card-body text-center">
                    <h5 className="mb-1">{value.productName}</h5>
                    <p className="text-secondary small">
                      {value.productDescription}
                    </p>
                    <h6 className="text-danger">
                      ₹ {value.productPrice}
                    </h6>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <Icon />

      
      <style>{`
        
        .sticky-wrapper {
          position: sticky;
          top: 0;
          z-index: 1200;
          background: #fff;
        }

        .category-bar {
          padding: 12px 0;
          text-align: center;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          background: #fff;
        }

       
        .product-card {
          max-width: 320px;
          margin: auto;
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
          cursor: pointer;
          transition: 0.4s;
        }

        .product-card:hover {
          transform: translateY(-10px);
        }

        .img-wrapper {
          position: relative;
          overflow: hidden;
        }

        .product-img {
          width: 100%;
          height: 320px;
          object-fit: cover;
          transition: 0.4s;
          display: block;
        }

        .product-card:hover .product-img {
          transform: scale(1.1);
        }

        
        .wishlist-icon {
          position: absolute;
          top: 12px;
          right: 12px;
          font-size: 22px;
          z-index: 10;
          cursor: pointer;
        }

        .cart-icon {
          position: absolute;
          bottom: 12px;
          right: 12px;
          font-size: 22px;
          z-index: 10;
          cursor: pointer;
        }

        
        @media (max-width: 768px) {
          .product-img {
            height: 280px;
          }
        }
      `}</style>
    </>
  );
};

export default Vegetableoil;