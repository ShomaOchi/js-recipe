const memoinput = document.getElementById("memo-input")
const addbutton = document.getElementById("add-button")
const memocontainer = document.getElementById("memo-container")
addbutton.textContent = "追加"

addbutton.onclick = function () {
  const card = document.createElement("div")
  card.classname = "card"
  card.textContent = memoinput.value
  memocontainer.append(card)
  const deletebutton = document.createElement("button")
  deletebutton.classname = "delete-button"
  deletebutton.textContent = "削除"
  card.append(deletebutton)
  deletebutton.onclick = function () {
    card.remove()
    deletebutton.remove()
  }
  memoinput.value = ""
}

const toMorseCode = function () {
  return
}

console.log(toMorseCode("000111000"))
