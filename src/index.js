import { createCard } from "./card.js";
import { makeRequest } from "./makeRequest.js";

const loadProducts = async () => {
  try {
    const data = await makeRequest({ path: "/products?limit=5" });
    console.log(data);
    data.forEach((product) => {
      createCard(product.image, product.title, product.price);
    });
  } catch (err) {
    console.error(err);
  }
};

loadProducts();

const createProduct = async () => {
  try {
    const data = {
      title: "test product",
      price: 13.5,
      description: "lorem ipsum set",
      image: "https://i.pravatar.cc",
      category: "electronic"
    };

    const res = await makeRequest({
      path: "/products",
      method: "POST",
      data
    });
  } catch (err) {}
};

const createProductButton = document.querySelector("button");
createProductButton.addEventListener("click", createProduct);
