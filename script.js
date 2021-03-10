//declaration des variables des elements html
const form =document.getElementById('form')
const username =document.getElementById('Username')
const email =document.getElementById('email')
const password =document.getElementById('password')
const confirm_password =document.getElementById('confirm-password')
const input  = document.querySelector('input'); 

// change in input

// username.addEventListener('change', function(){
    
//     let inp = username.parentElement;
//     inp.className ='input hidden'
// })

//event change par des inputs 

form.addEventListener('change',changer);

function changer () {
    
    vider(username)
    vider(email)
    vider(password)
    vider(confirm_password)
}

function vider (input) {
    
    const inputt = input.parentElement
    inputt.className = 'input hidden'
}


// event par submit
form.addEventListener('submit', (e)=> {
     e.preventDefault();
     checkInput();

});


function checkInput() {

    //the values of inputs 
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim(); 
    const passwordValue = password.value.trim();
    const password_confirmValue = confirm_password.value.trim();
      //tester username
    if (usernameValue === ''){
          
        setErrorFor(username ,'Username cannot be blank')
    }
    else {
     setSuccessFor(username);
    }

    //email tester
    if(emailValue ===''){
        setErrorFor(email,'email cannot be blank')
    }
    else if(!validateEmail(emailValue)){

        setErrorFor(email,'email is incorrect');
    }
    else{
        setSuccessFor(email);

    }
    // tester password
    if (passwordValue ===''){
    setErrorFor(password,'password cannot be blank')
}
else {
    setSuccessFor(password)
}
   // tester password2 and confirmation 
    if(password_confirmValue ===''){
        setErrorFor(confirm_password,'password cannot be blank')
    }
    //test confirmation 
    else if(passwordValue!== password_confirmValue){
        setErrorFor(confirm_password,'it is incorrect confirmation')
    }
    else {
        setSuccessFor(confirm_password)
    }

}

function setErrorFor(input, message) {

    const inputG = input.parentElement;

     //add message or text from innertext  / 
    const small = inputG.querySelector('small');    //q1 est ce que small est fils de parent inputG
    small.innerText =message;
    //add class from css

    inputG.className ='input Error';

}

 function setSuccessFor(input) {
     const inputG = input.parentElement;
     inputG.className = 'input success';



 }
function validateEmail(email) {
    return   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(email).toLowerCase());


}
