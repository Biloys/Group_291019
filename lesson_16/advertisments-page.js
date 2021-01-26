import { AddAdvertismentsForm } from "./add-advertisments-form.js";
import { AdvertismentsList } from "./advertisments-list.js";
import { Pagination } from "./pagination.js";

const apiUrl = "http://localhost:4000";

export class AdvertismentsPage {
  constructor(root) {
    this.root = root;
    this.sortParams = {
      sortBy: "createdAt",
      order: "desc",
      limit: 2,
      currentPage: 1,
      totalCount: 0,
    };
    this.init();
  }
  init() {
    this.render();
    this.fetchData();
  }
  render() {
    this.contentEl = document.createElement("div");
    this.listWrapper = document.createElement("div");
    this.form = new AddAdvertismentsForm(
      this.contentEl,
      `${apiUrl}/advertisments`,
      (advertisment) => {
        console.log("succes response", advertisment);
        this.fixAvertismentsUrl(advertisment);
        this.list.renderOne(advertisment);
      }
    );
    this.contentEl.append(this.listWrapper);
    this.root.append(this.contentEl);
  }

  setPage(page) {
    if (typeof page !== "number") {
      page = parseInt(page);
    }
    this.sortParams.currentPage = page;
    this.fetchData();
  }
  fetchData() {
    const { sortBy, order, currentPage, limit } = this.sortParams;
    fetch(
      `${apiUrl}/advertisments?_sort=${sortBy}&_order=${order}&_limit=${limit}&_page=${currentPage}`
    )
      .then((resp) => {
        const totalCount = resp.headers.get("X-Total-Count");
        const totalPages = Math.ceil(totalCount / this.sortParams.limit);

        this.pagination = new Pagination(
          this.contentEl,
          totalPages,
          this.sortParams.currentPage,
          (page) => this.setPage(page)
        );
        this.pagination.render();
        console.log();
        return resp.json();
      })
      .then((advertisments) => {
        this.advertisments = advertisments;
        console.log(advertisments);
        this.fixAdvertismentsUrls();
        this.renderList();
      });
  }

  deleteAdvertisment(id) {
    console.log("start delete", id);
    fetch(`${apiUrl}/advertisments/${id}`, {
      method: "DELETE",
    }).then((resp) => {
      if (resp.status === 200) {
        console.log(this);
        this.fetchData();
      }
      console.log(resp);
    });
  }
  renderList() {
    this.list = new AdvertismentsList(
      this.listWrapper,
      this.advertisments,
      (id) => this.deleteAdvertisment(id)
    );
    this.list.render();
  }
  fixAdvertismentsUrls() {
    this.advertisments.forEach((advertisment) => {
      this.fixAdvertismentsUrl(advertisment);
    });
  }
  fixAdvertismentsUrl(advertisment) {
    advertisment.img = `${apiUrl}/${advertisment.img}`;
  }
}
