const formChildreTemplate = `
<div class="add-comment-form__field">
  <input
    type="text"
    name="author"
    class="add-comment-form__native-input"
    placeholder="Name"
  />
</div>
<div class="add-comment-form__field">
  <textarea
    name="text"
    class="add-comment-form__native-input"
    placeholder="Your comment"
  ></textarea>
</div>
<div class="add-comment-form__field">
  <input
    type="file"
    name="image"
    class="add-comment-form__btn add-comment-form__btn_upload"
  />
</div>
<div class="add-comment-form__field">
  <button class="add-comment-form__btn add-comment-form__btn_submit" type="submit">
    Add
  </button> 
  <button class="add-comment-form__btn add-comment-form__btn_clear type="reset">
    Clear
  </button>
</div>
`;
export class AddCommentForm {
  constructor(root) {
    this.root = root;
  }
  render() {
    this.formElement = document.createElement("form");
    this.formElement.classList.add("add-comment-form");
    this.formElement.innerHTML = formChildreTemplate;
    this.formElement.addEventListener("submit", (e) => this.sendData(e));
    this.root.append(this.formElement);
  }
  sendData(e) {
    e.preventDefault();
    console.log(this);
    const formData = new FormData(this.formElement);
    console.log(formData.entries());
    fetch("http://localhost:4000/comments", {
      method: "POST",
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      });
    // for (let entry of formData.entries()) {
    //   console.log(entry);
    // }
  }
}
