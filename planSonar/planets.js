//planets
var meteors=false;//display meteors log
var radioPlantet=45;
var planetColor="rgb(256,256,256)";
var gris=255;

ponEstrella=function(a){// es un circulo-planta-cuadrado-nave

  var c = new createjs.Shape();
  c.graphics.beginFill("rgb("+gris+","+gris+","+gris+")").drawCircle(2, 2, rad);
  c.x = equis;
  c.y = igriega;
  stage.addChild(c);
  createjs.Tween.get(c)
    .to({x:amp/2},40, createjs.Ease.getPowOut(2))
    .call(handleComplete, [c]);
}

ponPlaneta=function(){
    var ang= toRadians(0);
    var equis=Math.cos(ang) + amp/2;
    var igriega=Math.sin(ang) + alt/2;
    var c = new createjs.Shape();
    c.graphics.beginFill("rgb("+gris+","+gris+","+gris+")")
    .drawCircle(2, 2, radioPlantet);
    c.x = equis;
    c.y = igriega;
    stage.addChild(c);
}

//// HELPERS
var toRadians = function (degree) {
    return degree * (Math.PI / 180);
};
