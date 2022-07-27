const path = (process.env.DEV ? ".env.dev" : ".env");
require("dotenv").config({ path: path });

const token = process.env.DISCORD_TOKEN;
const clientID = process.env.DISCORD_CLIENT_ID;
const guildID = process.env.DISCORD_GUILD_ID;

const { REST } = require("@discordjs/rest");
const { Client, Intents } = require("discord.js");
const { Routes } = require("discord-api-types/v9");

// Register a slash command
const commands = [
  {
    name: "post",
    description: "Something you like...",
  },
  {
    name: "album",
    description: "Share an album with the band.",
  },
  {
    name: "suggestion",
    description: "Get an artisanal post-rock song title suggestion.",
  },
];

const rest = new REST({ version: "9" }).setToken(token);

(async () => {
  try {
    console.info("Started refreshing application (/) commands.");

    await rest.put(
      Routes.applicationGuildCommands(clientID, guildID),
      { body: commands },
    );

    console.info("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();

// Give the bot some behavior
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on("ready", () => {
  console.info(`Logged in as ${client.user.tag}!`);
});

client.on("interactionCreate", async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === "post") {
    await interaction.reply("rock");
  } else if (interaction.commandName === "album") {
    await interaction.reply("Pick a better album.");
  } else if (interaction.commandName === "suggestion") {
    await interaction.reply("Quails of the Night");
  }
});

client.login(token);
