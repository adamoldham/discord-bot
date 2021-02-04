const Discord = require("discord.js");
const { config } = require("dotenv");
const { MessageEmbed } = require("discord.js");
const client = new Discord.Client();

module.exports = {
	name: 'no-bea',
	description: 'text - no prefix - says yes when bea says no',
  execute(message, args, msg) {
		if (message.author.id !== "615968095584125039") {
      return;
    }
    message.channel.send("yes :heart:");
	},
};