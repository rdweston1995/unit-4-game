//Variables for player character and defenders
var pc = "", def = "";

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
}
//function to lower the characters health
//function for win conditions


//Setting the image for the PCimage div
//Setting the image for the DEFImage div
function setPlayerImage(pc, def){ 
    //$("#PCimage").attr("border-style", "solid");
    //$("#PCimage").attr("border-width", "1px");
    //console.log(obi.color);
    if(pc === "kenobi"){
        $("#PCimage").attr("src", kenobi.source);
        $("#PCimage").css("border-color", kenobi.color);
        
    }else if(pc === "luke"){
        $("#PCimage").attr("src", luke.source);
        $("#PCimage").css("border-color", luke.color);
    }else if(pc === "sheev"){
        $("#PCimage").attr("src", sheev.source);
        $("#PCimage").css("border-color", sheev.color);
    }else if(pc === "maul"){
        $("#PCimage").attr("src", maul.source);
        $("#PCimage").css("border-color", maul.color);
    }

    if(def === "kenobi"){
        $("#DEFImage").attr("src", kenobi.source);
        $("#DEFImage").css("border-color", kenobi.color);
    }else if(def === "luke"){
        $("#DEFImage").attr("src", luke.source);
        $("#DEFImage").css("border-color", luke.color);
    }else if(def === "sheev"){
        $("#DEFImage").attr("src", sheev.source);
        $("#DEFImage").css("border-color", sheev.color);
    }else if(def === "maul"){
        $("#DEFImage").attr("src", maul.source);
        $("#DEFImage").css("border-color", maul.color);
    }
}