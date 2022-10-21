const hamburger = document.querySelector('.hamburger');
const hamburger2 = document.querySelector('.hamburger2');
const hamburger3 = document.querySelector('.hamburger3');
const signInBtn = document.querySelector('.web-sign-in-btn');
const signInBtnBtn = document.querySelector('#new-sign-in-btn');
const signInCon = document.querySelector('.sign-in-container');
const signUpBtn = document.querySelector('#new-sign-up-btn');
const signUpCon = document.querySelector('.sign-up-container');
const newSignUp = document.querySelector('#sign-up-now');
const error = document.querySelector('.error');
const error2 = document.querySelector('.error2');
const error3 = document.querySelector('.error5');
const error4 = document.querySelector('.error6');
const successful = document.querySelector('.successful');
const myCheckBox = document.querySelector('#myCheckbox');
const signInSuccessful = document.querySelector('.sign-in-successful');

//session storage save
let theEmail = localStorage.getItem('email');
let thePass = localStorage.getItem('password');

//Tadi pa 

const htmlBtn = document.querySelector('.html-btn');
const cppBtn = document.querySelector('.cpp-btn');
const historyBtn = document.querySelector('.history-btn');
const ethicsBtn = document.querySelector('.ethics-btn');
const sedBtn = document.querySelector('.sed-btn');
const peBtn = document.querySelector('.pe-btn');

//katugbong
const myEmail = document.querySelector('#sign-in-input-email');
const myPassword = document.querySelector('#sign-in-input-password');
const unsuccessful = document.querySelector('.successful2');
const unsuccessful2 = document.querySelector('.successful4');
const closeSignUp = document.querySelector('#close-sign-up');
const anotherOne = document.querySelector('.mobile-sign-in-btn');
const signUpBg = document.querySelector('.sign-up-bg');
const signInBg = document.querySelector('.sign-in-bg');
const hamburger100 = document.querySelector('.hamburger4');
const fPass = document.querySelector('#now');
const successful20 = document.querySelector('.successful20');
const successful30 = document.querySelector('.successful30');
const successful40 = document.querySelector('.successful40');
const fPassInput = document.querySelector('#fpass-input-password');
const fPassNew = document.querySelector('#fpass-new-password');
const fPassCon = document.querySelector('.fpass-container');
const newConfirmBtn = document.querySelector('#new-confirm-btn');
let userNameValue = document.querySelector('#sign-up-user-name');
let emailValue = document.querySelector('#sign-up-email');
let passwordValue = document.querySelector('#sign-up-password');

const ul = document.querySelector('#myUl');
const blur = document.querySelector('#blur');

//Event Listener
hamburger.addEventListener('click', myHamburger);
hamburger2.addEventListener('click', myHamburger2);
hamburger3.addEventListener('click', myHamburger3);
signInBtn.addEventListener('click', mySignIn);
newSignUp.addEventListener('click', newSignUpUser);
signUpBtn.addEventListener('click', newSignUpBtn);
myCheckBox.addEventListener('click', set);
signInBtnBtn.addEventListener('click', iWillSignIn);
closeSignUp.addEventListener('click', myHamburger3);
anotherOne.addEventListener('click', mySignIn2);
hamburger100.addEventListener('click', hamburger1000);
fPass.addEventListener('click', myResetForm);
newConfirmBtn.addEventListener('click', confirmBtn);
cppBtn.addEventListener('click', cppPage);
peBtn.addEventListener('click', pePage);
ethicsBtn.addEventListener('click', ethicsPage);
htmlBtn.addEventListener('click', htmlPage);
historyBtn.addEventListener('click', historyPage);
sedBtn.addEventListener('click', sedPage);


//Functions

//////////////hamburger button displayed in 840px width below/////////////

function myHamburger () {
    this.classList.toggle('goToggle');
    ul.classList.toggle('slide');
    blur.classList.toggle('blur');
}

//////////////Exit button in signin form/////////////

