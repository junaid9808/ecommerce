import "./App.css";
import NavbarMenu from "./components/navbar/NavbarMenu";
import Home from "./pages/home/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import AddToCart from "./AddToCart";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LoginPage from "./pages/LoginPage";
import { useEffect, useState } from "react";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    let isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn && isLoggedIn === "true") {
      setLoggedIn(true);
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setLoggedIn(false);
  };
  return (
    <>
      <NavbarMenu loggedIn={loggedIn} handleLogout={handleLogout}></NavbarMenu>
      <Routes>
        <Route exect path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/addtocart/:id" element={<AddToCart />}></Route>
        <Route
          path="/login"
          element={<LoginPage setLoggedIn={setLoggedIn} />}
        ></Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
