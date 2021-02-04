module.exports = {
  commands: "mood",
  minArgs: 0,
  maxArgs: 0,
  description: "Links YouTube video with everyone's current mood",
  callback: (message, args, text) => {
    
    const Discord = require('discord.js')
    
    const botreply = new Discord.MessageEmbed()
      .setColor("#0484A3")
      .setTitle('Current Mood :cry:')
      .setDescription('https://youtu.be/EPS2C3SYLsY')
      .setFooter(`Requested by ${message.author.tag}`)
      .setTimestamp()
    
    message.reply(botreply)
      .catch(err => console.log(err));
  }
};
