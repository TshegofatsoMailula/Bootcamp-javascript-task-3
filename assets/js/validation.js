export default function validation(inputs,username,email_address,password,password_confirmation,inputValidated)
{
    const email_regular_expression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!username && !email_address && !password && !password_confirmation)
    {
        inputs.forEach(input=>{
            input.style.border = "1px solid red";
        })
        inputValidated = false;
    }
    if(!username)
    {
        document.getElementById("username").style.border = "1px solid red";
        inputValidated = false;
    }
    if(!email_address)
    {
        document.getElementById("email-address").style.border = "1px solid red";
        inputValidated = false;
    }
    else if(!email_regular_expression.test(email_address))
    {
        document.getElementById("email-address-error").textContent = "Invalid email";
        inputValidated = false;
    }
 
    if(!password)
    {
        document.getElementById("password").style.border = "1px solid red";
        inputValidated = false;
    }
    else if(password.length<8)
    {
        document.getElementById("password-error").textContent = "A minimum of 8 characters is required";
        inputValidated = false;  
    }
  
    if(!password_confirmation)
    {
        document.getElementById("password-confirmation").style.border = "1px solid red";
        inputValidated = false;
    }
    else if(password_confirmation.length < 8)
    {
        document.getElementById("password-confirmation-error").textContent = "A minimum of 8 characters is required";
        inputValidated = false;
    }
  
    if(password_confirmation!==password)
    {
        document.getElementById("password-confirmation").style.border = "1px solid red";
        inputValidated = false;
    }
    return inputValidated;
}