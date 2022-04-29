const saidai = 100

const fizzBuzz = function (saidai) {
  for (let index = 0; index <= saidai; index++) {
    if (index % 3 === 0) {
      console.log("Fizz")
    } else {
      console.log(index)
    }
  }
}

fizzBuzz(99)
