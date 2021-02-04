module.exports = {
  commands: ['coinflip', 'cointoss', 'coin-flip', 'coin toss'],
  minArgs: 0,
  maxArgs: 0,
  description: "Flips a coin",
  callback: (message, args, text) => {
    
    const Discord = require('discord.js')
    
    let outcome = [
      "heads",
      "tails"
    ];

    let randomizer = outcome[Math.floor(Math.random() * outcome.length)];
    const botreply = new Discord.MessageEmbed()
      .setColor("#0484A3")
      .setTitle(":coin: Coin Flip")
      .addField("Outcome:", randomizer)
      .setFooter(`Requested by ${message.author.tag}`)
      .setTimestamp();
    
    message.reply(botreply)
      .catch(err => console.log(err));
  }
};
