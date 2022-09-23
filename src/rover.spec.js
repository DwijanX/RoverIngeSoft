import Rover from "./rover.js";

describe("Rover Test", () => {
  let rover;
  beforeEach(()=>{
    rover=new Rover()
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
});