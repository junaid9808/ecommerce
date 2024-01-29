import axios from "axios";
export async function GetJewelery() {
  try {
    const res = await axios.get("https://fakestoreapi.com/products");
    console.log("data", res.data);
    return res.data;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
}
