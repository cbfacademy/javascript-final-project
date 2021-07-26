import { dates } from "./dates.js";

const timeline = document.querySelector(".timeline");

function getCard(index) {
  const { date, title, image, details } = dates[index];
  const wrapper = document.createElement("div");
  const cardHeader = document.createElement("div");
  const content = document.createElement("div");

  const _date = document.createElement("span");
  const _title = document.createElement("h2");
  const _details = document.createElement("p");
  const _image = document.createElement("img");
  const closeButton = document.createElement("span");

  wrapper.setAttribute("id", "card-wrapper");
  content.setAttribute("id", "card-content");
  cardHeader.setAttribute("id", "card-header");
  _image.setAttribute("src", image);
  _image.setAttribute("alt", title);
  closeButton.setAttribute("id", "close-button");

  const dateText = document.createTextNode(date);
  const titleText = document.createTextNode(title);
  const detailsText = document.createTextNode(details);

  _title.appendChild(titleText);
  _date.appendChild(dateText);
  _details.appendChild(detailsText);

  cardHeader.appendChild(_date);
  cardHeader.appendChild(closeButton);
  content.appendChild(cardHeader);
  content.appendChild(_image);
  content.appendChild(_title);
  content.appendChild(_details);
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

dates.map(({ date, title, caption }, index) => {
  const item = document.createElement("div");
  const _date = document.createElement("span");
  const _title = document.createElement("h2");
  const _caption = document.createElement("p");
  const circle = document.createElement("div");
  const button = document.createElement("button");

  const dateText = document.createTextNode(date);
  const titleText = document.createTextNode(title);
  const captionText = document.createTextNode(caption);
  const buttonText = document.createTextNode("Gimme, Gimme MORE (info)");

  item.setAttribute("class", "timeline-item");
  button.setAttribute("data-index", index);
  circle.setAttribute("class", "timeline-circle");
  _title.appendChild(titleText);
  _date.appendChild(dateText);
  _caption.appendChild(captionText);
  button.appendChild(buttonText);

  item.appendChild(circle);
  circle.appendChild(_date);
  item.appendChild(_title);
  item.appendChild(_caption);
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
