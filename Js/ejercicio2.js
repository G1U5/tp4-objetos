/*
2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
● Una propiedad titular con el valor "Alex".
● Una propiedad saldo, teniendo como valor inicial 0.
● Un método ingresar() que permita añadir dinero a la cuenta, pasando la
cantidad como parámetro
● Un método extraer() que permita retirar la cantidad pasada como
parámetro.
● Un método informar() que retorne la información del estado de la cuenta.
Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a
mostrar la descripción del estado de la cuenta.
*/
let cuenta = {
  titular: "Alex",
  saldo: 0,
  ingresar: function (cantidad) {
    this.saldo += cantidad;
  },
  extraer: function (cantidad) {
    this.saldo -= cantidad;
  },
  informar: function () {
    return `El saldo de la cuenta de ${this.titular} es : $${this.saldo}`;
  },
};

document.write(`<ul>`);
document.write(`<li>Titular de la cuenta: ${cuenta.titular}</li>`);
document.write(`<li>Saldo: ${cuenta.saldo}</li>`);
document.write("</ul>");
cuenta.ingresar(
  parseInt(
    prompt(
      `Ingrese la cantidad de dinero que desea en la cuenta de ${cuenta.titular}`
    )
  )
);
document.write(`<p>${cuenta.informar()}</p>`);
cuenta.extraer(
  parseInt(
    prompt(
      `Ingrese la cantidad de dinero que desea extraer de la cuenta de ${cuenta.titular}`
    )
  )
);
document.write(`<p>${cuenta.informar()}</p>`);
