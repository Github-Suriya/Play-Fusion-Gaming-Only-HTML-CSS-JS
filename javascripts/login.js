function viewPass() {

    var inputPassword = document.querySelector("#vp");
    
    if ( inputPassword.type === "password" ) {
      inputPassword.type = "text";
    }

    else {
      inputPassword.type = "password";
    }
}