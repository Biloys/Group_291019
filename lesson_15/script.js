import { AddCommentForm } from "./add-comment-form.js";

const main = document.querySelector("main");
const form = new AddCommentForm(main);
form.render();
