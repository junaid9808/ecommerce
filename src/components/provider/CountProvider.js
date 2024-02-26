import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../../store/slices/Cartslice";

const CountProvider = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      let getData = JSON.parse(localStorage.getItem("newData"));
      let totalCount = getData?.length;
      dispatch(addCart(totalCount ? totalCount : 0));
    }
  }, []);
};
export default CountProvider;
