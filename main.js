const Usuarios = [
    {nombre: "Esteban", edad: 37},
    {nombre: "Alberto", edad: 67},
    {nombre: "Antonio", edad: 72},
    {nombre: "Jazmin", edad: 15},
    {nombre: "Stephanie", edad: 29},
    {nombre: "Melina", edad: 48},
];

for (let i = 0; i < Usuarios.length; i++) {
    const edad = Usuarios[i].edad;
    const nombre = Usuarios[i].nombre;

    if (edad >= 17 && edad <= 65) {
        alert(`${nombre} (Edad: ${edad}): Licencia por 5 años`);
    } else if (edad >= 66) {
        alert(`${nombre} (Edad: ${edad}): Licencia por 1 año`);
    } else {
        alert(`${nombre} (Edad: ${edad}): No pueden sacar la licencia`);
    } 
     
}
console.log (`Para generar mas usuarios ingrese nuevamente mediante Const=usuarios Muchas gracias!`);