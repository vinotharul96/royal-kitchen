
import React, { useContext } from "react";
import { myContext } from "../Context/ContextProvider";
import Navbar from "../Components/Navbar";
import Icon from "../Components/Icon";

const Checkout = () => {
  const {
    cart,
    cartTotal,
    increaseQty,
    decreaseQty,
    removeFromCart,
    clearCart,
    navigate,
  } = useContext(myContext);

  
  const handlePlaceOrder = () => {
    // alert("🎉 Order Placed Successfully!");
    navigate("/order",{
    state:{ total:cartTotal}
    })
    clearCart();          
    
  };

  if (cart.length === 0) {
    return (
      <>
        <Navbar />
        <div className="container text-center mt-5">
          <h4>Your cart is empty 😔</h4>
          <button
            className="btn btn-primary mt-3"
            onClick={() => navigate("/home")}
          >
            Go Shopping
          </button>
        </div>
        <Icon />
      </>
    );
  }

  return (
    <>
      <Navbar />

      
      <div
        className="bg-white text-center py-2 border-bottom"
        style={{
          position: "sticky",
          top: "70px",
          zIndex: 900,
        }}
      >
        <h4 className="text-danger m-0">Checkout</h4>
      </div>

     
      <div className="container mt-2" style={{ paddingBottom: "170px" }}>
        {cart.map((item) => (
          <div className="card mb-3 shadow-sm" key={item._id}>
            <div className="row g-0 align-items-center">
              <div className="col-4 text-center">
                <img
                  src={item.productImg}
                  alt={item.productName}
                  className="img-fluid p-2"
                  style={{ height: "100px", objectFit: "contain" }}
                />
              </div>

              <div className="col-8">
                <div className="card-body p-2">
                  <h6 className="mb-1">{item.productName}</h6>
                  <p className="mb-2">₹ {item.productPrice}</p>

                  <div className="d-flex align-items-center gap-2">
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => decreaseQty(item._id)}
                    >
                      −
                    </button>

                    <span>{item.qty}</span>

                    <button
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => increaseQty(item._id)}
                    >
                      +
                    </button>

                    <button
                      className="btn btn-sm btn-danger ms-auto"
                      onClick={() => removeFromCart(item._id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      
      <div
        className="fixed-bottom bg-white border-top shadow"
        style={{ bottom: "60px", zIndex: 1000 }}
      >
        <div className="container text-center py-3">
          <h5 className="mb-2">
            Total :
            <span className="text-danger"> ₹ {cartTotal}</span>
          </h5>

          
          <button
  onClick={handlePlaceOrder}
  style={{
    width: "50",
    padding: "10px",
    backgroundColor: "#198754",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    animation: "zoomPulse 1.2s infinite",
  }}
>
  Place Order
</button>
        </div>
      </div>

      <Icon />

      <style>{`
  @keyframes zoomPulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.08);
    }
    100% {
      transform: scale(1);
    }
  }
`}</style>

    </>
  );
};

export default Checkout;