import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DairyProducts from './Pages/DairyProducts';
import Fruits from './Pages/Fruits';
import Nuts from './Pages/Nuts';
import Snacks from './Pages/Snacks';
import Vegetables from './Pages/Vegetables';
import Vegetableoil from './Pages/Vegetableoil';
import Home from './Pages/Home';
import ProtectedRoute from './Components/ProtectedRouter';
import Register from './Pages/Register';
import Login from './Pages/Login';
import ContextProvider from './Context/ContextProvider';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import Order from './Pages/Order';
import Slide from './Pages/Slide';
import Wishlist from './Pages/Wishlist';


function App() {

  return (
   <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/slide"
            element={
              <ProtectedRoute>
                <Slide />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dairyproducts"
            element={
              <ProtectedRoute>
                <DairyProducts />
              </ProtectedRoute>
            }
          />
          <Route
            path="/fruits"
            element={
              <ProtectedRoute>
                <Fruits />
              </ProtectedRoute>
            }
          />
          <Route
            path="/nuts"
            element={
              <ProtectedRoute>
                <Nuts />
              </ProtectedRoute>
            }
          />
          <Route
            path="/snacks"
            element={
              <ProtectedRoute>
                <Snacks />
              </ProtectedRoute>
            }
          />
          <Route
            path="/vegetableoil"
            element={
              <ProtectedRoute>
                <Vegetableoil />
              </ProtectedRoute>
            }
          />
          <Route
            path="/vegetables"
            element={
              <ProtectedRoute>
                <Vegetables />
              </ProtectedRoute>
            }
          />

          <Route
            path="wishlist"
            element={
              <ProtectedRoute>
                <Wishlist />
              </ProtectedRoute>
            }
          />
          <Route
            path="cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route
            path="checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />
          <Route
            path="order"
            element={
              <ProtectedRoute>
                <Order />
              </ProtectedRoute>
            }
          />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
