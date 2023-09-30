const click = document.getElementById('click');
const loose = document.getElementById('loose');
const win = document.getElementById('win');


let randomNum=parseInt((Math.random()*100+1));

const form= document.querySelector('form')

const submit= document.querySelector('#subt');
const userInput= document.querySelector('#guessField')

const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const loOrHi= document.querySelector('.lowOrHi')

const resultPars=document.querySelector(".resultParas")

const p= document.createElement('p')

let prevGuess=[];
let numOfGuess=1;

let playGame= true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
     click.play();
      const guess= parseInt(userInput.value)
    //   console.log(guess)
      validateGuess(guess)
    })
}

// t0 check whether value is  valid or not

function validateGuess(guess){
    console.log(guess)
    
    if(isNaN(guess)||guess<=0 ||guess>100)
    {
      alert("Please enter a Valid Number")
    }
    else{
        prevGuess.push(guess)
        if(numOfGuess==10){
           
           
            displayMessage(`GAME OVER 👎<br>
             Random number was ${randomNum}`)
            endGame()
        }
        else{
            
            displayGuess(guess)

            checkGuess(guess)
        }
       
    }
}


// //to check the guess

function checkGuess(guess)
{
  if(guess === randomNum)
  { 
    win.play();
    displayMessage(`You guess it right👏`)
    endGame();

  }
  else if(guess<randomNum)
  {
    displayMessage( `Number is TOO low 😞`)
  }
  else if(guess>randomNum)
  {
    displayMessage( `Number is TOO high 😞`)
  }
}

// //display guess

function displayGuess(guess){
    userInput.value='';
    guessSlot.innerHTML+= `${guess } - `

    numOfGuess++;
    remaining.innerHTML=`${11-numOfGuess}`

}


// //display msg

function displayMessage(message){
    loOrHi.innerHTML=`<h2> ${message}</h2>`

}



// //to end game
function endGame(){
    click.pause();
    loose.play();
    userInput.value= '';
    //it will not take input anymore
    userInput.setAttribute('disabled','')
     
    remaining.innerHTML= `0`
    //to start new game

    p.classList.add('button');
    p.innerHTML='<h2 id="newGame">Start new Game</h2>'
    resultPars.appendChild(p);
    playGame=false;
    newGame();
    
}



// //to new game
function newGame(){
    const newGameButton= document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        randomNum=parseInt((Math.random()*100+1));
        prevGuess=[];
        numOfGuess=1;
        guessSlot.innerHTML=''
        displayMessage('') 
        remaining.innerHTML=`${11-numOfGuess}`
        userInput.removeAttribute('disabled')
        resultPars.removeChild(p)
        playGame=true;
    })
  
}



