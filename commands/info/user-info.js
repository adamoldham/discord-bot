module.exports = {
  commands: ['userinfo', 'uinfo', 'user-info', 'whois', 'who-is'],
  expectedArgs: "@user",
  minArgs: 0,
  maxArgs: 1,
  description: 'Shows info about mentioned user or message sender',
  callback: (message, args, text) => {
    
    const Discord = require('discord.js')
    
    const user = message.mentions.users.first() || message.author;

    const type = "User";
    
    if (user.bot) type = "Bot";
    
    const botreply = new Discord.MessageEmbed()
      .setColor("#0484A3")
      .setTitle("User Info :bust_in_silhouette:")
      .setDescription(`**Username:** ${user.tag}\n**ID:** ${user.id}\n**Created On:** ${user.createdAt}\n**Account Type:** ${type}\n**Presence:** ${user.presence.status}\n**Last Message:** ${user.lastMessage}`)
      .setThumbnail(user.displayAvatarURL({ dynamic: true }))
      .setFooter(`Requested by ${message.author.tag}`)
      .setTimestamp()
    
    message.reply(botreply)
      .catch(err => console.log(err));
  }
};
