const Discord = require("discord.js");
const { config } = require("dotenv");
const { MessageEmbed } = require("discord.js");
const client = new Discord.Client();

module.exports = {
  name: "fuck-you",
  description: "text - no prefix - says fuck you back to user",
  execute(message, args, msg) {
    if (
      message.author.id !== "615968095584125039" && message.author.id !== "449373835553407007"
    ) {
      return;
    }
      message.channel.send("fuck you too :middle_finger:");
  }
};
