let form = document.getElementById("form");
let namehard = document.getElementById("namehard");
let checkboxint = document.getElementById("checkboxint");
let checkboxon = document.getElementById("checkboxon");
let assunto = document.getElementById("assunto");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    let namehardValue = namehard.value;
    let checkboxintValue = checkboxint.value;
    let checkboxonValue = checkboxon.value;
    let assuntoValue = assunto.value;

    if (namehardValue = " ") {
        setErrorFor(namehard, "The machine name is empty");
    } else {
        setSuccessFor(namehard);
    }

if (checkboxintValue = " ") {
    setErrorFor(checkboxint, "The machine name is empty");
} else {
    setSuccessFor(checkboxint);
}

if (checkboxonValue = " ") {
    setErrorFor(checkboxon, "The machine name is empty");
} else {
    setSuccessFor(checkboxon);
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

function setSuccessFor(input) {
    const formControl = input.parentElement;

    //Add Sucess Class
    formControl.className = "form-control success";
}