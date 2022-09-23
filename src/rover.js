class Rover{
    constructor(max){
      this.posX=0;
      this.posY=0;
      this.directionIndex=0;
      this.directionsArray=["N","E","S","O"];
    }
    getPositionString()
    {
      let ansStr=""
      ansStr+=this.posX+","+this.posY+this.directionsArray[this.directionIndex]
      return ansStr
    }
    recieveInstructions(instruction)
    {
        for(let i=0;i<instruction.length;i++)
        {
            if(instruction[i]=="A")
            {
                this.moveBasedOnDirection()
            }
        }
        return this.getPositionString()
    }
    moveBasedOnDirection()
    {
      let direction=this.directionsArray[this.directionIndex]
      if(direction=="N")
      {
        this.posY+=1
      }
    }
  }
  export default Rover;