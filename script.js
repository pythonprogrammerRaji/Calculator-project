let input = document.getElementById("input-text");
let inputValue="";
 buttons = document.querySelectorAll("button");

for(item of buttons){
    item.addEventListener("click",(e)=>{
    buttonText = e.target.innerText;
    console.log(buttonText);

    if(buttonText == "*"){
    buttonText ="*";
    inputValue += buttonText;
    input.value = inputValue;
    
    }

    else if(buttonText == "C"){
     inputValue = "";
     input.value = inputValue;
    }
     
    else if(buttonText == "="){
     input.value = eval(inputValue);

    }
     
    else{
        inputValue += buttonText;
        input.value = inputValue;
    }
    });
}