const figure = document.createElement("div")
figure.className = "square"
const entire = document.getElementById("entire")
entire.append(figure)
const figure2 = document.createElement("div")
figure2.className = "rounded"
const figure3 = document.createElement("div")
figure3.className = "triangle"

figure.onclick = function () {
  entire.append(figure2)
  figure.style.display = "none"
  figure2.style.display = "block"
}

figure2.onclick = function () {
  entire.append(figure3)
  figure2.style.display = "none"
  figure3.style.display = "block"
}

figure3.onclick = function () {
  entire.append(figure)
  figure3.style.display = "none"
  figure.style.display = "block"
}
