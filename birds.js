AFRAME.registerComponent("flying-birds", {
    init:function(){
        for (var i=1; i<=20; i++){
            var id=`hurdle${i}`
            var posX=(Math.random() * 30 + (-10));      
            var posY = (Math.random() * 10 + -1);
            var posZ = (Math.random() * 30 + - 10);

            var position = {x:posX, y:posY, z:posZ}
            this.flyingBirds(id, position)
        }
    },
    flyingBirds:(id, position)=>{
        var terrainEl= document.querySelector("#ground")
        var birdE1= document.createElement("a-entity")
        birdE1.setAttribute("id", id)
        birdE1.setAttribute("position", position)
        birdE1.setAttribute("scale", {x:.1, y:.1, z:.1})
        birdE1.setAttribute("gltf-model", "./assets/animated_bird/scene.gltf")
        birdE1.setAttribute("animation-mixer", {})
        terrainEl.appendChild(birdE1)
        
    }
})