const ul = document.getElementById("list")

for (let i = 1; i <= 50; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
        ul.innerHTML += `<li class="box box-mul-3and5">FizzBuzz</li>`
    }
    else if (i % 3 == 0) {
        ul.innerHTML += `<li class="box box-mul-3">Fizz</li>`
    }
    else if (i % 5 == 0) {
        ul.innerHTML += `<li class="box box-mul-5">Buzz</li>`
    }

    else {
        ul.innerHTML += `<li class="box">${i}</li>`
    }
}

