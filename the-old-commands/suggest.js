const Discord = require("discord.js");
const { config } = require("dotenv");
const { MessageEmbed } = require("discord.js");
const client = new Discord.Client();

module.exports = {
  name: "suggest",
  description: "text - allows user to send feedback to #suggestions on Winston Bot server",
  execute(message, args, msg) {
    const nocontent = new Discord.MessageEmbed()
      .setColor("ORANGE")
      .setTitle("Error")
      .setDescription(`Please include your suggestion after the command name.\nEg: !!suggest {suggestion}`)
      .setFooter(`${message.author.username}#${message.author.discriminator}`)
      .setTimestamp();
    
    const botreply = new Discord.MessageEmbed()
      .setColor("#0484A3")
      .setTitle("Suggestion Sent!")
      .setDescription(`I've submitted your suggestion "${msg}" to my developers.`)
      .setFooter(`${message.author.username}#${message.author.discriminator}`)
      .setTimestamp();
    
    
    const suggestionchan = client.channels.resolve("768834596170498078");

    const suggestion = new Discord.MessageEmbed()
      .setAuthor(
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setTitle("new suggestion")
      .setDescription(`${message.author}'s suggestion:\n${args.join(" ")}`)
      .setFooter(`${message.author.username}#${message.author.discriminator}`)
      .setTimestamp();

    
    if(args.length === 0){ 
      message.channel.send(nocontent);
    } else {
      message.channel.send(botreply);
      suggestionchan.send(suggestion);
    }
    
  }
};