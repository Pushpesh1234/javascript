const ul = document.querySelector('.task-bar')
const buttonClicked = document.querySelector('#btn')
const inputValue = document.querySelector('#enter-task')
let flexDiv;
let listItem
let divSymbol;
let check;



function checkInput() {
   if (inputValue.value === '') {
      alert("add an input First")
      return null;
   }
   else {
      const contentLi = inputValue.value
      inputValue.value = ''
      return { createLi: () => createLi(contentLi) }
   }
}

function createLi(content) {
   flexDiv = document.createElement('div')
   flexDiv.classList.add('flex-div')


   listItem = document.createElement('li')
   listItem.classList.add('task-item')
   listItem.appendChild(document.createTextNode(content))


   div = document.createElement('div')
   div.classList.add('symbol')
   div.innerHTML = '&#10006'

   flexDiv.appendChild(listItem)
   flexDiv.appendChild(div)
   ul.appendChild(flexDiv);
}


// Add Button clicking Event

buttonClicked.addEventListener('click', function (e) {
   e.preventDefault()
  const checkPoint= checkInput()
   if(checkPoint){
   checkPoint.createLi()
   }

})


// removing function
function removeli(ev) {
   const isSymbolClicked=ev.target.closest('.symbol')
   if (ev.target.closest('.symbol')) {
      isSymbolClicked.parentNode.remove()
      
   }
}

// toggling Strike through
function checkedMark(ev) {
   const isSymbolClicked=ev.target.closest('.symbol')
   const liAndflexDiv=ev.target.closest('.flex-div')
   if (liAndflexDiv&&!isSymbolClicked) {
    const li=  liAndflexDiv.querySelector('.task-item')
    const symbol=liAndflexDiv.querySelector('.symbol')
      li.classList.toggle('checked')
      symbol.classList.toggle('changeColor') 
            

   }
}

ul.addEventListener('click', removeli)
ul.addEventListener('click', checkedMark)

