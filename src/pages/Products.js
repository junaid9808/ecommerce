import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavbarMenu from "../components/navbar/NavbarMenu";
import { GetJewelery } from "../apiHits/products/productByCategories/GetJewelery";
import Footer from "./footer/Footer";

export default function Products() {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();
  const image = ["me.png", "clothes.jpg", "me.png", "tv.png"];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  useEffect(() => {
    async function fetchData() {
      let dataList = await GetJewelery();
      let data = dataList.map((item) => item.category);
      const uniqueData = [...new Set(data)];
      console.log("dataaaaa", dataList);
      setCategories(uniqueData);
      setData(dataList);
    }
    fetchData();
  }, []);

  const navigateToPage = (id) => {
    navigate(`/addtocart/${id}`);
  };

  return (
    <>
      <div>
        <div className="mx-4 mt-28 ">
          <div className="bg-blue-200  rounded-md flex flex-row justify-center">
            {categories?.map((item, index) => (
              <div
                key={index}
                className="flex justify-center items-center flex-col mx-auto"
              >
                <div className="rounded-full flex items-center">
                  <img
                    style={{ width: 100, height: 100 }}
                    className="rounded-full"
                    src={image[index]}
                    alt="img"
                  />
                </div>
                <div className="mt-1 flex items-center">
                  <span className="text-white font-mono">{item}</span>
                </div>
              </div>
            ))}
          </div>
          {console.log("first", data)}
          <div className=" grid grid-cols-5 mt-6 bg-gray-50  ">
            {data?.map((item, index) => (
              <div
                key={index}
                className="p-2 my-4 bg-white hover:bg-gray-50 flex justify-center items-center flex-col"
                style={{
                  border: index === hoveredIndex ? "2px solid #007BFF" : "none",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{ width: 150, height: 200 }}
                    src={item.image}
                    alt="imh"
                  ></img>
                  {index === hoveredIndex && (
                    <button
                      onClick={(id) => navigateToPage(item.id)}
                      variant="primary"
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        padding: "8px",
                        background: "rgba(0, 123, 255, 0.8)",
                      }}
                      className="text-white"
                    >
                      add Cart
                    </button>
                  )}
                </div>
                <div className="mt-4">
                  <div>
                    <span className="line-clamp-1 text-blue-400">
                      {item.title}
                    </span>
                  </div>
                  <div className="mt-4">
                    <div>
                      <h1>{item.price}</h1>
                    </div>
                    <div className="my-2  flex flex-row">
                      <div className="mr-2">
                        <h1 className="text-lg bg-blue-300 rounded-md p-1">
                          rating: {item.rating.rate}
                        </h1>
                      </div>
                      <div className="flex justify-center items-center">
                        <span>({item.rating.count})</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12">
          <Footer />
        </div>
      </div>
    </>
  );
}
