function registerWarden() {
    username = document.getElementsByName("username")[0].value;

    if (username.length < 6) {
        alert("Username must be at least 6 characters long");
        return false;
    }

    if (username.length > 24) {
        alert("Username must be less than 24 characters long");
        return false;
    }
    
    return true;  
}


function passMatch () {
    pass1 = document.getElementsByName("password")[0].value;
    pass2 = document.getElementsByName("password_verify")[0].value;

    

    if (pass1 != pass2) {
        window.alert("Ensure passwords match");
        return false;
        
    }
    else {
        return true;
    }
} 

function refWarden () {
    const notAllowed = ["tucis", "bogo", "eatgood"];
    ref = document.getElementsByName("ref_code")[0].value;

    while (notAllowed.includes(ref)) {
        window.alert("This referral code is invalid")
        return false;
    }
        return true;
}

function webParams () {
    let params  = new URLSearchParams(document.location.search)

    const username = params.get('username');
    const email = params.get('email');
    const refcode = params.get("ref_code");
    const password = params.get("password");
    const password_verify = params.get("password_verify");
    const checkbox = params.get("SignUp");

    let userElement = document.createElement("h3");
    userElement.innerText =  "-username: " + username;

    document.body.appendChild(userElement)

    let emailElement = document.createElement("h3");
    emailElement.innerText =  "-email: " + email;

    document.body.appendChild(emailElement)
    
    let passElement = document.createElement("h3");
    passElement.innerText =  "-password: " + password;

    document.body.appendChild(passElement)

    let passvElement = document.createElement("h3");
    passvElement.innerText =  "-password verify: " + password_verify;

    document.body.appendChild(passvElement)
    
    let checkElement  = document.createElement("h3");
    if (checkbox == "on") {
        checkElement.innerText = "-checkbox: true";
    }
    else {
        checkElement.innerText = "-checkbox: false";
    }
    
    document.body.appendChild(checkElement);

    if (refcode != null) {
        let refElement  = document.createElement("h3");
        refElement.innerText = " -referral code: " + refcode + "(free meal)";
        document.body.appendChild(refElement);
    }
}