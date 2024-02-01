const pass = document.getElementById("pass");
const conf = document.getElementById("conf");
const btn  =  document.getElementById("btn");
const form = document.getElementById("forn_reg");

function  validatePassword(){
    if (pass.value === "" || conf.value===""){
        alert ("Password can't be empty");
        btn.style = "opacity: 0"
        return false;
    }else if(pass.value !== conf.value){
        alert ("Passwords could be same");
        btn.style = "opacity: 0"
        return false;
    } else {
        btn.style = "opacity: 1"
    };
}
btn.addEventListener("click", () => { console.log(pass.textContent)})

