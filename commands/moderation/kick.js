module.exports = {
  commands: "kick",
  expectedArgs: "@user {reason}",
  minArgs: 1,
  maxArgs: null,
  permissions: ['ADMINISTRATOR', 'KICK_MEMBERS'],
  permissionError: "You must have Administrator or Kick Members permissions to use this command.",
  description: "Kicks mentioned user from guild",
  callback: (message, args, text) => {
    
    const Discord = require('discord.js')
    
    if (message.mentions.members.size > 0) return;
    
    const member = message.mentions.users.first()
    
    const kickmember = message.guild.members.cache.get(member.id)
        
    let reason = args.slice(1).join(' ');
    if (!reason) reason = `No reason specified.`; 
    
    kickmember.kick()
    
    const msgembed = new Discord.MessageEmbed()
      .setColor("#ff6200")
      .setTitle("Kicked")
      .setDescription(`You have been kicked from **${message.guild.name}**`)
      .addField("Kicked By:", `${message.author.tag} (${message.author.id})`)
      .addField("Reason:", reason)
      .setTimestamp();
    
    const botreply = new Discord.MessageEmbed()
      .setColor("#ff6200")
      .setTitle('User Kicked')
      .setDescription(`You have kicked **${member.tag}**`)
      .addField("User Kicked:", `${member.tag} (${member.id})`)
      .addField("Banned By:", `${message.author.tag} (${message.author.id})`)
      .addField("Reason:", reason)
      .setTimestamp();
    
    member.send(msgembed)
      .then(message.reply(botreply))
      .catch(err => console.log(err));
  }
};
