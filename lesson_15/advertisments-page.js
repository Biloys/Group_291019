import { AddAdvertismentsForm } from "./add-advertisments-form.js";
import { AdvertismentsList } from "./advertisments-list.js";

export class AdvertismentsPage {
  constructor(root) {
    this.root = root;
    this.init();
  }
  init() {
    this.render();
    this.fetchData();
  }
  render() {
    this.contentEl = document.createElement("div");
    this.form = new AddAdvertismentsForm(this.contentEl);
    this.root.append(this.contentEl);
  }
  fetchData() {
    fetch("http://localhost:4000/advertisments")
      .then((resp) => resp.json())
      .then((advertisments) => {
        this.advertisments = advertisments;
        this.list = new AdvertismentsList(this.contentEl, this.advertisments);
      });
  }
}
