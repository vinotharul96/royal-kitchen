
import React, { useContext} from "react";
import Navbar from "../Components/Navbar";
import { myContext } from "../Context/ContextProvider";
import Icon from "../Components/Icon";
  import {FaHeart, FaShoppingCart } from "react-icons/fa";

const Snacks = () => {

    const {navigate, productData, wishlist, cart, addToWishlist,addToCart } = useContext(myContext)

  return (
    <>
    <div className="sticky-wrapper">
      <Navbar />
      <div className="category-bar">
       <h3 className="text-danger fw-bold m-0">
          Snacks
        </h3>
      </div>
    </div>
      <div className="container" style={{ paddingBottom: "90px" }}>
        <div className="row justify-content-center g-4">
          {productData
            .filter(
              (value) => value.productCategory === "Snacks"
            )
            .map((value) => (
              <div
                className="col-lg-4 col-md-6 col-sm-12"
                key={value._id}
              >
                <div
                  className="card h-100 border-0 mt-3"
                  style={{
                    width:"100%",
                    maxWidth:"320px",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                    margin:"auto",
                    transition: "0.4s",
                    cursor: "pointer",
                    position: "relative",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "translateY(-10px)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "translateY(0)")
                  }
                  
                >
                   <div style={{position: "relative", overflow: "hidden" }}>

                    <FaHeart
                    onClick={(e) => {
                     e.stopPropagation();
                    addToWishlist(value);
                    }}
                    style={{
                    position: "absolute",
                    top: "12px",
                    right: "12px",
                    fontSize: "22px",
                    zIndex: 10,
                    cursor: "pointer",
                    color: wishlist.some(
                          (i) => i._id === value._id
                        )
                          ? "red"
                          : "#ccc",
                      }}
                    /> 
                  <FaShoppingCart
                      onClick={(e) => {
                      e.stopPropagation();
                      addToCart(value);
                      }}
                      style={{
                      position: "absolute",
                      bottom: "12px",
                      right: "12px",
                      fontSize: "22px",
                      zIndex: 10,
                      cursor: "pointer",
                      color: cart.some(
                          (i) => i._id === value._id
                        )
                          ? "red"
                          : "#ccc",
                      }}
                      />
                    <img
                      src={value.productImg}
                      alt={value.productName} 
                      style={{
                        width: "100%",
                        height: "320px",
                        objectFit: "cover",
                        transition: "0.4s",
                        display:"block",
                      }}
                      
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.transform = "scale(1.1)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                    onClick={() => navigate(`/product/${value._id}`)}/>
                  </div>

                  <div className="card-body text-center d-flex flex-column justify-content-between">
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
  )
}
export default Snacks