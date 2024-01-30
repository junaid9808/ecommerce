import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();
const Provider = ({ children }) => {
  const [count, setCount] = useState();
  useEffect(() => {
    async function fetchData() {
      let getData = JSON.parse(localStorage.getItem("newData"));
      let totalCount = getData?.length;
      setCount(totalCount);
    }
    fetchData();
  }, []);

  return (
    <>
      <CartContext.Provider value={{ count, setCount }}>
        {children}
      </CartContext.Provider>
    </>
  );
};
export { Provider };
