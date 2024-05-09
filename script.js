const toRegister = (event) => {
    event.preventDefault();
    if(formValidation ()){
        alert('Los datos enviados fueron: \n' +
        'Nombre: ' + document.getElementById('Firstname').value + '\n'+
        'Apellido: ' + document.getElementById('Lastname').value + '\n'+
        'Documento: ' + document.getElementById('Document').value + '\n'+
        'Email: ' + document.getElementById('Email').value + '\n'+
        'Edad: ' + document.getElementById('Age').value + '\n'+
        'Actividad: ' + document.getElementById('Activity').value + '\n'+
        'Nivel de Estudio: ' + document.getElementById('Education').value + '\n'
    )

    }
}

//escucha evento del envío formulario.
document.getElementById('form').addEventListener('submit', toRegister) 

// Validación del formulario
function formValidation () {
    const textFields = document.querySelectorAll('input[type="text"]');
    textsValidation (textFields);

    const email = document.getElementById('Email');
    emailValidation (email);

    const age = document.getElementById('Age');
    ageValidation (age);

    const activity = document.getElementById('Activity');
    activityValidation (activity);

    const education = document.getElementById('Education');
    educationValidation (education);

    const term = document.getElementById('acceptTerms');
    aceptTermsValidation (term);

    return textsValidation (textFields) && 
    emailValidation (email) &&
    ageValidation (age) &&
    activityValidation (activity)&&
    educationValidation (education)&&
    educationValidation (term);

}

//Función para mostrar errores.
function showError (element, msj) {
    element.textContent = msj;
    element.style.display = "block";
}

// Validación de los campos de texto
function textsValidation (textFields){
    let validation = true;

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

    return validation;
}

// Validación del email
function emailValidation (email){
    let validation = true;

    let errorEmail = document.getElementById('errorEmail');

    if (email.value.length == ''){
        showError(errorEmail,'Este campo es requerido');
        validation = false;
    }    
    else if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        showError(errorEmail,'');
    }
    else{
        showError(errorEmail,'Formato de email no válido');
        validation = false;
    }

    return validation;
}

// Validación de la edad
function ageValidation (age){
    let validation = true;

    let errorAge = document.getElementById('errorAge');

    if (age.value.length == '' || age.value<0 ){
        showError(errorAge,'Este campo es requerido');
        validation = false;
    }    
    else if(age.value<18) {
        showError(errorAge,'No puedes registrarte siendo menor');
        validation = false;
    }
    else{
        showError(errorAge,'');
    }

    return validation;
}

// Validación de la actividad
function activityValidation (activity){
    let validation = true;

    let errorActivity = document.getElementById('errorActivity');

    if (activity.value == '' ){
        showError(errorActivity,'Seleccione una actividad');
        validation = false;
    }    
    else{
        showError(errorActivity,'');
    }

    return validation;
}

// Validación de la educacion
function educationValidation (education){
    let validation = true;

    let errorEducation = document.getElementById('errorEducation');

    if (education.value == '' ){
        showError(errorEducation,'Seleccione su nivel de educación');
        validation = false;
    }    
    else{
        showError(errorEducation,'');
    }

    return validation;
}

// Validación de la educacion
function aceptTermsValidation (terms){
    let validation = true;

    let errorTerms = document.getElementById('errorAcceptTerms');

    if (!terms.checked){
        showError(errorTerms,'Debes aceptar terminos y condiciones');
        validation = false;
    } else {
        showError(errorTerms,'');
    }

    return validation;
}