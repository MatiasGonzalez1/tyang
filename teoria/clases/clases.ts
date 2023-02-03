class Persona{
  private nombre:string;

  constructor(nombre:string){
    this.nombre = nombre;
  }

  //metodo
  getNombre():string{
    return this.nombre;
  }
  
  //metodo statico
  static metodoEstatico():number{
    return 10;
  }
}

let persona1 = new Persona('Juan');
console.log(persona1.getNombre())
console.log(Persona.metodoEstatico())