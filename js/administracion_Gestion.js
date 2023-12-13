const gmailInput=document.getElementById("gmailLU");
const passwordInput = document.getElementById("PasswordLU");
function Login() {
    let gmail=gmailInput.value;
    let password = passwordInput.value;
    if(gmail==""&& password=="franz"){
        window.close()
        window.open("html/login.html")
        
    }
    else{
        if(gmail=="123@gmail.com"&& password=="franz"){
            alert("accediste a tu cuenta")
        }
        
    }
  }
  
