import { AdvertismentsItem } from "./advertisments-item.js";

export class AdvertismentsList {
  constructor(root, data, onItemDelete) {
    this.data = data;
    this.root = root;
    this.onItemDelete = onItemDelete;
  }
  render() {
    this.root.innerHTML = "";
    this.listElement = document.createElement("div");
    this.listElement.classList.add("advertisments-list");
    for (let advertisment of this.data) {
      this.renderOne(advertisment);
    }
    this.root.append(this.listElement);
  }
  renderOne(advertisment) {
    const itemWrapper = document.createElement("div");
    itemWrapper.classList.add("advertisments-list__item");
    new AdvertismentsItem(this.listElement, advertisment, this.onItemDelete);
  }
}
