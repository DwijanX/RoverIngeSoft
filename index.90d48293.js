var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},n=e.parcelRequirec771;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in i){var n=i[e];delete i[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},e.parcelRequirec771=n),n.register("hiWEq",(function(e,t){function i(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var n=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.posX=0,this.posY=0,this.directionIndex=0,this.directionsArray=["N","E","S","W"],this.max=t}var t,n,r;return t=e,(n=[{key:"getPositionString",value:function(){var e="";return e+=this.posX+","+this.posY+this.directionsArray[this.directionIndex]}},{key:"recieveInstructions",value:function(e){for(var t=0;t<e.length;t++)"A"==e[t]?this.moveBasedOnDirection():this.TurnDirection(e[t]);return this.getPositionString()}},{key:"moveBasedOnDirection",value:function(){var e=this.directionsArray[this.directionIndex];"N"==e&&(this.posY+=1,this.posY>this.max&&(this.posY=this.max)),"E"==e&&(this.posX+=1,this.posX>this.max&&(this.posX=this.max)),"S"==e&&(this.posY-=1,this.posY<0&&(this.posY=0)),"W"==e&&(this.posX-=1,this.posX<0&&(this.posX=0))}},{key:"TurnDirection",value:function(e){"D"==e&&(this.directionIndex+=1,this.directionIndex>3&&(this.directionIndex=0)),"I"==e&&(this.directionIndex-=1,this.directionIndex<0&&(this.directionIndex=3))}}])&&i(t.prototype,n),r&&i(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();e.exports.default=n}));var r,o=(r=n("hiWEq"))&&r.__esModule?r:{default:r};var s=document.querySelector("#RoverInstructions"),a=document.querySelector("#instructions-form"),u=document.querySelector("#resultado-div");a.addEventListener("submit",(function(e){e.preventDefault();var t=new o.default(10);u.innerHTML="<p>"+t.recieveInstructions(s.value)+"</p>"}));
//# sourceMappingURL=index.90d48293.js.map