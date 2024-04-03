// This file will only be dealing with the slash commands registration which means we'll only run it we're either adding or updating commands. 
require("dotenv").config();
const {REST, Routes} = require("discord.js");

const commands = [
    {
        name: "hello",
        description: "Replies with hello"
    }
];

(async() => {
    try {
        
    } catch (error) {
      console.log(error);  
    }
})();

