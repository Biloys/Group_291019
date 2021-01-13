import { MoviesPage } from "./moviesPage.js";
const root = document.querySelector("#root");

const moviesPage = new MoviesPage(root);
moviesPage.fetchData();
