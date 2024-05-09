const toRegister = (event) => {
    event.preventDefault();
    formValidation ();
}

//escucha evento del envío formulario.
document.getElementById('form').addEventListener('submit', toRegister) 

// Validación del formulario
function formValidation () {
    const textFields = document.querySelectorAll('input[type="text"]');
    textsValidation (textFields);
    console.log('formValidation')
}

//Función para mostrar errores.
function showError (element, msj) {
    element.textContent = msj;
    element.style.display = "block";
}

//Función para ocultar errores.
/*function showError (element) {
    element.textContent = ''
}*/

// Validación de los campos de texto
function textsValidation (textFields){
    let validation = true;
    console.log('textsValidation')
    textFields.forEach(element => {
        //obtengo el id del div donde se muestra error.
        let errorField = document.getElementById('error' + 
            element.id.charAt(0).toUpperCase() + element.id.slice(1));

        if (element.value.length == ''){
            showError(errorField, "Este campo es requerido");
            validation = false;
        } else if (element.value.length < 3){
            showError(errorField, "Debe contener mínimo 3 caracteres");
            validation = false;
        } else {
            showError(errorField, "");
        }
        
    });

}