class Rover{
    constructor(max){
      this.posX=0;
      this.posY=0;
      this.directionIndex=0;
      this.directionsArray=["N","E","S","W"];
      this.max=max
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
            else
            {
                this.TurnDirection(instruction[i])
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
        if(this.posY>this.max)
            this.posY=this.max
      }
      if(direction=="E")
      {
        this.posX+=1
        if(this.posX>this.max)
            this.posX=this.max
      }
      if(direction=="S")
      {
        this.posY-=1
        if(this.posY<0)
            this.posY=0
      }
      if(direction=="W")
      {
        this.posX-=1
        if(this.posX<0)
            this.posX=0
      }
    }
    TurnDirection(Dir)
    {
        if(Dir=="D")
        {
            this.directionIndex+=1
            if(this.directionIndex>3)
                this.directionIndex=0
        }
        if(Dir=="I")
        {
            this.directionIndex-=1
            if(this.directionIndex<0)
                this.directionIndex=3
        }
    }
  }
  export default Rover;