const elements = document.getElementsByTagName("ul");

Array.from(elements).forEach(function element(element) {
  // elements.style.color = "red";
  let news = document.createElement("li");
  news.textContent = "a555";
  element.appendChild(news);
});
