const form = document.getElementById("form");
const namehard = document.getElementById("namehard");
const checkboxint = document.getElementById("checkboxint");
const checkboxon = document.getElementById("checkboxon");
const assunto = document.getElementById("assunto");

/*form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});*/

function checkInputs() {
    const namehardValue = namehard.value;
    const checkboxintValue = checkboxint.value;
    const checkboxonValue = checkboxon.value;
    const assuntoValue = assunto.value;


    if (namehardValue === '') {
        setErrorFor(namehard, "The machine name is empty")
    } else {
        setSuccessFor(namehard);
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