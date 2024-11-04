import axios from "axios";
const getallproducts = async () => {
    const products = await axios.get("https://fakestoreapi.com/products");

    return products.data;
}

export default getallproducts;