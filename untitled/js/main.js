//Game variables
(function (){
    var random = ~~(Math.random() * 10 + 1), //Create a variable to store a random integer within the range 1-10.
        query = document.getElementById("input").value,
        result = document.getElementById("output"), //Create variables that reference the DOM(html) elements.
        guessButton = document.querySelector('button'),
        gameOver = false;
    counter = 3; // Tally all the wrong guesses and end the game after the 3rd incorrect guess and show appropriate game over message in the HTML.

    console.log("Random number: ", random);
    console.log("Input element: ", query);
    console.log("Output element: ", output);

    function button_click(event) {
        query = document.getElementById("input").value;

        if(isNaN(query)){
            output.innerHTML = "Please enter a number.";
        }



        if(query != "" && query > 0 && query < 11 && gameOver === false){
            console.log(query);
            console.log(random);
            console.log("is query less than random??",  query<random);
            var numEval = function(){
                if(query === random){
                    console.log("correct");
                    output.innerHTML = "You guessed the correct number.";
                    gameOver = true;
                }else if(query > random && counter == 1){
                    console.log("lower", counter);
                    output.innerHTML = "Too high. Last try.";
                    counter--;
                }else if(query != random && counter == 0){
                    output.innerHTML = "Game Over";
                    gameOver = true;
                }else if(query < random && counter == 1){
                    console.log("higher", counter);
                    output.innerHTML = "Too low. Last go.";
                    counter--;
                }else if(query > random){
                    console.log("lower", counter);
                    counter--;
                    output.innerHTML = "The number you selected is too high. Try again. You have " + counter + " tries left.";
                }else if(query < random){
                    console.log("higher", counter);
                    counter--;
                    output.innerHTML = "The number you selected is too low. Try again. You have " + counter + " tries left.";
                }
            }(); // When the guess button is clicked, evaluate your guess with the number the computer has chosen.
        }else if(gameOver === true){
            output.innerHTML = "Refesh your web browser to play again.";
            guessButton.removeEventListener('click', button_click, false); // Deactivate the button by removing the event listener when the game is over.
        } // validate
    }

    window.addEventListener('keyup', function(e){
        if(e.keyCode === 13){
            button_click();
        }
    }, false); // Use a keyboard event for the ENTER button that also acts like clicking on the guess button.

    guessButton.addEventListener('click', button_click, false); // Create an .addEventListner event listener on the guess button to listen for a click event.

})();
console.log("Random number: ", random);
console.log("Input element: ", query);
console.log("Output element: ", output);

function button_click(event) {
    query = document.getElementById("input").value;

    if(isNaN(query)){
        output.innerHTML = "Please enter a number.";
    }



    if(query != "" && query > 0 && query < 11 && gameOver === false){
        console.log(query);
        console.log(random);
        console.log("is query less than random??",  query<random);
        var numEval = function(){
            if(query === random){
                console.log("correct");
                output.innerHTML = "You guessed the correct number.";
                gameOver = true;
            }else if(query > random && counter == 1){
                console.log("lower", counter);
                output.innerHTML = "Too high. Last try.";
                counter--;
            }else if(query != random && counter == 0){
                output.innerHTML = "Game Over";
                gameOver = true;
            }else if(query < random && counter == 1){
                console.log("higher", counter);
                output.innerHTML = "Too low. Last go.";
                counter--;
            }else if(query > random){
                console.log("lower", counter);
                counter--;
                output.innerHTML = "The number you selected is too high. Try again. You have " + counter + " tries left.";
            }else if(query < random){
                console.log("higher", counter);
                counter--;
                output.innerHTML = "The number you selected is too low. Try again. You have " + counter + " tries left.";
            }
        }(); // When the guess button is clicked, evaluate your guess with the number the computer has chosen.
    }else if(gameOver === true){
        output.innerHTML = "Refesh your web browser to play again.";
        guessButton.removeEventListener('click', button_click, false); // Deactivate the button by removing the event listener when the game is over.
    } // validate
}

window.addEventListener('keyup', function(e){
    if(e.keyCode === 13){
        button_click();
    }
}, false); // Use a keyboard event for the ENTER button that also acts like clicking on the guess button.

guessButton.addEventListener('click', button_click, false); // Create an .addEventListner event listener on the guess button to listen for a click event.

})();
