/*
5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura,
año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué
generación pertenece la persona creada y cual es el rasgo característico de esta
generación
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la
persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.
*/
class Persona {
  #nombre;
  #edad;
  #dni;
  #sexo;
  _peso;
  _altura;
  #anioNacimiento;
  constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento) {
    this.#nombre = nombre;
    this.#edad = edad;
    this.#dni = dni;
    this.#sexo = sexo;
    this._peso = peso;
    this._altura = altura;
    this.#anioNacimiento = anioNacimiento;
  }
  get nombre() {
    return this.#nombre;
  }
  set nombre(nuevoNombre) {
    if (nuevoNombre.length > 0) {
      this.#nombre = nuevoNombre;
    }
  }
  get edad() {
    return this.#edad;
  }
  set edad(nuevaEdad) {
    if (nuevaEdad > 0 && !isNaN(nuevaEdad)) {
      this.#edad = nuevaEdad;
    }
  }
  get dni() {
    return this.#dni;
  }
  set dni(nuevoDni) {
    if (nuevoDni > 0 && !isNaN(nuevoDni)) {
      this.#dni = nuevoDni;
    }
  }
  get sexo() {
    return this.#sexo;
  }
  set sexo(nuevoSexo) {
    if (nuevoSexo === "H" && nuevoSexo === "M") {
      this.#sexo = nuevoSexo;
    }
  }
  get peso() {
    return this._peso;
  }
  set peso(nuevoPeso) {
    if (nuevoPeso > 0) {
      this._peso = nuevoPeso;
    }
  }
  get altura() {
    return this._altura;
  }
  set altura(nuevaAltura) {
    if (nuevaAltura > 0) {
      this._altura = nuevaAltura;
    }
  }
  get anioNacimiento() {
    return this.#anioNacimiento;
  }
  set anioNacimiento(nuevoAnioNacimiento) {
    if (nuevoAnioNacimiento > 0) {
      this.#anioNacimiento = nuevoAnioNacimiento;
    }
  }
  mostrarGeneracion() {
    if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
      return `${this.nombre} pertenece a la "Generación Z" cuyo rasgo es la "Irreverencia"`;
    } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
      return `${this.nombre} pertenece a la "Generación Y" cuyo rasgo es la "Frustración"`;
    } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
      return `${this.nombre} pertenece a la "Generación X" cuyo rasgo es la "Obsesión por el éxito"`;
    } else if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
      return `${this.nombre} pertenece a la "Baby Boom" cuyo rasgo es la "Ambición"`;
    } else if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
      return `${this.nombre} pertenece a la "Silent Generation" cuyo rasgo es la "Austeridad"`;
    }
  }
  esMayorDeEdad() {
    return this.edad >= 18
      ? `${this.nombre} es mayor de edad`
      : `${this.nombre} es menor de edad`;
  }

  mostrarDatos() {
    document.write("<ul>");
    document.write(`<li>Nombre: ${this.nombre}</li>`);
    document.write(`<li>Edad: ${this.edad} años</li>`);
    document.write(`<li>DNI: ${this.dni}</li>`);
    document.write(`<li>Sexo: ${this.sexo === "H" ? "Hombre" : "Mujer"}</li>`);
    document.write(`<li>Peso: ${this.peso} kilogramos</li>`);
    document.write(`<li>Altura: ${this.altura} metros</li>`);
    document.write(`<li>Año de nacimiento: ${this.anioNacimiento}</li>`);
    document.write("</ul>");
  }
  generaDNI() {
    let dniAleatorio = "";
    for (let i = 0; i < 8; i++) {
      let numeroAleatorio = Math.floor(Math.random() * 10);
      dniAleatorio += numeroAleatorio.toString();
    }
    this.dni = dniAleatorio;
  }
}
let persona1 = new Persona("Isaias", 22, "43648850", "H", 62, 1.78, 2001);

persona1.mostrarDatos();
document.write(persona1.mostrarGeneracion());
document.write(persona1.esMayorDeEdad());
persona1.generaDNI();
persona1.mostrarDatos();
