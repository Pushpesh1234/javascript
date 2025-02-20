# Prjoects related to DOM

## JavaScript Solution One

### Project 1
```JavaScript

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