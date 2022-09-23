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
});