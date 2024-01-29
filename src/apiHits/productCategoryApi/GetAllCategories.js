import axios from "axios";

export async function GetAllCategories() {
  try {
    const res = await axios.get("https://fakestoreapi.com/products/categories");
    return res.data;
  } catch (error) {
    console.log("fetching error", error);
    throw error;
  }
}
