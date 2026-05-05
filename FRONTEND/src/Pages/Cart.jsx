
import React, { useContext } from "react";
import { myContext } from "../Context/ContextProvider";
import Navbar from "../Components/Navbar";
import Icon from "../Components/Icon";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, cartTotal, removeFromCart } = useContext(myContext);
  const navigate = useNavigate();

  return (
    <>
      
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1200,
          background: "#fff",
          boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
        }}
      >
        <Navbar />
        <h3
          style={{
            textAlign: "center",
            color: "#dc3545",
            fontWeight: "bold",
            padding: "10px 0",
            margin: 0,
          }}
        >
          Cart
        </h3>
      </div>

      
      <div className="container" style={{ paddingBottom: "140px", marginTop: "15px" }}>
        <div className="row g-4">
          {cart.length === 0 ? (
            <p className="text-center mt-5">Cart empty 🛒</p>
          ) : (
            cart.map((item) => (
              <div className="col-md-4" key={item._id}>
                
                <div
                  className="card shadow"
                  style={{ cursor: "default" }}
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    src={item.productImg}
                    alt={item.productName}
                    height="300"
                    style={{
                      width: "100%",
                      objectFit: "cover",
                      pointerEvents: "none",
                    }}
                  />

                  <div className="card-body text-center">
                    <h6>{item.productName}</h6>
                    <p>₹ {item.productPrice}</p>

                    <button
                      className="btn btn-sm btn-danger mt-2"
                      onClick={() => removeFromCart(item._id)}
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

     
      {cart.length > 0 && (
        <div
          style={{
            position: "fixed",
            bottom: "60px",
            width: "100%",
            background: "#fff",
            padding: "12px",
            boxShadow: "0 -2px 12px rgba(0,0,0,0.15)",
            textAlign: "center",
            zIndex: 1100,
          }}
        >
          <button
            onClick={() => navigate("/checkout")}
            style={{
              padding: "10px 45px",
              backgroundColor: "#198754",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              animation: "cartZoom 1.4s infinite",
            }}
          >
            Checkout ₹ {cartTotal}
          </button>
        </div>
      )}

      <Icon />

      
      <style>{`
        @keyframes cartZoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.08); }
          100% { transform: scale(1); }
        }
      `}</style>
    </>
  );
};

export default Cart;