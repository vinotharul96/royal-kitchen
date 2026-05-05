import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={styles.navbar}>
     
      <h1 style={styles.logoText}>
        Royal <span style={{ color: "#b76e79" }}>Kitchen</span>
      </h1>

     
      <div style={styles.menu}>
        {[ "/fruits", "/dairyproducts", "/nuts", "/snacks", "/vegetableoil", "/vegetables"].map((path, i) => {
          const names = ["Fruits", "Dairy Products", "Nuts", "Snacks", "Vegetable Oil", "Vegetables" ];
          return (
            <NavLink key={i} to={path} style={styles.link}>
              {({ isActive }) => (
                <button
                  style={{
                    ...styles.btn,
                    backgroundColor: isActive ? "#6e8eb7" : "#fff",
                    color: isActive ? "#fff" : "#333",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#6e8eb7";
                    e.target.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.target.style.backgroundColor = "#fff";
                      e.target.style.color = "#333";
                    }
                  }}

                  onTouchStart={(e) => {
                      e.target.style.backgroundColor = "#6e8eb7";
                      e.target.style.color = "#fff";
                    }}
                    onTouchEnd={(e) => {
                      if (!isActive) {
                        e.target.style.backgroundColor = "#fff";
                        e.target.style.color = "#333";
                      }
                    }}

                >
                  {names[i]}
                </button>
              )}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

const styles = {
  navbar: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    width: "100%",
    padding: "15px 20px",
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
  },

  logoText: {
    fontSize: "34px",
    fontWeight: "700",
    fontFamily: "Playfair Display, serif",
    letterSpacing: "2px",
    marginBottom: "12px",
    textAlign: "center",
  },

  menu: {
    display: "flex",
    gap: "10px",
    overflowX: "auto",
    whiteSpace: "nowrap",
    WebkitOverflowScrolling: "touch",
    maxWidth: "100%",
    overflowY:"hidden",
    padding: "5px 8px",
    boxSizing: "border-box",
  },

  btn: {
    padding: "8px 16px",
    borderRadius: "30px",
    border: "1px solid #b76e79",
    backgroundColor: "#fff",
    fontSize: "14px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    flexShrink: 0,
  },

  link: {
    textDecoration: "none",
  },
}

export default Navbar;