// Registering component in Target.js

AFRAME.registerComponent("target-ring", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        var id = `ring${i}`;
  
        //position variables     
        var posX =(Math.random() * 30 + (-10));      
        var posY = (Math.random() * 10 + (-1));
        var posZ = (Math.random() * 20 + -10);
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.createRings(id, position);
      }
    } ,
  
    createRings: function(id, position) { 
      
      var terrainEl = document.querySelector("#ground");
  
      var ringEl = document.createElement("a-entity");
  
      ringEl.setAttribute("id",id);
      ringEl.setAttribute("position",position);
      ringEl.setAttribute("material","color","#ff9100");
      ringEl.setAttribute("geometry", "primitive: torus; radius: .8; radiusTubular: 0.01;");   

      terrainEl.appendChild(ringEl);
    }
  });
  
  