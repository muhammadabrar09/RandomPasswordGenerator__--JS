const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passOneEl = document.querySelector("#pass1");
let passTwoEl = document.querySelector("#pass2");
let btnEl = document.querySelector("#btn")


// //////////////////////////////////////////////////////

btnEl.addEventListener('click', function(){
    generatePass();

});

function generatePass(){
    let storingPassOne = [];
    let storingPassTwo = [];

    for(let i= 0; i<15;i++){
        let passOne = Math.floor(Math.random() * characters.length);
        storingPassOne += characters[passOne]
        }

    for(let i= 0; i<15;i++){
        let passTwo = Math.floor(Math.random() * characters.length);
        storingPassTwo += characters[passTwo]
        }
        passOneEl.textContent = storingPassOne
        passTwoEl.textContent = storingPassTwo
        // console.log(storingPassOne);
        // console.log(storingPassTwo);
        btnEl.textContent = "ReGenerate Passwords"
}


