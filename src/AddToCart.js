import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Products from "./pages/Products";
import { productById } from "./apiHits/products/productByCategories/productById";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddToCart() {
  const [incDEc, setIncDec] = useState(1);
  const [data, setData] = useState([]);
  const param = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      if (param.id) {
        let dataList = await productById(param.id);
        console.log("add cart", dataList);
        dataList.newIncDEc = incDEc; // adding new object in exicting object
        console.log("new data", dataList);
        setData(dataList);
      }
    }
    fetchData();
  }, []);
  const handleInc = () => {
    data.newIncDEc = incDEc + 1;

    setIncDec(incDEc + 1);
  };
  const handleDec = () => {
    if (incDEc !== 1) {
      data.newIncDEc = incDEc - 1;
      setIncDec(incDEc - 1);
    }
  };
  const handleClick = () => {
    const add = data.price * incDEc;
    let preData = JSON.parse(localStorage.getItem("newData")) || [];
    const checkData = preData.findIndex((item) => item.id === data.id);
    if (checkData !== -1) {
      toast.info("product Already added to card");
    } else {
      preData = [...preData, data];
      localStorage.setItem("newData", JSON.stringify(preData));
      navigate(`/cart`);
      console.log("price", add);
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 mx-8 my-16">
        <div className="flex justify-center items-end flex-col mr-4 ">
          <div className="border-2 p-4">
            <img style={{ width: 300, height: 300 }} src={data?.image}></img>
          </div>
          <div className="m-8 ">
            <button
              onClick={handleClick}
              className="bg-blue-400 p-1 rounded-md hover:bg-blue-200 w-48 h-12"
            >
              Add To Cart
            </button>
          </div>
        </div>
        <div className="flex flex-col  bg-slate-50 p-4 mb-7">
          <h1 className="text-2xl ">{data?.title}</h1>
          <div className="mt-4">
            <h1>
              rating: {data?.rating?.rate} ({data?.rating?.count})
            </h1>
            <h1 className="text-2xl mt-2">RS. {data?.price}</h1>
          </div>
          <div className="flex flex-row mt-4 ">
            <h1 className="text-lg">Quantity</h1>
            <div className="text-lg ml-16 flex flex-row justify-center items-center border-2 p-1 ">
              <Icon icon="fluent-emoji-flat:minus" onClick={handleDec} />
              <h1 className="mx-4 text-xl font-mono">{incDEc}</h1>
              <Icon icon="fluent-emoji-flat:plus" onClick={handleInc} />
            </div>
          </div>
        </div>
        <div>
          <button onClick={handleClick} className="p-2 bg-blue-200">
            click
          </button>
        </div>
      </div>
    </>
  );
}

export default AddToCart;
