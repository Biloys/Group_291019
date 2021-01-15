const apiUrl = "http://localhost:4000";
export class AdvertismentsItem {
  constructor(root, data) {
    this.root = root;
    this.data = data;
    this.render();
  }
  render() {
    this.domElement = document.createElement("div");
    this.domElement.classList.add("advertisments");
    this.domElement.innerHTML = `
        <h2 class="advertisments__title">${this.data.title}</h2>
        <p class="advertisments__description">${this.data.description}</p>
        <div class="advertisments__note">${this.data.note}</div>   
        <img src="${apiUrl}/${this.data.img}" class="advertisments__avatar" />   
      `;
    this.root.append(this.domElement);
  }
}
