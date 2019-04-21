//Variables for player character and defenders
var pc = "", def = "";
//var pcHealth = 0, defHealth = 0;

//Character objects
var playerCharacter = {};

var defender = {};

var wins = 0;

var kenobi = {
    name: "Obi-Wan Kenobi",
    color: "blue",
    hp: 120,
    attack: 10,
    counterAttack: 6,
    source: "assets/images/ObiWan.jpg"
};

var luke = {
    name: "Luke Skywalker",
    color: "blue",
    hp: 100,
    attack: 6,
    counterAttack: 5,
    source: "assets/images/Luke.jpg"
};

var sheev = {
    name: "Darth Sidious",
    color: "red",
    hp: 150,
    attack: 11,
    counterAttack: 7,
    source: "assets/images/DarthSidious.jpg"
};

var maul = {
    name: "Darth Maul",
    color: "red",
    hp: 180,
    attack: 9,
    counterAttack: 5,
    source: "assets/images/DarthMaul.jpg"
}

//jQuery on click functions to find what character the player wants to be
//jQuery on click functions to find what character the player wants to fight
$(".character").on("click", function(){
    if(pc === ""){
        //playerCharacter = $(".character").val();
        pc = $(this).attr("value");
        $(this).hide();
        setPlayerCharacter(pc);
        //console.log("Player Character: " + pc);
        
    }else if(def === ""){
        def = $(this).attr("value");
        $(this).hide();
        //console.log("Defender: " + def);
        setDefenderCharacter(def);
    }
    
    setPlayerImage();
});

$("#fight").on("click", function(){
    fight(pc, def);
});

//function to go through what happens when the attack button is clicked
//Use window[variableName] to use the passed string as the variable name
function fight(pc, def){
    //When pressed lower both playerCharacter and Defenders health by appropriate amounts
    //Update the health shown on the page to show correct values ----- Probably put this in a new function to update the page
    playerCharacter.hp -= defender.counterAttack;
    defender.hp -=playerCharacter.attack;
    updateHP();
    //Add the characters attackPower to the current attack power i.e(6,12,18,24,30)
    playerCharacter.attack += window[pc].attack;
    console.log(playerCharacter);

    //if statements to check if either the playerCharacter or the defenders hp has gone below 0
    if(defender.hp <= 0){
        wins++;
        
        defenderLost();
        if(wins === 3){
            win();
        }
    }

    if(playerCharacter.hp <= 0){
        lose();
    }
}
//function to lower the characters health

//function for winning
function win(){
    //Alert the player that the game has been won
    var $h2 = $("<h2>", {id:"won"});
    $h2.text("Winner!");
    $(".winner").append($h2);
}

function lose(){
    var $h2 = $("<h2>", {id:"lose"});
    $h2.text("Lose!");
    $(".winner").append($h2);
}

function setPlayerCharacter(pc){
    playerCharacter.name = window[pc].name;
    playerCharacter.color = window[pc].color;
    playerCharacter.hp = window[pc].hp;
    playerCharacter.attack = window[pc].attack;
    playerCharacter.source = window[pc].source;
    
    //console.log(playerCharacter);
}

function setDefenderCharacter(def){
    defender.name = window[def].name;
    defender.color = window[def].color;
    defender.hp = window[def].hp;
    defender.counterAttack = window[def].counterAttack;
    defender.source = window[def].source;
    
    //console.log(defender);
}


//Setting the image for the PCimage div
//Setting the image for the DEFImage div
function setPlayerImage(){ 
    $("#PCimage").attr("src", playerCharacter.source);
    $("#PCimage").css("border-color", playerCharacter.color);
    $("#PChealth").text(playerCharacter.hp);

    $("#DEFImage").attr("src", defender.source);
    $("#DEFImage").css("border-color", defender.color);
    $("#DEFhealth").text(defender.hp);   
}

function updateHP(){
    $("#PChealth").text(playerCharacter.hp);
    $("#DEFhealth").text(defender.hp);
}

function defenderLost(){
    //Adding to the graveyard
    var n = $('<h3 id="deceasedName">');
    n.html(defender.name);
    n.appendTo("#theFallen");
    var img = $('<img id="deceased">');
    img.attr("src", defender.source);
    img.appendTo("#theFallen");
    img.css("border-color", defender.color);
    
    //Clearing the defender img and border
    //Resetting def variable and defender object
    def = "";
    defender = {};
    $("#DEFImage").removeAttr("src");
    $("#DEFImage").css("border-color", "");
    $("#DEFhealth").text("");
}

//Add background music
//Add lightsaber noises when the attack button is pressed
//Maybe add some fun facts of each character
