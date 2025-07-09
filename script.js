let inputSlider=document.getElementById("inputSlider");
let sliderValue=document.getElementById("sliderValues");
let passBox=document.getElementById("passBox");
let lowercase=document.getElementById("lowercase");
let uppercase=document.getElementById("uppercase");
let numbers=document.getElementById("numbers");
let symbols=document.getElementById("symbols");
let gnbtn=document.getElementById("gnbtn");
let copyIcon=document.getElementById("copyIcon");

//showing input slider value
sliderValue.textContent=inputSlider.value;
inputSlider.addEventListener('input',()=>{
    sliderValue.textContent=inputSlider.value;
});

gnbtn.addEventListener('click',()=>{
    passBox.value=generatePassword();
});

let upperChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars="abcdefghijklmnopqrstuvwxyz";
let Numbers="0123456789";
let Symbols="!@#$%^&*_~"
//function to generate password
function generatePassword(){
    let genPassword="";
    let allChars="";
    allChars+=lowercase.checked ? lowerChars:"";
    allChars+=uppercase.checked ? upperChars:"";
    allChars+=numbers.checked ? Numbers:"";
    allChars+=symbols.checked ? Symbols:"";

    let i=1;
    while(i<=inputSlider.value){
        genPassword+= allChars.charAt(Math.floor(Math.random()*allChars.length));
        i++;
    }
    return genPassword;
}
copyIcon.addEventListener('click',()=>{
    if(passBox.value!=""||passBox.value.length>=1){
       navigator.clipboard.writeText(passBox.value);
       copyIcon.innerText="check";
       copyIcon.title="Password Copied";
       setTimeout(()=>{
        copyIcon.innerHTML="content_copy";
        copyIcon.title="";
       },3000)
    }
});
