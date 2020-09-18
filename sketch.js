var good, cities, data1,logo;
var database;

var gameState = 0;
var form;

function preload (){
logo = loadImage("logo.jpg");
}

function setup() {
  database=firebase.database();
  createCanvas(800,400);
}

function draw() {
  background(255,255,255);  
  data1=form.input.val();
  if(gameState===0){
    form=new Form();
    form.display();
    if(data1){
      if(cities>0 && cities<50){
        good=createElement("Good and Minimal impact");
        good.position(425,230);
      }
      if(cities>100 && cities<51){
        good=createElement("Minor breathing discomfort for sensitive poeple");
        good.position(425,230);
      }
      if(cities>200 && cities<101){
        good=createElement("Breathing discomfort to the people with lungs, asthama and heart diseases, satisfactory remarks");
        good.position(425,230);
      }
      if(cities>300 && cities<201){
        good=createElement("Breathing discomfort to most people on prolonged exposure, moderate remarks");
        good.position(425,230);
      }
      if(cities>400 && cities<301){
        good=createElement("Respiratory illness for proplonged exposure, poor remarks");
        good.position(425,230);
      }
      if(cities>500 && cities<401){
        good=createElement("Affects healthy people and seriously impacts those with existing diseases, severe remarks");
        good.position(425,230);
      }
      if(cities<501){
        good=createElement("Excesive, stay at home. Don't reccomend going out");
        good.position(425,230);
      }

    } 
  }
 
drawSprites();

}