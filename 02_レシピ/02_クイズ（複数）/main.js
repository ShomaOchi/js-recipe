const $quizcontainer = document.getElementById("quiz-container")
const $quiztext = document.getElementById("quiz-text")

const $quizImage = document.getElementById("quiz-image")

const $choice1 = document.getElementById("choice-1")
const $choice2 = document.getElementById("choice-2")
const $choice3 = document.getElementById("choice-3")

const $feedback = document.getElementById("feedback")
// 次へ進むボタンの作成
const $NextButton = document.createElement("button")
$NextButton.className = "next-button"
$NextButton.textContent = "次の問題へ"

// クイズの内容を配列に入れる
const quiz = [
  {
    text: "この星の名前はなんでしょう？",
    image: "Ganymede.jpg",
    choice: ["ゴリアテ", "ガニメデ", "銭亀"],
    correct: "ガニメデ",
  },
  {
    text: "いま、何問目？",
    image: "Two.jpeg",
    choice: ["１", "２", "３"],
    correct: "２",
  },
  {
    text: "この城の名前は？",
    image: "Maruoka.png",
    choice: ["丸岡城", "丸亀城", "丸子城"],
    correct: "丸岡城",
  },
]

const quizLength = quiz.length
// クイズの配列の表示を変数で定義
let quizIndex = 0

// クイズを呼び出す関数を作成
const openquiz = function () {
  //   クイズの質問を表示
  $quiztext.textContent = quiz[quizIndex].text
  // クイズの画像を表示
  $quizImage.src = "./images/" + quiz[quizIndex].image
  //   クイズの選択肢を表示
  $choice1.textContent = quiz[quizIndex].choice[0]
  $choice2.textContent = quiz[quizIndex].choice[1]
  $choice3.textContent = quiz[quizIndex].choice[2]

  //   選択肢を押したときの動き(正誤判定、次の問題ボタンの表示)を関数化
  const clickHandler = function (e) {
    if (quiz[quizIndex].correct === e.target.textContent) {
      $feedback.textContent = "正解"
      if (quizIndex < quizLength - 1) {
        quizIndex++
        $NextButton.remove()
        $quizcontainer.append($NextButton)
      } else {
        alert("終了！")
      }
    } else {
      $feedback.textContent = "残念"
    }
  }
  // それぞれの選択肢を押したときの動き
  $choice1.onclick = function (e) {
    clickHandler(e)
  }
  $choice2.onclick = function (e) {
    clickHandler(e)
  }
  $choice3.onclick = function (e) {
    clickHandler(e)
  }
  //   次の問題ボタンを押したときの動作
  $NextButton.onclick = function () {
    //   正解ボタンを消す
    $NextButton.remove()
    $feedback.textContent = ""
    // quiz関数を実行し、次の問題を表示する
    if (quizIndex < quizLength) {
      openquiz()
    }
  }
}
openquiz()
