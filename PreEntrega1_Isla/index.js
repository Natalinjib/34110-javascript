let resultado = 0
let servicio1 = Number(prompt("Indicar el Nro de envíos que tendría por mes: \n1.350, \n2.700, \n3.1500, \n4.2000, \n5.Terminar"));

for (let i = 1; i < 5; i++) {
        switch (servicio1) {
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
                        i = i + 5;
                        break;
                default:
                        alert("Opción incorrecta")
                        break;
        }
        servicio1 = Number(prompt("Seleccione el Nro de envíos que tendría por mes: \n1.350, \n2.700, \n3.1500, \n4.2000, \n5.Terminar"));
}
alert(`Total número de envíos a gestionar será de: $${resultado}`);