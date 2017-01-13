/**
 * Controller for user methods
 */
var config = require('../config/config');

/**
 * Create JSON response with the found user (req.user)
 */
exports.read = function(req, res) {
    res.json(req.user);
};

/**
 * Create JSON response with all users
 */
exports.list = function(req, res) {

    console.log("Node.js is successfully running.");

    var users = [
        {name: "Abdelkarim"},
        {name: "Hugo"},
        {name: "Ingrid"}
    ];

    res.json(users);
};

exports.talents = function (req, res) {
    var talents = [
        
        {name: "Armored to the Teeth", playerclass: "Warrior", spec: "Fury",
        description: "Increases your attack power by 3 for every 36 armor value you have.", talentpointsrequired: 3},
        {name: "Booming Voice", playerclass: "Warrior", spec: "Fury", 
        description: "Increases the area of effect and duration of your Battle Shout, Demoralizing Shout and Commanding Shout by 50%.",
        talentpointsrequired: 2},
        {name: "Cruelty", playerclass: "Warrior", spec: "Fury", 
        description: "Increases your chance to get a critical strike with melee weapons by 5%.", talentpointsrequired: 5},
        {name: "Improved Demoralizing Shout", spec: "Fury",
        description: "Increases the melee attack power reduction of your Demoralizing Shout by 40%.", talentpointsrequired: 5},
        {name: "Unbridled Wrath", playerclass: "Warrior", spec: "Fury",
        description: "Gives you a chance to generate an additional rage point when you deal melee damage with a weapon. Effect occurs more often than Unbridled Wrath (Rank 4)",
        talentpointsrequired: 5},

        {name: "Spiritual Focus", playerclass: "Paladin", spec: "Holy",
        description: "Reduces the pushback suffered from damaging attacks while casting Flash of Light and Holy Light by 70%", 
        talentpointsrequired: 5},
        {name: "Seals of the Pure", playerclass: "Paladin", spec: "Holy",
        description: "Increases the damage done by your Seal of Righteousness, Seal of Venegeance and Seal of Corruption and their Judgement effects by 15%.",
        talentpointsrequired: 5},
        {name: "Healing Light", playerclass: "Paladin", spec: "Holy", 
        description: "Increases the amount healed by your Holy Light, Flash of Light and the effectiveness of Holy Shock spells by 12%",
        talentpointsrequired: 3},
        {name: "Divine Intellect", playerclass: "Paladin", spec: "Holy",
        description: "Increases your total Intellect by 10%.", talentpointsrequired: 5},
        {name: "Unyielding Faith", playerclass: "Paladin", spec: "Holy",
        description: "Reduces the duration of all Fear and Disorient effects by 30%", talentpointsrequired: 2},

        {name: "Divinity", playerclass: "Paladin", spec:"Protection", 
        description:"Increases all healing done by you and all healing effects on you by 5%.", talentpointsrequired: 5},
        {name: "Divine Strength", playerclass: "Paladin", spec: "Protection",
        description:"Increases your total Strength by 15%", talentpointsrequired: 5},
        {name: "Stoicism", playerclass:"Paladin", spec: "Protection",
        description:"Reduces the duration of all Stun effect by an additional 30% and reduces the chance that your helpful spells and damage over time effects will be dispelled by an additional 30%.",
        talentpointsrequired:3},
        {name:"Guardian's Favor", playerclass: "Paladin", spec: "Protection",
        description:"Reduces the cooldown of your Hand of Protection by 2 minutes and increases the duration of your Hand of Freedom by 4 seconds.",
        talentpointsrequired:2},
        {Name:"Anticipation", playerclass: "Paladin", spec: "Protection",
        description:"Increases your chance to dodge by 5%", talentpointsrequired:5}
    ];

      function getTalentsBySpecialization(spec){
        return talents.filter(
            function(talents){ return talents.spec == spec}
            );
    };

    function getTalentsByClass(playerclass){
        return talents.filter(
            function(talents){ return talents.playerclass == playerclass}
            );
    };


    var returnObject="";

    

     var TalentsResult = getTalentsByClass("Paladin"); 
     console.log(TalentsResult);
      if(TalentsResult.length!=0)
      { 
        returnObject=TalentsResult; 
      }
      var TalentsSpecializationResult = getTalentsBySpecialization("Paladin");
      console.log(TalentsSpecializationResult);
      if (TalentsSpecializationResult.length!=0) 
      { 
        returnObject=TalentsSpecializationResult;
      }

    
    

    res.json(returnObject);
};

/**
 * Function to lookup a particular user and store it in the request object
 * @param req - the request object
 * @param res - our response to the request
 * @param next - the next function that needs to be executed
 * @param userID - the userID from the URL
 */
exports.getUserByID = function(req, res, next, userID) {

    /** als we mongodb gebruiken dan gaan we in deze functie de user opzoeken */

    console.log("je zoekt de user met id: " + userID);

    console.log("voor nu geef ik je een standaard object terug");
    req.user = {
        name: "Berend",
        age: 33
    };

    /** de volgende Middleware/functie mag aan de slag */
    next();

};