const buttonEmail = document.querySelector(".button-email")
const errorMessage = document.querySelector(".error")
const positioning = document.querySelector(".error-positioning")
const emailGiven = document.querySelector("input")


buttonEmail.addEventListener("click", ()=> {
    console.log(emailGiven.value)
    if(validateEmail(emailGiven.value) === true){
        console.log('a')
        errorMessage.style.display = "none"
        positioning.classList.add("pb-8")
        location.reload();
    }else if(validateEmail(emailGiven.value) === false){
        console.log('b')
        errorMessage.style.display = "block"
        errorMessage.classList.add("pb-8")
        positioning.classList.remove("pb-8")
    }
})

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}