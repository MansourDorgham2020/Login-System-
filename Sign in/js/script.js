let loginForm = document.getElementById('loginForm')
let loginEmail = document.getElementById('loginEmail')
let loginPassword = document.getElementById('loginPassword')
let loginAlert = document.getElementById('loginAlert')
let loginSuccessAlert = document.getElementById('loginSuccessAlert')
let allUsers = []
if(localStorage.getItem('users')!==null){
    allUsers = JSON.parse(localStorage.getItem('users'))
}
loginForm.addEventListener('submit',function(e){
    e.preventDefault()
    login()
})

function login(){
    var user = {
        email: loginEmail.value,
        password: loginPassword.value
    }
    if(isValid(user)==true){
        loginSuccessAlert.classList.remove("d-none")
        loginAlert.classList.add("d-none")
        setTimeout(function(){
            window.location.href = '../../welcome/welcome.html'
        },1000)

    }
    else{
        loginAlert.classList.remove("d-none")
        loginSuccessAlert.classList.add("d-none")

    }
}


function isValid(index){
    for (let i = 0; i < allUsers.length; i++) {
        if(allUsers[i].email.toLowerCase() == index.email.toLowerCase()
        &&
    allUsers[i].password == index.password
    )        {
        console.log("success")
        localStorage.setItem('users',allUsers[i].name)
        return true
    }
    }
}