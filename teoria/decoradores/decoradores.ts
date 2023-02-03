function Saludar(target: Function):void{
  target.prototype.saludos = function():void{
    console.log('Hola desde decoradores')
  }
}


@Saludar
class Hola{
  constructor(){}
}

