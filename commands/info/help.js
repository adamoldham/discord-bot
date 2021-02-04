module.exports = {
  commands: ['help', 'commands'],
  minArgs: 0,
  maxArgs: 0,
  description: "List of all of Winston's commands",
  callback: (message, args, text) => {
    
    const Discord = require('discord.js')
    
    const botreply = new Discord.MessageEmbed()
      .setColor("#0484A3")
      .setTitle('Help Menu :clipboard:')
      .addField('Moderation', '-ban\n-kick\n-mute*\n-purge*\n-tempmute*\n-tempban*\n-unban\n-unmute*', true)
      .addField('Info', '-avatar\n-help\n-invite\n-message\n-note\n-ping\n-serverinfo*\n-status\n-suggest\n-support\n-userinfo', true)
      .addField('Fun', '-cfa\n-coinflip\n-hitman\n-insult\n-mood\n-weather\n-8ball', true)
      //.addField('Testing', '<:DiscordPartner:798686172280782909>')
      .setFooter(`(*coming soon)\nRequested by ${message.author.tag}`)
      .setTimestamp()
    
    message.reply(botreply)
      .catch(err => console.log(err));
    
    console.log(`\n-help command used in '${message.guild.name}' id: ${message.guild.id}`);
  }
};
