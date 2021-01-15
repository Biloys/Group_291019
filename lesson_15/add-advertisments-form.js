const formChildreTemplate = `
<div class="add-advertisments-form__field">
  <input
    type="text"
    name="title"
    class="add-advertisments-form__native-input"
    placeholder="Title"
  />
</div>
<div class="add-advertisments-form__field">
  <textarea
    name="description"
    class="add-advertisments-form__native-input"
    placeholder="Description"
  /></textarea>
</div>
<div class="add-advertisments-form__field">
  <textarea
    name="note"
    class="add-advertisments-form__native-input"
    placeholder="Note"
  ></textarea>
</div>
<div class="add-advertisments-form__field">
  <input
    type="file"
    name="img"
    class="add-advertisments-form__btn add-comment-form__btn_upload"
  />
</div>
<div class="add-advertisments-form__field">
  <button class="add-advertisments-form__btn add-advertisments-form__btn_submit" type="submit">
    Add
  </button> 
  <button class="add-advertisments-form__btn add-advertisments-form__btn_clear type="reset">
    Clear
  </button>
</div>
`;
export class AddAdvertismentsForm {
  constructor(root) {
    this.root = root;
    this.init();
  }
  init() {
    this.render();
  }
  render() {
    this.formElement = document.createElement("form");
    this.formElement.classList.add("add-advertisments-form");
    this.formElement.innerHTML = formChildreTemplate;
    this.formElement.addEventListener("submit", (e) => this.sendData(e));
    this.root.append(this.formElement);
  }
  sendData(e) {
    e.preventDefault();
    console.log(this);
    const formData = new FormData(this.formElement);
    console.log(formData.entries());
    fetch("http://localhost:4000/advertisments", {
      method: "POST",
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      });
  }
}
