module.exports = {
  commands: "note",
  expectedArgs: "{note}",
  minArgs: 1,
  maxArgs: null,
  description: "Sends user a DM with their note",
  callback: (message, args, text, client) => {
    
    const Discord = require('discord.js')
    
    const nocontent = new Discord.MessageEmbed()
      .setColor("ORANGE")
      .setTitle("Error")
      .setDescription(`Please include your note after the command name.\nEg: -note {note}`)
      .setFooter(`Requested by ${message.author.tag}`)
      .setTimestamp();
    
    const msgembed = new Discord.MessageEmbed()
        .setColor("#0484A3")
        .setTitle('New Note :notepad_spiral:')
        .setDescription(text)
        .setFooter('via Winston Bot')
        .setTimestamp();
    
    const botreply = new Discord.MessageEmbed()
        .setColor("#0484A3")
        .setTitle('Noted! :notepad_spiral:')
        .setDescription(`I'll DM you your note "${text}".\nIf you did not receive the message, you might have DMs turned off.`)
        .setFooter(`Requested by ${message.author.tag}`)

        .setTimestamp();
    
    if (!text) {
      message.channel.send(nocontent)
        .catch(err => console.log(err));
    } else {
      message.author.send(msgembed)
        .catch(err => console.log(err));
      message.channel.send(botreply)
        .catch(err => console.log(err));
    }
  }
};
