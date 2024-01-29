("use client");
import React from "react";

import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export default function NavbarMenu({ loggedIn, handleLogout }) {
  return (
    <div className="bg-white text-black h-20 flex mx-4 rounded-md  mt-3">
      <div className="my-2">
        <ul className="flex">
          <div className="pl-12 my-1 ">
            <li className="mr-3">
              <img
                className="rounded-xl"
                src="img1.jpg"
                width={72}
                height={72}
                alt="ecommerce"
              ></img>
            </li>
          </div>
          <div className="flex flex-row justify-center items-center ml-60">
            <li className="mr-3">
              <Link
                className="flex items-center   hover:bg-blue-400 rounded-xl   py-3 px-3"
                to="/"
              >
                <Icon icon="clarity:home-line" />
                <span className="ml-2"> home</span>
              </Link>
            </li>
            <li className="mr-3">
              <Link
                className=" flex items-center  py-3 px-3  hover:bg-blue-400 rounded-xl"
                to="/products"
              >
                <Icon icon="eos-icons:products" />
                <span className="ml-2"> products</span>
              </Link>
            </li>
            <li className="mr-3">
              <Link
                className=" flex items-center  py-3 px-3  hover:bg-blue-400 rounded-xl "
                to="/about"
              >
                <Icon icon="material-symbols:roundabout-right-sharp" />
                <span className="ml-2"> about</span>
              </Link>
            </li>
          </div>
          <div className="flex justify-center flex-row items-center ml-72">
            {loggedIn ? (
              <>
                <li>
                  <div
                    className="flex flex-row hover:bg-blue-400 p-2 rounded-xl"
                    onClick={handleLogout}
                  >
                    <div className="mt-1">
                      <Icon icon="uiw:logout" />
                    </div>
                    <span className="ml-1">logOut</span>
                  </div>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login">
                  <div className="flex flex-row hover:bg-blue-400 p-2 rounded-xl">
                    <div className="mt-1">
                      <Icon icon="mdi-light:login" />
                    </div>
                    <span className="ml-1">login</span>
                  </div>
                </Link>
              </li>
            )}
            <li>
              <Link to="/cart">
                <div className="ml-6">
                  <Icon icon="bytesize:cart" />
                </div>
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}
