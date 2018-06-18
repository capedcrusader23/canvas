console.log('It is running');
var canvas=document.querySelector('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var c=canvas.getContext('2d');
var mouse={
  x:undefined,
  y:undefined
}
window.addEventListener('mousemove',function(event) {
  mouse.x=event.x;
  mouse.y=event.y;
});
window.addEventListener('resize',function(event){
  canvas.width=innerWidth;
  canvas.height=innerHeight;
  change();
})

function change(){
  circ=[];
  for(var i=0;i<150;i++)
  {
  var x= Math.random()*(innerWidth-60)+30;
  var y=Math.random()*(innerHeight-60)+30;
  var dx=2*(Math.random())
  var dy=2*(Math.random());
  var rad=60*(Math.random());
    circ.push(new circle(x,y,dx,dy,rad));
  }
}
var color=['#ff3333','#ff00ff','goldenrod','#710AC1','#21EB0D']
function circle(x,a,y,dy,rad){
  this.x=x;
  this.a=a;
  this.y=y;
  this.dy=dy;
  this.rad=rad;
  this.co=color[Math.floor(Math.random()*color.length)];
  this.draw=function(){

    c.beginPath();
    c.arc(this.x,this.a,this.rad,0,Math.PI*2,false)
    c.strokeStyle="blue";
    c.fillStyle=this.co;
    c.stroke();
    c.fill();
  };
  this.update=function(){

    this.x=this.x+this.y;
    this.a=this.a+this.dy;

  if(this.x+this.rad>innerWidth||this.x-this.rad<0)
  {
    this.y=-this.y
  }
  if(this.a+this.rad>innerHeight||this.a-this.rad<0)
  {
    this.dy=-this.dy;
  }

  if(mouse.x-this.x<50&&mouse.x-this.x>-50&&this.rad<50&&mouse.y-this.a>-50&&mouse.y-this.a<50)
  {
    this.rad=this.rad+1;
  }
  else if(this.rad>2) {
    this.rad=this.rad-1;
  }



  this.draw()
  }

}

var circ=[];
for(var i=0;i<150;i++)
{
var x= Math.random()*(innerWidth-60)+30;
var y=Math.random()*(innerHeight-60)+30;
var dx=2*(Math.random())
var dy=2*(Math.random());
var rad=60*(Math.random());
  circ.push(new circle(x,y,dx,dy,rad));
}

function animate()
{
 requestAnimationFrame(animate)
  c.clearRect(0 , 0 ,innerWidth,innerHeight);
  for(var i=0;i<150;i++)
  {
    circ[i].update();
  }
}
animate();
