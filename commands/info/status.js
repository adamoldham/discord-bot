module.exports = {
  commands: ['status', 'uptime', 'guilds'],
  minArgs: 0,
  maxArgs: 0,
  description: 'Shows uptime and number of guilds bot is in',
  callback: (message, args, text, client) => {
    
    const Discord = require('discord.js')

    const botreply = new Discord.MessageEmbed()
      .setColor("#0484A3")
      .setTitle("Status")
      // .setDescription(`Serving ${client.guilds.cache.size} guilds \nUptime: ${require("ms")(client.uptime)}`)
      .addField(`Serving`, `${client.guilds.cache.size} guilds`)
      .addField(`Uptime`, `${require("ms")(client.uptime)}`)
      .setFooter(`Requested by ${message.author.tag}`)
      .setTimestamp()
    
    message.channel.send(botreply)
      .catch(err => console.log(err));
  }
};
