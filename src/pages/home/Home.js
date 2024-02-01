import React, { useEffect, useState } from "react";
import HomeSlider from "./HomeSlider";
import HomeHeader from "./HomeHeader";
import { Icon } from "@iconify/react";
// import { Link } from "react-router-dom";
import ProductByCategoery from "./ProductByCategoery";
import { GetAllCategories } from "../../apiHits/productCategoryApi/GetAllCategories";
import { Link, Element, animateScroll as scroll } from "react-scroll";

export default function Home() {
  const [data, setData] = useState([]);
  const [selecter, setSelecter] = useState("");
  const icons = [
    "icon-park:tv-one",
    "twemoji:ring",
    "twemoji:men-holding-hands-light-skin-tone",
    "twemoji:ring",
  ];
  useEffect(() => {
    async function fetchData() {
      let dataList = await GetAllCategories();
      setData(dataList);
    }
    fetchData();
  }, []);
  return (
    <>
      <div className="mt-28 ">
        <HomeHeader setSelecter={setSelecter} />
        <div className=" relative mx-4 mt-4">
          <div class="container m-auto grid grid-cols-4 gap-2">
            <div class="tile  bg-slate-100 ">
              <h1 class="tile-marker ml-4 my-3">Top Categories</h1>
              <div className="ml-8">
                {data.map((item, index) => (
                  <div key={index}>
                    <ul>
                      <li className="mb-4">
                        <Link to={item} onClick={() => setSelecter(item)}>
                          <div className="flex  flex-row items-center hover:bg-blue-300 ">
                            <Icon icon={icons[index]} />
                            <span className="ml-4">{item}</span>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div class="col-span-2">
              <HomeSlider></HomeSlider>
            </div>
            <div class=" bg-slate-100 gap-2">
              <div className="">
                <img src="right1.png"></img>
              </div>
              <div className="mt-2">
                <img src="right2.jpg"></img>
              </div>
            </div>
          </div>
          <div>
            <ProductByCategoery selecter={selecter} />
          </div>
          <div class="grid grid-cols-4 gap-2 my-4">
            <div class="col-span-2">
              <img src="big.jpg" alt="moblie"></img>
            </div>
            <div class="col-span-2">
              <img src="big2.jpg" alt="moblie"></img>
            </div>
          </div>
          <div className="bg-slate-100  px-2 ">
            <h3 className="text-xl font-mono text-black">
              The Trusted Online Shopping Store in Pakistan
            </h3>
            <span>
              Telemart, is a known name in the e-commerce sphere of Pakistan,
              owned by Tradelink enterprise. The parent company, Tradelink, has
              been dealing in electronics since 1991.
            </span>
            <span>
              Telemart, is a known name in the e-commerce sphere of Pakistan,
              owned by Tradelink enterprise.
            </span>
            <span>
              Telemart, is a known name in the e-commerce sphere of Pakistan,
              owned by Tradelink enterprise.
            </span>
            <span>
              Telemart, is a known name in the e-commerce sphere of Pakistan,
              owned by Tradelink enterprise.
            </span>
            <span>
              Telemart, is a known name in the e-commerce sphere of Pakistan,
              owned by Tradelink enterprise.
            </span>
            <span>
              Telemart, is a known name in the e-commerce sphere of Pakistan,
              owned by Tradelink enterprise.
            </span>
            <span>
              Telemart, is a known name in the e-commerce sphere of Pakistan,
              owned by Tradelink enterprise.
            </span>
            <span>
              Telemart, is a known name in the e-commerce sphere of Pakistan,
              owned by Tradelink enterprise.
            </span>
            <h3 className="text-xl font-mono text-black mt-2">
              Online Shopping in Pakistan at Its Finest.
            </h3>
            <span>
              One thing we do not compromise on is Trust of the people who are
              coming on our website. While shopping online is still considered
              risky in pakistan, we make sure our customers are provided with
              detailed information and complete support throughout their journey
              from order placing to shipment to after-sales service. We are the
              trusted and preferred choice of seller when it comes to online
              shopping in Pakistan with our customer centric approach, top-notch
              quality, free delivery options, easy return policies and secure
              payment, we share great pride in providing only the best.
            </span>
            <h3 className="text-xl font-mono text-black mt-2">
              Exclusive Online Shopping Experience
            </h3>
            <span>
              One thing we do not compromise on is Trust of the people who are
              coming on our website. While shopping online is still considered
              risky in pakistan, we make sure our customers are provided with
              detailed information and complete support throughout their journey
              from order placing to shipment to after-sales service. We are the
              trusted and preferred choice of seller when it comes to online
              shopping in Pakistan with our customer centric approach, top-notch
              quality, free delivery options, easy return policies and secure
              payment, we share great pride in providing only the best.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
