import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import AuthContextProvider from "./context/AuthContext";
import CartContextProvider from "./context/CartContext";
import Checkout from "./pages/checkout/Checkout";
import Detail from "./pages/detail/Detail";

import Home from "./pages/home/Home";
import LoginPage from "./pages/login/LoginPage";
import Success from "./pages/success/Success";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthContextProvider>
          <CartContextProvider>
            <Banner />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:type" element={<Home />} />
              <Route path="/:type/:id" element={<Detail />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/success" element={<Success />} />
            </Routes>
            <Footer />
            <ToastContainer theme="colored" autoClose={2000} />
          </CartContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
