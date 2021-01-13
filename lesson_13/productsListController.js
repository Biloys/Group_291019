import { createProductList } from "./productsList.js";

const createGrid = (root = document.querySelector("body")) => {
  fetch("https://boring-fe.herokuapp.com/advertisments")
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      createProductList(root, data);
    })
    .catch((e) => {
      console.error(e);
    });
};

export { createGrid };
