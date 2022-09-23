import Rover from "./rover.js";

describe("Rover Test", () => {
  let rover;
  beforeEach(()=>{
    rover=new Rover()
  })
  it("Se envia una instruccion vacia al Rover", () => {
    expect(rover.recieveInstructions("")).toEqual("0,0N");
  });
  
});