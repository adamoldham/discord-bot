module.exports = {
  commands: "insult",
  minArgs: 0,
  maxArgs: 0,
  description: "Picks random insult from list",
  callback: (message, args, text) => {
    
    const Discord = require('discord.js')
    
    let insults = [
      ":sparkles: i hate you more than i hate myself :sparkles:",
      "if you were a cookie you'd be a :sparkles: whoreo :sparkles:",
      "if you were a tv show you'd be a :sparkles: shitcom :sparkles:",
      "bea is dumb.",
      "YOU LITTLE FUCKING PRICK YOU'RE AS USELESS AS MY GOD DAMN DEVELOPER"
    ];

    let randomizer = insults[Math.floor(Math.random() * insults.length)]; // this is the function to pick a random insult.
    const botreply = new Discord.MessageEmbed()
      .setColor("#0484A3")
      .setTitle('Insult Generator :sob:')
      .setDescription(randomizer)
      .setFooter(`Requested by ${message.author.tag}`)
      .setTimestamp();
    
    message.reply(botreply)
      .catch(err => console.log(err));
  }
};
