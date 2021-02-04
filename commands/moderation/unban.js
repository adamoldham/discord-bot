module.exports = {
  commands: "unban",
  expectedArgs: "{user id}",
  minArgs: 1,
  maxArgs: 1,
  permissions: ['ADMINISTRATOR', 'BAN_MEMBERS'],
  permissionError: "You must have Administrator or Ban Members permissions to use this command.",
  description: "Unbans user from guild",
  callback: (message, args, text) => {
    
    const Discord = require('discord.js')
        
    let member = text
    
    message.guild.members.unban(member)
    
    const botreply = new Discord.MessageEmbed()
      .setColor("#0484A3")
      .setTitle('User Unbanned')
      //.setDescription(`You have unbanned **${member.tag}**`)
      .addField("User Unbanned:", `<@796513874353586177> (${text})`)
      .addField("Unbanned By:", `${message.author.tag} (${message.author.id})`)
      .setTimestamp();
    
    message.reply(botreply)
      .catch(err => console.log(err));
  }
};
