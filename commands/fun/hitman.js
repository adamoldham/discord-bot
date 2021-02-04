module.exports = {
  commands: "hitman",
  minArgs: 0,
  maxArgs: 0,
  description: "Pretends to send hitman",
  callback: (message, args, text) => {
    
    const Discord = require('discord.js')
    
    const botreply = new Discord.MessageEmbed()
      .setColor("#0484A3")
      .setTitle('Hitman :gun:')
      .setDescription('a hitman has been deployed to your current location. have fun!')
      .setFooter(`Requested by ${message.author.tag}`)
      .setTimestamp()
    
    message.reply(botreply)
      .catch(err => console.log(err));
  }
};
