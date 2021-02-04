module.exports = {
  commands: "weather",
  minArgs: 0,
  maxArgs: 0,
  description: 'Insults user & "gives weather"',
  callback: (message, args, text) => {
    
    const Discord = require('discord.js')
    
    const botreply = new Discord.MessageEmbed()
      .setColor("#0484A3")
      .setTitle('Weather :cloud_rain:')
      .setDescription('are you fucking stupid, just look out the window')
      .setFooter(`Requested by ${message.author.tag}`)
      .setTimestamp()
    
    message.reply(botreply)
      .catch(err => console.log(err));
  }
};
