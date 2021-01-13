import { createComment } from "./comment.js";

const createCommentsList = (root, comments) => {
  const container = document.createElement("div");

  container.classList.add("comments-list");

  let productsHtmlStrings = "";
  comments.forEach((comment) => {
    const html = createComment(comment);
    productsHtmlStrings += html;
  });

  container.insertAdjacentHTML("beforeend", productsHtmlStrings);
  root.append(container);
};

export { createCommentsList };
