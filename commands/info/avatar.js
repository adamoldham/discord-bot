module.exports = {
  commands: ['avatar', 'av', 'pfp'],
  expectedArgs: "@user",
  minArgs: 0,
  maxArgs: 1,
  description: 'Shows that bot is online',
  callback: (message, args, text) => {
    
    const Discord = require('discord.js')
    
    const user = message.mentions.users.first() || message.author;
    
    const botreply = new Discord.MessageEmbed()
      .setColor("#0484A3")
      .setTitle(`Avatar for ${user.username}`)
      .setImage(`${user.displayAvatarURL({ dynamic: true })}`)
      .setFooter(`Requested by ${message.author.tag}`)
      .setTimestamp();
    
    message.channel.send(botreply)
      .catch(err => console.log(err));
  }
};