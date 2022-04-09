const gamePlane ={
 canvas : document.createElement("canvas"),
 init(){
     this.canvas.width = 500;
     this.canvas.height = 250;
     this.context = this.canvas.getContext("2d");
     document.body.append(this.canvas);

     window.addEventListener("keydown", e=> {
         player.changePos(e.key)
     })
     window.addEventListener("keyup", e => {
         player.changePos(e.key)
     })
 },
 update(){
 this.context.clearRect( 0, 0, this.canvas.width, this.canvas.height);
 //player.y++;
 player.update();
 for(const o of obstacles){
     o.update();
     //usuwanie przeszkody
     if(o.x <= 0 - o.w){
         //obstacles.shift();
        // console.log(obstacles)
        o.x = 470;
     }
 }
 

},
interval : setInterval(()=>{
    console.log("Interval");
    gamePlane.update();
},50)

}

gamePlane.init()



const player = new Player(50, 150, 50, 50);
const obstacles = [new Rock(250,150,50,50)];

