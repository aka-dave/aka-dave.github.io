const ANSWER_LENGTH = 5;
const ROUNDS = 6;

const loadingDiv = document.querySelector(".info-bar");
const container = document.querySelector('.end');
const buttons = document.querySelectorAll('button');
let letters = document.querySelectorAll(".scoreboard-letter");

// I like to do an init function so I can use "await"


async function init() {
   

        // the state for the app
  let currentRow = 0;
  let currentGuess = "";
  let done = false;
  let isLoading = true;
  
  

  // nab the word of the day
  const res = await fetch("https://words.dev-apis.com/word-of-the-day");
  const resObject = await res.json();
  const word = resObject.word.toUpperCase();
  const wordParts = word.split("");
  isLoading = false;
  setLoading(isLoading);

  // user adds a letter to the current guess
  function addLetter(letter) {
    if (currentGuess.length < ANSWER_LENGTH) {
      currentGuess += letter;
    } else {
      current = currentGuess.substring(0, currentGuess.length - 1) + letter;
    }

    letters[currentRow * ANSWER_LENGTH + currentGuess.length - 1].innerText =
      letter;
  }

  // use tries to enter a guess
  async function commit() {
    if (currentGuess.length !== ANSWER_LENGTH) {
      // do nothing
      return;
    }

    // check the API to see if it's a valid word
    // skip this step if you're not checking for valid words
    isLoading = true;
    setLoading(isLoading);
    const res = await fetch("https://words.dev-apis.com/validate-word", {
      method: "POST",
      body: JSON.stringify({ word: currentGuess }),
    });
    const resObject = await res.json();
    const validWord = resObject.validWord;
    isLoading = false;
    setLoading(isLoading);

    // not valid, mark the word as invalid and return
    if (!validWord) {
      markInvalidWord();
      return;
    }

    const guessParts = currentGuess.split("");
    const map = makeMap(wordParts);
    let allRight = true;

    // first pass just finds correct letters so we can mark those as
    // correct first
    for (let i = 0; i < ANSWER_LENGTH; i++) {
      if (guessParts[i] === wordParts[i]) {
        // mark as correct
        letters[currentRow * ANSWER_LENGTH + i].classList.add("correct");
        map[guessParts[i]]--;
      }
    }

    // second pass finds close and wrong letters
    // we use the map to make sure we mark the correct amount of
    // close letters
    for (let i = 0; i < ANSWER_LENGTH; i++) {
      if (guessParts[i] === wordParts[i]) {
        // do nothing
      } else if (map[guessParts[i]] && map[guessParts[i]] > 0) {
        // mark as close
        allRight = false;
        letters[currentRow * ANSWER_LENGTH + i].classList.add("close");
        map[guessParts[i]]--;
      } else {
        // wrong
        allRight = false;
        letters[currentRow * ANSWER_LENGTH + i].classList.add("wrong");
      }
    }

    currentRow++;
    currentGuess = "";
    if (allRight) {
      // win
      alert("you win");
      document.querySelector(".brand").classList.add("winner");
      done = true;
    } else if (currentRow === ROUNDS) {
      // lose
      alert(`you lose, click below to reveal the word`);

      container.classList.add('show');

     
      

      for(let i = 0; i<buttons.length; i++) {


        buttons[i].addEventListener('click',  function handleClick(event) {

            if(event.target.innerHTML === "Answer"){
                   alert(`the word was ${word}`); 
            }


            if(event.target.innerHTML === "Restart") {
                location.reload(true/false);
               
            
            

            }   
            

          

         

            //  handleClicked(event.target.innerHTML)
            
          });
      }
    }
  }

//   function handleClicked(e) {
    
//             if(e === 'Answer'){
//                 alert(`the word was ${word}`); 
        
//             }
        
//             if(e === 'Restart'){

//                 s = false;
//                 return;
//                  currentRow = 0;
//                 currentGuess = "";
//                  done = false;
//                  isLoading = true;
//                  container.classList.remove(`show`);
//                  for(let i = 0; i<letters.length; i++){ letters[i].innerHTML = "";}

                 
                 
        
//             }
        


//   }



  // user hits backspace, replaces the last element with an empty string. if the the length of the string is 0 then do
  // nothing
  function backspace() {
    currentGuess = currentGuess.substring(0, currentGuess.length - 1);
    letters[currentRow * ANSWER_LENGTH + currentGuess.length].innerText = "";
  }

  // let the user know that their guess wasn't a real word
  // skip this if you're not doing guess validation
  function markInvalidWord() {
    for (let i = 0; i < ANSWER_LENGTH; i++) {
      letters[currentRow * ANSWER_LENGTH + i].classList.remove("invalid");

      // long enough for the browser to repaint without the "invalid class" so we can then add it again
      setTimeout(
        () => letters[currentRow * ANSWER_LENGTH + i].classList.add("invalid"),
        10
      );
    }
  }

  // listening for event keys and routing to the right function
  // we listen on keydown so we can catch Enter and Backspace
  document.addEventListener("keydown", function handleKeyPress(event) {
    if (done || isLoading) {
      // do nothing;
      return;
    }

    const action = event.key;

    if (action === "Enter") {
      commit();
    } else if (action === "Backspace") {
      backspace();
    } else if (isLetter(action)) {
      addLetter(action.toUpperCase());
    } else {
      // do nothing
    }
  });


        
    }
    
  

// a little function to check to see if a character is alphabet letter

function isLetter(letter) {
  return /^[a-zA-Z]$/.test(letter);
}

// show the loading spinner when needed
function setLoading(isLoading) {
  loadingDiv.classList.toggle("hidden", !isLoading);
}

// takes an array of letters (like ['E', 'L', 'I', 'T', 'E']) and creates
// an object out of it (like {E: 2, L: 1, T: 1}) 
function makeMap(array) {
  const obj = {};
  for (let i = 0; i < array.length; i++) {
    if (obj[array[i]]) {
      obj[array[i]]++;
    } else {
      obj[array[i]] = 1;
    }
  }
  return obj;
}

init();