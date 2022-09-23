import Rover from "./rover.js";

describe("Rover Test", () => {
  let rover;
  beforeEach(()=>{
    rover=new Rover(10)
  })
  it("Se envia una instruccion vacia al Rover", () => {
    expect(rover.recieveInstructions("")).toEqual("0,0N");
  });
  it("Se envia una instruccion de movimiento al rover", () => {
    expect(rover.recieveInstructions("A")).toEqual("0,1N");
  });
  it("Se envia varias instrucciones de movimiento al rover", () => {
    expect(rover.recieveInstructions("AAA")).toEqual("0,3N");
  });
  it("Se envia una instruccion de giro a la derecha al rover", () => {
    expect(rover.recieveInstructions("DDD")).toEqual("0,0W");
  });
  it("Se envia una instruccion de giro a la derecha al rover hasta volver a N", () => {
    expect(rover.recieveInstructions("DDDD")).toEqual("0,0N");
  });
  it("Se envia una instruccion de giro a la izquierda al rover", () => {
    expect(rover.recieveInstructions("I")).toEqual("0,0W");
  });
  it("Se envia una instruccion de giro a la izquierda al rover hasta volver a N", () => {
    expect(rover.recieveInstructions("IIII")).toEqual("0,0N");
  });
  it("Se envia de giro para avanzar al Este", () => {
    expect(rover.recieveInstructions("DA")).toEqual("1,0E");
  });
  it("Se prueba avanzar al sur", () => {
    expect(rover.recieveInstructions("AIIA")).toEqual("0,0S");
  });
  it("Se prueba avanzar al oeste", () => {
    expect(rover.recieveInstructions("DAIIA")).toEqual("0,0W");
  });
  it("Se trata de salir de la matriz por arriba", () => {
    expect(rover.recieveInstructions("AAAAAAAAAAAA")).toEqual("0,10N");
  });
});