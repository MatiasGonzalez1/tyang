
const despedida = function(despedida:string):string{
  return despedida
}

console.log(despedida('Chau'))

const salto = (posX:number):number=>{
  return posX=300;
}

let numero: number[] = [1,2,3,4]
//definir array
let nombres: string[] = ['1','2','2']
 //otra forma
let coleccionNumeros: Array<number> = [1,2,3,4]

let coleccionNumeros1: Array<string> = ['1', '2']

//tuplas muchos tipos dentro de un array
//debe ser exactamente el tipo de datos que se está enviando
let tupla: [number, string, boolean] = [1,'2', true]

//funciones

function mostrar():void{
  console.log('Funcion 1')
}

const mostrar2 = ():void =>{
  console.log('Funcion2')
}

mostrar()
mostrar2()