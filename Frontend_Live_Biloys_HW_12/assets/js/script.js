const body = document.querySelector(".wrapper");

const createElements = (root) => {
  const btn = document.createElement("button");
  const label = document.createElement("p");
  const desc = document.createElement("div");
  const title = document.createElement("h2");
  const subtitle = document.createElement("h3");
  const btnSub = document.createElement("button");
  const btnSubmit = document.createElement("button");

  label.textContent = "click me";
  title.textContent = "Уровень 0/5";
  subtitle.textContent = "Урок 0 из 3";
  btnSub.textContent = "теория";
  btnSubmit.textContent = "Старт";

  btn.classList.add("btn");
  label.classList.add("label");
  desc.classList.add("desc");
  title.classList.add("title");
  subtitle.classList.add("sub-title");
  btnSub.classList.add("btn-submit");
  btnSubmit.classList.add("btn-submit");

  const click = () => {
    desc.classList.toggle("active");
  };
  btn.addEventListener("click", click);

  root.appendChild(btn);
  root.appendChild(label);
  root.appendChild(desc);
  desc.appendChild(title);
  desc.appendChild(subtitle);
  desc.appendChild(btnSub);
  desc.appendChild(btnSubmit);
};

createElements(body);
