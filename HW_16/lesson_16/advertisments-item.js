export class AdvertismentsItem {
  constructor(root, data, onDelete) {
    this.root = root;
    this.data = data;
    this.onDelete = onDelete;
    this.render();
  }
  render() {
    this.domElement = document.createElement("div");
    this.domElement.classList.add("advertisments");
    this.domElement.innerHTML = `
        <h2 class="advertisments__title">${this.data.title}</h2>
        <p class="advertisments__description">${this.data.description}</p>
        <div class="advertisments__note">${this.data.note}</div>   
        <img src="${this.data.img}" class="advertisments__avatar" />   
      `;
    const button = document.createElement("button");
    button.addEventListener("click", () => {
      // console.log("removed");
      // this.root.removeChild(this.domElement);
      this.onDelete(this.data.id);
    });
    button.textContent = "delete";
    this.domElement.append(button);
    this.root.append(this.domElement);
  }
}
