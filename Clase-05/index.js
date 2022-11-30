/* let nombre = "Homero";
let edad   = 39;
let calle  = "Av. Siempreviva 742";
// Los variables anteriores entran relacionados entre sí, entonces mejor usamos un objeto literal
const persona1 = { nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742" } */

/* function promediar (num1, num2, num3, num4) {
    let promedio = (num1 + num2 + num3 + num4)/4;
    let mensaje = `El promedio de envios de la gente que entro a la web es de: ${promedio}`;
    alert (mensaje);
}

let num1 = parseInt (prompt("Ingrese Nro de Envíos"));
if (num1 < 350) {
    alert("Hola, nos encanta que te quieras unir a nuestra propuesta tecnologica de logistica de punta a punta, para acompañar tu crecimiento, coméntanos tu proyección de crecimiento")
}else{
    alert("Nos encanta que seas un emprendedor en proceso de crecimiento, recomendamos nuestro servicio de envío uúnico vía nuestra plataforma de cliente, visítala aquí https://zelda.chazki.com/")
}
let num2 = parseInt (prompt("Ingrese Nro de Envíos"));
if (num1 < 700) {
    alert("Hola, tenemos la propuesta tecnologica de logistica de punta a punta, para acompañar tu crecimiento, coméntanos tu disponibilidad para agendar una cita")
}else{
    alert("Nos encanta que seas un emprendedor en proceso de crecimiento, recomendamos nuestro servicio de envío uúnico vía nuestra plataforma de cliente, visítala aquí https://zelda.chazki.com/")
}
let num3 = parseInt (prompt("Ingrese Nro de Envíos"));
if (num1 < 1500) {
    alert("Hola, nos encanta que te quieras unir a nuestra propuesta tecnologica de logistica de punta a punta, para acompañar tu crecimiento, coméntanos tu disponibilidad para reunirnos con un ejecutivo y nuestro equipo TECH")
}else{
    alert("Nos encanta que seas un emprendedor en proceso de crecimiento, recomendamos nuestro servicio de envío uúnico vía nuestra plataforma de cliente, visítala aquí https://zelda.chazki.com/")
}
let num4 = parseInt (prompt("Ingrese Nro de Envíos"));
if (num1 > 2000) {
    alert("Hola, nos encanta que te quieras unir a nuestra propuesta tecnologica de logistica de punta a punta, para acompañar tu crecimiento, coméntanos tu disponibilidad para reunirnos con un ejecutivo y nuestro equipo TECH")
}else{
    alert("Nos encanta que seas un emprendedor en proceso de crecimiento, recomendamos nuestro servicio de envío uúnico vía nuestra plataforma de cliente, visítala aquí https://zelda.chazki.com/")
}
promediar (num1, num2, num3, num4);
alert ("Tus datos fueron completados, estaremos en contacto ;)");

For(let i = 1; i<2;i){
    Let numedad = praseint(prompt("ingrese su edad"));
     If(numedad <= 18){
          Alert("continuar encuentra");
           I =2;
} Else {
           Alert("llamé a un adulto")
            I=1;
}; */

let resultado = 0
let servicio1 = Number(prompt("Indicar el Nro de envíos que tendría por mes: 1:350, 2:700, 3:1500, 4:2000, 5:Terminar"));

for (let i = 1; i<5; i++){
    switch(servicio1) {
        case servicio1 = 1:
        resultado = resultado + 349;
            alert(`Producto ${i} ingresado`);
            break;
        case servicio1 = 2:
        resultado = resultado + 351;
                alert(`Producto ${i} ingresado`);
                break;
        case servicio1 = 3:
        resultado = resultado + 700;
                alert(`Producto ${i} ingresado`);
                break;
        case servicio1 = 4:
        resultado = resultado + 700;
                alert(`Producto ${i} ingresado`);
                break;
        case servicio1 = 5:
                alert(`Su demanda de Nro de Envios es de ${resultado}`);
                i = i+5;
                break;
            default:
                alert("Opción incorrecta")
                break;
        }
        let servicio1 = Number(prompt("Seleccione el Nro de envíos que tendría por mes: 1:< 350, 2:< 700, 3:< 1500, 4:> 2000, 5:Terminar"));
}   
alert (`Total número de envíos a gestionar será de: $${resultado}`);