function myHamburger2 () {
    blur.classList.toggle('blur');
    unsuccessful2.classList.remove('successful3');
    signInCon.classList.remove('goSignIn');
    signInCon.classList.toggle('goSignIn1');
    hamburger2.classList.remove('goToggle2');
    hamburger2.classList.toggle('goToggle1');
    unsuccessful.classList.remove('successful3');
    successful.classList.remove('successful1');
    signInBg.classList.remove('bg-signin-on');
    myEmail.value = "";
    myPassword.value = "";
}

//////////////Exit button in sign up form/////////////

function myHamburger3 () {
    signUpCon.classList.remove('sign-up-slide');
    signUpCon.classList.toggle('sign-up-slide-out');
    hamburger3.classList.remove('goToggle3');
    unsuccessful.classList.remove('successful3');
    error.classList.remove('error3');
    error2.classList.remove('error4');
    error3.classList.remove('error3');
    error4.classList.remove('error3');
    signUpBg.classList.remove('bg-signup-on');
    userNameValue.value = "";
    emailValue.value = "";
    passwordValue.value = "";
}

//////////////Exit button in reset password form/////////////

function hamburger1000 () {
    hamburger100.classList.remove('goToggle3');
    successful20.classList.remove('successful3');
    successful30.classList.remove('successful3');
    successful40.classList.remove('successful3');
    fPassCon.classList.toggle('sign-up-slide');
    fPassInput.value = "";
    fPassNew.value = "";
}

//////////////Accessing Reset Form/////////////

function myResetForm () {
    console.log('hello');
    hamburger100.classList.toggle('goToggle3');
    fPassCon.classList.toggle('sign-up-slide');
}

//////////////Reset Button/////////////

function confirmBtn () {
    let fPass1 = fPassInput.value;
    let fPass2 = fPassNew.value;

    if (fPassInput.value == '' || fPassNew.value == '' || fPass1.length < 8 || fPass2.length < 8) {
        successful40.classList.remove('successful3');
        successful20.classList.remove('successful3');
        successful30.classList.add('successful3');
    } else if (fPassInput.value == fPassNew.value && fPass1.length >= 8 && fPass2.length >= 8) {
        console.log(fPassInput.value);
        console.log(fPassNew.value);
        successful20.classList.remove('successful3');
        successful30.classList.remove('successful3');
        successful40.classList.add('successful3');
        thePass = fPassNew.value;
        sessionStorage.setItem('password', thePass);
        localStorage.setItem('password', thePass);
        hamburger1000();
    } else {
        successful40.classList.remove('successful3');
        successful30.classList.remove('successful3');
        successful20.classList.add('successful3');
    }
}

//////////////Accessing Signin form in default width/////////////

function mySignIn () {
    blur.classList.toggle('blur');
    signInCon.classList.remove('goSignIn1');
    signInCon.classList.toggle('goSignIn');
    hamburger2.classList.remove('goToggle1');
    hamburger2.classList.toggle('goToggle2');
    signInBg.classList.add('bg-signin-on');
}

//////////////Accessing Signin form in 640px of width below/////////////

function mySignIn2 () {
    blur.classList.toggle('blur');
    signInCon.classList.remove('goSignIn1');
    signInCon.classList.toggle('goSignIn');
    hamburger2.classList.remove('goToggle1');
    hamburger2.classList.toggle('goToggle2');
}

//////////////Accessing Signup form/////////////

function newSignUpUser () {
    signUpCon.classList.remove('sign-up-slide-out');
    signUpCon.classList.toggle('sign-up-slide');
    hamburger3.classList.toggle('goToggle3');
    signUpBg.classList.add('bg-signup-on');
}

//////////////checkbox checked/////////////

function set () {
    if (!myCheckBox.getAttribute('checked', 'unchecked')) {
        myCheckBox.setAttribute('checked', 'checked');
    } else {
        myCheckBox.removeAttribute('checked', 'checked');
    }
}

//////////////Sign up button/////////////

