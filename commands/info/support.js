module.exports = {
  commands: ['support', 'support-server', 'helpserver', 'helpdesk', 'support-server', 'help-server', 'help-desk'],
  minArgs: 0,
  maxArgs: 0,
  description: 'Sends invite to Winston server',
  callback: (message, args, text) => {
    
    const Discord = require('discord.js')
    
    const botreply = new Discord.MessageEmbed()
      .setColor("#0484A3")
      .setTitle("Support Server")
      .setDescription("feel free to join the Winston server\nhttps://discord.gg/sQnDUCMGCt")
      .setFooter(`Requested by ${message.author.tag}`)
      .setTimestamp()
    
    message.reply(botreply)
      .catch(err => console.log(err));
  }
};
