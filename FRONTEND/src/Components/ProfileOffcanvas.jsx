import React, { useState, useContext } from "react";
import OffcanvasAbout from "./OffcanvasAbout";
import OffcanvasContact from "./OffcanvasContact";
import { myContext } from "../Context/ContextProvider";

const ProfileOffcanvas = ({ close }) => {
  const [view, setView] = useState("profile");
  const { logoutFun, navigate } = useContext(myContext);

  const handleLogout = () => {
    logoutFun();
    close();
    navigate("/");
  };

  return (
    <>
      
      <div
        onClick={close}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.35)",
          zIndex: 1000,
        }}
      />

     
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "100%",
          maxWidth: "360px",
          height: "100vh",
          background: "#fff",
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          boxShadow: "-6px 0 15px rgba(0,0,0,0.25)",
        }}
      >
       
        <div style={{ flex: 1, overflowY: "auto", padding: "20px" }}>
         
          <button
            onClick={close}
            style={{
              position: "absolute",
              top: 12,
              right: 15,
              fontSize: "26px",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            ×
          </button>

         
          {view !== "profile" && (
            <button
              onClick={() => setView("profile")}
              style={{
                background: "none",
                border: "none",
                fontSize: "14px",
                cursor: "pointer",
                marginBottom: "10px",
              }}
            >
              ← Back
            </button>
          )}

          
          {view === "profile" && (
            <>
              <h4 className="text-center">Profile</h4>

             
              <div style={{ textAlign: "center", margin: "20px 0" }}>
                <img
                 src="https://optimisingnutrition.com/wp-content/uploads/2024/06/vitamin-rich-foods.png"
                  alt="couple"
                  width="120"
                  height="120"
                  style={{
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "3px solid #8b3a62",
                  }}
                />
                <p
                  style={{
                    marginTop: "10px",
                    fontWeight: "600",
                    color: "#8b3a62",
                  }}
                >
                  Royal Kitchen 💍
                </p>
              </div>

             
              <p style={{ textAlign: "center", fontSize: "14px" }}>
                Welcome to <b>Royal Kitchen</b> <br />

                Your kitchen dreams, lovingly adorned ✨
               Royal Kitchen is where elegance and emotion intertwine.
               Blending timeless traditions, luxurious cuisine, and modern aesthetics, we celebrate love with royal grace.
              </p>

              
              <div style={{ marginTop: "30px" }}>
                <div
                  className="profile-link"
                  onClick={() => setView("about")}
                >
                  About Us
                </div>

                <div
                  className="profile-link"
                  onClick={() => setView("contact")}
                >
                  Contact Support
                </div>
              </div>
            </>
          )}

          {view === "about" && <OffcanvasAbout />}
          {view === "contact" && <OffcanvasContact />}
        </div>

       
        <button
          onClick={handleLogout}
          style={{
            background: "#e53935",
            color: "#fff",
            padding: "14px",
            border: "none",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>

      
      <style>{`
        .profile-link {
          padding: 14px 18px;
          margin-bottom: 14px;
          border-radius: 14px;
          background: #f7f1f4;
          color: #8b3a62;
          font-weight: 600;
          cursor: pointer;
          transition: 0.35s ease;
          box-shadow: 0 6px 14px rgba(0,0,0,0.08);
        }

        .profile-link:hover {
          background: #8b3a62;
          color: #fff;
          transform: translateX(8px);
          box-shadow: 0 10px 22px rgba(139,58,98,0.45);
        }
      `}</style>
    </>
  );
};

export default ProfileOffcanvas;