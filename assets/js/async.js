import validation from "./validation.js";
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-wrapper");
    let inputValidated = true;
    form.addEventListener("submit",async(event)=>{
        event.preventDefault();
        const inputs = document.querySelectorAll("input");
        inputs.forEach(input=>{
            input.style.border = "1px solid #ddd";
        })
        const formData = new FormData(form);
        const username = formData.get("username");
        const email_address = formData.get("email-address");
        const password = formData.get("password");
        const password_confirmation = formData.get("password-confirmation");
        inputValidated = validation(inputs,username,email_address,password,password_confirmation,inputValidated);
        if(inputValidated)
        {
            console.log("All field validated");
        }
    })
});