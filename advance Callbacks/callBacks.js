const scriptLoad=function(src,callback){
   const script= document.createElement('script')
    script.src=src
    script.onload=function(){
        console.log("Loaded script with src SRC:" + src)
        callback(null,src)
        
    }

    script.onerror=function(){
        callback(new Error("this is a error in src"),"this is not valid src:" + src)
    }
    console.log("hello fuckers")
    document.body.appendChild(script)
}

function test(error , src){
    if(error){
        console.log(error)
        return
    }
    alert("this is a test function")
}

function examine(error,src){
    if(error){
        console.log(error ,src)
        return
    }
    alert("this is a examined as :" + src)
    
}
scriptLoad("https://code.jquery.com/jquery-3.4.1.slim.min.js",examine) 