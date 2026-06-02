import validation from "./validation.js";
let studentDatabase = [{
    id: 1,
    firstName: "Tshego",
    lastName: "Mailula",
    email: "tshego@gmail.com",
    course: "NDip: Information Technology",
    age: 31
},{
    id: 2,
    firstName: "Katlego",
    lastName: "Makwela",
    email: "katlego@gmail.com",
    course: "Bsc: Information Technology",
    age: 21
},{
    id: 3,
    firstName: "Peter",
    lastName: "Smith",
    email: "peter@gmail.com",
    course: "Bsc: Swimming",
    age: 27
},{
    id: 4,
    firstName: "Ngoako",
    lastName: "Nkoana",
    email: "ngoako@gmail.com",
    course: "BA: Wordsmith",
    age: 37
},{
    id: 5,
    firstName: "Jabulani",
    lastName: "Mokoena",
    email: "jabulani@gmail.com",
    course: "BA: Teaching",
    age: 28
}];
document.addEventListener("DOMContentLoaded", () => {
    displaySynchronousFunction();
    displayStudentRecords();
    const form = document.getElementById("form-wrapper");
    let inputValidated = true;
    form.addEventListener("submit",async(event)=>{
        event.preventDefault();
        const inputs = document.querySelectorAll("input");
        document.querySelectorAll(".error-message").textContent = "";
        inputs.forEach(input=>{
            input.style.border = "1px solid #ddd";
        })
        document.querySelectorAll(".error-message").forEach(span => {
            span.textContent = "";
        });
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

//Synchronous execution
function displaySynchronousFunction()
{
    const display = document.getElementById("display-messages");
    createRow("Step 1 - The function is starting",display);
    createRow("Step 2 - The process is in action",display);
    createRow("Step 3 - The function reached the final stage",display);
}
function createRow(text,display)
{
 const row = document.createElement("li");
 row.textContent = text;
 display.appendChild(row);
}
//Using setTimeout()
function displayStudentRecords()
{
    let seconds = 0;
    const table = document.getElementById("student-display");
    const interval = setInterval(() => {
    seconds++;
}, 1000);
    setTimeout(()=>{
        clearInterval(interval);
        studentDatabase.forEach(student=>{
            const row = document.createElement("li");
            row.innerHTML = `<span>${student.id}</span><span>${student.firstName}</span><span>${student.lastName}</span><span>${student.email}</span><span>${student.course}</span><span>${student.age}</span>`;
            table.appendChild(row);
        });
        document.getElementById("students-section").style.display = "block";
        document.getElementById("timeout-message").textContent = `Displayed after ${seconds} seconds`;
    },3000);
}