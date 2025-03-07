const ul=document.querySelector('.task-bar')
const buttonClicked=document.querySelector('#btn')
const inputValue=document.querySelector('#enter-task')
let listItem
let spanCreated;
// let nodeList=document.querySelectorAll('li')
function createLiItem(){
   
   if(inputValue.value===''){
    alert("add an input First")
   }
   else{
     function createLi(){
     listItem=document.createElement('li')
     ul.appendChild(listItem)
     listItem.classList.add('task-item')
     listItem.appendChild(document.createTextNode(inputValue.value))
      }
     function insideLi(){
      spanCreated =document.createElement('span')
      listItem.appendChild(spanCreated)
      spanCreated.innerHTML='&#10006'

      spanCreated.addEventListener('click',function(e){
      if(e.target){
        listItem.style.display="none"}
      })
         

  
     }

     return{
        insideLi
      }
   }
}

buttonClicked.addEventListener('click',function(e){
    e.preventDefault()
   
 createLiItem().insideLi()
 inputValue.value=''
 console.log("hello")
})

