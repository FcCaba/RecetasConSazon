function mostrarImagen() {
    var inputFile = document.getElementById("inputGroupFile04");
    var imgPreview = document.getElementById("imgPreview");
    if (inputFile.files && inputFile.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            imgPreview.src = e.target.result;
        };
        reader.readAsDataURL(inputFile.files[0]);
    }
    else {
        imgPreview.src = "";
    }
}
var inputFile = document.getElementById("inputGroupFile04");
inputFile.addEventListener("change", function () {
    if (inputFile.files && inputFile.files[0]) {
        mostrarImagen();
    }
});