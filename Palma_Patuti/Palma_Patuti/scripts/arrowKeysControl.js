var character = document.getElementById("player");

//ARROW KEYS
var change = {
  37: {
    left: "-=1"
  },

  38: {
    jump
  },

  39: {
    left: "+=1"
  },

  40: {
    top: "+=1"
  },
}
$(document).one("keydown", keyDown)

var going;

function keyDown(e) {
  console.log("down")
  $(document).one("keyup", keyup)
  var animation = change[e.which];
  going = setInterval(keepGoing, 1);

  function keepGoing() {
    $("#player").css(animation)
  }

}

function keyup(e) {
  console.log("up")
  clearInterval(going)
  $(document).one("keydown", keyDown)
}

/*Jump*/
function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },200);
}