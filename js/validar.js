const exRegMail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const exRegName = /^[a-z]{0,11}(?: [a-z]{0,11})*$/i;
const exRegTel = /^[1-9][0-9]{9}$/;

function validar() {
    limpiarMensajes();
    const name = document.getElementById('nombre');
    const email = document.getElementById('email');
    const tel = document.getElementById('tel');
    const con = document.getElementById('consulta');
    name.removeAttribute('class');
    tel.removeAttribute('class');
    email.removeAttribute('class');
    con.removeAttribute('class');
    const lista = document.getElementById('list');
    const errores = [];
    const exitos = [];
    let errorFlag = true;
    let item;
    let title = document.createElement('h2');

    /*NOMBRE*/ 
    if (name.value=="") {
        errores.push("El nombre es un campo obligatorio.");
        errorFlag = false;
        name.className = 'incorrecto';
    }
    if (!exRegName.test(name.value)) {
        errores.push("El nombre no puede contener símbolos ni números.");
        errores.push("El nombre no puede tener palabras que excedan los 11 caracteres.");
        errorFlag = false;
        name.className = 'incorrecto';
    }
    if (errorFlag==true) {
        exitos.push(`Consulta enviada por ${name.value.toUpperCase()}.`);
    }
    /*NOMBRE*/ 
    
    /*EMAIL*/
    if (email.value=="") {
        errores.push("El correo es un campo obligatorio.");
        errorFlag = false;
        email.className = 'incorrecto';
    }
    if (!exRegMail.test(email.value)) {
        errores.push("El correo debe contener un formato válido (***@***.***).");
        errorFlag = false;
        email.className = 'incorrecto';
    }
    if (errorFlag==true) {
        exitos.push(`Con el siguiente mail: ${email.value.toUpperCase()}`);        
    }
    /*EMAIL*/
    
    /*TELEFONO*/
    if (!exRegTel.test(tel.value) && !tel.value=="") {
        errores.push("El teléfono debe contener 10 números, sin guiones ni separaciones.");
        errores.push("El teléfono no puede comenzar en 0.");
        errorFlag = false;
        tel.className = 'incorrecto';
    }
    if(errorFlag==true && tel.value){
        exitos.push(`Y el siguiente teléfono: ${tel.value}`);
    }
    /*TELEFONO*/
    
    /*CONSULTA*/
    if (con.value == "") {
        errores.push("La consulta es un campo obligatorio.")
        errorFlag = false;
        con.className = 'incorrecto';
    }
    if (errorFlag==true) {
        exitos.push(`CONSULTA: ${con.value}`);
    }
    /*CONSULTA*/
    
    title.className = 'control';
    if (errorFlag==false) {
        title.textContent = "ERROR";
        title.style.color = 'red';
        lista.appendChild(title);
        for (let i = 0; i < errores.length; i++) {
            item = document.createElement('li');
            item.textContent = errores[i];
            item.className = 'control';
            item.style.color = 'red';
            lista.appendChild(item);
        }
    }else {
        title.textContent = "ÉXITO";
        lista.appendChild(title);
        for (let i = 0; i < exitos.length; i++) {
            item = document.createElement('li');
            item.textContent = exitos[i];
            item.className = 'control';
            lista.appendChild(item);
        }        
    }

    return false;
}
function limpiarMensajes() {
    document.querySelectorAll('.control').forEach(element => element.remove());
}