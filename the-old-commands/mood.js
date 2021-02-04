const Discord = require("discord.js");
const { config } = require("dotenv");
const { MessageEmbed } = require("discord.js");
const client = new Discord.Client();

module.exports = {
	name: 'mood',
	description: 'embed - plays "its a mental breakdown (off-key kazoo) youtube video',
  execute(message, args, msg) {
		const botreply = new Discord.MessageEmbed()
      .setColor("#0484A3")
      .setTitle("Current Mood")
      .setDescription("https://youtu.be/EPS2C3SYLsY")
      .setFooter("this is factuals")
      .setTimestamp();
    message.channel.send(botreply).catch(err => console.log(err));
	},
};


// https://youtu.be/EPS2C3SYLsY