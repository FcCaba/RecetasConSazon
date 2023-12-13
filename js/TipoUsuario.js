const NombreInput=document.getElementById("validationCustom01");
const gmailInput=document.getElementById("validationCustom02");
const TipoInput=document.getElementById("validationCustom04");
const passwordInput = document.getElementById("PasswordLU");
function Login() {
    let gmail=gmailInput.value;
    let nombreu= NombreInput.value;
    let tipou = TipoInput.value;
    let password = passwordInput.value;
    if(gmail==""&& nombreu==""&& password=="" && tipou=="Administrativo"){
        window.open("html/Usuario_register.html")
        window.close()
    }else if(gmail==""&& password=="" && tipou=="Inventario"){
        window.open("html/inventario_Register.html")
        window.close()
    }
    else{
        if(gmail=="123@gmail.com"&& password=="franz"){
            alert("accediste a tu cuenta")
        }
        else{
            alert("no se pudo acceder, intenta de nuevo o contactanos por correo electronico <EMAIL>")
        }
        
    }
  }
  
