module.exports = {
  commands: "ping",
  minArgs: 0,
  maxArgs: 0,
  description: 'Shows that bot is online',
  callback: (message, args, text) => {
    
    const Discord = require('discord.js')
    
    const botreply = new Discord.MessageEmbed()
      .setColor("#0484A3")
      .setTitle("This bot is functional.")
      .setDescription("wtf do you want from me")
      .setFooter(`Requested by ${message.author.tag}`)
      .setTimestamp()
    
    message.reply(botreply)
      .catch(err => console.log(err));
  }
};
