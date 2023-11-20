// document.addEventListener('DOMContentLoaded', function() {
   
// });

const $formulario = document.getElementById('formulario');

$formulario.addEventListener('submit',validar);

function validar(){
    const datos = $formulario.querySelectorAll('input');
    for (const dato of datos) {
        console.log(dato)
    }
    
}