const form = document.getElementById("form");
const username = document.getElementById("namehard");
const checkin = document.getElementById("checkin");
const checkon = document.getElementById("checkon");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
})

function checkInputs() {
    const namehardValue = namehard.value;
    const checkinValue = checkin.value;
    const checkonValue = checkon.value;

    if (namehardValue == '') {
        setErrorFor(namehard, 'The machine name is empty')
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    //Add Error Message
    small.innerText = message;

    //Add Error Class
    formControl.className = "form-control error";
}

function setErrorFor(input) {
    const formControl = input.parentElement;

    //Add Sucess Class
    formControl.className = "form-control succes";
}