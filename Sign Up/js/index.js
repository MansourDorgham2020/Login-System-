


/////////////////////
//////////////variables//////////////////
let registerForm = document.getElementById('registerForm')
let signName = document.getElementById('signName')
let signEmail = document.getElementById('signEmail')
let signPassword = document.getElementById('signPassword')
let nameAlert = document.getElementById('nameAlert')
let emailAlert = document.getElementById('emailAlert')
let passwordAlert = document.getElementById('passwordAlert')
let existAlert = document.getElementById('existAlert')
let successAlert = document.getElementById('successAlert')
let usersList = []
////////////////////////////////////////////////////
if(localStorage.getItem('users')!==null){
    usersList = JSON.parse(localStorage.getItem('users'))
}
registerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    if (checkIfAllAreTrue()) {
        console.log("user is added");
        addUser();
    } else {
        console.log("there is an error");
    }
});


function addUser(){
    let user = {
        name: signName.value,
        email: signEmail.value,
        password: signPassword.value
    }
    if(isExist(user)){
        existAlert.classList.remove('d-none')
    }
    else{
    usersList.push(user)
    localStorage.setItem('users',JSON.stringify(usersList))
    console.log(user)
    successAlert.classList.remove('d-none')
    existAlert.classList.add('d-none')
    setTimeout(function(){
        window.location.href = '../../Sign in/login.html'
    },2000)
}
}


function validation(regex, element, alertMsg){
    let pattern = regex;
    if (pattern.test(element.value)) {
        console.log("valid");
        alertMsg.classList.replace("d-block", "d-none");
        return true; // Return true if validation passes
    } else {
        console.log("invalid");
        alertMsg.classList.replace("d-none", "d-block");
        return false; // Return false if validation fails
    }
}


function checkIfAllAreTrue() {
    // Use && to ensure all conditions are true
    return (
        validation(/^[a-zA-Z]{2,}$/, signName, nameAlert) &&
        validation(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/, signEmail, emailAlert) &&
        validation(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.{8,}).*$/, signPassword, passwordAlert)
    );
}
function isExist(para){
    for (let i = 0; i < usersList.length; i++) {
    if(usersList[i].email.toLowerCase() == para.email.toLowerCase()){
        console.log("email already exist");  
        return true
    }        
    }
}
