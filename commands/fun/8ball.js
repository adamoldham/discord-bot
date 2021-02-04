module.exports = {
  commands: "8ball",
  expectedArgs: "{question}",
  minArgs: 1,
  maxArgs: null,
  description: "Acts as magic 8ball",
  callback: (message, args, text) => {
    
    const Discord = require('discord.js')
    
    let outcome = [
      "ask again later",
      "don't count on it",
      "my sources say no",
      "definitely not",
      "my sources say yes",
      "yup",
      "100%"
    ];

    let randomizer = outcome[Math.floor(Math.random() * outcome.length)]; // this is the function to pick a random insult.
    const botreply = new Discord.MessageEmbed()
      .setColor("#0484A3")
      .setTitle(`<:magic8ball:806351435791859744> 8ball`)
      .addField("Question", text)
      .addField("Outcome:", randomizer)
      .setFooter(`Requested by ${message.author.tag}`)
      .setTimestamp();
    
    message.reply(botreply)
      .catch(err => console.log(err));
  }
};
