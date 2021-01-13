import { Comment } from "./commets.js";

class CommentsPage {
  constructor(root) {
    this.data = [];
    this.root = root;
  }

  fetchData() {
    fetch("https://boring-fe.herokuapp.com/advertisments")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        data.forEach((element) => {
          const comment = new Comment(this.root, element);
          comment.render();
        });
      })
      .catch((e) => {
        console.error(e);
      });
  }
}

export { CommentsPage };
