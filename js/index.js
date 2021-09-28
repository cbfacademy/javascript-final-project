import { dates } from "./data.js";

const timeline = document.querySelector(".timeline");

function getCard(index) {
  const { date, title, image, fullDescription } = dates[index];
  const wrapper = document.createElement("div");
  const cardHeader = document.createElement("div");
  const content = document.createElement("div");

  const _date = document.createElement("span");
  const _title = document.createElement("h2");
  const _fullDescription = document.createElement("p");
  const _image = document.createElement("img");
  const closeButton = document.createElement("span");

  wrapper.setAttribute("id", "modal-container");
  content.setAttribute("id", "modal-content");
  cardHeader.setAttribute("id", "modal-header");
  _date.setAttribute("id", "modal-date");
  _title.setAttribute("id", "modal-title");
  _fullDescription.setAttribute("id", "modal-full-description");
  _image.setAttribute("src", image);
  _image.setAttribute("alt", title);
  _image.setAttribute("id", "modal-image");
  closeButton.setAttribute("id", "modal-close-button");

  const dateText = document.createTextNode(date);
  const titleText = document.createTextNode(title);
  const fullDescriptionText = document.createTextNode(fullDescription);

  _title.appendChild(titleText);
  _date.appendChild(dateText);
  _fullDescription.appendChild(fullDescriptionText);

  cardHeader.appendChild(_date);
  cardHeader.appendChild(closeButton);
  content.appendChild(cardHeader);
  content.appendChild(_image);
  content.appendChild(_title);
  content.appendChild(_fullDescription);
  wrapper.appendChild(content);

  closeButton.addEventListener(
    "click",
    (e) => {
      e.preventDefault();
      timeline.removeChild(wrapper);
    },
    false
  );

  wrapper.style.display = "flex";
  timeline.prepend(wrapper);
}

dates.map(({ date, title, summary }, index) => {
  const item = document.createElement("div");
  const _date = document.createElement("span");
  const _title = document.createElement("h2");
  const _summary = document.createElement("p");
  const circle = document.createElement("div");
  const button = document.createElement("button");

  const dateText = document.createTextNode(date);
  const titleText = document.createTextNode(title);
  const summaryText = document.createTextNode(summary);
  const buttonText = document.createTextNode("Gimme, Gimme MORE (info)");

  item.setAttribute("class", "timeline-item");
  button.setAttribute("data-index", index);
  circle.setAttribute("class", "timeline-circle");
  _date.setAttribute("class", "timeline-item-date");
  _title.setAttribute("class", "timeline-item-title");
  button.setAttribute("class", "timeline-item-more-info");
  _summary.setAttribute("class", "timeline-item-summary");
  _title.appendChild(titleText);
  _date.appendChild(dateText);
  _summary.appendChild(summaryText);
  button.appendChild(buttonText);

  item.appendChild(circle);
  circle.appendChild(_date);
  item.appendChild(_title);
  item.appendChild(_summary);
  item.appendChild(button);

  button.addEventListener(
    "click",
    (e) => {
      e.preventDefault();
      const index = e.target.getAttribute("data-index");
      if (index) getCard(index);
    },
    false
  );

  timeline.appendChild(item);
});
