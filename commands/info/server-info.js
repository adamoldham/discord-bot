module.exports = {
  commands: ['serverinfo', 'sinfo', 'guildinfo', 'server-info', 'guild-info'],
  minArgs: 0,
  maxArgs: 0,
  description: 'Allows user to invite Winston to other servers',
  callback: (message, args, text) => {
    
    const Discord = require('discord.js')
    
    const botreply = new Discord.MessageEmbed()
      .setColor("#0484A3")
      .setTitle("Guild Info")
      .setDescription("Not yet available")
      .setFooter(`Requested by ${message.author.tag}`)
      .setTimestamp()
    
    message.reply(botreply)
      .catch(err => console.log(err));
  }
};
