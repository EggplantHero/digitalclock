//variables
var box = document.getElementById("box");
var numArray = ["one", "two", "three", "four", "five", "six", "seven"];

//makes 'column' div with two dots on page
function createColumn(){
  var column = document.createElement("div");
  var dottop = document.createElement("div");
  var dotbot = document.createElement("div");
  column.appendChild(dottop);
  column.appendChild(dotbot);
  box.appendChild(column);
  dottop.className = "dot top"
  dotbot.className = "dot bot"
  column.className = "column";
}

//main function that loops
function time(){

//makes a 'digit' div with seven LEDs on page
function createDigit(a){
  var digit = document.createElement("div");
  digit.className = "digit";
  digit.id = a;
  //appends 7 LEDs
  for(i=0;i<numArray.length;i++){
    this["led" + i] = document.createElement("div");
    this["led" + i].className = "led " + numArray[i];
    digit.appendChild(this["led" + i]);
    }
  box.appendChild(digit);

  var d = new Date();
  var combo;

  //defines 'combo' depending on the digit's ID
  switch(digit.id){
    case "hours1":
      combo = Math.floor(d.getHours()/10);
      break;
    case "hours2":
      combo = Math.floor(d.getHours()%10);
      break;
    case "minutes1":
      combo = Math.floor(d.getMinutes()/10);
      break;
    case "minutes2":
      combo = Math.floor(d.getMinutes()%10);
      break;
    case "seconds1":
      combo = Math.floor(d.getSeconds()/10);
      break;
    case "seconds2":
      combo = Math.floor(d.getSeconds()%10);
      break;
    default:
  } //switch

  // figures out which LED to turn off depending on 'combo'
  // (which itself depends on the digit's ID)
  switch(combo){
    case 1:
      led0.className = "led one off";
      led1.className = "led two off";
      led2.className = "led three off";
      led3.className = "led four off";
      led4.className = "led five off";
      break;
    case 2:
      led3.className = "led four off";
      led6.className = "led seven off";
      break;
    case 3:
      led3.className = "led four off";
      led4.className = "led five off";
      break;
    case 4:
      led0.className = "led one off";
      led2.className = "led three off";
      led4.className = "led five off";
      break;
    case 5:
      led4.className = "led five off";
      led5.className = "led six off";
      break;
    case 6:
      led5.className = "led six off";
      break;
    case 7:
      led1.className = "led two off";
      led2.className = "led three off";
      led3.className = "led four off";
      led4.className = "led five off";
      break;
    case 8:
      break;
    case 9:
      led4.className = "led five off";
      break;
    case 0:
      led1.className = "led two off";
      break;
    default:
  } //end of switch
} //end of createdigit()

//clears page before recreating all elements
//argument for createdigit() is its ID
box.innerHTML="";
createDigit("hours1");
createDigit("hours2");
createColumn();
createDigit("minutes1");
createDigit("minutes2");
createColumn();
createDigit("seconds1");
createDigit("seconds2");
} //end of time()

//runs time function every sec
setInterval(time, 250);
