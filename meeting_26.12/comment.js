const createComment = ({ id, title, content }) => {
  return `
        <div class="comment" id="${id}">
          <figure class="comment__pic">
            <img
              class="comment__img"
              src="./avatar.png"
              alt=""
            />
          </figure>
          <div class="comment__content">
            <h2 class="comment__title">${title}</h2>
            <div class="comment__desc">${content}</div>
          </div>
        </div>
    `;
};

export { createComment };
