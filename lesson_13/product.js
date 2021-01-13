const createProduct = ({ id, img, title, description }) => {
  return `
    <div class="col-3 col-md-4 col-sm-6 col-xs-12">
      <div class="product-card" id="${id}">
        <figure class="product-card__pic">
          <img
            class="product-card__img"
            src="${img}"
            alt=""
          />
          <button href="#" class="product-card__quick-view">
            Quick view
          </button>
        </figure>
        <h2 class="product-card__title">${title}</h2>
        <div class="product-card__price">${description}</div>
      </div>
    </div>
  `;
};

export { createProduct };
