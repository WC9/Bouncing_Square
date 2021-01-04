var canvas;
var music;
var square, rd, gr, bl, ppl;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

   




    //create 4 different surfaces
    rd = createSprite(100,580,190,20);
    gr = createSprite(500,580,190,20);
    bl = createSprite(700,580,190,20);
    ppl = createSprite(300,580,190,20);

    rd.shapeColor = "red";
    gr.shapeColor = "green";
    bl.shapeColor = "blue";
    ppl.shapeColor = "purple";
    


    //create box sprite and give velocity
    square = createSprite(random(20,750),100,50,50);
    square.shapeColor="white";
    square.velocityX = random(5,10);
    square.velocityY = random(5,10);

}

function draw() {
    background(rgb(169,169,169));

    edges = createEdgeSprites();
    square.bounceOff(edges);
    //square.bounceOff(ppl);
    //square.bounceOff(gr);
    //square.bounceOff(bl);

    music.play();
    music.loop = true;

 







    //create edgeSprite
  


    //add condition to check if box touching surface and make it box
    if(square.isTouching(rd)){
        square.shapeColor="red";
        square.velocityX=0;
        square.velocityY=0;
        music.stop();
    }

    if(square.isTouching(ppl)&&square.bounceOff(ppl)){
        square.shapeColor="purple";
    }

    if(square.isTouching(gr)&&square.bounceOff(gr)){
        square.shapeColor="green";
    }

    if(square.isTouching(bl)&&square.bounceOff(bl)){
        square.shapeColor="blue";
    }







   




    
    





    drawSprites();
}




















