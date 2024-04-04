// This file will only be dealing with the slash commands registration which means we'll only run it we're either adding or updating commands.
require("dotenv").config();
const { REST, Routes, ApplicationCommandOptionType } = require("discord.js");

const commands = [
    {
      name: 'add',
      description: 'Add two numbers together',
      options: [
          {
              name: 'first-number',
              description: 'The first number',
              type: ApplicationCommandOptionType.Number,
              required: true,
              
              
          },
          {
              name: 'second-number',
              description: 'The second number',
              type: ApplicationCommandOptionType.Number,
              required: true,
             
              
          }
      ]
    }
];

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log("Registering slash commands...");
    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      { body: commands }
    );
    console.log("Successfully registered slash commands!");
  } catch (error) {
    console.log("There was an error: ${error}");
  }
})();
