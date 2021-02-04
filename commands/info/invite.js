module.exports = {
  commands: "invite",
  minArgs: 0,
  maxArgs: 0,
  description: 'Allows user to invite Winston to other servers',
  callback: (message, args, text) => {
    
    const Discord = require('discord.js')
    
    const botreply = new Discord.MessageEmbed()
      .setColor("#0484A3")
      .setTitle("Invite Winston")
      .setDescription("Invite Winston: https://bit.ly/inv-winston")
      .setFooter(`Requested by ${message.author.tag}`)
      .setTimestamp()
    
    message.reply(botreply)
      .catch(err => console.log(err));
  }
};
