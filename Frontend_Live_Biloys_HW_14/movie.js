export class Movie {
  constructor(root, data) {
    this.root = root;
    this.data = data;
  }

  render() {
    this.domElement = document.createElement("div");
    this.domElement.classList.add("movie", "col-4");
    const { title, description, rating, preview } = this.data;
    const template = `
        ${
          preview
            ? `<img class="movie__img" src="${preview}" />`
            : `<img class="movie__img" src="./img_avatar3.png" />`
        }
        <h2 class="movie__title">${title}</h2>
        <span class="movie__rating">Рейтинг ${rating}</span>
        ${
          description
            ? `<h3 class="movie__description">${description}</h3>`
            : `<h3 class="movie__description">Description base</h3>`
        }
      `;
    this.domElement.innerHTML = template;
    this.root.append(this.domElement);
  }
}
