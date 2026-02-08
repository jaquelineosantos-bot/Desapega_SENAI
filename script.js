function validarFormulario() {
    var nome = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;
    if (nome.trim()=="" || senha.trim()=="") {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return false;
    }
    return true;
}

/* slider */

var imgSlider = document.querySelectorAll('.slider-container .slider-box');
var btnNav = document.querySelectorAll('.btn-nav-box .btn-nav');

let contadorImg = imgSlider.length;
let imgAtiva = 0;
