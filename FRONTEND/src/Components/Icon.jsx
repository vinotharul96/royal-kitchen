
import React, { useContext, useState } from "react";
import { FaHome, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { myContext } from "../Context/ContextProvider";
import ProfileOffcanvas from "./ProfileOffcanvas";

const Icon = () => {
  const navigate = useNavigate();
  const { wishlist, cart } = useContext(myContext);

  
  const [showProfile, setShowProfile] = useState(false);

  return (
    <>
     
      <div style={containerStyle}>
        <div onClick={() => navigate("/home")} style={iconStyle}>
          <FaHome size={24} />
          <span>Home</span>
        </div>

        <div onClick={() => navigate("/wishlist")} style={{ ...iconStyle, position: "relative" }}>
          <FaHeart size={24} />
          <span>Wishlist</span>
          {wishlist?.length > 0 && <span style={badgeStyle}>{wishlist.length}</span>}
        </div>

        <div onClick={() => navigate("/cart")} style={{ ...iconStyle, position: "relative" }}>
          <FaShoppingCart size={24} />
          <span>Cart</span>
          {cart?.length > 0 && <span style={badgeStyle}>{cart.length}</span>}
        </div>

        
        <div
          onClick={() => setShowProfile(true)} 
          style={profileStyle}
        >
          <img
            src="https://img2.10bestmedia.com/Images/Photos/384075/GettyImages-1221418765_54_990x660.jpg" 
            alt="Profile"
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      
      {showProfile && <ProfileOffcanvas close={() => setShowProfile(false)} />}
    </>
  );
};

const containerStyle = {
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  background: "#fff",
  borderTop: "1px solid #ddd",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  padding: "12px 0",
  zIndex: 1000,
};

const iconStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontSize: "12px",
  cursor: "pointer",
  color: "#444",
};

const profileStyle = {
  height: "42px",
  width: "42px",
  borderRadius: "50%",
  backgroundColor: "#8b3a62",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
};

const badgeStyle = {
  position: "absolute",
  top: "-5px",
  right: "-10px",
  background: "red",
  color: "#fff",
  borderRadius: "50%",
  padding: "2px 6px",
  fontSize: "10px",
  fontWeight: "bold",
};

export default Icon;