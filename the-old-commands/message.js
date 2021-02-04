// client.users.cache.get(message.author.id).send("hey hey!");

const Discord = require("discord.js");
const { config } = require("dotenv");
const { MessageEmbed } = require("discord.js");
const client = new Discord.Client();

module.exports = {
  name: "message",
  description: "Sends a message to users DMs",
  execute(message, args, msg) {
    const nocontent = new Discord.MessageEmbed()
      .setColor("ORANGE")
      .setTitle("Error")
      .setDescription(`Please include your message after the command name.\nEg: !!message {message}`)
      .setFooter(`${message.author.username}#${message.author.discriminator}`)
      .setTimestamp();
    
    const msgembed = new Discord.MessageEmbed()
        .setColor("#0484A3")
        .setTitle(
          `Message from ${message.author.username}#${message.author.discriminator}`
        )
        .setDescription(msg)
        .setFooter("via Winston Bot")
        .setTimestamp();
    
    const botreply = new Discord.MessageEmbed()
        .setColor("#0484A3")
        .setTitle("User DMed")
        .setDescription(
          `I've sent your message "${msg}" to ${message.author.username}#${message.author.discriminator}.\nIf they did not receive the message they might not be in one of my servers.`
        )
        .setFooter(
          `via Winston Bot`
        )
        .setTimestamp();
    
    if (!msg) {
      message.channel.send(nocontent);
    } else {
      message.author.send(msgembed);
      message.channel.send(botreply);
    }
  }
};
