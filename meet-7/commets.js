class Comment {
  constructor(root, data) {
    this.root = root;
    this.data = data;
  }
  render() {
    this.domElement = document.createElement("div");
    this.domElement.classList.add("comment");
    const { title } = this.data;
    this.domElement.id = id;

    const template = `
          <figure class="comment__pic">
           ${
             avatarUrl
               ? ` <img
           class="comment__img"
           src="${avatarUrl}"
           alt=""
         />`
               : "AVATAR URL EMTY"
           }
            <p class="author">${author}</p>
          </figure>
          <div class="comment__content">
            <h2 class="comment__title">${title}</h2>
            <div class="comment__desc">${content}</div>
          </div>
    `;

    this.domElement.innerHTML = template;
    this.root.append(this.domElement);
  }
}

export { Comment };
