//Variables for player character and defenders
var pc = "", def = "";
var pcHealth = 0, defHealth = 0;

//Character objects
var kenobi = {
    name: "Obi-Wan Kenobi",
    color: "blue",
    hp: 120,
    attack: 20,
    counterAttack: 12,
    source: "assets/images/ObiWan.jpg"
};

var luke = {
    name: "Luke Skywalker",
    color: "blue",
    hp: 100,
    attack: 15,
    counterAttack: 9,
    source: "assets/images/Luke.jpg"
};

var sheev = {
    name: "Darth Sidious",
    color: "red",
    hp: 150,
    attack: 22,
    counterAttack: 14,
    source: "assets/images/DarthSidious.jpg"
};

var maul = {
    name: "Darth Maul",
    color: "red",
    hp: 180,
    attack: 30,
    counterAttack: 12,
    source: "assets/images/DarthMaul.jpg"
}

//jQuery on click functions to find what character the player wants to be
//jQuery on click functions to find what character the player wants to fight
$(".character").on("click", function(){
    if(pc === ""){
        //playerCharacter = $(".character").val();
        pc = $(this).attr("value");
        //console.log("Player Character: " + pc);
        
    }else if(def === ""){
        def = $(this).attr("value");
        //console.log("Defender: " + def);
    }

    setPlayerImage(pc, def);
});

$("#fight").on("click", function(){
    fight(pc, def);
});

//function to go through what happens when the attack button is clicked
//Use window[variableName] to use the passed string as the variable name
function fight(pc, def){
    console.log(kenobi.hp);

    console.log(pc);
    console.log(window[pc].hp);
    console.log(window[def].hp);

    //When pressed lower both playerCharacter and Defenders health by appropriate amounts
    //Add the characters attackPower to the current attack power i.e(6,12,18,24,30)
    //Update the health shown on the page to show correct values ----- Probably put this in a new function to update the page
}
//function to lower the characters health

//function for win conditions
function win(){
    //When the defender's health hits zero run this function to add one to wins
    //Allow the user to pick a new defender

    //Remove image and health of the previous defender
}


//Setting the image for the PCimage div
//Setting the image for the DEFImage div
function setPlayerImage(pc, def){ 
    $("#PCimage").attr("src", window[pc].source);
    $("#PCimage").css("border-color", window[pc].color);
    $("#PChealth").text(window[pc].hp);

    $("#DEFImage").attr("src", window[def].source);
    $("#DEFImage").css("border-color", window[def].color);
    $("#DEFhealth").text(window[def].hp);
    
}