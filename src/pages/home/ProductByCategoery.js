import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { GetJewelery } from "../../apiHits/products/productByCategories/GetJewelery";
import { Element } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProductByCategoery({ selecter }) {
  // const [data, setData] = useState([]);
  const navigate = useNavigate();

  const fetchData = useSelector((state) => {
    return state?.persistedReducer?.products?.data;
  });
  // useEffect(() => {
  //   async function fetchData() {
  //     let dataList = await GetJewelery();
  //     console.log("products", dataList);
  //     setData(dataList);
  //   }
  //   fetchData();
  // }, []);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  const handleNavigate = (id) => {
    navigate(`/addtocart/${id}`);
  };

  return (
    <>
      <Element name={selecter === "men's clothing" && "men's clothing"}>
        <div className="flex flex-row h-16 mb-6 bg-white">
          <div className="flex flex-row justify-start items-center">
            <h1 className="text-lg">Men's Fashion</h1>
          </div>
          <div className="flex items-center ml-auto ">
            <button
              className="p-2 w-auto border border-blue-700 h-10 hover:bg-blue-200 rounded-md"
              type="submit"
            >
              view all
            </button>
          </div>
        </div>
        <div class="grid grid-cols-4 ">
          <div class="col-span-1">
            <img
              style={{ width: 250, height: 410 }}
              src="me.png"
              alt="computer"
            ></img>
          </div>
          <div class="col-span-3">
            <Slider {...settings}>
              {fetchData
                .filter(
                  (categories) => categories.category === "men's clothing"
                )
                ?.map((item, index) => (
                  <div key={index}>
                    <div className="flex flex-col   bg-transparent  p-2 group border-indigo-500 hover:bg-white hover:shadow-lg">
                      <div className="  h-28 flex justify-center items-center">
                        <img
                          style={{ width: 150, height: 125 }}
                          src={item.image}
                        ></img>
                      </div>
                      <div className="mt-20 h-52">
                        <div className="my-2 mx-4">
                          <span className="line-clamp-1">{item.title}</span>
                        </div>
                        <div className="my-2 mx-4 flex flex-row">
                          <div className="mr-2">
                            <h1 className="text-lg bg-blue-300 rounded-md p-1">
                              rating: {item.rating.rate}
                            </h1>
                          </div>
                          <div className="flex justify-center items-center">
                            <span>({item.rating.count})</span>
                          </div>
                        </div>
                        <div className="my-2 mx-4">
                          <h1 className="text-lg">RS: {item.price}</h1>
                        </div>
                        <div className="flex  items-center mx-4">
                          <button
                            onClick={(id) => handleNavigate(item.id)}
                            type="submit"
                            className="bg-blue-300 rounded-md p-2 text-white hover:bg-blue-200"
                          >
                            Add Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </Slider>
          </div>
        </div>
      </Element>
      <Element name={selecter === "jewelery" && "jewelery"}>
        <div className="flex flex-row h-16 mb-6 bg-white">
          <div className="flex flex-row justify-start items-center">
            <h1>Jewelery</h1>
          </div>
          <div className="flex items-center ml-auto ">
            <button
              className="p-2 w-auto border border-blue-700 h-10 hover:bg-blue-200 rounded-md"
              type="submit"
            >
              view all
            </button>
          </div>
        </div>
        <div class="grid grid-cols-4 ">
          <div class="col-span-1">
            <img
              style={{ width: 250, height: 410 }}
              src="tv.png"
              alt="computer"
            ></img>
          </div>
          <div class="col-span-3">
            <Slider {...settings}>
              {fetchData
                .filter((categories) => categories.category === "jewelery")
                ?.map((item, index) => (
                  <div key={index}>
                    <div className="flex flex-col   bg-transparent  p-2 group border-indigo-500 hover:bg-white hover:shadow-lg">
                      <div className="  h-28 flex justify-center items-center">
                        <img
                          style={{ width: 150, height: 125 }}
                          src={item.image}
                        ></img>
                      </div>
                      <div className="mt-20 h-52">
                        <div className="my-2 mx-4">
                          <span className="line-clamp-1">{item.title}</span>
                        </div>
                        <div className="my-2 mx-4 flex flex-row">
                          <div className="mr-2">
                            <h1 className="text-lg bg-blue-300 rounded-md p-1">
                              rating: {item.rating.rate}
                            </h1>
                          </div>
                          <div className="flex justify-center items-center">
                            <span>({item.rating.count})</span>
                          </div>
                        </div>
                        <div className="my-2 mx-4">
                          <h1 className="text-lg">RS: {item.price}</h1>
                        </div>
                        <div className="flex  items-center mx-4">
                          <button
                            onClick={(id) => handleNavigate(item.id)}
                            type="submit"
                            className="bg-blue-300 rounded-md p-2 text-white hover:bg-blue-200"
                          >
                            Add Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </Slider>
          </div>
        </div>
      </Element>
      <Element name={selecter === "women's clothing" && "women's clothing"}>
        <div className="flex flex-row h-16 mb-6 bg-white">
          <div className="flex flex-row justify-start items-center">
            <h1>women Fashion</h1>
          </div>
          <div className="flex items-center ml-auto ">
            <button
              className="p-2 w-auto border border-blue-700 h-10 hover:bg-blue-200 rounded-md"
              type="submit"
            >
              view all
            </button>
          </div>
        </div>
        <div class="grid grid-cols-4 ">
          <div class="col-span-1">
            <img
              style={{ width: 250, height: 410 }}
              src="clothes.jpg"
              alt="computer"
            ></img>
          </div>
          <div class="col-span-3">
            <Slider {...settings}>
              {fetchData
                .filter(
                  (categories) => categories.category === "women's clothing"
                )
                ?.map((item, index) => (
                  <div key={index}>
                    <div className="flex flex-col   bg-transparent  p-2 group border-indigo-500 hover:bg-white hover:shadow-lg">
                      <div className="  h-28 flex justify-center items-center">
                        <img
                          style={{ width: 150, height: 125 }}
                          src={item.image}
                        ></img>
                      </div>
                      <div className="mt-20 h-52">
                        <div className="my-2 mx-4">
                          <span className="line-clamp-1">{item.title}</span>
                        </div>
                        <div className="my-2 mx-4 flex flex-row">
                          <div className="mr-2">
                            <h1 className="text-lg bg-blue-300 rounded-md p-1">
                              rating: {item.rating.rate}
                            </h1>
                          </div>
                          <div className="flex justify-center items-center">
                            <span>({item.rating.count})</span>
                          </div>
                        </div>
                        <div className="my-2 mx-4">
                          <h1 className="text-lg">RS: {item.price}</h1>
                        </div>
                        <div className="flex  items-center mx-4">
                          <button
                            onClick={(id) => handleNavigate(item.id)}
                            type="submit"
                            className="bg-blue-300 rounded-md p-2 text-white hover:bg-blue-200"
                          >
                            Add Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </Slider>
          </div>
        </div>
      </Element>
      <Element name={selecter === "electronics" && "electronics"}>
        <div className="flex flex-row h-16 mb-6 bg-white">
          <div className="flex flex-row justify-start items-center">
            <h1>Electronics</h1>
          </div>
          <div className="flex items-center ml-auto ">
            <button
              className="p-2 w-auto border border-blue-700 h-10 hover:bg-blue-200 rounded-md"
              type="submit"
            >
              view all
            </button>
          </div>
        </div>
        <div class="grid grid-cols-4 ">
          <div class="col-span-1">
            <img
              style={{ width: 250, height: 410 }}
              src="tv.png"
              alt="computer"
            ></img>
          </div>
          <div class="col-span-3">
            <Slider {...settings}>
              {fetchData
                .filter((categories) => categories.category === "electronics")
                ?.map((item, index) => (
                  <div key={index}>
                    <div className="flex flex-col   bg-transparent  p-2 group border-indigo-500 hover:bg-white hover:shadow-lg">
                      <div className="  h-28 flex justify-center items-center">
                        <img
                          style={{ width: 150, height: 125 }}
                          src={item.image}
                        ></img>
                      </div>
                      <div className="mt-20 h-52">
                        <div className="my-2 mx-4">
                          <span className="line-clamp-1">{item.title}</span>
                        </div>
                        <div className="my-2 mx-4 flex flex-row">
                          <div className="mr-2">
                            <h1 className="text-lg bg-blue-300 rounded-md p-1">
                              rating: {item.rating.rate}
                            </h1>
                          </div>
                          <div className="flex justify-center items-center">
                            <span>({item.rating.count})</span>
                          </div>
                        </div>
                        <div className="my-2 mx-4">
                          <h1 className="text-lg">RS: {item.price}</h1>
                        </div>
                        <div className="flex  items-center mx-4">
                          <button
                            onClick={(id) => handleNavigate(item.id)}
                            type="submit"
                            className="bg-blue-300 rounded-md p-2 text-white hover:bg-blue-200"
                          >
                            Add Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </Slider>
          </div>
        </div>
      </Element>
    </>
  );
}

export default ProductByCategoery;
