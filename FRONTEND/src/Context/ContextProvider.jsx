
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const myContext = createContext();

const ContextProvider = ({ children }) => {

  const navigate = useNavigate();
  
  const url = import.meta.env.VITE_API_URL || "http://localhost:5000"; 

  
  const [productData, setProductData] = useState([]);

  const productFetchFun = async () => {
    try {
      const productList = await axios.get(`${url}/product/getProduct`);
      setProductData(productList.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    productFetchFun();
  }, []);

  
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (product) => {
    setWishlist((prev) =>
      prev.find((i) => i._id === product._id) ? prev : [...prev, product]
    );
  };

  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((i) => i._id !== id));
  };

  
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const exist = cart.find((item) => item._id === product._id);

    if (exist) {
      setCart(
        cart.map((item) =>
          item._id === product._id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item._id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart
        .map((item) =>
          item._id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item._id !== id));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  
  const cartTotal = cart.reduce((total, item) => {
    const price = Number(
      item.productPrice
        .toString()
        .replace("₹", "")
        .replace(/,/g, "")
        .trim()
    );
    return total + price * item.qty;
  }, 0);

  
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const registerSubmitFun = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${url}/user/addUser`, {
        registerUsername: registerUsername,
        registerEmail: registerEmail,
        registerPassword: registerPassword,
      });

      console.log(res.data);

      alert("Registered Successfully");
      navigate("/");
    } catch (err) {
      console.log(err);
      alert(err.response?.data || "Register Failed");
    }
  };

  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");


  const loginSubmitFun = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${url}/user/loginUser`, {
        registerUsername: loginUsername,
        registerPassword: loginPassword,
      });

      console.log(res.data);

      localStorage.setItem("username", loginUsername);
      navigate("/slide");
      
      console.log("loginUsername",loginUsername);
      

    } catch (err) {
      console.log(err);
      alert(err.response?.data || "Invalid login");
    }
  };

  const logoutFun = () => {
    localStorage.removeItem("username")
    navigate("/");
  };

  
  const myContextValue = {
    navigate,
    productData,

    wishlist,
    addToWishlist,
    removeFromWishlist,

    cart,
    addToCart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    clearCart,
    cartTotal,

    registerUsername,
    setRegisterUsername,
    registerEmail,
    setRegisterEmail,
    registerPassword,
    setRegisterPassword,
    registerSubmitFun,

    loginUsername,
    setLoginUsername,
    loginPassword,
    setLoginPassword,
    loginSubmitFun,
    logoutFun,
    
  };

  return (
    <myContext.Provider value={myContextValue}>
      {children}
    </myContext.Provider>
  );
};

export default ContextProvider;
