const display1 = document.getElementById("display1")
const plusButton = document.getElementById("plus-button")
const display2 = document.getElementById("display2")
const minusButton = document.getElementById("minus-button")
const display3 = document.getElementById("display3")
const nibaiButton = document.getElementById("nibai-button")
let count = 0
let count2 = 0
let count3 = 1

// ボタン要素のonclickハンドラに関数を代入する
plusButton.onclick = function () {
  // count を更新
  count += 1
  // count を表示
  display.textContent = count
}

minusButton.onclick = function () {
  count2 -= 1
  display2.textContent = count2
}

nibaiButton.onclick = function () {
  count3 = 2 * count3
  display3.textContent = count3
}
