import React, { useContext } from "react";
import { myContext } from "../Context/ContextProvider";
import Navbar from "../Components/Navbar";
import Icon from "../Components/Icon";

const Wishlist = () => {
  const { wishlist, removeFromWishlist, addToCart } = useContext(myContext);

  return (
    <>
      
      <div className="sticky-wrapper">
        <Navbar />

        <div className="category-bar">
          <h3 className="text-danger fw-bold m-0">
            Wishlist
          </h3>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: "90px" }}>
        <div className="row g-4">
          {wishlist.length === 0 ? (
            <p className="text-center">Wishlist empty ❤️</p>
          ) : (
            wishlist.map((item) => (
              <div className="col-md-4" key={item._id}>
                <div className="card shadow">
                  <img src={item.productImg} height="300" />
                  <div className="card-body text-center">
                    <h6>{item.productName}</h6>
                    <p>₹ {item.productPrice}</p>

                    <button
                      className="btn btn-sm btn-success me-2"
                      onClick={() => addToCart(item)}
                    >
                      Add to Cart
                    </button>

                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => removeFromWishlist(item._id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
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
        `}</style>
    </>
  );
};

export default Wishlist;