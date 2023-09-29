const submit = document.querySelector(".submit")
const dismiss = document.querySelector(".dismiss")
const email_input = document.querySelector(".email-input")
const invalid_email = document.querySelector(".email-i")
const form = document.querySelector(".form")
const successful = document.querySelector(".successful")
const mail = document.querySelector(".mail")
let data = 0;

//events
submit.addEventListener("click", (e) => {
    e.preventDefault();

    if (email_input.value === "" || data == 0) {
        invalid_email.style.display = "inline-block"
        email_input.classList.add("error")
        return
    } else {
        invalid_email.style.display = "none"
        email_input.classList.remove("error")
        data = 1
        mail.textContent = email_input.value
        form.classList.add("slideD")

        setTimeout(() => {
            form.style.display = "none"
            successful.classList.add("pops")
        }, 700)
        
        setTimeout(() => {
            successful.style.display = "flex"
        }, 700)

    }
})

email_input.addEventListener("blur", email_validation)
email_input.addEventListener("input", email_validation)

dismiss.addEventListener("click", () => {
    location.reload();
})

//functions
function email_onInput(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

function email_validation(event) {
    let email = email_input.value;

    if (!email_onInput(email)) {
        invalid_email.style.display = "inline-block"
        email_input.classList.add("error")
        data = 0
    } else {
        invalid_email.style.display = "none"
        email_input.classList.remove("error")
        data = 1
    }
}