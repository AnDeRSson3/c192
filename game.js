AFRAME.registerComponent("game",{
    schema:{
        gameState:{type:"string", default:"play"} //play + game over
    },
    init:function (){
        var duration = 300
        var timerEl= document.querySelector("#timer");
        this.startTimer(duration, timerEl);
    },

    startTimer:function (duration, timerEl){
        var fuel;

        setInterval(()=>{
            if (duration >= 0){
                this.data.gameState="play";
                fuel= parseInt(duration);

                timerEl.setAttribute("text",{
                    value: "Remaining Fuel: "+ fuel
                });
                duration -= 1;

            }
            else {
                this.data.gameState="over"
                var cameraRig = document.querySelector("#camera-rig")
                cameraRig.setAttribute("velocity", {x:0, y:0, z:0})
                var over = document.querySelector("#over")
                over.setAttribute("visible", true)
                var planeSpeed = document.querySelector("#speed")
                planeSpeed.setAttribute("#text", {value:0})
            }
        }, 100)
    }
})

AFRAME.registerComponent("camera-rotation-reader", {
    schema: {
      speedOfRotation: { type: "number", default: 0 },
      speedOfAscent: { type: "number", default: 0 }
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
  
        //get the data from the attributes
        this.data.speedOfRotation = this.el.getAttribute("rotation");      
        this.data.speedOfAscent = this.el.getAttribute("position");
  
        var cameraRotation = this.data.speedOfRotation;      
        var cameraPosition = this.data.speedOfAscent;
  
        //control the attributes with the Arrow Keys
        if (e.key === "ArrowRight") {
          if (cameraRotation.z < 5) {
            cameraRotation.z += 0.5;
            this.el.setAttribute("rotation", cameraRotation);
          }
        }
        if (e.key === "ArrowLeft") {
          if (cameraRotation.z > -5) {
            cameraRotation.z -= 0.5;
            this.el.setAttribute("rotation", cameraRotation);
          }
        }
        if (e.key === "ArrowUp") {
              cameraPosition.y += 0.01;
              this.el.setAttribute("position", cameraPosition);
            
          }
        if (e.key === "ArrowDown") {
            cameraPosition.y -= 0.01;
            this.el.setAttribute("position", cameraPosition);
        }
        
      });
    }
  });
  