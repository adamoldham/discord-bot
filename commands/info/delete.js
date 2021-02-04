module.exports = {
  commands: "delete",
  minArgs: 0,
  maxArgs: 0,
  description: "Deletes command",
  callback: (message, args, text, client) => {
    
    const Discord = require('discord.js')
    
    const botlog = new Discord.MessageEmbed()
      .setColor("RED")
      .setTitle("Message Deleted")
      .setDescription(`A message was deleted in <#${message.channel.id}>\n**Author:** ${message.author.username}#${message.author.discriminator}\n**Message:** ${message}`)
      .setFooter(`User ID: ${message.author.id}`)
      .setTimestamp()
    
    if (message.guild.id === '776674412542951434') {
      message.delete()
        .then(client.channels.cache.get('796549747740508160').send(botlog));
    } if (message.guild.id === '759139012131684413') {
      message.delete()
        .then(client.channels.cache.get('761651275288412171').send(botlog));
    }
      else {
      return;
    }
  }
};
