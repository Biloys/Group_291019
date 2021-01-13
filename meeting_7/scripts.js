import { CommentsPage } from "./commentsPage.js";

const root = document.querySelector(".wrapper");

const commentsPage = new CommentsPage(root);
commentsPage.fetchData();
