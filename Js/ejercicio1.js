/*
1- Crea un objeto llamado auto que tenga algunas características como el color,
marca, modelo y si está encendido o apagado. Crea los métodos necesarios para
permitir encender y apagar el auto.
*/
let auto = {
  color: "Rojo",
  marca: "Renault",
  modelo: "Clio",

  encender: function () {
    this.encendido = true;
    return `El auto ${this.marca} ${this.modelo} está encendido 🚗`;
  },
  apagar: function () {
    this.encendido = false;
    return `El auto ${this.marca} ${this.modelo} está apagado 🚘`;
  },
};

document.write("<ul>");
document.write(`<li>Marca: ${auto.marca}</li>`);
document.write(`<li>Modelo: ${auto.modelo}</li>`);
document.write(`<li>Color: ${auto.color}</li>`);
document.write('</ul>');
document.write(`<p>${auto.encender()}</p>`);
document.write(`<p>${auto.apagar()}</p>`);
