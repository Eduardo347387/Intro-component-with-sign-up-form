document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', validarFormulario);
});
  
function validarFormulario(e) {
    e.preventDefault();
    const inputs = document.querySelectorAll('#formulario input');
    inputs.forEach(validarCampo);
}

function validarCampo(input) {
    const icon = input.parentElement.querySelector('.icon');
    const inputContainer = input.parentElement;
    const boxInput = inputContainer.parentElement;
    
    const paragraph = document.createElement('p');
    paragraph.style.paddingTop = '0.7rem';
    paragraph.style.color = 'red';
    paragraph.style.textAlign = 'end';
    paragraph.style.fontStyle = 'italic';

    let mensaje = '';

    if (input.value.trim() === '') {
        mensaje = `El campo ${input.id} no puede estar vacío`;
    } else if (input.id === 'email' && !validarEmail(input.value)) {
        mensaje = 'El formato del correo electrónico no es válido';
    }

    if (mensaje) {
        icon.style.display = 'flex';
        inputContainer.style.borderColor = 'red';
        paragraph.textContent = mensaje;
        paragraph.classList.add('ms-error');
        limpiarAlerta(boxInput);
        boxInput.insertBefore(paragraph, inputContainer.nextElementSibling);
    } else {
        icon.style.display = 'none';
        limpiarAlerta(boxInput);
        inputContainer.style.borderColor = '';
    }

}

function limpiarAlerta(referencia) {
    const alerta = referencia.querySelector('.ms-error');
    if (alerta) {
        alerta.remove();
    }
}

function validarEmail(email) {
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    return regex.test(email);
}