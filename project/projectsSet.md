# Prjoects related to DOM

## JavaScript Solution One

### Project 1
```JavaScript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});
```
## Solution two
### Project 2
```javascript
const form=document.querySelector('form')
form.addEventListener('submit',function(e){
  e.preventDefault();
  const height=parseInt(document.getElementById('height').value)
  const weight=parseInt(document.getElementById('weight').value)
  const result=document.getElementById('results') 
  //Checking Valid Entries 
  if(height===0|| height<=0|| isNaN(height)) {
    result.innerHTML= `${height} Height is not valid`;}
  else if(weight===0||weight<=0||isNaN(weight)){
      result.innerHTML= `${weight} Weight is not valid`}
  else{
    const BMI=[(weight/(height**2))*(100**2)].toFixed(2)
    result.innerHTML= `Your BMI is :${BMI}`
  }
})

```

## Solution three

### Project 3
```javascript
const clock=document.getElementById("clock")
setInterval(function(){
  let currentTime=new Date()
  const time=currentTime.toLocaleTimeString()
 clock.innerHTML=time

},1000)
```

## Solution four
### Project 4
``` javascript
let randomNumber=parseInt((Math.random()*100+1))

const inputValue=document.querySelector('#guessField')
const submit=document.querySelector('#subt')
const showGuesses=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowHigh=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')
const p=document.createElement('p')
let guessesArray=[];
let playGame=true;
let numOfGuesses=0;


submit.addEventListener('click',function(e){
  e.preventDefault()
  if(!playGame){
    return;}
const guesses=parseInt(inputValue.value)
validiateGuesses(guesses);

})

function validiateGuesses(guesses){
  if(isNaN(guesses)){
      alert("Input a Number")
  }
  else if(guesses>100){
    alert("Input Number Lower than 101")
  }
  else if(guesses<1){
    alert("Input a Number Higher 0")
  }
   else{guessesArray.push(guesses)
    numOfGuesses++;
   if(numOfGuesses>9){
      displayMessage(`Correct answer is:${randomNumber}`)
      displayGuesses()
      endGame();
    }
    else {
      console.log(guesses)
      checkGuesses(guesses);
    }
  }
}

function checkGuesses(guesses){
  if(guesses===randomNumber){
    displayMessage(`Your Guess is Correct !`)
    endGame();
  }
  else if(guesses<randomNumber){
    displayMessage(`Your Guess is too Low`)
    displayGuesses(guesses)
  }
  else if(guesses>randomNumber){
    displayMessage(`Your Guess is too High`)
    displayGuesses()
  }
}
function displayGuesses(){
  inputValue.value=''
  showGuesses.innerHTML= ` ${guessesArray.join( )} `
  
  remaining.innerHTML=`${10-numOfGuesses}`
  

}
function displayMessage(message){
  lowHigh.innerHTML=`<h2>${message}</h2>`

}

function endGame(){
inputValue.setAttribute('disabled','');
p.classList.add('button')
p.innerHTML='<h2 id="newGame">Start a New Game</h2>'
startOver.appendChild(p)
playGame=false;
newGame();

}

function newGame(){
const reStart=document.querySelector('#newGame')
reStart.addEventListener('click',function(e){
  randomNumber=parseInt(Math.random()*100+1);
inputValue.removeAttribute('disabled');
inputValue.value='';
showGuesses.innerHTML='';
numOfGuesses=0;
guessesArray=[];
remaining.innerHTML=`10`;
lowHigh.innerHTML='';
startOver.removeChild(p);
playGame=true;

})
}
```