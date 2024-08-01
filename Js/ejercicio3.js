/*
3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las
propiedades de alto y ancho, mas los métodos necesarios para modificar y
mostrar sus propiedades, calcular el perímetro y el área
*/
class Rectangulo {
    #ancho
    #alto
    constructor(ancho, alto) {
      this.#ancho = ancho;
      this.#alto = alto;
    }
    get ancho() {
      return this.#ancho;
    }
    set ancho(nuevoAncho) {
      if (nuevoAncho > 0  && !isNaN(nuevoAncho)) {
        this.#ancho = nuevoAncho;
      }
    }
    get alto() {
      return this.#alto;
    }
    set alto(nuevoAlto) {
      if (nuevoAlto > 0 && !isNaN(nuevoAlto)) {
        this.#alto = nuevoAlto;
      }
    }
    modificarAncho() {
      this.ancho = parseInt(prompt(`Ingrese el ancho del rectángulo:`));
    }
    modificarAlto() {
      this.alto = parseInt(prompt(`Ingrese el alto del rectángulo:`));
    }
    calcularPerimetro() {
      return 2 * (this.alto + this.alto);
    }
    calcularArea() {
      return this.alto * this.ancho;
    }
    mostrarPropiedades() {
      document.write('<ul>');
      document.write(`<li>Ancho del rectángulo: ${this.ancho}</li>`);
      document.write(`<li>Alto del rectángulo: ${this.alto}</li>`);
      document.write("</ul>");
    }
  }
  let rectangulo1 = new Rectangulo(0,0);
  document.write('<h5>Propiedades iniciales del objeto "rectangulo1" creado a partir de la clase "Rectangulo":</h5>');
  rectangulo1.mostrarPropiedades()
  document.write('<h5>Uso de los métodos del objeto "rectangulo1": </h5>');
  rectangulo1.modificarAlto();
  rectangulo1.modificarAncho();
  rectangulo1.mostrarPropiedades()
  document.write(`<p>El perímetro del rectángulo es: ${rectangulo1.calcularArea()}</p>`);
  document.write(`<p>El área del rectángulo es: ${rectangulo1.calcularPerimetro()}</p>`);