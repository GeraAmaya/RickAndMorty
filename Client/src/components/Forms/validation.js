const validator = (data) => {
let errors = {}

if(!data.email.includes('@')){
    errors.e1 = 'Ingrese un email válido'
}

if(!data.email){
    errors.e2 = 'Ingrese un email'
}

if(data.email.length > 35){
    errors.e3 = 'El email es demasido largo'
}

if(!/\d/.test(data.password)){
    errors.p1 = 'Ingresa al menos un número'
}

if(data.password.length < 6 || data.password.length > 10){
    errors.p2 = 'Tu contraseña deberia tener mas 6 caracteres y menos de 10'
}
return errors;

}


export default validator;