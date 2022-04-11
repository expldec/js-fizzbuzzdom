row = document.querySelector(".row");

for (let i = 1; i <= 100; i++) {
    let appendMe = document.createElement("div");
    appendMe.classList.add('box');
    console.log(appendMe);

    if (i % 15 === 0) {
        appendMe.classList.add('fizzbuzz');
        appendMe.innerText = "Fizz Buzz!!";
        console.log("FizzBuzz!!");
    }
    else if (i % 5 === 0) {
        appendMe.classList.add('buzz');
        appendMe.innerText = "Buzz!";
        console.log("Buzz!");
    }
    else if (i % 3 === 0) {
        appendMe.classList.add('fizz');
        appendMe.innerText = "Fizz!";
        console.log("Fizz!");
    }
    else {
        console.log(i);
        appendMe.innerText = `${i}`;
    }

    
    row.append(appendMe);
}