module.exports = {
  commands: ['cfa', 'chickfila', 'chick-fil-a'],
  minArgs: 0,
  maxArgs: 0,
  description: "Picks random insult from list",
  callback: (message, args, text) => {
    
    const Discord = require('discord.js')
    
    let main = [
      "chicken sandwich",
      "cool wrap",
      "spicy chicken sandwich",
      "grilled chicken sandwich",
      "chicken strips",
      "nuggets",
      "grilled nuggets",
      "salad"
    ];
    let side = [
      "mac and cheese",
      "fries",
      "side salad",
      "fruit cup",
      "chicken noodle soup",
      "chicken tortilla soup",
      "kale crunch salad",
      "greek yogurt parfait",
      "waffle potato chips"
    ];
    let drink = [
      "sweet iced tea",
      "unsweet iced tea",
      "lemonade",
      "diet lemonade",
      "1/2 lemonade 1/2 tea",
      "coke",
      "diet coke",
      "coke zero",
      "sprite",
      "dr pepper",
      "diet dr pepper",
      "hi-c",
      "iced coffee",
      "water",
      "apple juice",
      "orange juice",
      "chocolate milk",
      "1% milk",
      "coffee",
      "mocha cream cold brew"
    ];
    let dessert = [
      "frosted lemonade",
      "frosted coffee",
      "chocolate chunk cookie",
      "chocolate fudge brownie",
      "cookies and cream milkshake",
      "chocolate cookies and cream milkshake",
      "chocolate milkshake",
      "vanilla milkshake",
      "strawberry milkshake",
      "ice cream"
    ];

    let randommain = main[Math.floor(Math.random() * main.length)];
    let randomside = side[Math.floor(Math.random() * side.length)];
    let randomdrink = drink[Math.floor(Math.random() * drink.length)];
    let randomdessert = dessert[Math.floor(Math.random() * dessert.length)];
    const botreply = new Discord.MessageEmbed()
      .setColor("#0484A3")
      .setTitle('CFA Order Generator :fries:')
      .setDescription(`**Entree:** ${randommain}\n**Side:** ${randomside}\n**Drink:** ${randomdrink}\n**Dessert:** ${randomdessert}`)
      .setFooter(`Requested by ${message.author.tag}`)
      .setTimestamp();
    
    message.channel.send(botreply)
      .catch(err => console.log(err));
  }
};
