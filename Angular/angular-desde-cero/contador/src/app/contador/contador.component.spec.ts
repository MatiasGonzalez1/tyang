import { ContadorComponent } from "./contador.component"

describe('ContadorComponent', ()=>{

  it('Valor inicial del contador es 0', ()=>{
    
    const counter = new ContadorComponent()
    expect(counter.count).toBe(0)
  })

})