function newSignUpBtn () {
    let emailName = emailValue.value;
    let passValue = passwordValue.value;
    let i = 9;
    let element = ["@", "g", "m", "a", "i", "l", ".", "c", "o", "m"];
    let element2 = [];
    for (let index = emailName.length-1; index > emailName.length-11; index--) {
        element2[i] = emailName[index];
        i--;
    }
    let x = 0;
    for (let index = 0; index < element.length-1; index++) {
        if (element[index] == element2[index]) {
            x++;
        }
    }

    error2.classList.remove('error4');
    error.classList.remove('error3');

    if (userNameValue.value != "" && x >= 9 && passValue.length >= 8 && myCheckBox.getAttribute('checked', 'checked')) {
        signUpCon.classList.toggle('sign-up-slide');
        successful.classList.add('successful1');
        signUpBg.classList.remove('bg-signup-on');
        error.classList.remove('error3');
        error2.classList.remove('error4');
        error3.classList.remove('error3');
        error4.classList.remove('error3');
        theEmail = emailName;
        thePass = passValue; 

        //Save in Session Storage
        sessionStorage.setItem('email', emailName);
        sessionStorage.setItem('password', passValue);

        //Save in local Storage
        localStorage.setItem('email', emailName);
        localStorage.setItem('password', passValue);
        userNameValue.value = "";
        emailValue.value = "";
        passwordValue.value = "";
    } else if (userNameValue.value == "") {
        error3.classList.remove('error3');
        error4.classList.remove('error3');
        error.classList.remove('error3');
        error2.classList.remove('error4');
        error.classList.add('error3');
    } else if (x < 9) {
        error.classList.remove('error3');
        error2.classList.remove('error4');
        error4.classList.remove('error3');
        error3.classList.add('error3');
    } else if (passValue.length < 8) {
        error.classList.remove('error3');
        error3.classList.remove('error3');
        error4.classList.remove('error3');
        error2.classList.add('error4');
    } else if (!myCheckBox.getAttribute('checked', 'checked')) {
        error3.classList.remove('error3');
        error2.classList.remove('error4');
        error.classList.remove('error3');
        error4.classList.add('error3');
    }

}

//////////////Sign in Button/////////////

function iWillSignIn () {
    if (theEmail == myEmail.value && thePass == myPassword.value) {
        console.log('sign in');
        signInSuccessful.classList.add('sign-in-successful-on');
        sessionStorage.setItem('email', theEmail);
        sessionStorage.setItem('password', thePass);
        myHamburger2();
        countdown();
    } else if (myEmail.value == "" || myPassword.value == "") {
        unsuccessful.classList.remove('successful3');
        successful.classList.remove('successful1');
        unsuccessful2.classList.add('successful3');
    } else {
        unsuccessful2.classList.remove('successful3');
        successful.classList.remove('successful1');
        unsuccessful.classList.add('successful3');
    }
    
}


//////////////Sign in successfully ('fading out counter')/////////////

var x = 10;
function countdown () {
    if (x==0) {
        signInSuccessful.classList.remove('sign-in-successful-on');
        x.stop();
        x=10;
    }
    console.log(x)
    x--;

    setTimeout(countdown, 1000);
}


//////////////Accessing Courses/////////////

function htmlPage () {
    if (sessionStorage.getItem('email') != null && sessionStorage.getItem('password') != null && localStorage.getItem('email') != null && localStorage.getItem('password') != null) {
        window.location.href = "html-course/html-course.html";
    } else if(sessionStorage.getItem('email') == null && sessionStorage.getItem('password') == null && localStorage.getItem('email') == null && localStorage.getItem('password') == null) {
        if (window.innerWidth < 450) {
            mySignIn2();
            newSignUpUser();
        } else {
            mySignIn();
            newSignUpUser();
        }
    } else if (sessionStorage.getItem('email') == null && sessionStorage.getItem('password') == null) {
        if (window.innerWidth < 450) {
            mySignIn2()
        } else {
            mySignIn();
        }
    } 
}

