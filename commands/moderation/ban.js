module.exports = {
  commands: "ban",
  expectedArgs: "@user {reason}",
  minArgs: 1,
  maxArgs: null,
  permissions: ['ADMINISTRATOR', 'BAN_MEMBERS'],
  permissionError: "You must have Administrator or Ban Members permissions to use this command.",
  description: "Bans mentioned user from guild",
  callback: (message, args, text) => {
    
    const Discord = require('discord.js')
    
    if (message.mentions.members.size > 0) return;
    
    const member = message.mentions.users.first()
    
    const banmember = message.guild.members.cache.get(member.id)
    
    let reason = args.slice(1).join(' ');
    if (!reason) reason = `No reason specified.`; 
    
    //const target = message.guild.members.cache.get(args[0])
    
    banmember.ban({reason: reason})
    
    const msgembed = new Discord.MessageEmbed()
      .setColor("RED")
      .setTitle("Banned")
      .setDescription(`You have been banned from **${message.guild.name}**`)
      .addField("Banned By:", `${message.author.tag} (${message.author.id})`)
      .addField("Reason:", reason)
      .setFooter("If you think this was a mistake, contact a guild admin")
      .setTimestamp();
    
    const botreply = new Discord.MessageEmbed()
      .setColor("RED")
      .setTitle('User Banned')
      .setDescription(`You have banned **${member.tag}**`)
      .addField("User Banned:", `${member.tag} (${member.id})`)
      .addField("Banned By:", `${message.author.tag} (${message.author.id})`)
      .addField("Reason:", reason)
      .setTimestamp();
    
   member.send(msgembed)
      .then(message.reply(botreply))
      .catch(err => console.log(err));
  }
};
