module.exports = {
  commands: ['message', 'msg', 'dm'],
  expectedArgs: "@user {message}",
  minArgs: 2,
  maxArgs: null,
  description: "Sends DM to a user with their message",
  callback: (message, args, text, client) => {
    
    const Discord = require('discord.js')
    
    const user = message.mentions.users.first() || message.author;
    
    /*
    const nocontent = new Discord.MessageEmbed()
      .setColor("ORANGE")
      .setTitle("Error")
      .setDescription(`Please include your message after the command name.\nEg: -message {message}`)
      .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`)
      .setTimestamp();
      */
    /*
    const cantsend = new Discord.MessageEmbed()
      .setColor("ORANGE")
      .setTitle("Error")
      .setDescription(`I wasn't able to send your message, ${user.username}#${user.discriminator} might have their DMs turned off.`)
    */
    
    let msg = args.filter(arg => !Discord.MessageMentions.USERS_PATTERN.test(arg));
    
    const msgembed = new Discord.MessageEmbed()
        .setColor("#0484A3")
        .setTitle(`New Message :envelope: ${message.author.tag}`)
        .setDescription(msg)
        .setFooter("via Winston Bot")
        .setTimestamp();
    
    const botreply = new Discord.MessageEmbed()
        .setColor("#0484A3")
        .setTitle("Message Sent!")
        .setDescription(`I'll DM your message "${msg}" to **${user.tag}**.\nIf the user did not receive the message, they might have DMs turned off.`)
        .setFooter(`Requested by ${message.author.tag}`)

        .setTimestamp();
    
    
      user.send(msgembed)
        .then(message.channel.send(botreply))
        .catch(err => console.log(err));
  }
};
