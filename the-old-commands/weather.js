const Discord = require("discord.js");
const { config } = require("dotenv");
const { MessageEmbed } = require("discord.js");
const client = new Discord.Client();

module.exports = {
	name: 'weather',
	description: 'embed - tells user to look outside for weather',
  execute(message, args, msg) {
		const botreply = new Discord.MessageEmbed()
      .setColor("#0484A3")
      .setTitle("Weather")
      .setDescription("are you fucking stupid, just look out the window")
      .setTimestamp();
    message.channel.send(botreply).catch(err => console.log(err));
	},
};