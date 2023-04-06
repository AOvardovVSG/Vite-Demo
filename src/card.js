export const createCard = (image, title, price) => {
  const cardDiv = document.createElement("div");
  cardDiv.className = "card";

  const imgBoxDiv = document.createElement("div");
  imgBoxDiv.className = "imgBox";
  cardDiv.appendChild(imgBoxDiv);

  // Create the img element with src, alt and class attributes inside the imgBoxDiv
  const imgElement = document.createElement("img");
  imgElement.src = image;
  imgElement.className = "image";
  imgBoxDiv.appendChild(imgElement);

  // Create the div element with class "contentBox" inside the cardDiv
  const contentBoxDiv = document.createElement("div");
  contentBoxDiv.className = "contentBox";
  cardDiv.appendChild(contentBoxDiv);

  // Create the h3 and h2 elements with class attributes inside the contentBoxDiv
  const h3Element = document.createElement("h3");
  h3Element.textContent = title;
  contentBoxDiv.appendChild(h3Element);

  const h2Element = document.createElement("h2");
  h2Element.className = "price";
  h2Element.innerHTML = price + " € ";
  contentBoxDiv.appendChild(h2Element);

  // Create the a element with href and class attributes inside the contentBoxDiv
  const aElement = document.createElement("a");
  aElement.href = "#";
  aElement.className = "buy";
  aElement.textContent = "Buy Now";
  contentBoxDiv.appendChild(aElement);

  // Add the cardDiv to the document body
  const container = document.querySelector(".container");
  container.appendChild(cardDiv);
};
