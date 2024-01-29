import axios from "axios";
export async function productById(id) {
  try {
    let res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    console.log("res data", res);
    return res.data;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
}
