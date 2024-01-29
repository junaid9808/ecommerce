import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const [data, setData] = useState([]);
  const [sum, setSum] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    let getData = JSON.parse(localStorage.getItem("newData"));
    let data = getData.reduce((acc, item) => {
      return acc + item.price * item.newIncDEc;
    }, 0);
    setData(getData);
    setSum(data);
  };

  const deleteItem = (id) => {
    const upDateData = data.filter((itemId) => itemId.id !== id);
    setData(upDateData);
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
    setData(uddated);
    localStorage.setItem("newData", JSON.stringify(uddated));
  };
  const handleMinus = (index) => {
    fetchData();
    const preData = [...data];
    if (preData[index].newIncDEc > 1) {
      preData[index].newIncDEc -= 1;
      setData(preData);
      localStorage.setItem("newData", JSON.stringify(preData));
    }
  };

  const handleDataDelete = () => {
    localStorage.removeItem("newData");
    setSum(0);
    setData([]);
    console.log("dghsjsdfhG");
    navigate("/");
  };

  return (
    <>
      <div className="mt-10 mx-8">
        <div className="grid grid-cols-3 gap-1  ">
          <div className=" col-span-2 p-2  ">
            {data?.map((item, index) => (
              <div key={index} className="flex flex-row bg-blue-50 ">
                <img
                  className="border-2 p-1"
                  style={{ widows: 150, height: 150 }}
                  src={item.image}
                  alt="img"
                ></img>
                <div className="ml-2 mt-12">
                  <h3 className="text-2xl">{item.title}</h3>
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
                    RS. {item.price * item.newIncDEc}/-
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

          <div className="p-3 ">
            <h1 className="bg-blue-50 ">Price Detail</h1>
            <hr class="w-full h-1  bg-gray-200 border-0 rounded dark:bg-gray-700" />
            <div className="bg-blue-50">
              <div className="flex flex-row">
                <h1>subtotal</h1>
                <h1 className="ml-auto">RS. {sum}</h1>
              </div>
              <div className="flex flex-row mt-8">
                <h1>Delivery Charges</h1>
                <h1 className="ml-auto">RS...</h1>
              </div>
              <hr class="w-full h-1 mt-2  bg-gray-200 border-0 rounded dark:bg-gray-700" />
              <div className="flex flex-row mt-4">
                <h1>Amount Payable</h1>
                <h1 className="ml-auto">RS. {sum}</h1>
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
    </>
  );
}
