/*
4- Escribe una clase Producto para crear objetos.
 Estos objetos, deben presentar
las propiedades código, nombre y precio,
 además del método imprime datos, el
cual escribe por pantalla los valores
 de sus propiedades.
Posteriormente, cree tres instancias de este objeto
 y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por
 pantalla los valores
de los tres objetos instanciados.
*/

class Producto {
    #codigo;
    #precio;
    constructor(codigo, nombre, precio) {
      this.#codigo = codigo;
      this._nombre = nombre;
      this.#precio = precio;
    }
    get codigo() {
      return this.#codigo;
    }
    set codigo(nuevoCodigo) {
      if(nuevoCodigo.length > 0){
          this.#codigo = nuevoCodigo;    }
      
    }
    get nombre() {
      return this._nombre;
    }
    set nombre(nuevoNombre) {
      if(nuevoNombre.length > 0){
          this._nombre = nuevoNombre;
      }
    }
    get precio() {
      return this.#precio;
    }
    set precio(nuevoPrecio) {
      if (nuevoPrecio >= 0 && !isNaN(nuevoPrecio)) {
        this.#precio = nuevoPrecio;
      }
    }
    verProducto() {
      return `Código: ${this.codigo} - Nombre del Producto: ${this.nombre} - Precio: $${this.precio}`;
    }
    verProductoComoLista() {
      document.write('<ul">');
      document.write(`<li>Código del producto: ${this.codigo}</li>`);
      document.write(`<li>Nombre del producto: ${this.nombre}</li>`);
      document.write(`<li>Precio del producto: $${this.precio}</li>`);
      document.write("</ul>");
      document.write('<br>');
    }
  }
  const producto1 = new Producto('0546302485029','Pepsi 2L',1600);
  const producto2 = new Producto('7695687879883','Monster 473ml',2000);
  const producto3 = new Producto('4599028714294','Coca cola 1,5L',1800);
  producto1.verProductoComoLista()
  producto2.verProductoComoLista()
  producto3.verProductoComoLista()
  