function historyPage () {
    if (sessionStorage.getItem('email') != null && sessionStorage.getItem('password') != null && localStorage.getItem('email') != null && localStorage.getItem('password') != null) {
        window.location.href = "history-course/history-course.html";
    } else if(sessionStorage.getItem('email') == null && sessionStorage.getItem('password') == null && localStorage.getItem('email') == null && localStorage.getItem('password') == null) {
        if (window.innerWidth < 450) {
            mySignIn2();
            newSignUpUser();
        } else {
            mySignIn();
            newSignUpUser();
        }
    } else if (sessionStorage.getItem('email') == null && sessionStorage.getItem('password') == null) {
        if (window.innerWidth < 450) {
            mySignIn2()
        } else {
            mySignIn();
        }
    } 
}

function sedPage () {
    if (sessionStorage.getItem('email') != null && sessionStorage.getItem('password') != null && localStorage.getItem('email') != null && localStorage.getItem('password') != null) {
        window.location.href = "education-course/educ-course.html";
    } else if(sessionStorage.getItem('email') == null && sessionStorage.getItem('password') == null && localStorage.getItem('email') == null && localStorage.getItem('password') == null) {
        if (window.innerWidth < 450) {
            mySignIn2();
            newSignUpUser();
        } else {
            mySignIn();
            newSignUpUser();
        }
    } else if (sessionStorage.getItem('email') == null && sessionStorage.getItem('password') == null) {
        if (window.innerWidth < 450) {
            mySignIn2()
        } else {
            mySignIn();
        }
    } 
}

function cppPage () {
    if (sessionStorage.getItem('email') != null && sessionStorage.getItem('password') != null && localStorage.getItem('email') != null && localStorage.getItem('password') != null) {
        window.location.href = "cpp-course/cpp-course.html";
    } else if(sessionStorage.getItem('email') == null && sessionStorage.getItem('password') == null && localStorage.getItem('email') == null && localStorage.getItem('password') == null) {
        if (window.innerWidth < 450) {
            mySignIn2();
            newSignUpUser();
        } else {
            mySignIn();
            newSignUpUser();
        }
    } else if (sessionStorage.getItem('email') == null && sessionStorage.getItem('password') == null) {
        if (window.innerWidth < 450) {
            mySignIn2()
        } else {
            mySignIn();
        }
    } 
}

function pePage () {
    if (sessionStorage.getItem('email') != null && sessionStorage.getItem('password') != null && localStorage.getItem('email') != null && localStorage.getItem('password') != null) {
        window.location.href = "physical-education-course/pe-course.html";
    } else if(sessionStorage.getItem('email') == null && sessionStorage.getItem('password') == null && localStorage.getItem('email') == null && localStorage.getItem('password') == null) {
        if (window.innerWidth < 450) {
            mySignIn2();
            newSignUpUser();
        } else {
            mySignIn();
            newSignUpUser();
        }
    } else if (sessionStorage.getItem('email') == null && sessionStorage.getItem('password') == null) {
        if (window.innerWidth < 450) {
            mySignIn2()
        } else {
            mySignIn();
        }
    } 
}

function ethicsPage () {
    if (sessionStorage.getItem('email') != null && sessionStorage.getItem('password') != null && localStorage.getItem('email') != null && localStorage.getItem('password') != null) {
        window.location.href = "ethics-course/ethics-course.html";
    } else if(sessionStorage.getItem('email') == null && sessionStorage.getItem('password') == null && localStorage.getItem('email') == null && localStorage.getItem('password') == null) {
        if (window.innerWidth < 450) {
            mySignIn2();
            newSignUpUser();
        } else {
            mySignIn();
            newSignUpUser();
        }
    } else if (sessionStorage.getItem('email') == null && sessionStorage.getItem('password') == null) {
        if (window.innerWidth < 450) {
            mySignIn2()
        } else {
            mySignIn();
        }
    } 
}