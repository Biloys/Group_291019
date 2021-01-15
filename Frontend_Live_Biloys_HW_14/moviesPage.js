import { Movie } from "./movie.js";

export class MoviesPage {
  constructor(root) {
    this.data = [];
    this.root = root;
  }
  fetchData() {
    fetch("https://boring-fe.herokuapp.com/movies")
      .then((resp) => resp.json())
      .then((data) => {
        data.forEach((element) => {
          const movie = new Movie(this.root, element);
          movie.render();
        });
      })
      .catch((e) => {
        console.error(e);
      });
  }
}
