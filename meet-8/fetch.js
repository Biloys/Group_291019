import { createCommentsList } from "./createCommentsList.js";

const createComments = (root) => {
  fetch("https://boring-fe.herokuapp.com/posts")
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      createCommentsList(root, data);
    })
    .catch((e) => {
      console.error(e);
    });
};

export { createComments };
