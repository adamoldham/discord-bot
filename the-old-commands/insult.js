const Discord = require("discord.js");
const { config } = require("dotenv");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "insult",
  description: "embed - generates insult from list",
  execute(message, args, msg) {
    let insults = [
      // this defines a group of insults.
      // insert all your insults here. e.g:
      ":sparkles: i hate you more than i hate myself :sparkles:",
      "if you were a cookie you'd be a :sparkles: whoreo :sparkles:",
      "if you were a tv show you'd be a :sparkles: shitcom :sparkles:",
      "bea is dumb."
    ];

    let randomizer = insults[Math.floor(Math.random() * insults.length)]; // this is the function to pick a random insult.
    const botreply = new Discord.MessageEmbed()
      .setColor("#0484A3")
      .setTitle("Insult Generator")
      .setDescription(randomizer)
      .setTimestamp();
    message.channel.send(botreply).catch(err => console.log(err));
  }
};
