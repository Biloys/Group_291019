import { AdvertismentsItem } from "./advertisments-item.js";

export class AdvertismentsList {
  constructor(root, data) {
    this.data = data;
    this.root = root;
    this.advertismentsItem = [];
    this.render();
  }
  render() {
    this.listElement = document.createElement("div");
    this.listElement.classList.add("advertisments-list");
    for (let advertisment of this.data) {
      const itemWrapper = document.createElement("div");
      itemWrapper.classList.add("advertisments-list__item");
      const advertismentItem = new AdvertismentsItem(
        this.listElement,
        advertisment
      );
      this.advertismentsItem.push(advertismentItem);
    }
    this.root.append(this.listElement);
  }
}
