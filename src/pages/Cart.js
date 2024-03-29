import React, { useEffect, useState, useContext } from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
// import { CartContext } from "../components/contextApi/Provider";
import Footer from "./footer/Footer";
import { decrementCart } from "../store/slices/Cartslice";
import { useDispatch, useSelector } from "react-redux";

export default function Cart() {
  const [data, setData] = useState([]);
  const [sum, setSum] = useState(0);
  const [quantity, setQuantity] = useState();
  const navigate = useNavigate();
  // const { count, setCount } = useContext(CartContext);
  const dispatch = useDispatch();
  const selector = useSelector((state) => {
    return state?.persistedReducer?.addToCart?.count;
  });
  useEffect(() => {
    fetchData();
  }, [quantity]);

  const fetchData = () => {
    let getData = JSON.parse(localStorage.getItem("newData"));
    let data = getData?.reduce((acc, item) => {
      return acc + item.price * item.newIncDEc;
    }, 0);
    setData(getData);
    setSum(data);
  };

  const deleteItem = (id) => {
    const upDateData = data.filter((itemId) => itemId.id !== id);
    setData(upDateData);
    // setCount((preData) => preData - 1);
    if (selector > 0) {
      dispatch(decrementCart());
    }

    console.log("updated data", upDateData);
    localStorage.setItem("newData", JSON.stringify(upDateData));
  };
  const handleContinue = () => {
    navigate(`/`);
  };
  const handlePlus = (index) => {
    fetchData();
    const uddated = [...data];
    uddated[index].newIncDEc += 1;

    localStorage.setItem("newData", JSON.stringify(uddated));
    setData(uddated);
    setQuantity(uddated);
  };
  const handleMinus = (index) => {
    fetchData();
    const preData = [...data];
    if (preData[index].newIncDEc > 1) {
      preData[index].newIncDEc -= 1;

      localStorage.setItem("newData", JSON.stringify(preData));
      setData(preData);
      setQuantity(preData);
    }
  };

  const handleDataDelete = () => {
    localStorage.removeItem("newData");
    setSum(0);
    setData([]);
    // setCount();
    navigate("/");
  };

  return (
    <>
      <div>
        <div className="mt-28 mx-8">
          <div className="grid grid-cols-3 gap-1  ">
            <div className=" col-span-2     ">
              {data?.map((item, index) => (
                <div key={index} className="flex   pb-1 ">
                  <div className=" p-1 ">
                    <img
                      style={{ width: 150, height: 150 }}
                      src={item.image}
                      alt="img"
                    ></img>
                  </div>
                  <div className="ml-2 mt-12">
                    <h3 className="text-lg">{item.title}</h3>
                    <div
                      className="flex flex-row items-center mt-2 "
                      onClick={() => deleteItem(item.id)}
                    >
                      <Icon icon="icon-park:delete-five" />
                      <button className="hover:bg-slate-50">remove</button>
                    </div>
                  </div>
                  <div className=" flex ml-auto items-center justify-center mr-10 flex-col">
                    <h1 className="text-red-500 mb-2">
                      RS. {(item.price * item.newIncDEc)?.toFixed(2)}/-
                    </h1>
                    <div className="flex justify-center items-start  ">
                      <Icon
                        onClick={() => handleMinus(index)}
                        icon="fluent-emoji-flat:minus"
                        className="mt-2 border-2"
                      />
                      <h1 className="mx-4 text-xl font-mono items-center flex justify-center border-2 px-4">
                        {item.newIncDEc}
                      </h1>
                      <Icon
                        onClick={() => handlePlus(index)}
                        icon="fluent-emoji-flat:plus"
                        className="mt-2 border-2"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-end items-end"></div>
                </div>
              ))}
            </div>

            <div className="">
              <h1 className="bg-blue-50 p-4 ">Price Detail</h1>
              <hr class="w-full h-1   bg-gray-200 border-0 rounded dark:bg-gray-700" />
              <div className="bg-blue-50 p-4">
                <div className="flex flex-row">
                  <h1>subtotal</h1>
                  <h1 className="ml-auto">RS. {sum?.toFixed(2)}</h1>
                </div>
                <div className="flex flex-row mt-8">
                  <h1>Delivery Charges</h1>
                  <h1 className="ml-auto">RS...</h1>
                </div>
                <hr class="w-full h-1 mt-2  bg-gray-200 border-0 rounded dark:bg-gray-700" />
                <div className="flex flex-row mt-4">
                  <h1>Amount Payable</h1>
                  <h1 className="ml-auto">RS. {sum?.toFixed(2)}</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="col-span-2 bg-blue-50">
              <hr class="w-full h-1  bg-gray-200 border-0 rounded dark:bg-gray-700" />
              <div className="flex justify-end ml-auto">
                <button
                  className="border-2 p-4 bg-white"
                  onClick={handleContinue}
                >
                  continue shoping
                </button>
                <button
                  onClick={handleDataDelete}
                  className="border-2 p-4 px-10 bg-orange-300"
                >
                  buy now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <Footer />
        </div>
      </div>
    </>
  );
}
