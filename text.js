

PIXI.utils.sayHello();
console.log('yes');
var renderer=PIXI.autoDetectRenderer(512,512,{
    transparent:true,
    resolution:1
})
document.getElementById("display").appendChild(renderer.view);

var stage= new PIXI.Container();

PIXI.loader.add("spritesheet","man.png").load(setup);

function setup(){
    stage.interactive=true;
    var rect =new PIXI.Rectangle(0,0,100,150);
    var texture=PIXI.loader.resources["spritesheet"].texture;
    texture.frame=rect;

    sprite=new PIXI.Sprite(texture);
    var idle=setInterval(function(){
        if(rect.x>=100*6) rect.x=0;
        sprite.texture,frame=rect;
        rect.x+=64;
    },500);

    sprite.scale.set(2,2);
    sprite.vx=3;
    stage.addChild(sprite);
    animationLoop();
}

function animationLoop(){
    requestAnimationFrame(animationLoop);
    renderer.render(stage);
}
window.addEventListener("keydown",function (event){
    event.preventDefault();
    sprite.x+=sprite.vx;
});


// // container object for first demo.
// let DEMO1 = {};

// // Initialize automated PIXI garbage collection.
// PIXI.GC_MODES.DEFAULT = PIXI.GC_MODES.AUTO;

// // Set-up our renderer view.
// DEMO1.PIXI_APPLICATION = new PIXI.Application();
// DEMO1.PIXI_APPLICATION.renderer = PIXI.autoDetectRenderer(
//     300,
//     300,
//     {
//         antialias: true,
//         transparent: false,
//         resolution: 1,
//         autoResize: true
//     }
// );
// DEMO1.PIXI_APPLICATION.renderer.view.style.border = "1px dashed black";
// DEMO1.PIXI_APPLICATION.renderer.backgroundColor = 0x000000;
// DEMO1.PIXI_APPLICATION.renderer.view.style.position = "static";
// DEMO1.PIXI_APPLICATION.renderer.view.style.display = "block";
// let DEMO1_DIV = document.getElementById("DEMO1_DIV");
// DEMO1_DIV.appendChild(DEMO1.PIXI_APPLICATION.view);

// // Create temporary array to store all 'frame objects'.
// let Temp_FrameSet = [];

// // Temp var for total number of frames
// let maxFrames = 10;

// // Iterates from 1 to 10.
// // Take note of variable 'i' and 'maxFrames'
// for (let i = 1; i <= maxFrames; i++){

//     // Temporary 'frame object' now created.
//     // 1.) Its texture is directly loaded from an Image.
//     //      - our sprite model is a cowgirl,
//     //      - with an 'Idle' animation where she just stands comfortably.
//     // 2.) Take note of the 'time' property,
//     //      - it is length in milliseconds of how long to display the frame.
//     //      - we use 50ms, but you can experiment with higher/lower values.
//     Temp_Frame = {
//         texture: PIXI.Texture.fromImage(`./game_assets/cowgirl/Idle (${i}).png`),
//         time: 50
//     };

//     // Temporary 'frame object' now pushed to the Array.
//     Temp_FrameSet.push(Temp_Frame);
// }

// // Create a temporary sprite.
// let TempSprite = new PIXI.extras.AnimatedSprite(Temp_FrameSet);

// // Start its animation!
// TempSprite.play();

// // Scale it down to fit the 300 x 300 stage (lol)
// TempSprite.scale.set(0.5, 0.5);

// // Finally, add her to our stage!
// DEMO1.PIXI_APPLICATION.stage.addChild(TempSprite);