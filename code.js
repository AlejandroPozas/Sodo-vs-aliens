var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["b0160d44-0da8-4393-b975-80c03ea7527c","4014907d-ad4c-4bbb-b1f8-56b728672ef7","90055f4f-2e86-4d1f-b9db-93419e6c05c8","32637f18-ef29-48f5-9ef0-08ee9b7ab757","81559b18-1c8a-4fe3-b5eb-42ff06b76063","d3ad693b-041f-409a-8145-ccd23db11582"],"propsByKey":{"b0160d44-0da8-4393-b975-80c03ea7527c":{"name":"BackGround","sourceUrl":"assets/api/v1/animation-library/gamelab/GTrVmut4s5PswM6hx254yCcDWLNhhmVk/category_backgrounds/bg_landscape21.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"GTrVmut4s5PswM6hx254yCcDWLNhhmVk","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/GTrVmut4s5PswM6hx254yCcDWLNhhmVk/category_backgrounds/bg_landscape21.png"},"4014907d-ad4c-4bbb-b1f8-56b728672ef7":{"name":"Astro","sourceUrl":"assets/api/v1/animation-library/gamelab/C07UkVmsjiLCWoQ9U_vl1e7INpeSMmE_/category_icons/astronaut.png","frameSize":{"x":328,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"C07UkVmsjiLCWoQ9U_vl1e7INpeSMmE_","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":328,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/C07UkVmsjiLCWoQ9U_vl1e7INpeSMmE_/category_icons/astronaut.png"},"90055f4f-2e86-4d1f-b9db-93419e6c05c8":{"name":"alien1","sourceUrl":"assets/api/v1/animation-library/gamelab/nVBK1OnWogFitvGAbWs4ey1tFRWCwaVl/category_fantasy/alien_01.png","frameSize":{"x":365,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"nVBK1OnWogFitvGAbWs4ey1tFRWCwaVl","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":365,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/nVBK1OnWogFitvGAbWs4ey1tFRWCwaVl/category_fantasy/alien_01.png"},"32637f18-ef29-48f5-9ef0-08ee9b7ab757":{"name":"alien2","sourceUrl":"assets/api/v1/animation-library/gamelab/Mz9t_vVZ_K7DL7e61UbY1ivgFlG0hkqh/category_fantasy/alien_04.png","frameSize":{"x":347,"y":392},"frameCount":1,"looping":true,"frameDelay":2,"version":"Mz9t_vVZ_K7DL7e61UbY1ivgFlG0hkqh","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":347,"y":392},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Mz9t_vVZ_K7DL7e61UbY1ivgFlG0hkqh/category_fantasy/alien_04.png"},"81559b18-1c8a-4fe3-b5eb-42ff06b76063":{"name":"ovni","sourceUrl":null,"frameSize":{"x":400,"y":242},"frameCount":1,"looping":true,"frameDelay":12,"version":"UJos_ke.3pD542hLJDM3PbdVpMiDMEgp","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":242},"rootRelativePath":"assets/81559b18-1c8a-4fe3-b5eb-42ff06b76063.png"},"d3ad693b-041f-409a-8145-ccd23db11582":{"name":"ship","sourceUrl":null,"frameSize":{"x":400,"y":242},"frameCount":1,"looping":true,"frameDelay":12,"version":"RT4oRDhcjWMkyeHrFwe7uzGSwyIZpxd1","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":242},"rootRelativePath":"assets/d3ad693b-041f-409a-8145-ccd23db11582.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var backGround = createSprite (200,200);
 backGround.setAnimation("BackGround");
 
var Astro = createSprite (50,360,20,20);
 Astro.shapeColor="aqua";

var alien1 = createSprite(200,250,10,10);
 alien1.shapeColor="aqua";

var alien2 = createSprite(200,150,10,10);
 alien2.shapeColor="aqua";

var ovni = createSprite(200,90,10,10);
 ovni.shapeColor="aqua";

var ship = createSprite(200,30,200,20);
ship.shapeColor="red";


var goal =0;
var death = 0;


Astro.setAnimation("Astro");
Astro.scale=.2;
alien1.setAnimation("alien1");
alien1.scale=.1;
alien2.setAnimation("alien2");
alien2.scale=.1;
ovni.setAnimation("ovni");
ovni.scale=.1;
ship.setAnimation("ship");
ship.scale=.2;

alien1.setVelocity(-10,0);
alien2.setVelocity(10,0);
ovni.setVelocity(-10,0);


function draw() {
 
 
 createEdgeSprites();
 
 
alien1.bounceOff(edges);
alien2.bounceOff(edges);
ovni.bounceOff(edges);
 
 
  if(keyDown(UP_ARROW)){
  Astro.y=Astro.y-3;
}

if(keyDown(DOWN_ARROW)){
  Astro.y=Astro.y+3;
}

if(keyDown(LEFT_ARROW)){
  Astro.x=Astro.x-3;
}

if(keyDown(RIGHT_ARROW)){
  Astro.x=Astro.x+3;
}


if(Astro.isTouching(alien1)|| Astro.isTouching(alien2)|| Astro.isTouching(ovni)){
  playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3");
  Astro.x=200;
  Astro.y=350;
  death = death+1;
}
if(Astro.isTouching(ship)){
  playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3");
  Astro.x=200;
  Astro.y=345;
  goal=goal+1;
}


drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
