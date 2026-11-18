const nameInput= document.querySelector("#nameInput");
const greetBtn= document.querySelector("#greetBtn");
const message= document.querySelector("#message");
const colorBtn= document.querySelector("#colorBtn");

greetBtn.addEventListener("click", function(){
    const name=nameInput.value;

    if(name===""){
        message.textContent="pls type ur name";
    }else {
        message.textContent="hello," + name ;
    }
});