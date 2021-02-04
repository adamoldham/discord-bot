module.exports = {
  commands: "suggest",
  expectedArgs: "{suggestion}",
  minArgs: 1,
  maxArgs: null,
  description: "Allows user to make suggestion to Winston's developer(s)",
  callback: (message, args, text, client) => {
    
    const Discord = require('discord.js')
    
    const nocontent = new Discord.MessageEmbed()
      .setColor("ORANGE")
      .setTitle("Error")
      .setDescription(`Please include your suggestion after the command name.\nEg: -suggest {suggestion}`)
      .setFooter(`Requested by ${message.author.tag}`)
      .setTimestamp();
    
    const botreply = new Discord.MessageEmbed()
      .setColor("#0484A3")
      .setTitle("Suggestion Sent!")
      .setDescription(`I've submitted your suggestion "${text}" to my developers.`)
      .setFooter(`Requested by ${message.author.tag}`)
      .setTimestamp();
    
    
    const suggestionchan = client.channels.resolve("768834596170498078");

    const suggestion = new Discord.MessageEmbed()
      .setAuthor(
        message.author.username,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setColor("#0484A3")
      .setTitle("new suggestion")
      .setDescription(`${message.author}'s suggestion:\n*${args.join(" ")}*`)
      .setFooter(`Requested by ${message.author.tag}`)
      .setTimestamp();

    
    if(args.length === 0){ 
      message.channel.send(nocontent)
        .catch(err => console.log(err));
    } else {
      message.channel.send(botreply)
        .catch(err => console.log(err));
      suggestionchan.send(suggestion)
        .catch(err => console.log(err));
    }
  }
};
