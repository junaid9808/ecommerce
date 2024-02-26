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
import { jwtDecode } from "jwt-decode";
import Footer from "./pages/footer/Footer";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { googleLogout } from "@react-oauth/google";
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

  // const clientId =
  //   "430536531455-kj43ok2au2nq5h3pve45c8ntq4ata3dq.apps.googleusercontent.com";
  // const handleLogoutSuccess = () => {
  //   console.log("Logout successful");
  //   // Additional logout handling if needed
  // };
  return (
    <>
      {/* <h1>hello</h1>
      <div className="flex justify-center items-center mt-8">
        <GoogleOAuthProvider clientId={clientId}>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const decoded = jwtDecode(credentialResponse.credential);
              let email = localStorage.setItem(
                "email",
                JSON.stringify(decoded.email_verified)
              );
              console.log(email);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
            shape="pill"
            theme="filled_blue"
          />
        </GoogleOAuthProvider>
      </div> */}

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
